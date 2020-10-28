const screens = require('./screens')
const colors = require('./colors')
const spacing = require('./spacing')
const fontSize = require('./font-size')
const opacity = require('./opacity')
const inset = require('./inset')
const maxheight = require('./max-height')
const translate = require('./translate')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    screens: screens,
    colors: {
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      purple: colors.violet,
      pink: colors.pink,
    },
    spacing: spacing,
    fontSize: fontSize,
    opacity: opacity,
    inset: inset,
    maxHeight: maxheight,
    translate: translate,
    extends: {
      maxWidth: {
        '7xl': '80rem',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
      },
      minWidth: {
        min: 'min-content',
        max: 'max-content',
      },
      width: {
        min: 'min-content',
        max: 'max-content',
      },
    },
  },
  variants: {},
  plugins: [],
}
