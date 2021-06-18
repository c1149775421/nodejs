<template>
  <div id="app">
		<input type="button" :value="text" @click="toggle()">
		
		<transition mode="out-in"  enter-active-class="animated rubberBand" leave-active-class="animated rollOut" >
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
// @import url('./assets/css/animate.min.css')

 @import url('~@/assets/css/animate.min.css')
</style>
