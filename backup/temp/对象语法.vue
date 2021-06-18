<template>
  <div id="app">
		<h1 :class="{active:isActive,size:issize}"  class="">信息工程学院</h1>
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				isActive:true,
				issize:true
			}
			
		},
		methods:{
				
			
				
		},
		computed:{
			
		}
	}
</script>


<style lang="scss">
.active{color:red;}
.size{font-size:50px;}
</style>
