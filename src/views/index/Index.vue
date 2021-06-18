<template>
  <div> 
      <Nav />
      <Banner />
      <Menu />
      <Recomment />
      <Activity />
      <Phone />
      <Computer />
      <Footer />
  </div>
</template>

<script>
import Nav from '@/views/index/Nav.vue'
import Banner from '@/views/index/Banner.vue'
import Menu from '@/views/index/Menu.vue'
import Recomment from '@/components/Recommend.vue'
import Activity from '@/components/Activity.vue'
import Phone from '@/views/index/Phone.vue'
import Computer from '@/views/index/Computer.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Nav,
        Menu,
        Banner,
        Recomment,
        Activity,
        Phone,
        Computer,
        Footer
    }
}
</script>

<style lang="scss">
    @import "~@/assets/css/basic.css";
    @import "~@/assets/css/iconfont.css";
</style>