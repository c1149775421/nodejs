<template>
  <div id="app">
    <input type="text" v-model="username">
	<p>你输入的内容是：{{username}}</p>
	<p v-once>你输入的内容是：{{username}}</p>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				username:'vue'
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
