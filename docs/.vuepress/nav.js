module.exports = [
    {
        text: '首页',
        link: '/'
    },

    {
        text: '云原生',
        items: [
            {text: '优秀博文', link: '/cloud/blog/'},
            {text: 'docker', link: '/cloud/docker/'},
            {text: 'Kubernetes', link: '/cloud/kubernetes/'},
        ]
    },
    {//这个导航栏对应多个子导航栏
        text: '常用工具', // 这里的text就是导航栏上的名字
        items: [
            {text: 'Go', link: '/usual_tech/go/'},
            {text: 'Git', link: '/usual_tech/git/'},
        ]
    },
    {//这个导航栏对应多个子导航栏
        text: '快意门', // 这里的text就是导航栏上的名字
        link: '/tools/',
    },
    {
        text: '八股文', // 这里的text就是导航栏上的名字
        items: [
            {text: '计算机网络', link: '/cs/network/'},
            {text: '软件工程', link: '/cs/1/'}, // 对应的路径如下图所示
            {text: '组成原理', link: '/cs/2/'}, // 对应的路径如下图所示
            {text: '数据结构', link: '/cs/browser/'}, // 对应的路径如下图所示
            {text: '数据库', link: '/cs/database/'},
            {text: '操作系统', link: 'cs/os/'},
            {text: 'Redis', link: 'cs/redis/'}
        ]
    }
]
