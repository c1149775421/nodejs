<template>
  <div id="app">
	
	<input type="text" v-model="inputvalue">
	<p>{{inputvalue}}</p>
	<textarea name="" id="" cols="30" rows="10" v-model="textvalue"></textarea>
    <p>{{textvalue}}</p>
  
  <input type="checkbox" v-model="checked" id="ty"><label for="ty">点击同意表示您同意商城的<<服务协议>></label>
  <p>{{checked}}</p>
  爱好：
  <input type="checkbox" value="看书" v-model="checks" id="book"><label for="book">看书</label>
  <input type="checkbox" value="听音乐" v-model="checks" id="music"><label for="music">听音乐</label>
  <input type="checkbox" value="打篮球" v-model="checks" id="basketball"><label for="basketball">打篮球</label>
  <input type="checkbox" value="玩游戏" v-model="checks" id="game"><label for="game">玩游戏</label>
   <p>{{checks}}</p>
   
   性别：
   <input type="radio" value="男" v-model="radio" id="boy"><label for="boy">男</label>
   <input type="radio" value="女" v-model="radio" id="gril"><label for="gril">女</label>
   <input type="radio" value="保密" v-model="radio" id="baomi"><label for="baomi">保密</label>
    <p>{{radio}}</p>
	
	学历：
	<select name="" id="" v-model="select">
		<option value="">--请选择--</option>
		<option value="大专">大专</option>
		<option value="本科">本科</option>
		<option value="研究生">研究生</option>
		<option value="博士">博士</option>
	</select>
	<p>{{select}}</p>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				inputvalue:'',
				textvalue:'',
				checked:false,
				checks:[],
				radio:'保密',
				select:''
			}
			
		},
		methods:{
				
			
				
		},
		computed:{
			
		}
	}
</script>


<style lang="scss">

</style>
