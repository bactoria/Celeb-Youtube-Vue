// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './store/index'
import VueYoutube from 'vue-youtube'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAnalytics from 'vue-analytics'


Vue.use(VueYoutube)
Vue.config.productionTip = false

let debug = {
  enable: false,
  trace: false,
  sendHitTask: false
}

if (process.env.NODE_ENV == 'production') {
  debug = {
    enabled: true,
    trace: false,
    sendHitTask: true
  }

  Vue.use(VueAnalytics, {
    id: 'UA-130267256-1',
    router,
    debug
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: index,
  router,
  components: {App},
  template: '<App/>'
})
