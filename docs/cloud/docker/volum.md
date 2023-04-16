# 6、Docker 数据卷的管理
## 6.1 挂载时创建卷
### 挂载卷
```bash
[root@docker01 ~]# docker run -d -p 80:80 -v /data:/usr/share/nginx/html nginx:latest
079786c1e297b5c5031e7a841160c74e91d4ad06516505043c60dbb78a259d09
```
容器内站点目录: /usr/share/nginx/html

在宿主机写入数据，查看
```bash
[root@docker01 ~]# echo "http://www.nmtui.com" >/data/index.html
[root@docker01 ~]# curl 10.0.0.100
http://www.nmtui.com
```
### 设置共享卷，使用同一个卷启动一个新的容器
```bash
[root@docker01 ~]# docker run -d -p 8080:80 -v /data:/usr/share/nginx/html nginx:latest 
351f0bd78d273604bd0971b186979aa0f3cbf45247274493d2490527babb4e42
[root@docker01 ~]# curl 10.0.0.100:8080
http://www.nmtui.com
```
### 查看卷列表
```bash
[root@docker01 ~]# docker volume ls
DRIVER              VOLUME NAME
```
## 6.2 创建卷后挂载
### 创建一个卷
```bash
[root@docker01 ~]# docker volume create 
f3b95f7bd17da220e63d4e70850b8d7fb3e20f8ad02043423a39fdd072b83521
[root@docker01 ~]# docker volume ls 
DRIVER              VOLUME NAME
local               f3b95f7bd17da220e63d4e70850b8d7fb3e20f8ad02043423a39fdd072b83521
```
### 指定卷名
```bash
[root@docker01 ~]# docker volume ls 
DRIVER              VOLUME NAME
local               clsn
local               f3b95f7bd17da220e63d4e70850b8d7fb3e20f8ad02043423a39fdd072b83521
```
### 查看卷路径
```bash
[root@docker01 ~]# docker volume inspect clsn 
[
    {
        "CreatedAt": "2018-02-01T00:39:25+08:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/clsn/_data",
        "Name": "clsn",
        "Options": {},
        "Scope": "local"
    }
]
```
### 使用卷创建
```bash
[root@docker01 ~]# docker run -d -p 9000:80 -v clsn:/usr/share/nginx/html nginx:latest 
1434559cff996162da7ce71820ed8f5937fb7c02113bbc84e965845c219d3503
# 宿主机测试
[root@docker01 ~]# echo 'blog.nmtui.com' >/var/lib/docker/volumes/clsn/_data/index.html 
[root@docker01 ~]# curl 10.0.0.100:9000
blog.nmtui.com
```
### 设置卷
```bash
[root@docker01 ~]# docker run  -d  -P  --volumes-from 079786c1e297 nginx:latest 
b54b9c9930b417ab3257c6e4a8280b54fae57043c0b76b9dc60b4788e92369fb
```
### 查看使用的端口
```bash
[root@docker01 ~]# netstat -lntup 
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1400/sshd           
tcp        0      0 10.0.0.100:2375         0.0.0.0:*               LISTEN      26218/dockerd       
tcp6       0      0 :::9000                 :::*                    LISTEN      32015/docker-proxy  
tcp6       0      0 :::8080                 :::*                    LISTEN      31853/docker-proxy  
tcp6       0      0 :::80                   :::*                    LISTEN      31752/docker-proxy  
tcp6       0      0 :::22                   :::*                    LISTEN      1400/sshd           
tcp6       0      0 :::32769                :::*                    LISTEN      32300/docker-proxy  
```
## 6.3 手动将容器保存为镜像
本次是基于docker官方centos 6.8 镜像创建

官方镜像列表：https://hub.docker.com/explore/

启动一个centos6.8的镜像
```bash
[root@docker01 ~]# docker pull  centos:6.8
[root@docker01 ~]# docker run -it -p 1022:22 centos:6.8  /bin/bash
# 在容器种安装sshd服务，并修改系统密码
[root@582051b2b92b ~]# yum install  openssh-server -y 
[root@582051b2b92b ~]# echo "root:123456" |chpasswd
[root@582051b2b92b ~]#  /etc/init.d/sshd start
```
启动完成后镜像ssh连接测试

### 将容器提交为镜像
```bash
[root@docker01 ~]# docker commit brave_mcclintock  centos6-ssh
```
### 使用新的镜像启动容器
```bash
[root@docker01 ~]# docker run -d  -p 1122:22  centos6-ssh:latest  /usr/sbin/sshd -D 
5b8161fda2a9f2c39c196c67e2eb9274977e7723fe51c4f08a0190217ae93094
```
### 在容器安装httpd服务
```bash
[root@5b8161fda2a9 /]#  yum install httpd -y
```
#### 编写启动脚本脚本
```bash
[root@5b8161fda2a9 /]# cat  init.sh 
#!/bin/bash 
/etc/init.d/httpd start 
/usr/sbin/sshd -D
[root@5b8161fda2a9 /]# chmod +x init.sh 
# 注意执行权限
```
#### 注意执行权限
再次提交为新的镜像
```bash
[root@docker01 ~]# docker commit  5b8161fda2a9 centos6-httpd 
sha256:705d67a786cac040800b8485cf046fd57b1828b805c515377fc3e9cea3a481c1
```
启动镜像，做好端口映射。并在浏览器中测试访问
```bash
[root@docker01 ~]# docker run -d -p 1222:22 -p 80:80  centos6-httpd /init.sh 
46fa6a06644e31701dc019fb3a8c3b6ef008d4c2c10d46662a97664f838d8c2c
```
