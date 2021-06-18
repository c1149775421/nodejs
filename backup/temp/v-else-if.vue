<template>
  <div id="app">
		<h1 v-if="day==5">今天是周五</h1>
	    <h1 v-else-if="day==2">今天是周二</h1>
		<h1 v-else-if="day==1">今天是周一</h1>
		<h1 v-else-if="day==3">今天是周三</h1>
		<h1 v-else-if="day==4">今天是周二</h1>
		<h1 v-else-if="day==6">今天是周六</h1>
		<h1 v-else-if="day==7">今天是周天</h1>
		<h1 v-else>对不起，数据格式错误</h1>
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
