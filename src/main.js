import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios'


Vue.config.productionTip = false;
axios.defaults.baseURL = "http://119.29.142.221:8081";
//http://localhost:8081
Vue.prototype.$axios = axios;

localStorage.setItem("localCarts",
  localStorage.getItem('localCarts')?localStorage.getItem('localCarts'):'{}'
)
// localStorage.setItem('localCarts','{}')

Vue.prototype.$LoginIsRoot = function(resfun,errfun){
  let token = localStorage.token;
  axios.get("/isRoot",{params:{token:token}})
  .then( (res)=>{resfun(res)}, (err)=>{errfun(err)} )
}
Vue.prototype.$isRoot = function(resfun,errfun){
  let isRoot = localStorage.getItem("isRoot")
  let res = {data:{isRoot:isRoot==="True"?'1':'0'}}
  resfun(res)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
