(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_5、-容器的日常管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、-容器的日常管理"}},[s._v("#")]),s._v(" 5、 容器的日常管理")]),s._v(" "),a("h2",{attrs:{id:"_5-1-容器的起-停"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-容器的起-停"}},[s._v("#")]),s._v(" 5.1 容器的起/停")]),s._v(" "),a("h3",{attrs:{id:"最简单的运行一个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最简单的运行一个容器"}},[s._v("#")]),s._v(" 最简单的运行一个容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run nginx")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"创建容器-两步走-不常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建容器-两步走-不常用"}},[s._v("#")]),s._v(" 创建容器，两步走（不常用）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker create centos:latest  /bin/bash")]),s._v("\nbb7f32368ecf0492adb59e20032ab2e6cf6a563a0e6751e58930ee5f7aaef204\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker start stupefied_nobel")]),s._v("\nstupefied_nobel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"快速启动容器方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速启动容器方法"}},[s._v("#")]),s._v(" 快速启动容器方法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run  centos:latest  /usr/bin/sleep 20;")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("容器内的第一个进程必须一直处于运行的状态，否则这个容器，就会处于退出状态！")]),s._v(" "),a("h3",{attrs:{id:"查看正在运行的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看正在运行的容器"}},[s._v("#")]),s._v(" 查看正在运行的容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container ls")]),s._v("\n    或\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps ")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\n8708e93fd767        nginx               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp              keen_lewin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"查看你容器详细信息-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看你容器详细信息-ip"}},[s._v("#")]),s._v(" 查看你容器详细信息/ip")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container  inspect  容器名称/id")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看你所有容器-包括未运行的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看你所有容器-包括未运行的"}},[s._v("#")]),s._v(" 查看你所有容器（包括未运行的）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES\n8708e93fd767        nginx               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("4minutes ago       Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(" seconds ago                       keen_lewin\nf9f3e6af7508        nginx               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" minutes ago       Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" minutes ago                        optimistic_haibt\n8d8f81da12b5        nginx               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" hours ago         Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" hours ago                          lucid_bohr\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"停止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[s._v("#")]),s._v(" 停止容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker stop 容器名称/id ")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container  kill  容器名称/id")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5-2-进入容器方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-进入容器方法"}},[s._v("#")]),s._v(" 5.2 进入容器方法")]),s._v(" "),a("h3",{attrs:{id:"启动时进去方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动时进去方法"}},[s._v("#")]),s._v(" 启动时进去方法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it #参数：-it 可交互终端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it nginx:latest  /bin/bash")]),s._v("\nroot@79241093859e:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"退出-离开容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出-离开容器"}},[s._v("#")]),s._v(" 退出/离开容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ctrl+p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" ctrl+q\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动后进入容器的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动后进入容器的方法"}},[s._v("#")]),s._v(" 启动后进入容器的方法")]),s._v(" "),a("h4",{attrs:{id:"启动一个docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动一个docker"}},[s._v("#")]),s._v(" 启动一个docker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it centos:latest ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@1bf0f43c4d2f /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("         PID   "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("  C STIME TTY          TIME CMD\nroot          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10015")]),s._v(":47 pts/000:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("131015")]),s._v(":47 pts/000:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"attach进入容器-使用pts-0-会让所用通过此方法进如放入用户看到同样的操作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach进入容器-使用pts-0-会让所用通过此方法进如放入用户看到同样的操作。"}},[s._v("#")]),s._v(" attach进入容器，使用pts/0 ，会让所用通过此方法进如放入用户看到同样的操作。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker attach 1bf0f43c4d2f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@1bf0f43c4d2f /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("         PID   "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("  C STIME TTY          TIME CMD\nroot          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10015")]),s._v(":47 pts/000:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("141015")]),s._v(":49 pts/000:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"自命名启动一个容器-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自命名启动一个容器-name"}},[s._v("#")]),s._v(" 自命名启动一个容器 --name")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker attach 1bf0f43c4d2f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@1bf0f43c4d2f /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("         PID   "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("  C STIME TTY          TIME CMD\nroot          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10015")]),s._v(":47 pts/000:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("141015")]),s._v(":49 pts/000:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"exrc-进入容器方法-推荐使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exrc-进入容器方法-推荐使用"}},[s._v("#")]),s._v(" exrc 进入容器方法（推荐使用）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it clsn1  /bin/bash ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b20fa75b4b40 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新分配一个终端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b20fa75b4b40 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v("         PID   "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("  C STIME TTY          TIME CMD\nroot          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10016")]),s._v(":11 pts/000:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("130016")]),s._v(":14 pts/100:00:00 /bin/bash\nroot         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2613016")]),s._v(":14 pts/100:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_5-3-删除所有容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-删除所有容器"}},[s._v("#")]),s._v(" 5.3 删除所有容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker rm -f  `docker ps -a -q`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 强制删除")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_5-4-启动时进行端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-启动时进行端口映射"}},[s._v("#")]),s._v(" 5.4 启动时进行端口映射")]),s._v(" "),a("p",[s._v("-p参数端口映射")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@docker01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d -p 8888:80  nginx:latest ")]),s._v("\n287bec5c60263166c03e1fc5b0b8262fe76507be3dfae4ce5cd2ee2d1e8a89a9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("不同指定映射方法")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-p hostPort:containerPort")]),s._v(" "),a("td",[s._v("端口映射 -p 8080:80")])]),s._v(" "),a("tr",[a("td",[s._v("-p ip:hostPort:containerPort")]),s._v(" "),a("td",[s._v("配置监听地址 -p 10.0.0.100:8080:80")])]),s._v(" "),a("tr",[a("td",[s._v("-p ip::containerPort")]),s._v(" "),a("td",[s._v("随机分配端口 -p 10.0.0.100::80")])]),s._v(" "),a("tr",[a("td",[s._v("-p hostPort:containerPort:udp")]),s._v(" "),a("td",[s._v("指定协议 -p 8080:80:tcp")])]),s._v(" "),a("tr",[a("td",[s._v("-p 81:80 –p 443:443")]),s._v(" "),a("td",[s._v("指定多个")])])])]),s._v(" "),a("p",[s._v("随机映射")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" （大P）"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要镜像支持")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);