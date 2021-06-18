import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import home from './modules/home.js'
import swiper from './modules/swiper.js'
export default new Vuex.Store({
  modules: {
    home,
    swiper
  }
})
