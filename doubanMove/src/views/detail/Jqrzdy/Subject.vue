<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/7.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 安德鲁·斯坦顿<br/>
			<span class='item'>编剧</span>: 安德鲁·斯坦顿 / 吉姆·里尔顿 / 彼特·道格特<br/>
			<span class="actor"><span class='item'>主演</span>: 本·贝尔特 / 艾丽莎·奈特 / 杰夫·格尔林 / 佛莱德·威拉特 / 西格妮·韦弗 / 约翰·拉岑贝格</span><br/>
			<span class="item">类型:</span> 爱情 / 科幻 / 动画 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国<br/>
			<span class="item">语言:</span> 英语<br/>
			<span class="item">上映日期:</span> 2008-06-27(美国)<br/>
			<span class="item">片长:</span> 98分钟<br/>
			<span class="item">又名:</span> 瓦力(台) / 太空奇兵·威E(港) / 星际总动员 / 地球废品分装员 / 机器人瓦力 / walle<br/>
			<span class="item">IMDb链接:</span> tt0910970<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">9.3</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star45"></span></span></div>
					<div class="rating-sum">623257人评价</div>
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
				好于 99% 动画片<br />
				好于 99% 科幻片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '64px', per : '70.5%'},
					{ words : '推荐', width : '22px', per : '24.6%'},
					{ words : '还行', width : '4px', per : '4.6%'},
					{ words : '较差', width : '0px', per : '0.2%'},
					{ words : '很差', width : '0px', per : '0.1%'}
				]
			}
		}
	}
</script>
