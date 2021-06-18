<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">

            <div class="navbar-header">
            <a href="#" class="navbar-brand">Project Name</a>
            </div>

            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/">Index</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/personal">Personal</router-link></li>
                    <li><router-link to="/cart">Cart</router-link></li>
                </ul>
                
                <ul id="session" class="nav navbar-nav">
                    <li><img src="@/assets/logo.png"/></li>
                    <li><a>{{session}}</a></li>
                    <li @click="loginOut" v-show="displayOut"><a>退出登录</a></li>
                </ul>
            </div>          
        </div>
	</nav>
</template>

<script>
$(document).ready(function () {
    $('ul.nav > li').click(function (e) {
      e.preventDefault();
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');
    });
});
export default {
    data(){
        return{
            session:null,
            usr:localStorage.getItem("usr"),
            token:localStorage.token,
            displayOut:null
        }
    },
    mounted(){
        this.flag()
    },
    methods:{
        flag(){
            if(this.token=="null"){
                this.session='未登录'
                this.displayOut=false
            }else if(this.token!="null"){
                this.session=this.usr
                this.displayOut=true
            }
        },
        loginOut(){
            let that = this
            // console.log("loginOut="+localStorage.token)
            that.$axios.get('/loginOut?token='+localStorage.token)
            .then(
                function(res){
                    console.log(res)
                    if(res.data.success){
                        localStorage.token=null
                        that.$router.push({
                            name:'Redirect',
                            params:{
                                toPage:'/',
                                message:res.data.success
                            }
                        })
                    }
                    if(res.data.error){
                        alert(res.data.error)
                        that.$router.push('/login')
                    }
                },
                function(err){
                    console.log(err)
                }
            )
        }
    }
}
</script>

<style lang="scss">
    #session{
        float: right;
        font-size: 18px;
        margin-right: 8%;
        img{
            width: 20%;
            padding-top: 5px;
            float: right;
        }
    }
</style>