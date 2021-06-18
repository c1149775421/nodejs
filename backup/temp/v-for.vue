<template>
  <div id="app">
		<ul v-if="color.length>0">
			<li v-for="item in color" :key="item">{{item}}</li>
			<li v-for="(item,index) in color" :key="index">{{index}} {{item}} </li>
		</ul>
		
		<h1 v-else>对不起，暂无数据</h1>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				color:['红色','绿色','蓝色'],
				day:7
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
