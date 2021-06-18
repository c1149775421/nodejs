<template>
  <div class="introduceMain">
    <div class="mr-tabs" data-mr-tabs>
      <ul class="mr-avg-sm-3 mr-tabs-nav mr-nav mr-nav-tabs">
        <li id="infoTitle" :class="{'mr-active':current=='Details'}">
			<a @click="current='Details'">
            <span class="index-needs-dt-txt">宝贝详情</span></a>
        </li>

        <li id="commentTitle" :class="{'mr-active':current=='Comment'}">
 			<a @click="current='Comment'">
            <span class="index-needs-dt-txt">全部评价</span></a>
        </li>

        <li id="youLikeTitle" :class="{'mr-active':current=='Like'}">
			<a @click="current='Like'">
            <span class="index-needs-dt-txt">猜你喜欢</span></a>
        </li>
      </ul>
      <div class="mr-tabs-bd">
        <!-- 宝贝详情组件 -->
		<component :is="current"></component>
      </div>
    </div>
    <div class="clear"></div>

    <div class="footer" id="footer1">
      <div class="footer-hd">
      <p>
      <a href="#">明日科技</a>
      <b>|</b>
      <a href="javascript:void(0)" @click="show">商城首页</a>
      <b>|</b>
      <a href="javascript:void(0)">支付宝</a>
      <b>|</b>
      <a href="javascript:void(0)">物流</a>
      </p>
      </div>
   <div class="footer-bd">
     <p>
     <a href="javascript:void(0)">关于明日 </a>
     <a href="javascript:void(0)">合作伙伴 </a>	
     <a href="javascript:void(0)">联系我们 </a>
     <a href="javascript:void(0)">网站地图 </a>
     <a href="javascript:void(0)">© 2016-2025 mingrisoft.com 版权所有</a>
     </p>
   </div>
   </div> 
  </div>
</template>

<script>
import Details from './Details.vue'
import Comment from './Comment.vue'
import Like from './Like.vue'
export default {
	components:{
		Details,
		Comment,
		Like
	},
	data(){
		return{
			current:'Details'
		}
	},
	methods:{
		show(){
			this.$router.push({name:'Index'});//跳转到主页
		}
	}
}
</script>

<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>
<style scoped>
	.introduceMain{
	    max-width:1200px;
		width: 80%;
		float: left;
	}
	ul.mr-tabs-nav.mr-nav.mr-nav-tabs{
	    left: auto;
	    right: auto;
	    width: 960px;
		background: #f5f5f5;
	}
	.mr-nav:after{
		clear: both;
	    content: " ";
	    display: table;
	}
	.mr-tabs-nav li {
	    max-width: 216px;
	    height: 36px;
	    font-size: 16px;
	    line-height: 36px;
		text-align: center;
	}
	.mr-nav-tabs>li {
	    float: left;
	    margin-bottom: -1px;
	}

	.mr-nav>li {
	    position: relative;
	    display: block;
	}
	.mr-avg-sm-3>li {
	    width: 33.33333333%;
	}
	.mr-nav-tabs>li.mr-active{
	    border-top: 2px solid #f03726;
	    border-bottom: none;
	}
	.mr-nav-tabs>li.mr-active span {
	    color: #e4393c;
	    font-size: 16px;
	}
	
	.mr-nav-tabs>li span {
	    font-size: 16px;
	    padding: 5px 15px;
		font-weight: 700;
	}
	#footer1{width:960px;margin-top:30px;}
</style>