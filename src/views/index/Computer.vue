<template>
  <!--电脑-->
  <div id="f2">
    <div class="mr-container ">
      <div class="shopTitle ">
        <h4>电脑</h4>
        <h3>新年换新机</h3>
        <div class="today-brands ">
         <a href="javascript:void(0)" v-for="item in brands" :key="item">{{item}}</a>
        </div>
        <span class="more ">
          <a href="javascript:void(0)">更多电脑<span class="iconfont" style="padding-left: 5px;">&#xe633;</span></a>
        </span>
      </div>
    </div>
    <div class="mr-g mr-g-fixed floodFive ">
      <div class="mr-u-sm-5 mr-u-md-3 text-one list">
        <div class="word">
         <a class="outer" href="javascript:void(0)" v-for="item in cores" :key="item">
           <span class="inner"><b class="text">{{item}}</b></span>
         </a>
        </div>
        <a href="javascript:void(0)">
          <img src="@/assets/images/computerArt.png" width="100px" height="170px"/>
          <div class="outer-con ">
            <div class="title ">
              致敬2016
            </div>
            <div class="sub-title ">
              新春大礼包
            </div>
          </div>
        </a>
        <div class="triangle-topright"></div>
      </div>
      <div class="mr-u-sm-7 mr-u-md-5 mr-u-lg-2 text-two">
        <div class="outer-con ">
          <div class="title ">
             惠普（HP）笔记本
          </div>
          <div class="sub-title ">
            ¥4999.00
          </div>
		  <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer1.jpg"/></a>
      </div>
      <div class="mr-u-md-2 mr-u-lg-2 text-three sug">
        <div class="outer-con ">
          <div class="title ">
           罗技蓝牙键盘
          </div>
          <div class="sub-title ">
            ¥179.90
          </div>
           <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer2.jpg"></a>
      </div>
      <div class="mr-u-md-2 mr-u-lg-2 text-three big">
        <div class="outer-con ">
          <div class="title ">
           米奇优盘
          </div>
          <div class="sub-title ">
             ¥39.90
          </div>
           <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer3.jpg"></a>
      </div>
      <div class="mr-u-sm-4 mr-u-md-5 mr-u-lg-4 text-five">
        <div class="outer-con ">
          <div class="title ">
             优派液晶显示器
          </div>
          <div class="sub-title ">
            ¥699.00
          </div>
          <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer4.jpg"></a>
      </div>
      <div class="mr-u-sm-4 mr-u-md-2 mr-u-lg-2 text-six">
        <div class="outer-con ">
          <div class="title ">
            联想笔记本
          </div>
          <div class="sub-title ">
            ¥6599.00
          </div>
          <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer5.jpg"></a>
      </div>
      <div class="mr-u-sm-4 mr-u-md-2 mr-u-lg-4 text-six big">
        <div class="outer-con ">
          <div class="title ">
             LG 航拍器
          </div>
          <div class="sub-title ">
             ¥699.00
          </div>
          <span class="iconfont seprate" style="font-size: 20px;">&#xe608;</span>
        </div>
        <a href="javascript:void(0)" @click="show"><img src="@/assets/images/computer6.jpg"></a>
      </div>
    </div>
    <div class="clear "></div>
  </div>
</template>

<script>
  export default {
    name: 'phone',
    data: function(){
      return {
        //电脑品牌数组
        brands: ['戴尔','清华同方','小米','联想','惠普','三星'],
        //电脑组件数组
        cores: ['CPU','显卡','机箱','键盘','鼠标','U盘'],
      }
    }
  }
</script>

<style scoped>
/*电脑*/
#f2 *{
   box-sizing: border-box;
}
#f2 {
    width:1200px;
    margin:0 auto;
    margin-top:20px;
}
#f2 .shopTitle{
    margin-bottom:0px;
}
#f2 .list {
    background: #ff9229;
}
#f2 .list .triangle-topright {
    width: 0;
    height: 0;
    border-top: 30px solid #d17b28;
    position: absolute;
    bottom: 0;
    border-left: 30px solid #fff;
}
</style>
