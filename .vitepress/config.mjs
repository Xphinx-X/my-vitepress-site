import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  base: '/my-vitepress-site/',
  title: 'Xphinx Collection',
  description: 'Dedicated Collection for Everything or Anything I Found Fascinating.',
  
  themeConfig: {
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🛠️ Tools', link: '/collections/tools' },
      { text: '📖 Reads', link: '/collections/reads' },
      { text: '📺 Streaming', link: '/collections/streaming' },
      { text: 'ℹ️ About', link: '/about' }
    ],
    sidebar: [
      {
        text: '🚀 Getting Started',
        items: [
          { text: '🏠 Home', link: '/' },
          { text: 'ℹ️ About', link: '/about' }
        ]
      },
      {
        text: '📦 Collections',
        items: [
          { text: '🛠️ Cool Tools', link: '/collections/tools' },
          { text: '📖 Interesting Reads', link: '/collections/reads' },
          { text: '📺 Streaming', link: '/collections/streaming' },
          { text: '🛡️ Adblocking', link: '/collections/adblocking' },
          { text: '🤖 AI Tools', link: '/collections/ai' },
          { text: '🕹️ Gaming', link: '/collections/gaming' },
          { text: '🎵 Music', link: '/collections/music' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'discord', link: 'https://discord.com/' }
    ],
    outline: {
      level: [2, 3],
      label: 'On This Page'
    },
    editLink: {
      pattern: 'https://github.com/Xphinx-X/my-vitepress-site/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Made with ❤️ using VitePress',
      copyright: 'Copyright © 2024 Xphinx Collection'
    }
  }
})