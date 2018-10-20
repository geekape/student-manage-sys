import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})
