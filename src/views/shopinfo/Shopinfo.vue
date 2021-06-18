<template>
    <div>
        <Nav />
        <Info />
    </div>
</template>

<script>
import Nav from '../index/Nav.vue'
import Info from './Info.vue'
export default {
    components:{
        Info,
        Nav
    }
}
</script>

<style scoped>
    @import "~@/assets/css/basic.css";
    @import "~@/assets/css/iconfont.css";
    @import "~@/assets/css/shopinfo.css";
</style>