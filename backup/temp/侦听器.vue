<template>
  <div id="app">
	<input type="text" v-model="inputvalue">
	<h1>{{ inputvalue }}</h1>
	
	<hr>
	数字:<input type="text" v-model="number">
	<h1>{{ number }}</h1>
	
  </div>
</template>

<script>
	export default{
		data(){
			return{
				inputvalue:'您好，vue',
				number:1
			}
		},
		methods:{
		
			
		},
		computed:{
		
		},
		watch:{
			inputvalue(newval,oldval){
				console.log(newval,oldval)
			},
			number(newval,oldval){
				console.log(newval,oldval);
				if(isNaN(newval) || newval==0){
					this.number=oldval;
				}
			}
			
		}
	}
</script>


<style lang="scss">


</style>
