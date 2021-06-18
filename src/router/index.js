import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path:'/redirect',
    name:'Redirect',
    meta:{title:'重定向'},
    component:()=>import('@/views/Redirect.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta:{title:'首页'},
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta:{title:'登录'},
    component: () => import('@/components/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta:{title:'注册'},
    component: () => import('@/components/user/Register.vue'),
  },
  {
    path: '/personal',
    name: 'Personal',
    meta:{title:'个人中心'},
    component: () => import('@/components/user/Personal.vue'),
  },
  {
    path: '/bookAdd',
    name: 'BookAdd',
    meta:{title:'添加图书'},
    component: () => import('@/components/manager/BookAdd.vue'),
  },
  {
    path: '/bookDelete',
    name: 'BookDelete',
    meta:{title:'删除图书'},
    component: () => import('@/components/manager/BookDelete.vue'),
  },
  {
    path: '/bookUpdate',
    name: 'BookUpdate',
    meta:{title:'修改图书'},
    component: () => import('@/components/manager/BookUpdate.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{title:'购物车'},
    component: () => import('@/components/Cart.vue'),
  },
  {
    path: '/selectAccounts',
    name: 'SelectAccounts',
    meta:{title:'订单结算'},
    component: () => import('@/components/SelectAccounts.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const filter = function(toPath,next){
  const isRootArr = [
    '/bookDelete',
    '/bookAdd',
    '/bookUpdate'
  ]
  for (let i = 0; i < isRootArr.length; i++) {
    const element = isRootArr[i];
    if(toPath==element&&(localStorage.getItem("isRoot")==="False")){
      next('/')
    }
  }
}

router.beforeEach((to,from,next) => {
  filter(to.path,next)

  if(to.meta.title){
    document.title=to.meta.title
  }else{
    document.title='title'
  }
  next()
})