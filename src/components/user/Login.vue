<template>
    <div class="wrapper row ">
        
        <form class="form-signin ">
            
            <h2 class="form-signin-heading text-center"></h2>
            <input type="text" class="form-control" name="username" placeholder="賬號"
                required="" autofocus=""/>
            <input type="password" class="form-control" name="password" placeholder="密碼"
                required="" />
            
            <div>
                <label class="checkbox" style="float: left;">
                    <input type="checkbox" name="rememberMe" id="remember-me" value="remember-me" />
                    记住密码
                </label>
                <button style="float: right;" class="btn btn-default" @click="toRegister">注册</button>
            </div>
            <button class="btn btn-lg btn-primary btn-block">登录</button>
            
        </form>
        
    </div>   
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toRegister(){
            this.$router.replace("/register")
        }
    }
}
</script>

<style scoped lang="scss">
    body{
        background: #eee;
    }
    .wrapper{
        margin: 80px;
    }
    .form-signin{
        max-width: 380px;
        margin: 0 auto;
        background-color: #fff;
        padding: 15px 40px 50px;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
    }
    .form-signin .form-singin-heading, .form-signin .checkbox{
        margin-bottom: 30px;
        margin-left: 20px;
    }
    .form-signin input[type="text"], .form-signin input[type="password"]{
        margin-bottom: 20px;
    }
    .forn-singin .forn-control{
        padding: 10px;
    }
</style>