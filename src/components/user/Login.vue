<template>
    <div class="container">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input type="text" placeholder="帐号" class="form-control" v-model="usr"><br />
        <input type="password" placeholder="密码" class="form-control" v-model="pwd" @keyup.enter="sub"><br />
        <div @click="to_register" class="register"><strong>没账号？去注册</strong></div>
        <div @click="to_index" class="register"><strong>暂不登录</strong></div>
        <button @click="sub" class="btn btn-lg btn-primary btn-block">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usr:'',
            pwd:''
        }
    },
    methods:{
        sub(){
            var that=this
            that.$axios.get('/login?username='+this.usr+'&password='+this.pwd).then(
                function(res){
                    console.log(res)
                    if(res.data.success){
                        localStorage.setItem("token",res.data.token)
                        localStorage.setItem("usr",that.usr)
                        that.usr=''
                        that.pwd=''
                        that.$LoginIsRoot((res)=>{
                            if(res.data.isRoot==="1"){
                                localStorage.setItem("isRoot","True")
                            }else{
                                localStorage.setItem("isRoot","False")
                            }
                        },(err)=>{console.log(err)})
                        that.$router.push('/')
                    }
                    if(res.data.error){
                        that.pwd=''
                        alert(res.data.error)
                    }
                },
                function(err){
                    console.log(err)
                }
            )
        },
        to_register(){
            this.$router.push('/register')
        },
        to_index(){
            this.$router.push('/')
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
        .register{
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
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-top: -20px;
    }
</style>