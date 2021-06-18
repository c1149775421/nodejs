<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/15.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 佐米·希尔拉<br/>
			<span class='item'>编剧</span>: 拜伦·维林格 / 菲利普·德·布拉西 / 瑞安·恩格尔<br/>
			<span class="actor"><span class='item'>主演</span>: 连姆·尼森 / 维拉·法米加 / 帕特里克·威尔森 / 乔纳森·班克斯 / 山姆·尼尔 / 伊丽莎白·麦戈文</span><br/>
			<span class="item">类型:</span> 动作 / 惊悚 / 犯罪<br/>
			<span class="item">制片国家/地区:</span> 美国 / 英国<br/>
			<span class="item">语言:</span> 英语<br/>
			<span class="item">上映日期:</span> 2018-03-30(中国大陆) / 2018-01-12(美国)<br/>
			<span class="item">片长:</span> 105分钟 / 104分钟(中国大陆)<br/>
			<span class="item">又名:</span> 疾速救援(台) / 追命列车(港)<br/>
			<span class="item">IMDb链接:</span> tt1590193<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">6.6</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star35"></span></span></div>
					<div class="rating-sum">40205人评价</div>
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
				好于 48% 动作片<br />
				好于 35% 犯罪片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '5px', per : '5.0%'},
					{ words : '推荐', width : '31px', per : '28.3%'},
					{ words : '还行', width : '64px', per : '57.0%'},
					{ words : '较差', width : '10px', per : '9.0%'},
					{ words : '很差', width : '0px', per : '0.7%'}
				]
			}
		}
	}
</script>
