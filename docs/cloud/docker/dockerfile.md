# 7、 Dockerfile自动构建docker镜像
官方构建dockerffile文件参考:https://github.com/CentOS/CentOS-Dockerfiles
## 7.1 Dockerfile指令集
dockerfile主要组成部分：
> 基础镜像信息 FROM centos:6.8
制作镜像操作指令RUN yum insatll openssh-server \-y
容器启动时执行指令 CMD \["/bin/bash"\]

dockerfile常用指令：
> FROM 这个镜像的妈妈是谁？（指定基础镜像）
MAINTAINER 告诉别人，谁负责养它？（指定维护者信息，可以没有）
RUN 你想让它干啥（在命令前面加上RUN即可）
ADD 给它点创业资金（COPY文件，会自动解压）
WORKDIR 我是cd,今天刚化了妆（设置当前工作目录）
VOLUME 给它一个存放行李的地方（设置卷，挂载主机目录）
EXPOSE 它要打开的门是啥（指定对外的端口）
CMD 奔跑吧，兄弟！（指定容器启动后的要干的事情）

dockerfile其他指令：
> COPY 复制文件
ENV 环境变量
ENTRYPOINT 容器启动后执行的命令

## 7.2 创建一个Dockerfile
### 创建第一个Dockerfile文件
```bash
# 创建目录
[root@docker01 base]# cd /opt/base
# 创建Dcokerfile文件，注意大小写
[root@docker01 base]# vim Dockerfile
FROM centos:6.8
RUN yum install openssh-server -y 
RUN echo "root:123456" |chpasswd
RUN /etc/init.d/sshd start 
CMD ["/usr/sbin/sshd","-D"]
```
### 构建docker镜像
```bash
[root@docker01 base]# docker image build  -t centos6.8-ssh . 
-t 为镜像标签打标签  . 表示当前路径
```
### 使用自构建的镜像启动
```bash
[root@docker01 base]# docker run  -d -p 2022:22 centos6.8-ssh-b 
dc3027d3c15dac881e8e2aeff80724216f3ac725f142daa66484f7cb5d074e7a

```
## 7.3 使用Dcokerfile安装kodexplorer
Dockerfile文件内容
```dockerfile
FROM centos:6.8
RUN yum install wget unzip php php-gd php-mbstring -y && yum clean all
# 设置工作目录，之后的操作都在这个目录中
WORKDIR /var/www/html/
RUN wget -c http://static.kodcloud.com/update/download/kodexplorer4.25.zip
RUN unzip kodexplorer4.25.zip && rm -f kodexplorer4.25.zip
RUN chown -R apache.apache .
CMD ["/usr/sbin/apachectl","-D","FOREGROUND"]
```
更多的Dockerfile可以参考官方方法。
