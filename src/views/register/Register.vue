<template>
  <div>
  <div class="login-banner">
    <div class="login-main">
      <div class="login-banner-bg"><span></span><img src="@/assets/images/big.png"/></div>
      <div class="login-box">

        <h3 class="title">注册</h3>
        <div class="clear"></div>
        <div class="login-form">
          <form class="register">
            <div class="user-email">
                <label for="email"><span class="iconfont">&#xe69e;</span></label>
                <input type="email" v-model="email" id="email" placeholder="请输入邮箱账号">
            </div>

            <div class="user-pass">
              <label for="password"><span class="iconfont">&#xe650;</span></label>
              <input type="password" v-model="password" id="password" placeholder="请输入密码">
            </div>

            <div class="user-pass">
                <label for="passwordRepeat"><span class="iconfont">&#xe650;</span></label>
                <input type="password" v-model="passwordRepeat" id="passwordRepeat" placeholder="确认密码">
            </div>

            <div class="user-phone">
                <label for="passwordRepeat"><span class="iconfont">&#xe63d;</span><span style="color:red;margin-left:5px">*</span></label>
                <input type="text" v-model="tel" id="tel" placeholder="请输入手机号">
            </div>

          </form>
        </div>

        <div class="login-links">
          <label for="remember-me"><input id="remember-me" type="checkbox">点击表示您同意商城《服务协议》</label>
          <a href="javascript:void(0)" @click="show('Login')" class="mr-fr">登录</a>
          <br/>
        </div>

        <div class="mr-cf">
            <input style="opacity: 0.45;" type="submit" name="" :disabled="!checked" @click="mr_verify" value="注册" class="mr-btn mr-btn-primary mr-btn-sm mr-fl">
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
            checked:false,//是否同意注册协议复选框
            email:'',//电子邮箱
            password:'',//密码
            passwordRepeat:'',//确认密码
            tel:''//手机号
        }
    },

    methods:{ 
        show(value){
            // this.$router.replace({name:value})
            this.$router.replace('/login')
        },
    }
}
</script>

 <style scoped>
    @import "~@/assets/css/basic.css";
    @import "~@/assets/css/login.css";
    @import "~@/assets/css/iconfont.css";
 </style>