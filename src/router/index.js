import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/user/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/user/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/components/cart/CartData.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/components/user/PersonalCenter.vue')
  },
  {
    path: '/aboutWe',
    name: 'AboutWe',
    component: () => import('@/components/user/AboutWe.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
