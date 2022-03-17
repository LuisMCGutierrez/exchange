import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'
import { VueSpinners } from '@saeris/vueSpinners'
import Chartkick from 'vueChartkick'
import Chart from 'Chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')