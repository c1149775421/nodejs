<template>
  <div id="app">
		<input type="button" :value="text" @click="toggle()">
		
		<transition name="fade" mode="out-in">
		<div v-if="show" key="1">
	    <img src="@/assets/pic1.webp">
		</div>	
		<div v-else   key="2">
		<img src="@/assets/pic2.webp">
		</div>
		</transition>
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				text:'隐藏图片',
				show:true
			}
		},
		methods:{
			toggle(){
				this.text=='隐藏图片'? this.text='显示图片'   : this.text='隐藏图片',
				this.show=!this.show
			}
		}
	}
</script>





<style lang="scss">
p{color:red;}
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
