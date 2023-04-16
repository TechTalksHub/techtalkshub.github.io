# 3、 安装Docker
> 安装链接：https://www.baidu.com/s?ie=UTF-8&wd=docker%E5%AE%89%E8%A3%85 
## 3.1 Docker基础命令操作
### 查看docker相关信息
```bash
$ docker version
Client:
 Version:           19.03.5-tce+c03294bc
 API version:       1.40
 Go version:        go1.12.12
 Git commit:        c03294bc
 Built:             2020-01-17T15:56:35+0800
 OS/Arch:           linux/amd64
 Experimental:      false
...
```
### 配置docker镜像加速
```bash
vi /etc/docker/daemon.json
{ "registry-mirrors": ["https://registry.docker-cn.com"]
}
```
## 3.2 启动第一个容器
```bash
$ docker run -d -p 80:80 nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
e7bb522d92ff: Pull complete 
6edc05228666: Pull complete 
cd866a17e81f: Pull complete 
Digest: sha256:285b49d42c703fdf257d1e2422765c4ba9d3e37768d6ea83d7fe2043dad6e63d
Status: Downloaded newer image for nginx:latest
8d8f81da12b5c10af6ba1a5d07f4abc041cb95b01f3d632c3d638922800b0b4d 
# 容器启动后，在浏览器进行访问测试
```
#### 参数说明
|  参数   | 说明  |
|  ----  | ----  |
| run  | 创建并运行一个容器 |
| -d  | 放入后台 |
| -p  | 端口映射 |
| nginx  | 镜像名称 |
## 3.3 Docker镜像生命周期
![](https://p3-sign.toutiaoimg.com/pgc-image/8666d8db05044833bdc4c2c72468e606~noop.image?_iz=58558&from=article.pc_detail&x-expires=1681741359&x-signature=kty4APS9aDzaGaZPTRrrLzt7wzM%3D)
