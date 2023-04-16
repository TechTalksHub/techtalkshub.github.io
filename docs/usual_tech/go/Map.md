# 4、Map 底层原理
> 原文链接：https://mp.weixin.qq.com/s/UT8tydajjOUJkfc-Brcblw

## 4.1 Map 的底层内存模型
在 golang 的源码中表示 map 的底层 struct 是 hmap，其是 hashmap 的缩写
```Go
type hmap struct {

   // map中存入元素的个数， golang中调用len(map)的时候直接返回该字段
   count     int
   // 状态标记位，通过与定义的枚举值进行&操作可以判断当前是否处于这种状态
   flags     uint8
   B         uint8  // 2^B 表示bucket的数量， B 表示取hash后多少位来做bucket的分组
   noverflow uint16 // overflow bucket 的数量的近似数
   hash0     uint32 // hash seed （hash 种子） 一般是一个素数

   buckets    unsafe.Pointer // 共有2^B个 bucket ，但是如果没有元素存入，这个字段可能为nil
   oldbuckets unsafe.Pointer // 在扩容期间，将旧的bucket数组放在这里， 新buckets会是这个的两倍大
   nevacuate  uintptr        // 表示已经完成扩容迁移的bucket的指针， 地址小于当前指针的bucket已经迁移完成

   extra *mapextra // optional fields
}
```
B 是 buckets 数组的长度的对数， 即 bucket 数组的长度是 2^B。bucket 的本质上是一个指针，指向了一片内存空间，其指向的 struct 如下所示：
```Go
// A bucket for a Go map.
type bmap struct {
   tophash [bucketCnt]uint8
}
```
但这只是表面(src/runtime/hashmap.go)的结构，编译期间会给它加料，动态地创建一个新的结构：
```Go
type bmap struct {
    topbits  [8]uint8
    keys     [8]keytype
    values   [8]valuetype
    pad      uintptr        // 内存对齐使用，可能不需要
    overflow uintptr        // 当bucket 的8个key 存满了之后
}
```
bmap 就是我们常说的“桶”的底层数据结构， 一个桶中可以存放最多 8 个 key/value, map 使用 hash 函数 得到 hash 值决定分配到哪个桶， 然后又会根据 hash 值的高 8 位来寻找放在桶的哪个位置 具体的 map 的组成结构如下图所示：
![bmap](/image/usual_tech/go/bmap.jpeg)
## 4.2 Map 的存与取
在 map 中存与取本质上都是在进行一个工作， 那就是:

1. 查询当前 k/v 应该存储的位置。
2. 赋值/取值， 所以我们理解了 map 中 key 的定位我们就理解了存取。
### 底层代码
```Go
func mapaccess2(t *maptype, h *hmap, key unsafe.Pointer) (unsafe.Pointer, bool) {
    // map 为空，或者元素数为 0，直接返回未找到
    if h == nil || h.count == 0 {
        return unsafe.Pointer(&zeroVal[0]), false
    }
    // 不支持并发读写
    if h.flags&hashWriting != 0 {
        throw("concurrent map read and map write")
    }
    // 根据hash 函数算出hash值，注意key的类型不同可能使用的hash函数也不同
    hash := t.hasher(key, uintptr(h.hash0))
    // 如果 B = 5，那么结果用二进制表示就是 11111 ， 返回的是B位全1的值
    m := bucketMask(h.B)
    // 根据hash的后B位，定位在bucket数组中的位置
    b := (*bmap)(unsafe.Pointer(uintptr(h.buckets) + (hash&m)*uintptr(t.bucketsize)))
    // 当 h.oldbuckets 非空时，说明 map 发生了扩容
    // 这时候，新的 buckets 里可能还没有老的内容
    // 所以一定要在老的里面找，否则有可能发生“消失”的诡异现象
    if c := h.oldbuckets; c != nil {
        if !h.sameSizeGrow() {
            // 说明之前只有一半的 bucket，需要除 2
            m >>= 1
        }
        oldb := (*bmap)(unsafe.Pointer(uintptr(c) + (hash&m)*uintptr(t.bucketsize)))
        if !evacuated(oldb) {
            b = oldb
        }
    }
    // tophash 取其高 8bit 的值
    top := tophash(hash)
    // 一个 bucket 在存储满 8 个元素后，就再也放不下了，这时候会创建新的 bucket，挂在原来的 bucket 的 overflow 指针成员上
    // 遍历当前bucket的所有链式bucket
    for ; b != nil; b = b.overflow(t) {
        // 在bucket的8个位置上查询
        for i := uintptr(0); i < bucketCnt; i++ {
            // 如果找到了相等的 tophash，那说明就是这个 bucket 了
            if b.tophash[i] != top {
                continue
            }
            // 根据内存结构定位key的位置
            k := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))
            if t.indirectkey {
                k = *((*unsafe.Pointer)(k))
            }
            // 校验找到的key是否匹配
            if t.key.equal(key, k) {
                // 定位v的位置
                v := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))
                if t.indirectvalue {
                    v = *((*unsafe.Pointer)(v))
                }
                return v, true
            }
        }
    }

    // 所有 bucket 都没有找到，返回零值和 false
    return unsafe.Pointer(&zeroVal[0]), false
}
```
### 寻址过程
![mapadd](/image/usual_tech/go/mapadd.png)
![mapfor](/image/usual_tech/go/mapfor.png)
## 4.3 Map 的扩容
在 golang 中 map 和 slice 一样都是在初始化时首先申请较小的内存空间，在 map 的不断存入的过程中，动态的进行扩容。扩容共有两种，**_增量扩容与等量扩容_**（重新排列并分配内存）。下面我们来了解一下扩容的触发方式：

1. 负载因子超过阈值，源码里定义的阈值是 6.5。(触发增量扩容)
2. overflow 的 bucket 数量过多：当 B 小于 15，也就是 bucket 总数 2^B 小于 2^15 时，如果 overflow 的 bucket 数量超过 2^B；当 B >= 15，也就是 bucket 总数 2^B 大于等于 2^15，如果 overflow 的 bucket 数量超过 2^15。（触发等量扩容）
## 4.4 Map 的有序性
先说结论，在 golang 中 map 是无序的，准确的说是无法严格保证顺序的， 从上面的源码中我们可以知道，golang 中 map 在扩容后，可能会将部分 key 移至新内存，由于在扩容搬移数据过程中，并未记录原数据位置， 并且在 golang 的数据结构中也并未保存数据的顺序，所以那么这一部分在扩容后实际上就已经是无序的了。
遍历的过程，其实就是按顺序遍历内存地址，同时按顺序遍历内存地址中的 key。但这时已经是无序的了。但是如果我就一个 map，我保证不会对 map 进行修改删除等操作，那么按理说没有扩容就不会发生改变。但也是因为这样，GO 才在源码中 但是有一个有趣的现象，就算不对 map 进行插入删除等操作致使其扩容，其在遍历过程中仍是无序的。
```Go
objMap := make(map[string]int)
for i := 0; i < 5; i++ {
   objMap[strconv.Itoa(i)] = i
}
for i := 0 ; i < 5; i ++ {
   var valStr1, valStr2 string
   for k, v := range objMap {
      fmt.Println(k)
      fmt.Println(v)
      valStr1 += k
   }
   for k, v := range objMap {
      fmt.Println(k)
      fmt.Println(v)
      valStr2 += k
   }
   fmt.Println(valStr1 == valStr2)
   if valStr1 != valStr2 {
      fmt.Println("not equal")
   }
}
fmt.Println("end")
```
以上的运行结果是
```
not equal
equal
not equal
not equal
not equal
equal
```
不难看出，即使不对 map 进行扩容，在多次遍历时也是无序的，这是因为 golang 官方在设计时故意加上随机的元素，将遍历 map 的顺序随机化，用来防止使用者用来顺序遍历。
依赖 map 的顺序进行遍历，这是有风险的代码，在 GO 的严格语法规则下，是坚决不提倡的。所以我们在使用 map 时一定要记得其是无序的，不要依赖其顺序。
## 4.5 Map 的并发
首先我们大家都知道，在 golang 中 map 并不是一个并发安全的数据结构，当几个 goruotine 同时对一个 map 进行读写操作时，就会出现并发写问题：fatal error: concurrent map writes。但是为什么 map 是不支持并发安全的呢， 主要是因为成本与效益。
官方答复原因如下：
- 典型使用场景：map 的典型使用场景是不需要从多个 goroutine 中进行安全访问。
- 非典型场景（需要原子操作）：map 可能是一些更大的数据结构或已经同步的计算的一部分。
性能场景考虑：若是只是为少数程序增加安全性，导致 map 所有的操作都要处理 mutex，将会降低大多数程序的性能。同时 golang 提供了并发安全的 sync map。
```Go
// 不支持并发读写
    if h.flags&hashWriting != 0 {
        throw("concurrent map read and map write")
    }
```
但是我们又有疑问了，为什么 golang map 并发冲突了不抛一个 error 出来，或者 panic 掉，而是要让程序 panic，选择让程序 crash 崩溃掉。这里是 golang 官方出于权衡风险和 map 使用复杂度场景考虑的，首先 map 在官方中就明确表示不支持并发读写， 所以并发对 map 进行读写操作本身就是不正确的。
场景假设一：如果 map 选择在写入或者读取时增加 error 返回值，会导致程序在使用 map 时就无法像现在一样，需要额外的捕获并判断 err。
场景假设二：如果 map 选择 panic（可被 recover），此时如果出现并发写入数据的场景，就会导致走进 recover 中，如果没有对这种场景进行特殊处理，就会导致 map 中存在脏数据，此时程序在使用 map 时就会引发不可预知的错误，此时排查起来也是很难找到问题的根因的。
所以 golang 在考虑了这些场景后，选择明确的抛出 crash 崩溃异常，使得风险被提前暴露。可以明确的定位到问题点。综上所述我们在使用 map 时，已经要严格保障其是在单线程内使用的，如果有多线程场景，建议使用 sync map 。
