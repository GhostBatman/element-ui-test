import Vue from 'vue'
import Router from 'vue-router'
import { store } from './store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/users'),
      name: 'main',
      redirect: { name: 'users' }
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.isAuthenticated)
    next({ name: 'login' })
  else next()
})
export default router