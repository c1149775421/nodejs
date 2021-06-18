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
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/cate',
    name: 'Cate',
    meta: {title:'购物车'},
    alias: '/cart',//别名
    component: () => import('@/components/CateData.vue'),
    children:[
      {
        path: '/nopay',
        name: 'NoPay',
        meta: {title:'未付款'},
        component: () => import('@/views/cart/NoPay.vue'),
      },
      {
        path: '/pay',
        name: 'Pay',
        meta: {title:'已付款'},
        component: () => import('@/views/cart/Pay.vue'),
      }
    ]
  },
  {
    path: '/swiper',
    name: 'Swiper',
    meta: {title:'轮播'},
    component: () => import('@/components/Swiper.vue')
  },
  {
    path: '/add',
    name: 'Add',
    meta: {title:'添加'},
    component: () => import('@/components/Add.vue')
  },
  {
    path: '/check',
    name: 'Check',
    meta: {title:'复选框'},
    component: () => import('@/components/Check.vue')
  },
  {
    path: '/box',
    name: 'Box',
    meta: {title:'评论'},
    component: () => import('@/components/Box.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {title:'购物车详情'},
    component: () => import('@/views/cart/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {title:'登录'},
    component: () => import('@/views/cart/Login.vue')
  }
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