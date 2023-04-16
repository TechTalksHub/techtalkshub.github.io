# 5、 容器的日常管理
## 5.1 容器的起/停
### 最简单的运行一个容器
```bash
[root@docker01 ~]# docker run nginx
```
### 创建容器，两步走（不常用）
```bash
[root@docker01 ~]# docker create centos:latest  /bin/bash
bb7f32368ecf0492adb59e20032ab2e6cf6a563a0e6751e58930ee5f7aaef204
[root@docker01 ~]# docker start stupefied_nobel
stupefied_nobel
```
### 快速启动容器方法
```bash
[root@docker01 ~]# docker run  centos:latest  /usr/bin/sleep 20;
```
容器内的第一个进程必须一直处于运行的状态，否则这个容器，就会处于退出状态！
### 查看正在运行的容器
```bash
[root@docker01 ~]# docker container ls
    或
[root@docker01 ~]# docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
8708e93fd767        nginx               "nginx -g 'daemon of…"6 seconds ago       Up 4 seconds        80/tcp              keen_lewin
```
### 查看你容器详细信息/ip
```bash
[root@docker01 ~]# docker container  inspect  容器名称/id
```
### 查看你所有容器（包括未运行的）
```bash
root@docker01 ~]# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
8708e93fd767        nginx               "nginx -g 'daemon of…"4minutes ago       Exited (0) 59 seconds ago                       keen_lewin
f9f3e6af7508        nginx               "nginx -g 'daemon of…"   5 minutes ago       Exited (0) 5 minutes ago                        optimistic_haibt
8d8f81da12b5        nginx               "nginx -g 'daemon of…"   3 hours ago         Exited (0) 3 hours ago                          lucid_bohr
```
### 停止容器
```bash
[root@docker01 ~]# docker stop 容器名称/id 
或
[root@docker01 ~]# docker container  kill  容器名称/id
```
## 5.2 进入容器方法
### 启动时进去方法
```bash
[root@docker01 ~]# docker run -it #参数：-it 可交互终端
[root@docker01 ~]# docker run -it nginx:latest  /bin/bash
root@79241093859e:/#
```
### 退出/离开容器
```bash
ctrl+p & ctrl+q
```
### 启动后进入容器的方法
#### 启动一个docker
```bash
[root@docker01 ~]# docker run -it centos:latest 
[root@1bf0f43c4d2f /]# ps -ef 
UID         PID   PPID  C STIME TTY          TIME CMD
root          10015:47 pts/000:00:00 /bin/bash
root         131015:47 pts/000:00:00 ps -ef
```
#### attach进入容器，使用pts/0 ，会让所用通过此方法进如放入用户看到同样的操作。
```bash
[root@docker01 ~]# docker attach 1bf0f43c4d2f
[root@1bf0f43c4d2f /]# ps -ef 
UID         PID   PPID  C STIME TTY          TIME CMD
root          10015:47 pts/000:00:00 /bin/bash
root         141015:49 pts/000:00:00 ps -ef
```
### 自命名启动一个容器 --name
```bash
[root@docker01 ~]# docker attach 1bf0f43c4d2f
[root@1bf0f43c4d2f /]# ps -ef 
UID         PID   PPID  C STIME TTY          TIME CMD
root          10015:47 pts/000:00:00 /bin/bash
root         141015:49 pts/000:00:00 ps -ef
```
### exrc 进入容器方法（推荐使用）
```bash
[root@docker01 ~]# docker exec -it clsn1  /bin/bash 
[root@b20fa75b4b40 /]# 重新分配一个终端
[root@b20fa75b4b40 /]# ps -ef 
UID         PID   PPID  C STIME TTY          TIME CMD
root          10016:11 pts/000:00:00 /bin/bash
root         130016:14 pts/100:00:00 /bin/bash
root         2613016:14 pts/100:00:00 ps -ef
```
## 5.3 删除所有容器
```bash
[root@docker01 ~]# docker rm -f  `docker ps -a -q`
# -f 强制删除
```
## 5.4 启动时进行端口映射
-p参数端口映射
```bash
[root@docker01 ~]# docker run -d -p 8888:80  nginx:latest 
287bec5c60263166c03e1fc5b0b8262fe76507be3dfae4ce5cd2ee2d1e8a89a9
```
不同指定映射方法
|  参数   | 说明  |
|  ----  | ----  |
| -p hostPort:containerPort  | 端口映射 -p 8080:80 |
| -p ip:hostPort:containerPort  | 配置监听地址 -p 10.0.0.100:8080:80 |
| -p ip::containerPort  | 随机分配端口 -p 10.0.0.100::80 |
| -p hostPort:containerPort:udp  | 指定协议 -p 8080:80:tcp |
| -p 81:80 –p 443:443  | 指定多个 |
随机映射
```bash
docker run -P （大P）# 需要镜像支持
```
