import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//共享数据
    str:'这是vuex数据',
    name:'lily'
  },
  getters:{//共享计算属性
    setStr(state){
      return state.str.slice(0,2)
    }
  },
  mutations: {//共享方法
    btn(){
      alert('你好Vue')
    }
  },
  actions: {//专门提交Mutations
    btnfun(context){
        context.commit('btn')
    }
  },
  modules: {
  }
})
