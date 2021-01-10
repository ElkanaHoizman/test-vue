import Vue from 'vue'
import App from './App.vue'
import {store} from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

import VueRouter from 'vue-router'
import Routes from './routing/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
