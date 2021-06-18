<template>
	<div class="billboard">
		<div class="billboard-title"><h2>一周口碑榜</h2></div>
		<div class="billboard-content">
			<ul>
				<li v-for="(item,index) in data">
					<span class="order">{{index+1}}</span>
					<span class="title">
						<a @click="show(item.shorthand)">{{item.name}}</a>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				data : [{
					shorthand : 'fczlm',
					name : '复仇者联盟'
				},{
					shorthand : 'thwj',
					name : '头号玩家'
				},{
					shorthand : 'mnyys',
					name : '美女与野兽'
				},{
					shorthand : 'yhhwd',
					name : '银河护卫队'
				},{
					shorthand : 'dmkj',
					name : '盗梦空间'
				},{
					shorthand : 'fwhyj',
					name : '飞屋环游记'
				},{
					shorthand : 'hxjy',
					name : '火星救援'
				},{
					shorthand : 'jqrzdy',
					name : '机器人总动员'
				},{
					shorthand : 'cmdsj',
					name : '楚门的世界'
				},{
					shorthand : 'fkdwc',
					name : '疯狂动物城'
				}]
			}
		},
		methods:{
			show:function (value) {
				this.$router.push({name:value});
			}
		}
	}
</script>
