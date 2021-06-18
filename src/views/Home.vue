<template>
    <div class="container-fluid" style="margin:0; padding:0;">
        <Menu />
        <Logo />
        <LeftTab />
        <Scroll />
        <Footer />
    </div>
</template>

<script>
import Menu from '@/components/tab/menuData.vue'
import Logo from '@/components/tab/logo.vue'
import LeftTab from '@/components/left/LeftTabData.vue'
import Scroll from '@/components/scroll/Scroll.vue'
import Footer from '@/components/footer/footer.vue'
// import Login from '@/components/tab/login.vue'
// import Register from '@/components/tab/register.vue'
// import CommodityBox from '@/components/commodity/commodityBoxData.vue'
// import CommodityImg from '@/components/commodity/commodityImgData.vue'
// import AutoImg from '@/components/top/AutoImg.vue'
// import Left from '@/components/top/LeftData.vue'
export default {
  name: 'Home',
  components: {
    Menu,
    Logo,
    LeftTab,
    Scroll,
    Footer,
    // Login,
    // Register,
    // CommodityBox,
    // CommodityImg,
    // Footer,
    // AutoImg,
    // Left
  }
}
</script>

<style scoped lang="scss">
</style>
