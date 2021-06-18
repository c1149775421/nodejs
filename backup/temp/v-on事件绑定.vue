<template>
  <div id="app">
		<button @click="btnClick()">这是一个按钮</button>
		<div @mouseover="divClick()">这是一个div</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			btnClick(){
				alert('欢迎学习vue')
			},
			divClick(){
				alert('欢迎再次学习vue')
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
