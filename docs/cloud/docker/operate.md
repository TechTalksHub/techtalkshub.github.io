# 4 docker镜像相关操作
## 4.1 搜索官方仓库镜像
```bash
$ docker search centos
NAME                      DESCRIPTION                    STARS    OFFICIAL               AUTOMATED
centos                    The official build of CentOS.  3992     [OK]      
ansible/centos7-ansible   Ansible on Centos7             105
```
#### 列表说明
|  参数   | 说明  |
|  ----  | ----  |
| NAME  | 镜像名称 |
| DESCRIPTION  | 镜像说明 |
| STARS  | 是否是官方的 |
| AUTOMATED  | 是否是自动构建的 |
## 4.2 获取镜像
#### 根据镜像名称拉取镜像
```bash
$ docker pull centos
Using default tag: latest
latest: Pulling from library/centos
af4b0a2388c6: Downloading  34.65MB/73.67MB
```
#### 查看当前主机镜像列表
```bash
$docker image list 
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              latest              ff426288ea90        3 weeks ago         207MB
nginx               latest              3f8a4339aadd        5 weeks ago   
```
#### 拉第三方镜像方法
```bash
docker pull index.tenxcloud.com/tenxcloud/httpd
```
## 4.3 导出镜像
```bash
$ docker image list 
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              latest              ff426288ea90        3 weeks ago         207MB
nginx               latest              3f8a4339aadd        5 weeks ago         108MB
# 导出
$ docker image save centos > docker-centos.tar.gz
```
## 4.4 删除镜像
```bash
$ docker image rm centos:latest
$ docker image list 
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              3f8a4339aadd        5 weeks ago         108MB
```
## 4.5 导入镜像
```bash
$ docker image load -i docker-centos.tar.gz  
e15afa4858b6: Loading layer  215.8MB/215.8MB
Loaded image: centos:latest
$ docker image list 
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              latest              ff426288ea90        3 weeks ago         207MB
nginx               latest              3f8a4339aadd        5 weeks ago         108MB
```
## 4.6 查看镜像的详细信息
```bash
$ docker image inspect centos
```
