<template>
  <div id="app">
		<h1 v-if="color.length>0">{{color}}</h1>
		<h1 v-else>对不起，暂无数据</h1>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				color:['红色','绿色','蓝色']
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
