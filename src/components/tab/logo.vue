<template>
  <div class="logo">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="http://119.29.142.221:8084/51shopping" target="blank">
                        <img alt="Brand" src="@/assets/img/Logo/05.jpg">
                    </a>
                </div>
                <div class="navbar-body">
                    <div class="navbar-brand btn-group" role="group" id="navbar_body">
                        <a class="btn btn-default">手机</a>
                        <a class="btn btn-default">电脑</a>
                        <a class="btn btn-default">电视</a>
                        <a class="btn btn-default">手机</a>
                        <a class="btn btn-default">电脑</a>
                        <a class="btn btn-default">电视</a>
                        <a class="btn btn-default">手机</a>
                        <a class="btn btn-default">电脑</a>
                        <a class="btn btn-default">电视</a>
                    </div>
                </div>
            </div>
        </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    img{
        width: 10%;
        margin-top: -14px;
    }
    #navbar_body{
        margin: 0 0 0 8px;
        padding: 8px 0 0 4px; 
        width: 900px;
        position: absolute;
        left: 390px;
        top: 0;
        right: 225px;
        bottom: 0;
        // background-color: aqua;
        a{
            width: 100px;
        }
    }
</style>