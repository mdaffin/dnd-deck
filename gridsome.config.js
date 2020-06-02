// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'RPG Tools',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/characters/**/*.md',
        typeName: 'Character',
        route: '/character/:name'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/races/**/*.md',
        typeName: 'Race',
        route: '/race/:name'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
