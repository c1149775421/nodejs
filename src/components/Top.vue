<template>
    <div class="hmtop">
        <div class="mr-container header">
            <ul class="message-l">
                <div class="topMessage">
                    <div class="menu-hd">
                        <a href="javascript:void(0)" @click="show('Login')" style="color:red;">亲，请登录</a>
                        <a href="javascript:void(0)" style="color:red;">退出登录</a>
                        <a href="javascript:void(0)" @click="show('Register')" style="color:red;margin-left:20px;">免费注册</a>
                    </div>
                </div>
            </ul>
            <ul class="message-r">
                <div class="topMessage home">
                    <div class="menu-hd">
                        <a href="javascript:void(0)" @click="show('Index')" target="_top" style="color:red;">商城首页</a>
                    </div>
                </div>
                <div class="topMessage my-shangcheng">
                    <div class="menu-hd">
                        <a href="javascript:void(0)" target="_top"><span class="iconfont">&#xe7aa;</span>个人中心</a>
                    </div>
                </div>
                <div class="topMessage mini-cart">
                    <div class="menu-hd">
                        <a href="javascript:void(0)" @click="show('Shopcart')" target="_top" style="color:red;"><span class="iconfont">&#xe77a;</span>购物车</a>
                    </div>
                </div>
                <div class="topMessage favorite">
                    <div class="menu-hd">
                        <a href="javascript:void(0)" target="_top"><span class="iconfont">&#xe721;</span>收藏夹</a>
                    </div>
                </div>
            </ul>
        </div>

        <div class="nav white">
            <div class="clear"></div>
            <div class="logoBig">
                <a href="#"><img src="@/assets/images/logobig.png" /></a>
            </div>
            <div class="search-bar pr">
                <form action="">
                    <input type="text" placeholder="搜索">
                    <input type="submit" class="submit" value="搜索">
                </form>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    methods:{
        show(value){
            this.$router.push({name:value})
        },
    }
}
</script>

<style>

</style>