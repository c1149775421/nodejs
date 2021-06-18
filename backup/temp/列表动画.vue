<template>
  <div id="app">
	
	<input type="text" v-model="username">
	<button @click="add">添加</button>
		
	<p>{{ arrs }}</p>
		
	<ul>
		<transition-group name="fade">
		<li v-for="(item,index) in  arrs" :key="index">
			{{ item }} <button @click="del(index)">删除</button>
		</li>
		</transition-group>
	</ul>	
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				arrs:[]
			}
		},
		methods:{
			add(){
				this.arrs.push(this.username);
				this.username='';
			},
			del(index){
				this.arrs.splice(index,1)
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
