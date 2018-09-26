import Vue from 'vue'
import Navbar from './Navbar.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Navbar)
}).$mount('#app')
