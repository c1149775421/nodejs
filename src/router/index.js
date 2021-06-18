import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Index',
    meta: {title:'首页'},
    component: () => import('@/views/index/Index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {title:'登录'},
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {title:'注册'},
    component: () => import('@/views/register/Register.vue')
  },
  {
    path: '/shopinfo',
    name: 'Shopinfo',
    meta: {title:'商品详情'},
    component: () => import('@/views/shopinfo/Shopinfo.vue')
  },
  // {
  //   path: '/shopcart',
  //   name: 'Shopcart',
  //   meta: {title:'购物车页面'},
  //   component: () => import('@/views/index/Index.vue')
  // },
  // {
  //   path: '/pay',
  //   name: 'Pay',
  //   meta: {title:'支付页面'},
  //   component: () => import('@/views/index/Index.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }else{
    document.title='title'
  }
  next()
})