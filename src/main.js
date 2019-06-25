import Vue from 'vue'

import i18n from './i18n'
import router from './router'
import store from './store'

import App from './App.vue'
import Default from './layouts/Default.vue'

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss'


Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
