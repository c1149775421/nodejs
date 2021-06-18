<template>
    <div class="footer">
        <div class="footer_box">
            <div class="footer_box_text">
                <a href="https://mi.com" target="_blank">小米商城</a>
            </div>
            <div class="footer_box_text">
                <a href="https://www.mi.com/service/mihome/list" target="_blank">小米之家</a>
            </div>
            <div class="footer_box_text">
                <a href="https://www.mi.com/about/contact/" target="_blank">联系我们</a>
            </div>
            <div class="footer_box_text">
                <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html" target="_blank">隐私政策</a>
            </div>
            <div class="footer_box_text">
                <a href="https://www.mi.com/about/user-agreement/" target="_blank">用户协议</a>
            </div>
            <div class="footer_box_text">
                <a href="https://www.mi.com/service/imei" target="_blank">防伪查询</a>
            </div>
            <div class="footer_box_text">
                <a href="https://static.mi.com/feedback/" target="_blank">问题反馈</a>
            </div>
            <div class="footer_box_text">
                <a href="https://plus.miui.com/" target="_blank">MIUI+</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.footer{
    height: 150px;
}
.footer_box{
    width: 100%;
    height: 10vh;
    line-height: 8vh;
    margin-bottom: 2%;
    padding-left: 2%;
    font-size: 16px;
    .footer_box_text a{
        // background-color: lightgray;
        float: left;
        width: 6%;
        text-align: center;
        margin-left: 5%;
        text-decoration: none;
        color: gray;
    }
    .footer_box_text a:hover{
        color: #ff6700;
    }
}
</style>