import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Channel from '@/components/Channel'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/channel/:id', component: Channel}
  ]
})
