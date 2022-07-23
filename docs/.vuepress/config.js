
const { defaultTheme }  = require('@vuepress/theme-default')

module.exports = {
  base: '/blog',
  lang: 'zh-CN',
  title: 'hai ！',
  description: '记录一些， 分享一些',
  head:[['link',{rel: 'icon', href: '/sun.png' }]],
  theme: defaultTheme({
    navbar:[
      { text: '首页', link: '/view/home/' },
      { text: 'Vue', link: '/view/vue' },
      { text: 'js', link: '/view/js' },
    ],
    logo:'/sun.png',

    
    
  })
}
