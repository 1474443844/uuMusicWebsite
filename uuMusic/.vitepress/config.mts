import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "uuMusic",
  description: "Awesome Music App",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      description: "优雅的音乐App",
      // 其他针对简体中文的配置，例如 title, description 等，会覆盖顶层配置
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // 英文内容放在 /en/ 目录下
      // 其他针对英文的配置
      title: "uuMusic",
      description: "Awesome Music App",
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
