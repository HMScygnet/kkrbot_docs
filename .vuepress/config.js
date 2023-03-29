module.exports = {
    title: '公主连结bot',
    description: '功能表',
    head: [
        ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    base: '/',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: '功能手册', link: '/guide/help/note.md'},
            {text: '关于', link: '/guide/help/about.md'},
            {text: '更新日志', link: '/guide/help/update.md'}
        ],
        smoothScroll: true,
        sidebar: {
            '/guide/':[
                {
                    title: '前言',
                    children: [
                        ['../guide/help/note.md' , '注意事项']
                    ]
                },

                {
                    title: '会战功能',
                    children: [
                        ['../guide/huizhan/huizhan.md', '会战功能'],
                        ['../guide/huizhan/shuoming.md', '操作说明']
                    ]
                },

                {
                    title: '公主连结功能',
                    children: [
                        ['../guide/pcr/pcr.md', '公主连结功能']
                    ]
                },

                {
                    title: 'B站订阅功能',
                    children: [
                        ['../guide/bili/bili.md', 'B站订阅功能']
                    ]
                },

                {
                    title: '赛马娘功能',
                    children: [
                        ['../guide/uma/uma.md', '赛马娘功能']
                    ]
                },

                {
                    title: '原神功能',
                    children: [
                        ['../guide/genshin/genshin.md', '原神功能']
                    ]
                },

                {
                    title: '娱乐功能',
                    children: [
                        ['../guide/play/play.md', '娱乐功能']
                    ]
                },

                {
                    title: '涩图功能',
                    children: [
                        ['../guide/play/setu.md', '涩图功能']
                    ]
                },

                {
                    title: '代挂说明',
                    children: [
                        ['../guide/help/dai.md' , '代挂说明']
                    ]
                }
            ]
        }
    }
}