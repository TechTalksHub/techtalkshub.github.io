(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{305:function(t,e,a){"use strict";a.r(e);var _=a(14),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"七、关系数据库设计理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、关系数据库设计理论"}},[t._v("#")]),t._v(" 七、关系数据库设计理论")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#七、关系数据库设计理论"}},[t._v("七、关系数据库设计理论")]),e("ul",[e("li",[e("a",{attrs:{href:"#函数依赖"}},[t._v("函数依赖")])]),e("li",[e("a",{attrs:{href:"#异常"}},[t._v("异常")])]),e("li",[e("a",{attrs:{href:"#范式"}},[t._v("范式")])])])])])]),e("p"),t._v(" "),e("h3",{attrs:{id:"函数依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数依赖"}},[t._v("#")]),t._v(" 函数依赖")]),t._v(" "),e("p",[t._v("记 A->B 表示 A 函数决定 B，也可以说 B 函数依赖于 A。")]),t._v(" "),e("p",[t._v("如果 {A1，A2，... ，An} 是关系的一个或多个属性的集合，该集合函数决定了关系的其它所有属性并且是最小的，那么该集合就称为键码。")]),t._v(" "),e("p",[t._v("对于 A->B，如果能找到 A 的真子集 A'，使得 A'-> B，那么 A->B 就是部分函数依赖，否则就是完全函数依赖。")]),t._v(" "),e("p",[t._v("对于 A->B，B->C，则 A->C 是一个传递函数依赖。")]),t._v(" "),e("h3",{attrs:{id:"异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),e("p",[t._v("以下的学生课程关系的函数依赖为 {Sno, Cname} -> {Sname, Sdept, Mname, Grade}，键码为 {Sno, Cname}。也就是说，确定学生和课程之后，就能确定其它信息。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("不符合范式的关系，会产生很多异常，主要有以下四种异常：")]),t._v(" "),e("ul",[e("li",[t._v("冗余数据：例如 "),e("code",[t._v("学生-2")]),t._v(" 出现了两次。")]),t._v(" "),e("li",[t._v("修改异常：修改了一个记录中的信息，但是另一个记录中相同的信息却没有被修改。")]),t._v(" "),e("li",[t._v("删除异常：删除一个信息，那么也会丢失其它信息。例如删除了 "),e("code",[t._v("课程-1")]),t._v(" 需要删除第一行和第三行，那么 "),e("code",[t._v("学生-1")]),t._v(" 的信息就会丢失。")]),t._v(" "),e("li",[t._v("插入异常：例如想要插入一个学生的信息，如果这个学生还没选课，那么就无法插入。")])]),t._v(" "),e("h3",{attrs:{id:"范式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范式"}},[t._v("#")]),t._v(" 范式")]),t._v(" "),e("p",[t._v("范式理论是为了解决以上提到四种异常。")]),t._v(" "),e("p",[t._v("高级别范式的依赖于低级别的范式，1NF 是最低级别的范式。")]),t._v(" "),e("h4",{attrs:{id:"_1-第一范式-1nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一范式-1nf"}},[t._v("#")]),t._v(" 1. 第一范式 (1NF)")]),t._v(" "),e("p",[t._v("属性不可分。")]),t._v(" "),e("h4",{attrs:{id:"_2-第二范式-2nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二范式-2nf"}},[t._v("#")]),t._v(" 2. 第二范式 (2NF)")]),t._v(" "),e("p",[t._v("每个非主属性完全函数依赖于键码。")]),t._v(" "),e("p",[t._v("可以通过分解来满足。")]),t._v(" "),e("p",[e("font",{attrs:{size:"4"}},[e("strong",[t._v("分解前")])]),e("br")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("以上学生课程关系中，{Sno, Cname} 为键码，有如下函数依赖：")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sname, Sdept")]),t._v(" "),e("li",[t._v("Sdept -> Mname")]),t._v(" "),e("li",[t._v("Sno, Cname-> Grade")])]),t._v(" "),e("p",[t._v("Grade 完全函数依赖于键码，它没有任何冗余数据，每个学生的每门课都有特定的成绩。")]),t._v(" "),e("p",[t._v("Sname, Sdept 和 Mname 都部分依赖于键码，当一个学生选修了多门课时，这些数据就会出现多次，造成大量冗余数据。")]),t._v(" "),e("p",[e("font",{attrs:{size:"4"}},[e("strong",[t._v("分解后")])]),e("br")],1),t._v(" "),e("p",[t._v("关系-1")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])])])]),t._v(" "),e("p",[t._v("有以下函数依赖：")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sname, Sdept")]),t._v(" "),e("li",[t._v("Sdept -> Mname")])]),t._v(" "),e("p",[t._v("关系-2")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("有以下函数依赖：")]),t._v(" "),e("ul",[e("li",[t._v("Sno, Cname ->  Grade")])]),t._v(" "),e("h4",{attrs:{id:"_3-第三范式-3nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-第三范式-3nf"}},[t._v("#")]),t._v(" 3. 第三范式 (3NF)")]),t._v(" "),e("p",[t._v("非主属性不传递函数依赖于键码。")]),t._v(" "),e("p",[t._v("上面的 关系-1 中存在以下传递函数依赖：")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sdept -> Mname")])]),t._v(" "),e("p",[t._v("可以进行以下分解：")]),t._v(" "),e("p",[t._v("关系-11")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")])])])]),t._v(" "),e("p",[t._v("关系-12")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);