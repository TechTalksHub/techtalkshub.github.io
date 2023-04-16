---
meta:
- name: Golang 的内存分配逃逸 堆和栈
  content: Golang 的内存分配逃逸 堆和栈
---
# 5、Golang 的内存分配逃逸 堆和栈
> 注意此处谈到的堆和栈是对操作系统中的，这个和数据结构中的堆和栈还是又一定区别的。
栈和堆

首先看，堆和栈分别能保存什么类型的数据？
- 栈（Stack）通常用来存储**函数调用时的局部变量**、**函数参数和返回地址等信息**。栈的存储是一种先进后出（LIFO）的数据结构，数据按照先进后出的顺序存储。栈中只能存储固定大小的数据，比如整数、浮点数、指针等简单类型。**在函数调用结束时，栈上的数据会被自动释放。**
- 堆（Heap）则用于存储**动态分配的内存**，它可以存储各种类型的数据，包括整数、浮点数、字符串、结构体、数组、指针等。堆的存储方式是非常灵活的，数据可以根据需要动态扩展和收缩。**堆上的内存需要手动释放，否则会造成内存泄漏问题**。在很多编程语言中，堆上的内存是通过垃圾回收机制来管理的，自动进行内存回收。
## 5.1 关于堆和栈
栈 可以简单得理解成一次函数调用内部申请到的内存，它们会随着函数的返回把内存还给系统。
```Go
func F() {
temp := make([]int, 0, 20)
...
}
```
类似于上面代码里面的temp变量，只是内函数内部申请的临时变量，并不会作为返回值返回，它就是被编译器申请到栈里面。

申请到 栈内存 好处：函数返回直接释放，不会引起垃圾回收，对性能没有影响。

再来看看堆得情况之一如下代码：
```Go
func F() []int{
	a := make([]int, 0, 20)
	return a
}
```
而上面这段代码，申请的代码一模一样，但是申请后作为返回值返回了，**编译器会认为变量之后还会被使用，当函数返回之后并不会将其内存归还，那么它就会被申请到 堆 上面了。**

我们再看看如下几个例子：
```Go
func F() {
	a := make([]int, 0, 20)     // 栈 空间小
	b := make([]int, 0, 20000) // 堆 空间过大
 
	l := 20
	c := make([]int, 0, l) // 堆 动态分配不定空间
}
```
像是 b 这种 即使是临时变量，申请过大也会在堆上面申请。

对于 c 编译器对于这种不定长度的申请方式，也会在堆上面申请，即使申请的长度很短。
##  5.2 逃逸场景
### 指针逃逸
Go可以返回局部变量指针，这其实是一个典型的变量逃逸案例，示例代码如下：
```Go
package main

type Student struct {
    Name string
    Age  int
}

func StudentRegister(name string, age int) *Student {
    s := new(Student) //局部变量s逃逸到堆

    s.Name = name
    s.Age = age

    return s
}

func main() {
    StudentRegister("Jim", 18)
}
```
虽然 在函数 StudentRegister() 内部 s 为局部变量，其值通过函数返回值返回，s 本身为一指针，其指向的内存地址不会是栈而是堆，这就是典型的逃逸案例。

终端运行命令查看逃逸分析日志：`go build -gcflags=-m`
### 栈空间不足逃逸（空间开辟过大）
```Go
package main

func Slice() {
    s := make([]int, 10000, 10000)

    for index, _ := range s {
        s[index] = index
    }
}

func main() {
    Slice()
}
```
当切片长度扩大到10000时就会逃逸。

实际上当栈空间不足以存放当前对象时或无法判断当前切片长度时会将对象分配到堆中。
### 动态类型逃逸（不确定长度大小）
很多函数参数为interface类型，比如fmt.Println(a …interface{})，编译期间很难确定其参数的具体类型，也能产生逃逸。

如下代码所示：
```Go
package main

import "fmt"

func main() {
    s := "Escape"
    fmt.Println(s)
}
```
或者：
```Go
func F() {
	a := make([]int, 0, 20)     // 栈 空间小
	b := make([]int, 0, 20000) // 堆 空间过大 逃逸
 
	l := 20
	c := make([]int, 0, l) // 堆 动态分配不定空间 逃逸
}
```
### 闭包引用对象逃逸
Fibonacci数列的函数：
```Go
package main

import "fmt"

func Fibonacci() func() int {
    a, b := 0, 1
    return func() int {
        a, b = b, a+b
        return a
    }
}

func main() {
    f := Fibonacci()

    for i := 0; i < 10; i++ {
        fmt.Printf("Fibonacci: %d\n", f())
    }
}
```
逃逸如下：
```Go
~/go/src/gitHub/test/pool  go build -gcflags=-m
# gitHub/test/pool
./main.go:7:9: can inline Fibonacci.func1
./main.go:7:9: func literal escapes to heap
./main.go:7:9: func literal escapes to heap
./main.go:8:10: &b escapes to heap
./main.go:6:5: moved to heap: b
./main.go:8:13: &a escapes to heap
./main.go:6:2: moved to heap: a
./main.go:17:34: f() escapes to heap
./main.go:17:13: main ... argument does not escape
```
Fibonacci()函数中原本属于局部变量的a和b由于闭包的引用，不得不将二者放到堆上，以致产生逃逸。
## 5.3 逃逸分析的作用是什么呢？
- 逃逸分析的好处是为了减少gc的压力，不逃逸的对象分配在栈上，当函数返回时就回收了资源，不需要gc标记清除。
- 逃逸分析完后可以确定哪些变量可以分配在栈上，栈的分配比堆快，性能好(逃逸的局部变量会在堆上分配 ,而没有发生逃逸的则有编译器在栈上分配)。
- 同步消除，如果你定义的对象的方法上有同步锁，但在运行时，却只有一个线程在访问，此时逃逸分析后的机器码，会去掉同步锁运行。

## 5.4 golang 临时对象池sync.Pool
实际项目基本都是通过
```Go
c := make([]int, 0, l)
```
来申请内存，长度都是不确定的，自然而然这些变量都会申请到堆上面了。

Golang使用的垃圾回收算法是『标记——清除』。

简单得说，就是程序要从操作系统申请一块比较大的内存，内存分成小块，通过链表链接。

每次程序申请内存，就从链表上面遍历每一小块，找到符合的就返回其地址，没有合适的就从操作系统再申请。如果申请内存次数较多，而且申请的大小不固定，就会引起内存碎片化的问题。

申请的堆内存并没有用完，但是用户申请的内存的时候却没有合适的空间提供。这样会遍历整个链表，还会继续向操作系统申请内存。
