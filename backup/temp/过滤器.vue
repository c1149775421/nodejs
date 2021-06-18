<template>
  <div id="app">
	
	   <p v-for="(item,index) in arrs"  :key="index">{{ getstr(item,15)   }}</p><!--方法-->
		<hr>
	    <p v-for="(item,index) in arrs"  :key="index">{{ mygetstr(item,15)   }}</p>  <!--计算属性-->
		<hr>
		<p v-for="(item,index) in arrs"  :key="index">{{ item | fgetetr(5) }}</p>  <!--过滤器-->
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				arrs:[
					
					'从上学到毕业参加工作，正常情况下，一个本科生，9年义务教育，3年高中，4年大学，毕业之后在24岁左右。',
					'然后女性55岁退休，男性60岁退休，加之找工作的磕磕碰碰，真正工作的时间极其有限。',
					'今年全国人大代表张红伟建议调整中小学教育学制，小学由六年制改为五年制，高中由三年制改为两年制；',
					'高职和普通大专实行开放教育；及推行“十年义务教育”，即小学5年+初中3年+高中2年的学制。',
					'张红伟表示，学制太长推迟了就业时间，婚育时间明显延迟，老龄化问题显著等。'
					
				]
			}
		},
		methods:{
			getstr(str,len){
				if(str.length>len){
					
					return str.substr(0,len)+"..."
					
				}else{
					return str;
				}
				
				
				
			}
			
		},
		computed:{
			mygetstr(){
				
				
				return function(str,len){
					
					if(str.length>len){
						
						return str.substr(0,len)+"..."
						
					}else{
						return str;
					}		
					
				}
			
			}
			
		},
	    filters:{
			fgetetr(str,len){
				if(str.length>len){
					
					return str.substr(0,len)+"..."
					
				}else{
					return str;
				}
				
				
				
			}
			
		}
	}
</script>


<style lang="scss">
.box{width: 200px;height: 200px;background: yellow;}
.out{width: 400px;height: 400px;background: red;}
</style>
