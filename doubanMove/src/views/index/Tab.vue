<template>
  	<div class="hot-film">
		<div class="hot-film-top">
			<h2>最近热门的电影</h2>
			<ul>
				<li><a :class="{active : current=='Hot'}" @click="current='Hot'">热门</a></li>
				<li><a :class="{active : current=='New'}" @click="current='New'">最新</a></li>
			</ul>
		</div>
		<component :is="current"></component>
	</div>
</template>
<script>
import Hot from '@/views/index/Hot'//引入热门电影组件
import New from '@/views/index/New'//引入最新电影组件
export default {
  name: 'tab',
  data: function(){
		return {
			current: 'Hot' //默认显示热门电影
		}
	},
  components: {
  	Hot,
	New
  }
}
</script>