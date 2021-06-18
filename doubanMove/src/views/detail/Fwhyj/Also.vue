<template>
  <div class="also-like">
			<span class="title">喜欢这部电影的人也喜欢 · · · · · ·</span>
			<div class="like-film-list">
				<ul>
					<li v-for="item in data">
						<a @click="show(item.shorthand)"><img :src="item.imgurl" :title="item.name"></a>
						<p><a @click="show(item.shorthand)">{{item.name}}</a></p>
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
					shorthand : 'thwj',
					imgurl : require('@/assets/images/2.jpg'),
					name : '头号玩家'
				},{
					shorthand : 'yhhwd',
					imgurl : require('@/assets/images/5.jpg'),
					name : '银河护卫队'
				},{
					shorthand : 'crzdy2',
					imgurl : require('@/assets/images/6.jpg'),
					name : '超人总动员2'
				},{
					shorthand : 'jqrzdy',
					imgurl : require('@/assets/images/7.jpg'),
					name : '机器人总动员'
				},{
					shorthand : 'fkdwc',
					imgurl : require('@/assets/images/11.jpg'),
					name : '疯狂动物城'
				}]
			}
		},
		methods: {
			show: function (value) {
				this.$router.push({name:value});
			}
		}
	}
</script>
