// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    msg: null
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
      obj.msg = null
    },
    decrement: (state) => {
      const obj = state
      if(obj.count<=0){
        obj.count = 0
        obj.msg = "已经到底了"
      }else{
        obj.count -= 1
      }
    }
  }
})

export default store
