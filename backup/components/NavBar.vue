<template>
    <div>
        <ul class="nav">
            <router-link to="/" tag="li">首页</router-link>|
            <router-link to="/swiper" tag="li">轮播</router-link>|
            <router-link to="/cate" tag="li">购物车</router-link>|
            <router-link to="/add" tag="li">添加</router-link>|
            <router-link to="/check" tag="li">复选框</router-link>|
            <router-link to="/box" tag="li">评论</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .nav{
        width: 600px;
        height: 50px;
        line-height: 50px;
        background-color: pink;
        margin: 0 auto;
        text-align: center;
    }
    .nav li{
        display: inline;
        margin: 20px;
        cursor: pointer;
        font-family: "幼圆","宋体","微软雅黑";
        font-size: 15px;
        font-weight: bold;
    }
</style>