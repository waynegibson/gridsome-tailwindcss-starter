import '~/assets/css/main.css'
import DefaultLayout from '~/layouts/Default.vue'
import * as config from '../meta.config'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = config.head
  head.bodyAttrs = config.body
  head.meta.push(...config.meta)

  Vue.component('Layout', DefaultLayout)
}
