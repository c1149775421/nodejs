<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/8.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 路易斯·莱特里尔<br/>
			<span class='item'>编剧</span>: 鲍兹·亚金 / 爱德华·里科 / 艾德·索罗门<br/>
			<span class="actor"><span class='item'>主演</span>: 杰西·艾森伯格 / 艾拉·菲舍尔 / 伍迪·哈里森 / 戴夫·弗兰科 / 马克·鲁弗洛 / 梅拉尼·罗兰</span><br/>
			<span class="item">类型:</span> 剧情 / 悬疑 / 犯罪<br/>
			<span class="item">制片国家/地区:</span> 美国 / 法国<br/>
			<span class="item">语言:</span> 英语 / 法语<br/>
			<span class="item">上映日期:</span> 2013-10-10(中国大陆) / 2013-05-21(纽约首映) / 2013-05-31(美国)<br/>
			<span class="item">片长:</span> 115分钟 / 125分钟(加长版)<br/>
			<span class="item">又名:</span> 非常盗(港) / 出神入化(台) / 瞒天过海 / 看到我了吧<br/>
			<span class="item">IMDb链接:</span> tt1670345<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">7.5</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star40"></span></span></div>
					<div class="rating-sum">291184人评价</div>
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
				好于 71% 犯罪片<br />
				好于 74% 悬疑片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '24px', per : '17.7%'},
					{ words : '推荐', width : '64px', per : '46.9%'},
					{ words : '还行', width : '42px', per : '30.9%'},
					{ words : '较差', width : '5px', per : '3.8%'},
					{ words : '很差', width : '0px', per : '0.7%'}
				]
			}
		}
	}
</script>
