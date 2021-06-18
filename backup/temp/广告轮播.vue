<template>
  <div id="app">
	<div id="box">
		<ul class="list">
			<transition-group name="fade">
			<li v-for="(item,i) in banners"  :key="i"	v-if="(i+1)==index">
				<img :src="item">
			</li>
			</transition-group>
		</ul>
		
		<ul class="count">
			<li @mouseover="change(num)" v-for="num in 4" :class="{current:num==index}">
				{{num}}		
			</li>
		</ul>
		
	</div>

		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				banners:[
					require('@/assets/images/ad1.png'),
					require('@/assets/images/ad2.png'),
					require('@/assets/images/ad3.png'),
					require('@/assets/images/ad4.png')			
				],
				index:1,
				timer:''   ,//计数器
				flag:true
			}
		},
		methods:{
			next(){
				this.index=this.index+1==5?1:this.index+1;
			},
			change(num){
				
				if(this.flag){
					
				this.flag=false;
				
				setTimeout(()=>{
					this.flag=true
				},1000);
					
				this.index=num;
				
				clearInterval(this.timer);
				
				this.timer=setInterval(this.next,3000);
				}
			}
			
		},
		computed:{
		
		},
		mounted(){
			this.timer=setInterval(this.next,3000)
		}
	}
</script>


<style lang="scss">
#box ul li{list-style: none;}
#box{width:100%;height: 455px;background: #ccc;border-radius: 5px; position:relative;}
#box .list{ position:relative;height:455px;}
#box .list li{ position:absolute;left:0;top:0;right:0;bottom:0;width:50%;height:50%;margin:auto;margin-top:0;}
#box img{width:100%;}
#box .count{position:absolute;left:650px;bottom:40px;}
#box .count li{color:#fff;background-color: #6D6B6A;width: 20px;height: 20px;border-radius: 20px; text-align:center;
float:left;margin-right:5px; opacity:0.7;line-height: 20px;}
#box .count li.current{color:#fff;font-weight: bold; background: #f60;opacity:0.7; 
transition:all 2s ease;}

.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
