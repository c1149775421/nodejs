<template>
	<div class="hot-film-main">
		<div class="hot-film-list">
			<ul>
				<li v-for="item in data">
					<a @click="show(item.shorthand)">
						<img :src="item.imgurl" :title="item.name">
					</a>
					<p>
						<a @click="show(item.shorthand)">{{item.name}}</a>
						<span class="score">{{item.score}}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hot',
		data:function(){
			return {
				data : [{
					shorthand : 'thwj',
					imgurl : require('@/assets/images/2.jpg'),
					name : '头号玩家',
					score : 8.7
				},{
					shorthand : 'fwhyj',
					imgurl : require('@/assets/images/3.jpg'),
					name : '飞屋环游记',
					score : 8.9
				},{
					shorthand : 'yhhwd',
					imgurl : require('@/assets/images/5.jpg'),
					name : '银河护卫队',
					score : 8.0
				},{
					shorthand : 'crzdy2',
					imgurl : require('@/assets/images/6.jpg'),
					name : '超人总动员2',
					score : 8.1
				},{
					shorthand : 'jtmdt',
					imgurl : require('@/assets/images/8.jpg'),
					name : '惊天魔盗团',
					score : 7.5
				}]
			}
		},
		methods: {
			show: function (value) {
				this.$router.push({name: value});//页面跳转
			}
		}
	}
</script>
