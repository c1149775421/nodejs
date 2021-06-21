<template>
  <!--支付方式-->
  <div class="logistics">
    <h3>选择支付方式</h3>
    <ul class="pay-list">
      <li class="pay card"><img src="@/assets/images/wangyin.jpg">银联<span></span></li>
      <li class="pay qq"><img src="@/assets/images/weizhifu.jpg">微信<span></span></li>
      <li class="pay taobao"><img src="@/assets/images/zhifubao.jpg">支付宝<span></span></li>
    </ul>
  </div>
</template>

<style src="@/assets/css/cartstyle.css" scoped></style>
<style src="@/assets/css/jsstyle.css" scoped></style>
<style scoped>
   .logistics{
	 height:50px;
   }
   .logistics .pay-list li{
       float: left;
       cursor: pointer;
	   height:50px;
	   line-height: 50px;
   } 
   .logistics li{
   	padding:0;
   	margin:5px 0;
   	font-size:14px;
   }
   .logistics li img{
	   float:left;   
   }   
   .concent h3, .logistics h3{
       border-bottom: 2px solid #f1f1f1;
       margin-top: 10px;
   }	
   h3{
       font-size: 14px;
       font-weight: 700;
   }
</style>
