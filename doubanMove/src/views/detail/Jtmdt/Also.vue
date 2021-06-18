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
					shorthand : 'fwhyj',
					imgurl : require('@/assets/images/3.jpg'),
					name : '飞屋环游记'
				},{
					shorthand : 'mtyj',
					imgurl : require('@/assets/images/4.jpg'),
					name : '摩天营救'
				},{
					shorthand : 'yhhwd',
					imgurl : require('@/assets/images/5.jpg'),
					name : '银河护卫队'
				},{
					shorthand : 'fczlm',
					imgurl : require('@/assets/images/12.jpg'),
					name : '复仇者联盟'
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
