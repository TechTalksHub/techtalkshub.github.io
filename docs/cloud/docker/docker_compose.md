# 10、 docker-compose编排工具
## 10.1 安装docker-compose
### 安装docker-compose
```bash
# 下载pip软件
yum install -y python2-pip
# 下载 docker-compose
pip install docker-compose
```
国内开启pip 下载加速：http://mirrors.aliyun.com/help/pypi
```bash
mkdir ~/.pip/
cat > ~/.pip/pip.conf <<'EOF'
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
EOF
```
## 10.2 编排启动镜像
### 创建文件目录
```bash
[root@docker01 ~]# mkdir /opt/my_wordpress/
[root@docker01 ~]# cd /opt/my_wordpress/
```
### 编写编排文件
```bash
[root@docker01 my_wordpress]# vim docker-compose.yml
version: '3'
services:
   db:
     image: mysql:5.7
     volumes:
       - /data/db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress
   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     volumes:
       - /data/web_data:/var/www/html
     ports: 
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
```
### 启动
```bash
[root@docker01 my_wordpress]# docker-compose up
　　#启动方法：docker-compose up
　　#后台启动方法：docker-compose up -d
```
浏览器上访问http://ip:8000
