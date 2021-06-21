<template>
  <div id="shopcart">
	<div class="title">
		<span class="check">选择</span>
		<span class="name">商品信息</span>
		<span class="unitPrice">单价</span>
		<span class="num">数量</span>
		<span class="unitTotalPrice">金额</span>
		<span class="operation">操作</span>
	</div>
	<div class="clear"></div>
	<Cart />

  	<Bottom />
  </div>
</template>

<script>
import Cart from './Cart.vue'
import Bottom from './Bottom.vue'
export default {
    components:{
		Cart,
        Bottom
    },
}
</script>

<style src="@/assets/css/style.css" scoped></style>
<style>
	@import "~@/assets/css/basic.css";
	@import "~@/assets/css/iconfont.css";
	#shopcart{
	    margin: 0 auto;
	    width: 1000px;
	    font-family: 微软雅黑;
	    font-size: 14px;
	}
	#shopcart .title{
	    height: 50px;
	    line-height: 50px;
	    border: 1px solid #ccc;
	    margin-bottom: 10px;
	}
</style>