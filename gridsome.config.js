const postcss = require('postcss-import')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  postcss(),
  tailwind(require('./theme/tailwind.config.js')),
  autoprefixer(),
]

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Gridsome',
  siteDescription: '',
  siteUrl: '',
  titleTemplate: `%s | Gridsome`,
  icon: './src/favicon.png',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [],
}
