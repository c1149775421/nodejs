<template>
  <div id="app">
	
	<h1>{{  strchange }}</h1>  <!--计算属性-->
	<h1>{{ mystrchange()  }}</h1>	<!--方法函数-->    <!--计算属性和方法区别：计算属性不要加(),方法需要加（）-->
		
		
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				str:'您好，vue'
			}
		},
		methods:{
			mystrchange(){
				return this.str.split('').reverse().join('')
			}
			
		},
		computed:{
			strchange(){
				return this.str.split('').reverse().join('')
			}
		}
	}
</script>


<style lang="scss">
.box{width: 200px;height: 200px;background: yellow;}
.out{width: 400px;height: 400px;background: red;}
</style>
