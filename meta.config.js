const copyright = require('./src/utils/copyright')

const head = {
  lang: 'en',
}

const body = {
  class: 'font-sans antialiased',
}

const meta = [
  { charset: 'utf-8' },
  {
    key: 'author',
    name: 'author',
    content: 'SpaceComX - Humanizing Technology through Digital Experiences.',
  },
  {
    key: 'copyright',
    name: 'copyright',
    content: copyright('Spacecomx LLC'),
  },
  {
    key: 'keywords',
    name: 'keywords',
    content: '',
  },
  {
    key: 'og:title',
    property: 'og:title',
    content: '',
  },
  {
    key: 'og:description',
    property: 'og:description',
    content: '',
  },
  {
    key: 'og:type',
    property: 'og:type',
    content: 'website',
  },
  {
    key: 'og:url',
    property: 'og:url',
    content: '',
  },
]

module.exports = {
  head,
  body,
  meta,
}
