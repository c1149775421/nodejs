<template>
  <div id="app">
	
	<div class="out">
		{{num}}
	</div>
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				num:1,
				timer:''
			}
		},
		methods:{
		
			
		},
		computed:{
		
		},
		mounted(){
			var that=this;
			that.timer=setInterval(function(){
				if(that.num<10){
					that.num++;
				}else{
					that.num=1;
				}
			},1000) ;
			
			// clearInterval(that.timer) 
			clearTimeout(that.timer) 	
			
			// setTimeout(function(){
			// 	if(that.num<10){
			// 		that.num++;
			// 	}else{
			// 		that.num=1;
			// 	}
			// },1000)
		}
	}
</script>


<style lang="scss">
.out{width: 100px;height: 100px; line-height: 100px; border:5px solid red; font-size:50px;text-align: center;
margin:100px auto;}
</style>
