<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/10.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 克里斯托弗·诺兰<br/>
			<span class='item'>编剧</span>: 克里斯托弗·诺兰<br/>
			<span class="actor"><span class='item'>主演</span>: 莱昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉 / 汤姆·哈迪 / 渡边谦 / 迪利普·劳</span><br/>
			<span class="item">类型:</span> 剧情 / 科幻 / 悬疑 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国 / 英国<br/>
			<span class="item">语言:</span> 英语 / 日语 / 法语<br/>
			<span class="item">上映日期:</span> 2010-09-01(中国大陆) / 2010-07-16(美国)<br/>
			<span class="item">片长:</span> 148分钟<br/>
			<span class="item">又名:</span> 潜行凶间(港) / 全面启动(台) / 奠基 / 心灵犯案 / 记忆迷阵 / 记忆魔方<br/>
			<span class="item">IMDb链接:</span> tt1375666<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">9.3</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star45"></span></span></div>
					<div class="rating-sum">941613人评价</div>
				</div>
			</div>
			<div class="star-count">
				<div class="star-item" v-for="(item,index) in data">
					<span class="stars" :title="item.words">{{5-index}}星</span>
					<span class="bar" :style="{width:item.width}"></span>
					<span class="star-per">{{item.per}}</span>
				</div>
			</div>
			<div class="compare">
				好于 99% 科幻片<br />
				好于 99% 悬疑片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '64px', per : '68.9%'},
					{ words : '推荐', width : '24px', per : '26.3%'},
					{ words : '还行', width : '4px', per : '4.4%'},
					{ words : '较差', width : '0px', per : '0.3%'},
					{ words : '很差', width : '0px', per : '0.1%'}
				]
			}
		}
	}
</script>
