module.exports = {

    '/usual_tech/git/': [
        '',
    ],
    '/cs/network/': [
        '',
        'pysics',
        'link',
        'net','tras','app'
    ],
    '/usual_tech/go/': [
        {
            title: '一、基础知识',  //组名
            sidebarDepth: 3,
            children: ['','go_tool'],   //该分组下要显示的文件的目录
        },
        {
            title: '二、高阶知识',  //组名
            sidebarDepth: 3,
            children: ['GMP','GC','Slice','Map','mem',],   //该分组下要显示的文件的目录
        },
    ],
    '/cloud/docker/': [
        {
            title: '一、Docker入门',  //组名
            sidebarDepth: 3,
            children: ['','what_is_docker','install_docker','operate','manage','volum','dockerfile','image','zabbix','docker_compose','exit','network'],   //该分组下要显示的文件的目录
        },
        {
            title: '二、Docker面试整理',  //组名
            sidebarDepth: 3,
            children: [],   //该分组下要显示的文件的目录
        },
    ],
    '/cloud/blog/': [
        '',
        'alibaba',
        'tencent',
    ],
}
