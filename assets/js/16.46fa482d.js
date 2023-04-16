(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{290:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3、-安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-安装docker"}},[s._v("#")]),s._v(" 3、 安装Docker")]),s._v(" "),a("blockquote",[a("p",[s._v("安装链接：https://www.baidu.com/s?ie=UTF-8&wd=docker%E5%AE%89%E8%A3%85")])]),s._v(" "),a("h2",{attrs:{id:"_3-1-docker基础命令操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-docker基础命令操作"}},[s._v("#")]),s._v(" 3.1 Docker基础命令操作")]),s._v(" "),a("h3",{attrs:{id:"查看docker相关信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看docker相关信息"}},[s._v("#")]),s._v(" 查看docker相关信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version\nClient:\n Version:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.03")]),s._v(".5-tce+c03294bc\n API version:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.40")]),s._v("\n Go version:        go1.12.12\n Git commit:        c03294bc\n Built:             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-01-17T15:56:35+0800\n OS/Arch:           linux/amd64\n Experimental:      "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"配置docker镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置docker镜像加速"}},[s._v("#")]),s._v(" 配置docker镜像加速")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-2-启动第一个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-启动第一个容器"}},[s._v("#")]),s._v(" 3.2 启动第一个容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 nginx\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nginx:latest'")]),s._v(" locally\nlatest: Pulling from library/nginx\ne7bb522d92ff: Pull complete \n6edc05228666: Pull complete \ncd866a17e81f: Pull complete \nDigest: sha256:285b49d42c703fdf257d1e2422765c4ba9d3e37768d6ea83d7fe2043dad6e63d\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" nginx:latest\n8d8f81da12b5c10af6ba1a5d07f4abc041cb95b01f3d632c3d638922800b0b4d \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器启动后，在浏览器进行访问测试")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[s._v("#")]),s._v(" 参数说明")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("run")]),s._v(" "),a("td",[s._v("创建并运行一个容器")])]),s._v(" "),a("tr",[a("td",[s._v("-d")]),s._v(" "),a("td",[s._v("放入后台")])]),s._v(" "),a("tr",[a("td",[s._v("-p")]),s._v(" "),a("td",[s._v("端口映射")])]),s._v(" "),a("tr",[a("td",[s._v("nginx")]),s._v(" "),a("td",[s._v("镜像名称")])])])]),s._v(" "),a("h2",{attrs:{id:"_3-3-docker镜像生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-docker镜像生命周期"}},[s._v("#")]),s._v(" 3.3 Docker镜像生命周期")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-sign.toutiaoimg.com/pgc-image/8666d8db05044833bdc4c2c72468e606~noop.image?_iz=58558&from=article.pc_detail&x-expires=1681741359&x-signature=kty4APS9aDzaGaZPTRrrLzt7wzM%3D",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);