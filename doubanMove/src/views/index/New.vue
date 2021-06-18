<template>
	<div class="hot-film-main">
		<div class="new-film-list">
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
		name: 'new',
		data:function(){
			return {
				data : [{
					shorthand : 'cmdsj',
					imgurl : require('@/assets/images/9.jpg'),
					name : '楚门的世界',
					score : 9.2
				},{
					shorthand : 'dmkj',
					imgurl : require('@/assets/images/10.jpg'),
					name : '盗梦空间',
					score : 9.3
				},{
					shorthand : 'fkdwc',
					imgurl : require('@/assets/images/11.jpg'),
					name : '疯狂动物城',
					score : 9.1
				},{
					shorthand : 'fczlm',
					imgurl : require('@/assets/images/12.jpg'),
					name : '复仇者联盟',
					score : 8.1
				},{
					shorthand : 'hxjy',
					imgurl : require('@/assets/images/13.jpg'),
					name : '火星救援',
					score : 8.4
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
