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
					shorthand : 'cmdsj',
					imgurl : require('@/assets/images/9.jpg'),
					name : '楚门的世界'
				},{
					shorthand : 'dmkj',
					imgurl : require('@/assets/images/10.jpg'),
					name : '盗梦空间'
				},{
					shorthand : 'fczlm',
					imgurl : require('@/assets/images/12.jpg'),
					name : '复仇者联盟'
				},{
					shorthand : 'hxjy',
					imgurl : require('@/assets/images/13.jpg'),
					name : '火星救援'
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
