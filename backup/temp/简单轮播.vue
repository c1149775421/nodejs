<template>
  <div id="app">
		<div class="out">
			<div class="btn btnleft" @click="btnleft(num)">&lt;</div>
			<img :src="imgurl[num]">
			<div class="btn btnright" @click="btnright(num)">&gt;</div>
		</div>
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				imgurl:[
					require('@/assets/pic1.webp'),
					require('@/assets/pic2.webp'),
					require('@/assets/pic3.webp'),
					require('@/assets/pic4.webp'),
					require('@/assets/pic5.webp')	
				],
				num:0
				
			}
			
		},
		methods:{
				
			btnright(num){
				if(this.num==this.imgurl.length-1){
					this.num=0
				}else{
					this.num++
				}
				
			},
			btnleft(num){
				if(this.num==0){
					this.num=this.imgurl.length-1
				}else{
					this.num--
				}
				
			}	
				
		},
		computed:{
			
		}
	}
</script>


<style lang="scss">
.out{width: 590px;height: 470px;border:1px solid red;margin:100px auto; position:relative}
.btn{position: absolute;top:200px; font-size:30px; color:#fff; background: rgba(0,0,0,0.3);width:30px;height:60px;
line-height: 60px; text-align: center;}
.btnleft{left:0}
.btnright{right:0}
</style>
