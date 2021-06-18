<template>
  <div id="app">
    <h1>{{str}}</h1>
	<h1 v-text="str"></h1>
	<h1 v-html="str"></h1>
	<hr>
	<h1 v-text="str2"></h1>
	<h1 v-html="str2"></h1>
	
  </div>
</template>

<script>
	export default{
		data(){
			return{
				str:'这是一个字符串',
				str2:'<input type="text">'
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
