<template>
    <div id="info">
        <b class="line"></b>  
        <ol class="mr-breadcrumb mr-breadcrumb-slash">
            <li><a href="javascript:void(0)">首页</a></li>
            <li><a href="javascript:void(0)">分类</a></li>
            <li class="mr-active">内容</li>
        </ol>
        <div class="clear"></div>

        <div style="width:1200px;margin:0 auto;">
            <Enlarge />
            <Right />
        </div>
       <div class="clear"></div>

       <div>
           <Discount />
        </div>

       <div style="width:1200px;margin:20px auto;">
            <Browse />
            <Introduce />
        </div>

    </div>
</template>

<script>
import Enlarge from './Enlarge.vue'
import Right from './Right.vue'
import Discount from './Discount.vue'
import Browse from './Browse.vue'
import Introduce from './Introduce.vue'
export default {
    components:{
        Enlarge,
        Right,
        Discount,
        Browse,
        Introduce
    }
}
</script>

<style scoped>

</style>