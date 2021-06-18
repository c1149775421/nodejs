<template>
    <div>
        <!-- navbar navbar-inverse 夜间模式-->
        <!-- navbar-static-top 静止在顶部-->
        <nav class="navbar navbar-inverse">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="javascript:void(0)">极客商城</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="http://119.29.142.221/blog/public/index.php" target="blank">个人博客<span class="sr-only">(current)</span></a></li>
                    <li><a href="http://119.29.142.221:8084/book" target="blank">书城</a></li>
                    <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        开放平台 <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="https://xiaoai.mi.com/" target="blank">小爱开放平台</a></li>
                        <li><a href="https://iot.mi.com/" target="blank">IoT开发者平台</a></li>
                        <li><a href="https://xiaomishare.mi.com/?from=micom" target="blank">智能生活</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="https://youpin.mi.com/" target="blank">小米有品</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="https://qiye.mi.com/" target="blank">企业团购</a></li>
                    </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left" action="https://www.baidu.com/baidu" target="_blank">
                    <div class="form-group">
                        <input type="text" name="word" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">搜索</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)" @click="cart">购物车</a></li>
                    <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        用户 <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="javascript:void(0)" @click="login">登录</a></li>
                        <li><a href="javascript:void(0)" @click="register">注册</a></li>
                        <li><a href="javascript:void(0)" @click="personal">个人中心</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="javascript:void(0)">消息通知</a></li>
                    </ul>
                    </li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push("/login")
        },
        register(){
            this.$router.push("/register")
        },
        cart(){
            this.$router.push("/cart")
        },
        personal(){
            this.$router.push("/personal")
        }
    }
}
</script>

<style scoped lang="scss">
nav{
    border-radius: 0;
}
</style>