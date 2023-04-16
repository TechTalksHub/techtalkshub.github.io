# 1、GMP模型
> 原文链接：https://mp.weixin.qq.com/s/1CY3E5daJ5U42orVwzCpaw
## 1.1 写在前面
Go 为了自身 goroutine 执行和调度的效率，自身在 runtime 中实现了一套 goroutine 的调度器，下面通过一段简单的代码展示一下 Go 应用程序在运行时的 goroutine，方便大家更好的理解。
> The Go scheduler is part of the Go runtime, and the Go runtime is built into your application
```Go
for i := 0; i < 4; i++ {
        go func() {
                time.Sleep(time.Second)
        }()
}
fmt.Println(runtime.NumGoroutine())
```
上面这段代码的输出为：5。说明当前这个应用程序中存在 goroutine 的数量是 5，事实上也符合我们的预期。那么问题来了，这 5 个 goroutine 作为操作系统用户态的基本调度单元是无法直接占用操作系统的资源来执行的，必须经过内核级线程的分发，这是操作系统内部线程调度的基本模型，根据用户级线程和内核级线程的对应关系可以分为 1 对 1，N 对 1 以及 M 对 N 这三种模型，那么上述的 5 个 goroutine 在内核级线程上是怎么被分发的，这就是 Go语言的 goroutine 调度器决定的。
![goroutine](/image/usual_tech/go/goroutine.png)
## 1.2 GMP 模型
整个 goroutine 调度器的实现基于 GMP 的三级模型来实现。
- G：goroutine
- M：内核级线程，运行在操作系统的核心态。在 Go 中支持最大的 M 的数量是 10000，但是操作系统中通常情况是不可以创建这么多的线程。
- P：processor，可以理解成一个等待分发给 M 调度执行的 goroutine 队列。P的个数是由 runtime 的 GOMAXPROCS 来决定的。
M 和 P 存在一一对应的绑定关系。大致的结构图如下所示：
![GMP](/image/usual_tech/go/GMP.png)
### goroutine 之旅
通常情况下，我们在代码中执行 go func(){}后，GMP 模型是如何工作的？通过一个详细的图来展示一下。
![goroutinr_process](/image/usual_tech/go/goroutinr_process.png)
1. 首先创建一个新的 goroutine
2. 如果本地的局部队列中有足够的空间可以存放，则放入局部队列中；如果局部队列满，则放入一个全局队列（所有的 M 都可以从全局队列中拉取 G 来执行）
3. 所有的 G 都必须在 M 上才可以被执行，M 和 P 存在一一绑定的关系，如果 M 绑定的 P 中存在可以被执行的 G，则从 P 中拉取 G 来执行；如果 P 中为空，没有可执行的 G，则  M 从全局队列中拉取；如果全局队列也为空，则从其他的 P 中拉取 G
4. 为 G 的运行分配必要的资源，等待 CPU 的调度
5. 分配到 CPU，执行 func(){}
### 调度策略
整个 goroutine 调度器最重要的调度策略是：复用，避免频繁的资源创建和销毁，最大限度的提升系统的吞吐量和并发程度。这也是操作系统进行线程调度的终极目标。复用（reuse）也是很多「池化技术」的基础。
围绕着这一原则，goroutine 调度器在以下几个方面进行调度策略的优化。

1. 工作队列的窃取机制：这个跟 Java 中的 ForkJoin Pool 的窃取机制同一原理，都是当线程 M 空闲时，从其他繁忙的队列 P 中"窃取"任务 G 过来执行，而不是销毁空闲的 M。因为线程的创建和销毁是需要消耗系统资源的，避免线程的频繁创建和销毁可以极大的提升系统的并发程度。
2. 交接机制：当线程M被阻塞的时候，M 会主动将 P 交接给其他空闲的 M。

另外，在 go 的 1.14 版本中，go 语言的技术团队尝试在调度器中添加了可抢占的技术[https://github.com/golang/go/issues/24543](https://github.com/golang/go/issues/24543)。
1. 抢占技术的出现一方面解决了线程 M 在执行计算密集型任务时长时间占用 CPU，导致与之绑定的 P 上的其他 G 得不到执行而造成的"饥饿现象"；
2. 另一方面，抢占技术的出现对 GC 来讲解决 GC 时可能出现的 deadLock，相关的 issue 见：关于 GC 时 tight loops 应该可以被抢占的讨论
[https://github.com/golang/go/issues/10958](https://github.com/golang/go/issues/10958)

### 最开始的 MG 模型
在 go 语言的早期，goroutine 调度器的模型并不是 GMP，而是 GM。整个调度器维护一个全局的 G 的等待队列，所有的 M 从这个全局的队列中拉取 G 来执行，在 go1.1 中将这种模型直接干掉，取而代之的是现在的 GMP 模型，在 GM 模型的基础上增加 P 局部队列。官方之所有这么这么做，原因有二：
1. 全局的 G 等待队列，不同的M从队列里取 G 都需要加锁，锁的粒度很大，严重制约了系统并发能力的提升；
2. 没有局部队列，那么当线程在执行 IO 密集型操作时，M 阻塞在 IO 操作上，对应的 G 也没有办法得到执行（GMP 中

## 1.3 写在后面
### go语言协程与Python线程协程有什么区别？
Go语言的协程（goroutine）和Python的线程协程（Coroutine）都是实现并发编程的机制，但是它们在实现方式和特点上有很大的不同。

以下是Go语言协程和Python线程协程的主要区别：
##### 1.实现方式不同
Go语言协程是由Go语言运行时环境管理的轻量级线程，使用关键字"go"创建，由Go语言调度器调度。而Python线程协程是由Python解释器在一个线程中实现的，使用"async/await"关键字创建，由事件循环管理。
##### 2.并发性能不同
Go语言的协程实现并发性能非常好，它能够轻松创建数百万个协程，并在这些协程之间高效地切换。而Python线程协程的性能相对较差，由于GIL（全局解释器锁）的存在，同一时刻只能有一个线程在执行Python字节码，导致Python线程协程无法实现真正的并行。
##### 3.内存使用方式不同
Go语言的协程是轻量级线程，协程的创建和销毁非常快，因此可以快速地适应并发环境。而Python线程协程需要占用一定的内存资源，创建和销毁的代价相对较高。
##### 4.编写代码方式不同
在Go语言中，协程可以通过使用"channel"来进行协程间的通信和同步。在Python中，线程协程可以通过"asyncio"模块来实现异步编程，使用"async/await"关键字来实现协程的创建和切换。
### 什么是 GMP 模型？它的作用是什么？
在 Go 语言的运行时系统中，采用了 GMP 模型，即 Goroutine、M（Machine）、P（Processor）。Goroutine 是 Go 语言中的协程，是轻量级的用户级线程，它可以被 Go 运行时系统调度到任何一个逻辑处理器（P）上执行，而 M 则是线程的实现，也就是说，每个 M 对应于一个系统级线程，而 P 则是逻辑处理器，它负责调度和管理一组 Goroutine，而 M 则负责执行 Goroutine。

GMP 模型的作用是提供一种高效的并发编程方式，使得 Goroutine 可以被高效地调度和执行，从而提高程序的并发性能。通过采用 GMP 模型，Go 语言可以同时支持成千上万个 Goroutine 并发执行，而且能够充分利用多核 CPU 的处理能力，从而大幅提高程序的运行效率。同时，GMP 模型还提供了一些高级特性，例如抢占式调度、垃圾回收和调度器利用率等，使得编写高效、可靠的并发程序变得更加容易。
### P和M之间的关系是什么？
具体来说，P 负责调度和管理 Goroutine，而 M 则负责执行 Goroutine。

在 Go 程序启动时，运行时系统会创建一些 M，**每个 M 对应一个操作系统线程。当一个 Goroutine 被创建时，它会被放到某个 P 的本地队列中。如果 P 本地队列中的 Goroutine 数量超过了一定阈值，P 就会从全局队列中获取一些 Goroutine 放到本地队列中，以保证所有的 P 都有足够的 Goroutine 可以执行。当一个 M 空闲时，它会从 P 的本地队列中获取一个 Goroutine 执行。如果当前 P 的本地队列为空，M 就会去全局队列中获取 Goroutine 执行。当 M 执行完一个 Goroutine 后，它会返回到 P 的本地队列中，等待下一次被调度执行。**

因此，可以看出 **P 和 M 是一种多对多的关系，一个 M 可以执行多个 Goroutine，一个 Goroutine 可以在多个 M 上执行，而一个 P 则负责管理和调度一组 Goroutine。**这种关系的设计使得 Go 语言可以在多核 CPU 上充分利用硬件资源，实现高效的并发编程
### Goroutine的调度是由谁负责的？
在 Go 语言中，Goroutine 的调度是由运行时系统（runtime system）负责的。具体来说，Go 运行时系统中的调度器（scheduler）会负责对 Goroutine 进行调度，决定哪些 Goroutine 可以运行，哪些 Goroutine 应该被暂停，哪些 Goroutine 应该被唤醒等。

调度器会将所有的 Goroutine 分配到一组逻辑处理器（P）中，每个 P 都会维护一个本地的 Goroutine 队列（runqueue）。当一个 Goroutine 准备就绪时，它会被加入到某个 P 的本地队列中。调度器会定期扫描所有的 P 的本地队列和全局队列，选择一个最合适的 Goroutine 进行执行。在选择 Goroutine 时，调度器会考虑多个因素，例如 Goroutine 的优先级、Goroutine 的调度时间、Goroutine 上下文的开销等。

当一个 Goroutine 需要阻塞等待某个事件时（例如等待 I/O 操作完成），它会被从本地队列中移除，并且对应的 P 会被标记为空闲状态。调度器会继续扫描其他的 P，直到找到一个可以执行的 Goroutine。当事件完成时，Goroutine 会被唤醒，并被重新加入到某个 P 的本地队列中，等待下一次调度执行。
### 如何设置P的数量？
可以使用 GOMAXPROCS 环境变量来设置程序使用的 P 的数量。GOMAXPROCS 的值决定了并行执行 Go 代码的最大 CPU 数量。

默认情况下，GOMAXPROCS 的值等于 CPU 核心的数量。这个默认值在大多数情况下都可以满足需求，但是在某些特定情况下，我们可能需要手动设置 GOMAXPROCS 的值以优化程序性能。

设置 GOMAXPROCS 的方式非常简单，只需要在程序运行之前，将环境变量 GOMAXPROCS 的值设置为所需的数量即可。例如，以下代码将 GOMAXPROCS 设置为 4：
```Go
import "runtime"

func main() {
    runtime.GOMAXPROCS(4)
    // 代码逻辑
}
```
### GMP 模型的优点和缺点是什么？
GMP（Goroutine、M、P）模型是 Go 语言运行时系统用于实现并发编程的模型。它的优点和缺点如下：

#### 优点：

1. 高效的并发：GMP 模型可以实现高效的并发，因为它可以充分利用多核 CPU 和网络 I/O 等资源。

2. 灵活的调度：GMP 模型的调度器可以实现灵活的 Goroutine 调度策略，可以根据 Goroutine 的特点和系统的负载情况，动态地调整 Goroutine 的执行顺序和优先级等。

3. 可扩展性：GMP 模型的设计可以实现可扩展性，因为它可以在需要的时候增加或减少 P 的数量，从而实现更好的并行性能。

4. 垃圾回收：GMP 模型可以通过运行时系统自动进行垃圾回收，避免了手动管理内存的麻烦。

#### 缺点：

1. 内存占用：GMP 模型需要维护大量的 Goroutine 和 P，因此会占用一定的内存空间。

2. 上下文切换：GMP 模型中的 Goroutine 需要频繁进行上下文切换，这可能会导致性能损失。

3. 调度器开销：GMP 模型中的调度器需要花费一定的 CPU 时间来进行 Goroutine 的调度和管理，这可能会影响程序的性能。
