<template>
    <div id="nav">
	<div class="nav-logo"><a @click="show('container')">豆瓣电影</a></div>
	<div class="nav-items">
		<ul>
			<li><a href="javascript:;">影讯 & 购票</a></li>
			<li><a href="javascript:;">选电影</a></li>
			<li><a href="javascript:;">电视剧</a></li>
			<li><a href="javascript:;">排行榜</a></li>
			<li><a href="javascript:;">分类</a></li>
			<li><a href="javascript:;">影评</a></li>
			<li><a href="javascript:;">2018年度榜单</a></li>
		</ul>
	</div>
</div>
</template>
<script>
	export default {
		methods: {
			show: function (value) {
				this.$router.push({name:value});
			}
		}
	}
</script>
