(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{300:function(t,e,r){"use strict";r.r(e);var a=r(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"八、er-图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、er-图"}},[t._v("#")]),t._v(" 八、ER 图")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#八、er-图"}},[t._v("八、ER 图")]),e("ul",[e("li",[e("a",{attrs:{href:"#实体的三种联系"}},[t._v("实体的三种联系")])]),e("li",[e("a",{attrs:{href:"#表示出现多次的关系"}},[t._v("表示出现多次的关系")])]),e("li",[e("a",{attrs:{href:"#联系的多向性"}},[t._v("联系的多向性")])]),e("li",[e("a",{attrs:{href:"#表示子类"}},[t._v("表示子类")])])])]),e("li",[e("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])]),t._v("\nEntity-Relationship，有三个组成部分：实体、属性、联系。"),e("p"),t._v(" "),e("p",[t._v("用来进行关系型数据库系统的概念设计。")]),t._v(" "),e("h3",{attrs:{id:"实体的三种联系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体的三种联系"}},[t._v("#")]),t._v(" 实体的三种联系")]),t._v(" "),e("p",[t._v("包含一对一，一对多，多对多三种。")]),t._v(" "),e("ul",[e("li",[t._v("如果 A 到 B 是一对多关系，那么画个带箭头的线段指向 B；")]),t._v(" "),e("li",[t._v("如果是一对一，画两个带箭头的线段；")]),t._v(" "),e("li",[t._v("如果是多对多，画两个不带箭头的线段。")])]),t._v(" "),e("p",[t._v("下图的 Course 和 Student 是一对多的关系。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/1d28ad05-39e5-49a2-a6a1-a6f496adba6a.png",width:"380px"}})]),e("br"),t._v(" "),e("h3",{attrs:{id:"表示出现多次的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表示出现多次的关系"}},[t._v("#")]),t._v(" 表示出现多次的关系")]),t._v(" "),e("p",[t._v("一个实体在联系出现几次，就要用几条线连接。")]),t._v(" "),e("p",[t._v("下图表示一个课程的先修关系，先修关系出现两个 Course 实体，第一个是先修课程，后一个是后修课程，因此需要用两条线来表示这种关系。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/ac929ea3-daca-40ec-9e95-4b2fa6678243.png",width:"250px"}})]),e("br"),t._v(" "),e("h3",{attrs:{id:"联系的多向性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系的多向性"}},[t._v("#")]),t._v(" 联系的多向性")]),t._v(" "),e("p",[t._v("虽然老师可以开设多门课，并且可以教授多名学生，但是对于特定的学生和课程，只有一个老师教授，这就构成了一个三元联系。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/5bb1b38a-527e-4802-a385-267dadbd30ba.png",width:"350px"}})]),e("br"),t._v(" "),e("h3",{attrs:{id:"表示子类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表示子类"}},[t._v("#")]),t._v(" 表示子类")]),t._v(" "),e("p",[t._v("用一个三角形和两条线来连接类和子类，与子类有关的属性和联系都连到子类上，而与父类和子类都有关的连到父类上。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/14389ea4-8d96-4e96-9f76-564ca3324c1e.png",width:"450px"}})]),e("br"),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[t._v("AbrahamSilberschatz, HenryF.Korth, S.Sudarshan, 等. 数据库系统概念 [M]. 机械工业出版社, 2006.")]),t._v(" "),e("li",[t._v("施瓦茨. 高性能 MYSQL(第3版)[M]. 电子工业出版社, 2013.")]),t._v(" "),e("li",[t._v("史嘉权. 数据库系统概论[M]. 清华大学出版社有限公司, 2006.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-storage-engine.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The InnoDB Storage Engine"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.slideshare.net/ErnestoHernandezRodriguez/transaction-isolation-levels",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transaction isolation levels"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://scanftree.com/dbms/2-phase-locking-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concurrency Control"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.slideshare.net/brshristov/the-nightmare-of-locking-blocking-and-isolation-levels-46391666",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Nightmare of Locking, Blocking and Isolation Levels!"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://aksakalli.github.io/2012/03/12/database-normalization-and-normal-forms-with-an-example.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Database Normalization and Normal Forms with an Example"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.jcole.us/2014/04/16/the-basics-of-the-innodb-undo-logging-and-history-system/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The basics of the InnoDB undo logging and history system"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.brightbox.com/blog/2013/10/31/on-mysql-locks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL locking for the busy web developer"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://draveness.me/mysql-innodb",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅入浅出 MySQL 和 InnoDB"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tech.meituan.com/2014/08/20/innodb-lock.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Innodb 中的事务隔离级别和锁的关系"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);