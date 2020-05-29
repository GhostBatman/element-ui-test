import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/users'),
      name: 'main',
      redirect: {name: 'users'}
    },
    {
      path: '/users',
      component: () => import('@/components/users'),
      name: 'users',
    },
    {
      path: '/user/:username',
      component: () => import('@/components/user'),
      name: 'user'
    },
    {
      path: '/login',
      component: () => import('@/components/login'),
      name: 'login'
    },
  ]
})
