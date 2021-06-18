<template>
  <div id="app">
		
		<!-- <div class="box"></div> -->
		
		<img src="@/assets/pic1.webp">
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>





<style lang="scss">
.box{width: 200px;height: 200px;background: #ff2818;margin:100px auto; transition:width 3s ease .5s}
.box:hover{width:400px;}

img{width: 590px;height: 470px;transition:all 3s ease .5s;}
img:hover{width:790px;height:670px;}
</style>
