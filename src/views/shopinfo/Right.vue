<template>
	<div class="item-inform" >
	    <div class="clearfixRight" style="margin-left:90px;">
	      <!--规格属性-->
	      <!--名称-->
	      <div class="tb-detail-hd">
	        <h1>
	        华为 荣耀 畅玩4X 白色 移动4G手机
	        </h1>
	      </div>
	      <div class="tb-detail-list">
	        <!--价格-->
	        <div class="tb-detail-price">
	          <li class="price iteminfo_price">
	            <dt>促销价</dt>
	            <dd><em>¥</em><b class="sys_item_price">¥499.00</b></dd>
	          </li>
	          <li class="price iteminfo_mktprice">
	            <dt>原价</dt>
	            <dd><em>¥</em><b class="sys_item_mktprice">599.00</b></dd>
	          </li>
	          <div class="clear"></div>
	        </div>
	
	        <!--地址-->
	        <dl class="iteminfo_parameter freight">
	          <dt>配送至</dt>
	          <div class="iteminfo_freprice">
	            <div class="mr-form-content address">
	              <select data-mr-selected>
	                <option value="a">浙江省</option>
	                <option value="b">吉林省</option>
	              </select>
	              <select data-mr-selected>
	                <option value="a">温州市</option>
	                <option value="b">长春市</option>
	              </select>
	              <select data-mr-selected>
	                <option value="a">瑞安区</option>
	                <option value="b">南关区</option>
	              </select>
	            </div>
	            <div class="pay-logis">
	              快递<b class="sys_item_freprice">10</b>元
	            </div>
	          </div>
	        </dl>
	        <div class="clear"></div>
	
	        <!--销量-->
	        <ul class="tm-ind-panel">
	          <li class="tm-ind-item tm-ind-sellCount canClick">
	            <div class="tm-indcon"><span class="tm-label">月销量</span><span class="tm-count">1015</span></div>
	          </li>
	          <li class="tm-ind-item tm-ind-sumCount canClick">
	            <div class="tm-indcon"><span class="tm-label">累计销量</span><span class="tm-count">6015</span></div>
	          </li>
	          <li class="tm-ind-item tm-ind-reviewCount canClick tm-line3">
	            <div class="tm-indcon"><span class="tm-label">累计评价</span><span class="tm-count">640</span></div>
	          </li>
	        </ul>
	        <div class="clear"></div>
	
	        <!--各种规格-->
	        <dl class="iteminfo_parameter sys_item_specpara">
	          <dt class="theme-login">
	            <div class="cart-title">可选规格<span class="mr-icon-angle-right"></span></div>
	          </dt>
	          <dd>
	            <!--操作页面-->
	            <div class="theme-popover-mask"></div>
	
	            <div class="theme-popover">
	              <div class="theme-span"></div>
	              <div class="theme-poptit">
	                <a href="javascript:;" title="关闭" class="close">×</a>
	              </div>
	              <div class="theme-popbod dform">
	                <form class="theme-signin" name="loginform" action="" method="post">
	
	                  <div class="theme-signin-left">
	
	                    <div class="theme-options">
	                      <div class="cart-title">颜色</div>
	                      <ul>
	                        <li class="sku-line selected">荣耀金<i></i></li>
	                        <li class="sku-line">冰河银<i></i></li>
	                        <li class="sku-line">雅典灰<i></i></li>
	                      </ul>
	                    </div>
	                    <div class="theme-options">
	                      <div class="cart-title">套装</div>
	                      <ul>
	                        <li class="sku-line selected">保护套装<i></i></li>
	                        <li class="sku-line">原厂电源<i></i></li>
	                        <li class="sku-line">存储套装<i></i></li>
	                      </ul>
	                    </div>
	                    <div class="theme-options">
	                      <div class="cart-title number">数量</div>
	          <dd>
	            <input id="min" class="mr-btn mr-btn-default" @click="reduce" type="button" value="-"/>
	            <input id="text_box" type="text" value="1" v-model="number" style="width:30px;"/>
	            <input id="add" class="mr-btn mr-btn-default" @click="add" type="button" value="+"/>
	            <span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
	          </dd>
	
	      </div>
	      <div class="clear"></div>
	
	      <div class="btn-op">
	        <div class="btn mr-btn mr-btn-warning">确认</div>
	        <div class="btn close mr-btn mr-btn-warning">取消</div>
	      </div>
	    </div>
	    <div class="theme-signin-right">
	      <div class="img-info">
	        <img src=""/>
	      </div>
	      <div class="text-info">
	        <span class="J_Price price-now">¥39.00</span>
	        <span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
	      </div>
	    </div>
	    </form>
	  </div>
	</div>
	
	</dd>
	</dl>
	<div class="clear"></div>
	<!--活动	-->
	<div class="shopPromotion gold">
	  <div class="hot">
	    <dt class="tb-metatit">店铺优惠</dt>
	    <div class="gold-list">
	      <p>购物满2件打8折，满3件7折</p>
	    </div>
	  </div>
	  <div class="clear"></div>
	</div>
	</div>
	
	<div class="pay">
	  <div class="pay-opt">
	    <a href="index.html"><span class="mr-icon-home mr-icon-fw">首页</span></a>
	    <a><span class="mr-icon-heart mr-icon-fw">收藏</span></a>
	
	  </div>
	  <li>
	    <div class="clearfix tb-btn tb-btn-buy theme-login">
	      <a id="LikBuy" title="点此按钮到下一步确认购买信息" @click="show">立即购买</a>
	    </div>
	  </li>
	  <li>
	    <div class="clearfix tb-btn tb-btn-basket theme-login">
	      <a id="LikBasket" title="加入购物车" @click="show"><i></i>加入购物车</a>
	    </div>
	  </li>
	</div>
	
	</div>
	
	<div class="clear"></div>
	
	</div>
</template>

<script>
           export default{
	   data(){
	           return{
		  number: 1//商品数量
	           }
                    }
            }
</script>

<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>
<style scoped>

</style>
