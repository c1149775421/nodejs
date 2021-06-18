<template>
  <div id="app">
    <input v-bind:type="inputtype" :value="inputvalue">
	<img :src="imgsrc">
  </div>
</template>

<script>
	export default{
		data(){
			return{
				inputvalue:'这是一个inputValue的值',
				inputtype:'password',
				imgsrc:require('@/assets/logo.png')
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
</style>
