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
					shorthand : 'yhhwd',
					imgurl : require('@/assets/images/5.jpg'),
					name : '银河护卫队'
				},{
					shorthand : 'jtmdt',
					imgurl : require('@/assets/images/8.jpg'),
					name : '惊天魔盗团'
				},{
					shorthand : 'cmdsj',
					imgurl : require('@/assets/images/9.jpg'),
					name : '楚门的世界'
				},{
					shorthand : 'dmkj',
					imgurl : require('@/assets/images/10.jpg'),
					name : '盗梦空间'
				},{
					shorthand : 'tqyj',
					imgurl : require('@/assets/images/15.jpg'),
					name : '通勤营救'
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
