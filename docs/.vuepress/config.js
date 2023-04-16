module.exports = {
    title: 'TechTalks',
    host: 'localhost',
    description: 'TechTalks：提高你的编程技能和思维方式的计算机技术博客',
    themeConfig: {
        logo:"https://i.ibb.co/Dwq0gdg/ico.png",
        sidebar:require('./sidebar'),
        nav: require('./nav')
    },
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-ykKwcuuoe9'},{ name: 'TechTalks', content: 'TechTalks：提高你的编程技能和思维方式的计算机技术博客'}],
        [ 'link', { rel: 'icon', href: '/image/ico.png' }]
    ]
}
