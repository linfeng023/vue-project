import Vue from 'vue'
import Router from 'vue-router'

// 登录页
import login from '@/components/login/login.vue'

import Dialog from '@/views/Vue_dialog.vue'

Vue.use(Router)

var router = new Router({
  routes:[
    // {
    //   path:'/',
    //   component:Dialog,
    //   children:[
    //     {
    //       path: '/',
    //       component: Dialog
    //     },
    //     {
    //       path:'/Dialog',
    //       name:'Dialog',
    //       component:Dialog,
    //     }
    //   ]
    // },
    {
      path:'/Dialog',
      name:'Dialog',
      component:Dialog,
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.fullPath!=='/login') {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router