import Vue, { VNode } from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'

import App from './App.vue'

Vue.use(VueI18n)
Vue.config.productionTip = false

let i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en-US'
})

new Vue({
  i18n,
  render: createElement => createElement(App)
}).$mount('#app')
