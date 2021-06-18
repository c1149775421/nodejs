import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/views/index/Container.vue'
import Mnyys from '@/views/detail/Mnyys/Container.vue'
import Thwj from '@/views/detail/Thwj/Container.vue'
import Fwhyj from '@/views/detail/Fwhyj/Container.vue'
import Mtyj from '@/views/detail/Mtyj/Container.vue'
import Yhhwd from '@/views/detail/Yhhwd/Container.vue'
import Crzdy2 from '@/views/detail/Crzdy2/Container.vue'
import Jqrzdy from '@/views/detail/Jqrzdy/Container.vue'
import Jtmdt from '@/views/detail/Jtmdt/Container.vue'
import Cmdsj from '@/views/detail/Cmdsj/Container.vue'
import Dmkj from '@/views/detail/Dmkj/Container.vue'
import Fkdwc from '@/views/detail/Fkdwc/Container.vue'
import Fczlm from '@/views/detail/Fczlm/Container.vue'
import Hxjy from '@/views/detail/Hxjy/Container.vue'
import Jcs from '@/views/detail/Jcs/Container.vue'
import Tqyj from '@/views/detail/Tqyj/Container.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'container',
      component: Container,
      meta: {
		title: '首页'  
      }
  },{
      path: '/mnyys',
      name: 'mnyys',
      component: Mnyys,
      meta: {
		title: '美女与野兽'  
      }
  },{
      path: '/thwj',
      name: 'thwj',
      component: Thwj,
      meta: {
          title: '头号玩家'
      }
  },{
      path: '/fwhyj',
      name: 'fwhyj',
      component: Fwhyj,
      meta: {
          title: '飞屋环游记'
      }
  },{
      path: '/mtyj',
      name: 'mtyj',
      component: Mtyj,
      meta: {
          title: '摩天营救'
      }
  },{
      path: '/yhhwd',
      name: 'yhhwd',
      component: Yhhwd,
      meta: {
          title: '银河护卫队'
      }
  },{
      path: '/crzdy2',
      name: 'crzdy2',
      component: Crzdy2,
      meta: {
          title: '超人总动员2'
      }
  },{
      path: '/jqrzdy',
      name: 'jqrzdy',
      component: Jqrzdy,
      meta: {
          title: '机器人总动员'
      }
  },{
      path: '/jtmdt',
      name: 'jtmdt',
      component: Jtmdt,
      meta: {
          title: '惊天魔盗团'
      }
  },{
      path: '/cmdsj',
      name: 'cmdsj',
      component: Cmdsj,
      meta: {
          title: '楚门的世界'
      }
  },{
      path: '/dmkj',
      name: 'dmkj',
      component: Dmkj,
      meta: {
          title: '盗梦空间'
      }
  },{
      path: '/fkdwc',
      name: 'fkdwc',
      component: Fkdwc,
      meta: {
          title: '疯狂动物城'
      }
  },{
      path: '/fczlm',
      name: 'fczlm',
      component: Fczlm,
      meta: {
          title: '复仇者联盟'
      }
  },{
      path: '/hxjy',
      name: 'hxjy',
      component: Hxjy,
      meta: {
          title: '火星救援'
      }
  },{
      path: '/jcs',
      name: 'jcs',
      component: Jcs,
      meta: {
          title: '巨齿鲨'
      }
  },{
      path: '/tqyj',
      name: 'tqyj',
      component: Tqyj,
      meta: {
          title: '通勤营救'
      }
  }],
  //跳转页面后置顶
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  }
})
export default router
router.beforeEach((to, from, next) => {
  /* 路由发生变化时修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
