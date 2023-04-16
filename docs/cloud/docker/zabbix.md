# 9、使用docker运行zabbix-server
## 9.1 容器间的互联
在运行zabbix之前务必要了解容器间互联的方法
```bash
# 创建一个nginx容器
docker run -d -p 80:80 nginx
# 创建容器，做link，并进入容器中
docker run -it --link quirky_brown:web01 centos-ssh /bin/bash
# 在容器中访问nginx容器可以ping通
ping web01
```
命令执行过程
```bash
# 启动apache容器
[root@docker01 ~]# docker run -d httpd:2.4  
3f1f7fc554720424327286bd2b04aeab1b084a3fb011a785b0deab6a34e56955
^[[A[root@docker01 docker ps -a
CONTAINER ID        IMAGE               COMMAND              CREATED             STATUS              PORTS               NAMES
3f1f7fc55472        httpd:2.4"httpd-foreground"6 seconds ago       Up 5 seconds        80/tcp              determined_clarke
# 拉取一个busybox 镜像
[root@docker01 ~]# docker pull busybox 
# 启动容器
[root@docker01 ~]# docker run -it  --link determined_clarke:web busybox:latest   /bin/sh 
/ # 
# 使用新的容器访问最初的web容器
/ # ping web 
PING web (172.17.0.2): 56 data bytes
64 bytes from 172.17.0.2: seq=0 ttl=64 time=0.058 ms
^C
--- web ping statistics ---
1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max = 0.058/0.058/0.058 ms
```
## 9.2 启动zabbix容器
### 启动一个mysql的容器
```bash
docker run --name mysql-server -t \
      -e MYSQL_DATABASE="zabbix" \
      -e MYSQL_USER="zabbix" \
      -e MYSQL_PASSWORD="zabbix_pwd" \
      -e MYSQL_ROOT_PASSWORD="root_pwd" \
      -d mysql:5.7 \
      --character-set-server=utf8 --collation-server=utf8_bin

```
#### 启动java-gateway容器监控java服务
```bash
docker run --name zabbix-java-gateway -t \
      -d zabbix/zabbix-java-gateway:latest
```
### 启动zabbix-mysql容器使用link连接mysql与java-gateway。
```bash
docker run --name zabbix-server-mysql -t \
      -e DB_SERVER_HOST="mysql-server" \
      -e MYSQL_DATABASE="zabbix" \
      -e MYSQL_USER="zabbix" \
      -e MYSQL_PASSWORD="zabbix_pwd" \
      -e MYSQL_ROOT_PASSWORD="root_pwd" \
      -e ZBX_JAVAGATEWAY="zabbix-java-gateway" \
      --link mysql-server:mysql \
      --link zabbix-java-gateway:zabbix-java-gateway \
      -p 10051:10051 \
      -d zabbix/zabbix-server-mysql:latest
```
### 启动zabbix web显示，使用link连接zabbix-mysql与mysql。
```bash
docker run --name zabbix-web-nginx-mysql -t \
      -e DB_SERVER_HOST="mysql-server" \
      -e MYSQL_DATABASE="zabbix" \
      -e MYSQL_USER="zabbix" \
      -e MYSQL_PASSWORD="zabbix_pwd" \
      -e MYSQL_ROOT_PASSWORD="root_pwd" \
      --link mysql-server:mysql \
      --link zabbix-server-mysql:zabbix-server \
      -p 80:80 \
      -d zabbix/zabbix-web-nginx-mysql:latest
```
## 9.3 关于zabbix API
关于zabbix API可以参考官方文档：https://www.zabbix.com/documentation/3.4/zh/manual/api

获取token方法
```bash
# 获取token
[root@docker02 ~]# curl -s -X POST -H 'Content-Type:application/json' -d '
{
"jsonrpc": "2.0",
"method": "user.login",
"params": {
"user": "Admin",
"password": "zabbix"
},
"id": 1
}' http://10.0.0.100/api_jsonrpc.php
{"jsonrpc":"2.0","result":"d3be707f9e866ec5d0d1c242292cbebd","id":1}
```
