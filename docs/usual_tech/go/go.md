# 👍🏻 基础知识

## 👍🏾 GOPATH 和 GOROOT
首先，GOROOT是安装目录，GOPATH是我们的工作空间, 用来存放包的目录。其次，GOPATH 下有三个目录，分别是：
- bin：存放生成的二进制文件，
- pkg： 存放自定义包的目录
- src：该目录保存了应用自身的代码和第三方依赖的代码。
> GOPATH可以设置多个，其中，第一个将会是默认的包目录，使用 go get 下载的包都会在第一个path中的src目录下，使用 go install时，在哪个GOPATH中找到了这个包，就会在哪个GOPATH下的bin目录生成可执行文件

## 👍🏾 import某个包后的搜索过程
比如 `import "k8s.io/kubernetes/pkg/apis/node"`

第一步：Go会先去GOROOT的scr目录中查找，很显然它不是标准库的包，没找到。

第二步：继续在GOPATH的src目录去找，准确说是**GOPATH/src/k8s.io/kubernetes/pkg/apis/node**这个目录。如果该目录不存在，会报错找不到package。
## 👍🏾 make 和 new
### new
new 函数到底做了哪些事呢？
- 分配内存
- 设置零值
- 返回指针（重要）
  如下示例：
```Go
import "fmt"

type Student struct {
   name string
   age int
}

func main() {
    // new 一个内建类型
    num := new(int)
    fmt.Println(*num) //打印零值：0

    // new 一个自定义类型
    s := new(Student)
    s.name = "jack"
}
```
### make
1. 内建函数 make 用来为 slice，map 或 chan 类型（注意：也只能用在这三种类型上）分配内存和初始化一个对象
2. make 返回类型的本身而不是指针，而返回值也依赖于具体传入的类型，因为这三种类型就是引用类型，所以就没有必要返回他们的指针了

注意，因为这三种类型是引用类型，所以必须得初始化（size和cap），但是，不是置为零值，这个和new是不一样的。
```Go
//切片
a := make([]int, 2, 10)

// 字典
b := make(map[string]int)

// 通道
c := make(chan int, 10)
```
### new与make异同
#### new:
- 为所有的类型分配内存，并初始化为零值，返回指针
#### make：
- 只能为 slice，map，chan 分配内存，并初始化，返回的是类型

- 二者都是内存的分配（堆上），但是make只用于slice、map以及channel的初始化（非零值）；
- 而new用于类型的内存分配，并且内存置为零。
- make返回的还是这三个引用类型本身；而new返回的是指向类型的指针。
- 其实new不常用，所以有new这个内置函数，可以给我们分配一块内存让我们使用，但是现实的编码中，它是不常用的。

通常都是采用短语句声明以及结构体的字面量达到我们的目的，比如：
```Go
i:=0
u:=user{}
```
## 👍🏾 struct能不能比较
struct能不能比较？很显然这句话包含了两种情况：
- 同一个struct的两个实例能不能比较？
- 两个不同的struct的实例能不能比较？

在分析上面两个问题前，先跟大家梳理一下golang中，哪些数据类型是可比较的，哪些是不可比较的：
- 可比较：Integer，Floating-point，String，Boolean，Complex(复数型)，Pointer，Channel，Interface，Array
- 不可比较：Slice，Map，Function

例如：
```Go
type S struct {
    Name    string
    Age     int
    Address *int
}

func main() {
    a := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
    }
    b := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
    }

	  fmt.Println(a == b)
}
// 输出 ：false
```
为什么打印输出false？

a 和 b 虽然是同一个struct 的两个实例，但是因为其中的指针变量 Address 的值不同，所以 a != b，如果a b 在初始化时把 Address 去掉（不给 Address 初始化），那么这时 a == b 为true, 因为ptr变量默认值是nil，又或者给 Address 成员变量赋上同一个指针变量的值，也是成立的。

再来看：
```Go
type S struct {
    Name    string
    Age     int
    Address *int
	  Data    []int
}

func main() {
    a := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
		    Data:    []int{1, 2, 3},
    }
    b := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
		    Data:    []int{1, 2, 3},
    }

	  fmt.Println(a == b)
}
// 输出 ：./test.go:37:16: invalid operation: a == b (struct containing []int cannot be compared)
```
a, b 虽然是同一个struct两个赋值相同的实例，因为结构体成员变量中带有了不能比较的成员（slice)，是不可以直接用 == 比较的，所以只要写 == 就报错

所以说，同一个struct的两个实例可比较也不可比较，当结构不包含不可直接比较成员变量时可直接比较，否则不可直接比较
#### struct可以作为map的key么？
struct必须是可比较的，才能作为key，否则编译时报错

我们可以借助reflect.DeepEqual 函数来对两个变量进行比较。所以上面代码我们可以这样写：
```Go
type S struct {
    Name    string
    Age     int
    Address *int
	  Data    []int
}

func main() {
    a := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
		    Data:    []int{1, 2, 3},
    }
    b := S{
        Name:    "aa",
        Age:     1,
        Address: new(int),
		    Data:    []int{1, 2, 3},
    }

	  fmt.Println(reflect.DeepEqual(a, b))
}
// true
```
## 👍🏾 那么 reflect.DeepEqual 是如何对变量进行比较的呢？
DeepEqual函数用来判断两个值是否深度一致。具体比较规则如下：

- 不同类型的值永远不会深度相等
- 当两个数组的元素对应深度相等时，两个数组深度相等
- 当两个相同结构体的所有字段对应深度相等的时候，两个结构体深度相等
- 当两个函数都为nil时，两个函数深度相等，其他情况不相等（相同函数也不相等）
- 当两个interface的真实值深度相等时，两个interface深度相等
- map的比较需要同时满足以下几个
    - 两个map都为nil或者都不为nil，并且长度要相等
    - 相同的map对象或者所有key要对应相同
    - map对应的value也要深度相等
- 指针，满足以下其一即是深度相等
    - 两个指针满足go的==操作符
    - 两个指针指向的值是深度相等的
- 切片，需要同时满足以下几点才是深度相等
    - 两个切片都为nil或者都不为nil，并且长度要相等
    - 两个切片底层数据指向的第一个位置要相同或者底层的元素要深度相等
    - 注意：空的切片跟nil切片是不深度相等的
- 其他类型的值（numbers, bools, strings, channels）如果满足go的==操作符，则是深度相等的。要注意不是所有的值都深度相等于自己，例如函数，以及嵌套包含这些值的结构体，数组等
