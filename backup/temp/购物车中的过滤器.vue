<template>
  <div id="app">
	
	<table align="center" v-if="list.length>0">
		<tr>
			<td>序号</td>
			<td>商品名称</td>
			<td>商品单价</td>
			<td>商品数量</td>
			<td>操作</td>
		</tr>
		
		<tr v-for="(item,index) in list" :key="index" :class="{even:(index+1)%2==0,odd:(index+1)%2!=0}" >
			<td>{{item.id}}</td>
			<td>{{item.name}}</td>
			<td>{{item.price | formatPrice}}</td>
			<td>
				<button @click="reduce(index)" :disabled="item.count==1">-</button>
				{{item.count}}
				<button @click="add(index)">+</button>
			</td>
			<td>
				<button @click="del(index)">删除</button>
			</td>
		</tr>
		
		<tr>
			<td colspan="5" style="text-align: right;">总价:{{ totalprice | formatPrice}}</td>
		</tr>
	</table>
	  
	 <div v-else>对不起，购物车暂无商品</div> 
		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						id:1,
						name:'羽毛球',
						price:200,
						count:1					
					},
					{
						id:2,
						name:'毛衣',
						price:120,
						count:2					
					},
					{
						id:3,
						name:'手机',
						price:1500,
						count:2					
					},
					{
						id:4,
						name:'鞋',
						price:200,
						count:1					
					}
				]
			}
		},
		methods:{
			add(index){
				this.list[index].count++
			},
			reduce(index){
				if(this.list[index].count==1) return;
				
				
				this.list[index].count--
			},
			del(index){
				this.list.splice(index,1)
			}
			
		},
		computed:{
			totalprice(){
				var total=0;
				//total=total+200*1+150*2+1500*2+200*1
				
			   for(var i=0;i<this.list.length;i++){            
					total+=this.list[i].price*this.list[i].count;	
				//total=total+this.list[i].price*this.list[i].count;	
			   }
			   
			   return total;
				
				
			}
		},
		filters:{
			formatPrice(value){
				return value.toFixed(2);
			}
		
		}
	}
</script>


<style lang="scss">
table{width: 600px;border:1px solid #ccc;border-collapse: collapse;}
td{border:1px solid #ccc;padding:10px; text-align: center;}
.even{background: #ccc;}
.odd{background:yellow;}
</style>
