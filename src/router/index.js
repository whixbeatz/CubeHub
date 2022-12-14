import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      layout: 'private'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/login.vue'),
    meta: {
      title: 'Login',
      layout: 'auth'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/register.vue'),
    meta: {
      title: 'Register',
      layout: 'auth'
    }
  },
  {
    path: '/account-setup',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/account-setup.vue'),
    meta: {
      title: 'Account',
      layout: 'auth'
    }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import(/* webpackChunkName: "about" */ '../views/onboarding'),
    meta: {
      title: 'Onboarding',
      layout: 'public'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
