<template>
  <div class="home">
    <div class="title">
      <div class="logo">
          <a href="https://mi.com" target="_blank"><img src="@/assets/img/Logo/mi.png" /></a>
      </div>
      <h1>51购商城</h1>
    </div>
 
    <div class="tab">
        <div class="tab_menu">
            <Menu/>
        </div>
        <div class="tab_login">
            <Login/>
            <div class="tab_register">
                <Register/>
            </div>
        </div>
    </div>

    <div class="top">
      <div class="all_left">
          <Left/>
      </div>
      
      <div class="autoimg">
          <AutoImg/>
      </div>
    </div>
    
    <div class="commodityBox">
        <CommodityBox/>
    </div>

    <div class="commodityImg">
        <CommodityImg/>
    </div>
    
    <div>
        <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/tab/menuData.vue'
import Login from '@/components/tab/login.vue'
import Register from '@/components/tab/register.vue'
import CommodityBox from '@/components/commodity/commodityBoxData.vue'
import CommodityImg from '@/components/commodity/commodityImgData.vue'
import Footer from '@/components/footer/footer.vue'
import AutoImg from '@/components/top/AutoImg.vue'
import Left from '@/components/top/LeftData.vue'
export default {
  name: 'Home',
  components: {
    Menu,
    Login,
    Register,
    CommodityBox,
    CommodityImg,
    Footer,
    AutoImg,
    Left
  }
}
</script>

<style scoped lang="scss">
.home{
  margin: -25px;
  background-color: lightgray;
  overflow-x: hidden;
}
.logo img{
  position: absolute;
  top: 0.8%;
  left: 7.5%;
  width: auto;
  height: 50px;
}
.title{
  text-align: center;
  line-height: 3vh;
  padding-top: 1%;
  
}
.tab{
  // padding-left: 1vw;
  background-color: #333;
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  div{
    float: left;
  }
  .tab_menu{
    padding-left: 3vw;
  }
  .tab_login{
    padding-left: 80vw;
  }
  .tab_register{
    padding-left: 1vw;
  }
}
</style>
