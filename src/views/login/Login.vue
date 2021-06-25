<template>
  <div>
  <div class="login-banner">
    <div class="login-main">
      <div class="login-banner-bg"><span></span><img src="@/assets/images/big.png"/></div>
      <div class="login-box">
        <h3 class="title">登录</h3>
        <div class="clear"></div>
        <div class="login-form">
          <form>
            <div class="user-name">
              <label for="user"><span class="iconfont">&#xec52;</span></label>
              <input type="text"  v-model="user" id="user" placeholder="邮箱/手机/用户名" >
            </div>
            <div class="user-pass">
              <label for="password"><span class="iconfont">&#xe650;</span></label>
              <input type="password" v-model="password" id="password" placeholder="请输入密码">
            </div>
          </form>
        </div>
        <div class="login-links">
          <label for="remember-me"><input id="remember-me" type="checkbox">记住密码</label>
          <a href="javascript:void(0)" @click="show('Register')" class="mr-fr">注册</a>
          <br/>
        </div>
        <div class="mr-cf">
          <input type="submit" name="" value="登 录" @click="login" class="mr-btn mr-btn-primary mr-btn-sm">
        </div>
        <div class="partner">
          <h3>合作账号</h3>
          <div class="mr-btn-group">
            <li><a href="javascript:void(0)"><i class="iconfont">&#xe609;</i><span>QQ登录</span></a></li>
            <li><a href="javascript:void(0)"><i class="iconfont">&#xe641;</i><span>微博登录</span> </a></li>
            <li><a href="javascript:void(0)"><i class="iconfont">&#xe613;</i><span>微信登录</span> </a></li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Bottom />
  </div>
</template>

<script>
import Bottom from './Bottom.vue'
export default {
    components:{
        Bottom
    },
    data: function(){
        return {
          user:null,//用户名
          password:null//密码
        }
    },
    methods:{
        show(value){
            this.$router.replace({name:value})
            // this.$router.replace('/register')
        }     
    }
}
</script>

 <style scoped>
    @import "~@/assets/css/basic.css";
    @import "~@/assets/css/login.css";
    @import "~@/assets/css/iconfont.css";
 </style>