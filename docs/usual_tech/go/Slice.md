# 3、 Slice 底层原理

## 3.1 切片与数组的区别
在 Go 中，与 C 数组变量隐式作为指针使用不同，Go 数组是值类型，赋值和函数传参操作都会复制整个数组数据。
```Go
func main() {
   arrayA := [2]int{100, 200}
   testArrayPoint(&arrayA)   // 1.传数组指针
   arrayB := arrayA[:]
   testArrayPoint2(arrayB)   // 2.传切片
   fmt.Printf("arrayA : %p , %v\n", &arrayA, arrayA)
}

func testArrayPoint(x *[2]int) {
   fmt.Printf("func Array : %p , %v\n", x, *x)
   (*x)[1] += 100
}
func testArrayPoint2(x []int) {
   fmt.Printf("func Array : %p , %v\n", &x, x)
   x[1] += 100
}
// 打印：
// arrayA : 0xc4200bebf0 , [100 200]
// arrayB : 0xc4200bec00 , [100 200]
// func Array : 0xc4200bec30 , [100 200]
```
可以看到，三个内存地址都不同，这也就验证了 Go 中数组赋值和函数传参都是值复制的。那这会导致什么问题呢？

假想每次传参都用数组，那么每次数组都要被复制一遍。如果数组大小有 100万，在64位机器上就需要花费大约 800W 字节，即 8MB 内存。这样会消耗掉大量的内存。于是乎有人想到，函数传参用数组的指针。
```Go
func main() {
    arrayA := [2]int{100, 200}
    testArrayPoint(&arrayA)   // 1.传数组指针
    arrayB := arrayA[:]
    testArrayPoint(&arrayB)   // 2.传切片
    fmt.Printf("arrayA : %p , %v\n", &arrayA, arrayA)
}

func testArrayPoint(x *[]int) {
    fmt.Printf("func Array : %p , %v\n", x, *x)
    (*x)[1] += 100
}
// 打印：
//func Array : 0xc4200b0140 , [100 200]
//func Array : 0xc4200b0180 , [100 300]
//arrayA : 0xc4200b0140 , [100 400]
```
这也就证明了数组指针确实到达了我们想要的效果。现在就算是传入10亿的数组，也只需要再栈上分配一个8个字节的内存给指针就可以了。这样更加高效的利用内存，性能也比之前的好。

不过传指针会有一个弊端，从打印结果可以看到，第一行和第三行指针地址都是同一个，万一**原数组的指针指向更改了，那么函数里面的指针指向都会跟着更改。**

切片的优势也就表现出来了。用切片传数组参数，既可以达到节约内存的目的，也可以达到合理处理好共享内存的问题。打印结果第二行就是切片，切片的指针和原来数组的指针是不同的。
## 3.2 切片的数据结构
```Go
type slice struct {
    array unsafe.Pointer
    len   int
    cap   int
}
```
切片的结构体由3部分构成，Pointer 是指向一个数组的指针，len 代表当前切片的长度，cap 是当前切片的容量。cap 总是大于等于 len 的。
### nil 和空切片
```Go
var slice []int
```
nil 切片被用在很多标准库和内置函数中，描述一个不存在的切片的时候，就需要用到 nil 切片。比如函数在发生异常的时候，返回的切片就是 nil 切片。nil 切片的指针指向 nil。

空切片一般会用来表示一个空的集合。比如数据库查询，一条结果也没有查到，那么就可以返回一个空切片。
```Go
silce := make( []int , 0 )
slice := []int{ }
```
空切片和 nil 切片的区别在于，**空切片指向的地址不是nil，指向的是一个内存地址，但是它没有分配任何内存空间，即底层元素包含0个元素。**

最后需要说明的一点是。**不管是使用 nil 切片还是空切片，对其调用内置函数 append，len 和 cap 的效果都是一样的。**
### 切片扩容
当一个切片的容量满了，就需要扩容了。怎么扩，策略是什么？

直接上干货。来看一下底层源码是怎么实现的。
> 不想看源码的也可以直接读总结：Go 中切片扩容的策略是这样的：<br>如果切片的容量小于 1024 个元素，于是扩容的时候就翻倍增加容量。<br>
一旦元素个数超过 1024 个元素，那么增长因子就变成 1.25 ，即每次增加原来容量的四分之一。<br>
注意：扩容扩大的容量都是针对原来的容量而言的，而不是针对原来数组的长度而言的。
```Go
func growslice(et *_type, old slice, cap int) slice {
    if raceenabled {
        callerpc := getcallerpc(unsafe.Pointer(&et))
        racereadrangepc(old.array, uintptr(old.len*int(et.size)), callerpc, funcPC(growslice))
    }
    if msanenabled {
        msanread(old.array, uintptr(old.len*int(et.size)))
    }

    if et.size == 0 {
        // 如果新要扩容的容量比原来的容量还要小，这代表要缩容了，那么可以直接报panic了。
        if cap < old.cap {
            panic(errorString("growslice: cap out of range"))
        }

        // 如果当前切片的大小为0，还调用了扩容方法，那么就新生成一个新的容量的切片返回。
        return slice{unsafe.Pointer(&zerobase), old.len, cap}
    }

  // 这里就是扩容的策略
    newcap := old.cap
    doublecap := newcap + newcap
    if cap > doublecap {
        newcap = cap
    } else {
        if old.len < 1024 {
            newcap = doublecap
        } else {
            for newcap < cap {
                newcap += newcap / 4
            }
        }
    }

    // 计算新的切片的容量，长度。
    var lenmem, newlenmem, capmem uintptr
    const ptrSize = unsafe.Sizeof((*byte)(nil))
    switch et.size {
    case 1:
        lenmem = uintptr(old.len)
        newlenmem = uintptr(cap)
        capmem = roundupsize(uintptr(newcap))
        newcap = int(capmem)
    case ptrSize:
        lenmem = uintptr(old.len) * ptrSize
        newlenmem = uintptr(cap) * ptrSize
        capmem = roundupsize(uintptr(newcap) * ptrSize)
        newcap = int(capmem / ptrSize)
    default:
        lenmem = uintptr(old.len) * et.size
        newlenmem = uintptr(cap) * et.size
        capmem = roundupsize(uintptr(newcap) * et.size)
        newcap = int(capmem / et.size)
    }

    // 判断非法的值，保证容量是在增加，并且容量不超过最大容量
    if cap < old.cap || uintptr(newcap) > maxSliceCap(et.size) {
        panic(errorString("growslice: cap out of range"))
    }

    var p unsafe.Pointer
    if et.kind&kindNoPointers != 0 {
        // 在老的切片后面继续扩充容量
        p = mallocgc(capmem, nil, false)
        // 将 lenmem 这个多个 bytes 从 old.array地址 拷贝到 p 的地址处
        memmove(p, old.array, lenmem)
        // 先将 P 地址加上新的容量得到新切片容量的地址，然后将新切片容量地址后面的 capmem-newlenmem 个 bytes 这块内存初始化。为之后继续 append() 操作腾出空间。
        memclrNoHeapPointers(add(p, newlenmem), capmem-newlenmem)
    } else {
        // 重新申请新的数组给新切片
        // 重新申请 capmen 这个大的内存地址，并且初始化为0值
        p = mallocgc(capmem, et, true)
        if !writeBarrier.enabled {
            // 如果还不能打开写锁，那么只能把 lenmem 大小的 bytes 字节从 old.array 拷贝到 p 的地址处
            memmove(p, old.array, lenmem)
        } else {
            // 循环拷贝老的切片的值
            for i := uintptr(0); i < lenmem; i += et.size {
                typedmemmove(et, add(p, i), add(old.array, i))
            }
        }
    }
    // 返回最终新切片，容量更新为最新扩容之后的容量
    return slice{p, old.len, newcap}
}

```
### 扩容后新数组 or 老数组 ？
- 原数组还有容量可以扩容，所以执行 append() 操作以后，会在原数组上直接操作，所以这种情况下，扩容以后的数组还是指向原来的数组。
- 原来数组的容量已经达到了最大值，再想扩容， Go 默认会先开一片内存区域，把原来的值拷贝过来，然后再执行 append() 操作。这种情况丝毫不影响原数组。
### 切片拷贝
```Go
func main() {
    array := []int{10, 20, 30, 40}
    slice := make([]int, 6)
    n := copy(slice, array)
    fmt.Println(n,slice)
}
```
说到拷贝，切片中有一个需要注意的问题。
```Go
func main() {
    slice := []int{10, 20, 30, 40}
    for index, value := range slice {
        fmt.Printf("value = %d , value-addr = %x , slice-addr = %x\n", value, &value, &slice[index])
    }
}

```
输出：
```bash
value = 10 , value-addr = c4200aedf8 , slice-addr = c4200b0320
value = 20 , value-addr = c4200aedf8 , slice-addr = c4200b0328
value = 30 , value-addr = c4200aedf8 , slice-addr = c4200b0330
value = 40 , value-addr = c4200aedf8 , slice-addr = c4200b0338
```
从上面结果我们可以看到，如果用 range 的方式去遍历一个切片，拿到的 Value 其实是切片里面的值拷贝。所以每次打印 Value 的地址都不变。也就是**Go语言出现指针漂移的真正原因。**

由于 Value 是值拷贝的，并非引用传递，所以直接改 Value 是达不到更改原切片值的目的的，需要通过 &slice[index] 获取真实的地址。
