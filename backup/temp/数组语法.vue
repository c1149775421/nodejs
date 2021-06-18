<template>
  <div id="app">
		<h1 :class="[isActive,issize]"  class="">信息工程学院</h1>
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				isActive:'active',
				issize:'size'
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
