<template>
    <div class="container">
        <h2 class="form-signin-heading">Please register</h2>
        <input type="text" placeholder="帐号" class="form-control" v-model="usr"><br />
        <input type="password" placeholder="密码" class="form-control" v-model="pwd"><br />
        <input type="email" placeholder="邮箱" class="form-control" v-model="email"><br/>
        <div @click="to_login" class="login"><strong>已注册？去登录</strong></div>
        <button @click="sub" class="btn btn-lg btn-primary btn-block">注册</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usr:'',
            pwd:'',
            email:''
        }
    },
    methods:{
        sub(){
            var that=this
            that.$axios.post('/regist?username='+this.usr+'&password='+this.pwd+'&email='+this.email)
            .then(
                function(res){
                    console.log(res)
                    if(res.data.success){
                        that.usr=''
                        that.pwd=''
                        that.email=''
                        alert(res.data.success)
                    }
                    if(res.data.error){
                        alert(res.data.error)
                    }
                },
                function(err){
                    console.log(err)
                }
            )
        },
        to_login(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding-top: 80px;
        text-align: center;
        width: 600px;
        margin: 0 auto;
        .btn{
            width: 50%;
            margin: 0 auto;
        }
        .login{
            width: 20%;
            margin: 0 auto;
            margin-top: -10px;
            margin-bottom: 10px;
            text-align: center;
            padding: 2px;
            cursor: pointer;
        }
    }
    .form-control{
        height: 45px;
    }
    input[type="text"]{
        width: 50%;
        margin: 0 auto;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        margin-bottom: -1px;
    }
    input[type="password"]{
        width: 50%;
        margin: 0 auto;
        border-radius: 0;
        margin-top: -20px;
        margin-bottom: -1px;
    }
    input[type="email"]{
        width: 50%;
        margin: 0 auto;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-top: -20px;
    }
</style>