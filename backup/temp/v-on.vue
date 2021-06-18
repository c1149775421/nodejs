<template>
  <div id="app">
		<h1>{{str}}</h1>
		<button @click="change()">改变按钮</button>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				str:'这是一个字符串'
			}
		},
		methods:{
			change(){
				this.str="这是一个改变的字符串"
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
