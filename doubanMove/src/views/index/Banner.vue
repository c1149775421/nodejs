<template>
  <div class="banner">
		<a href="javascript:;"><img src="@/assets/images/banner1.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/banner2.jpg" /></a>
	</div>
</template>

<script>
export default {
  name: 'banner',
	mounted: function(){
		var len = $(".banner").find("a");//获取广告图片
	var pos = 0;//定义变量值为0
	setInterval(function(){
		len.eq(pos).hide();//隐藏元素
    	pos++;//变量值加1
    	if(pos == len.length) pos=0;//变量值重新定义为0
    	len.eq(pos).show();//显示元素
	},3000);//每隔3秒钟切换元素
	}
}
</script>
