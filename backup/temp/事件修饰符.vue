<template>
  <div id="app">
	
	<div class="out" @click="outclick()">	
		<div class="box" @click.stop="boxclick()"></div>
	</div>	
		
	<form action="http://www.baidu.com">
		<input type="submit" value="提交"  @click.prevent="formclick()">
	</form>	
		
	
	<a href="http://www.jd.com" @click.prevent="linkclick()">京东网站</a>
	
	<button @click.once="btnclick()">点击按钮</button>
	
	<input type="text" @keyup.enter="inputclick()">	
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			boxclick(){
				alert('你点击了box')
			},
			outclick(){
				alert('你点击了out')
			},
			formclick(){
				alert('你点击了form')
			},
			linkclick(){
				alert('你点击了京东网站')
			},
			btnclick(){
				alert('你点击了按钮')
			},
			inputclick(){
				alert('你点击了input')
			}
			
		}
	}
</script>


<style lang="scss">
.box{width: 200px;height: 200px;background: yellow;}
.out{width: 400px;height: 400px;background: red;}
</style>
