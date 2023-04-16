# 11、重启docker服务，容器全部退出的解决办法
## 11.1 在启动是指定自动重启
```bash
docker run  --restart=always
```
## 11.2 修改docker默认配置文件
```bash
# 添加上下面这行
"live-restore": true
```
docker server配置文件/etc/docker/daemon.json参考
```bash
[root@docker02 ~]# cat  /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://registry.docker-cn.com"],
  "graph": "/opt/mydocker", # 修改数据的存放目录到/opt/mydocker/，原/var/lib/docker/
  "insecure-registries": ["ip:5000"],
  "live-restore": true
}
```
重启生效，只对在此之后启动的容器生效
```bash
[root@docker01 ~]# systemctl restart  docker.service
```
