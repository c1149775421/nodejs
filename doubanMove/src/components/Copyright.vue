<template>
    <div>
	<div style="clear:both"></div>
<div id="bottom">
	<span class="copyright">@ 2001 - 2025 mingrisoft.com all rights reserved 吉林省明日科技有限公司</span>
	<span class="about">
		<ul>
			<li v-for="item in options">{{item}}</li>
		</ul>
	</span>
</div>
</div>
</template>
<script>
	export default {
		data : function () {
			return {
				options : ['关于明日','联系我们','免责声明','帮助中心','移动应用','明日广告','合作共赢']
			}
		}
	}
</script>
