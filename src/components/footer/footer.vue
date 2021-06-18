<template>
    <div class="container">
        <div class="navbar navbar-fixed-bottom dropup navbar-default">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                关于 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" id="hz">
                <li class="text-center"><a href="javascript:void(0)" @click="aboutWe">关于我们</a></li>
                <li class="text-center"><a href="javascript:void(0)" @click="about">关于本站</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        aboutWe(){
            this.$router.push("/aboutWe")
        }
    }
}
</script>

<style scoped lang="scss">
    .navbar{
        // background-color: rgba(105, 101, 101, 0.6);
        border-top: 2px solid #ccc;
        padding: 12px;
        box-shadow: 0 -4px 8px #ccc;
    }
    #hz{
        box-shadow: 2px -2px 10px #ccc;
        border: 1px solid #ccc;
        padding: 20px 0 5px 0;
        li{
            margin: 0 0 5px 0;
            font-weight: bold;
        }
    }
</style>