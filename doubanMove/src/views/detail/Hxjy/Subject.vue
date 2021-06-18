<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/13.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 雷德利·斯科特<br/>
			<span class='item'>编剧</span>: 德鲁·高达 / 安迪·威尔<br/>
			<span class="actor"><span class='item'>主演</span>: 马特·达蒙 / 杰西卡·查斯坦 / 克里斯汀·韦格 / 杰夫·丹尼尔斯 / 迈克尔·佩纳 / 凯特·玛拉</span><br/>
			<span class="item">类型:</span> 剧情 / 科幻 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国 / 英国<br/>
			<span class="item">语言:</span> 英语 / 汉语普通话<br/>
			<span class="item">上映日期:</span> 2015-11-25(中国大陆) / 2015-10-02(美国)<br/>
			<span class="item">片长:</span> 144分钟 / 151分钟(加长版)<br/>
			<span class="item">又名:</span> 火星任务(港) / 绝地救援(台) / 火星人<br/>
			<span class="item">IMDb链接:</span> tt3659388<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">8.4</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star40"></span></span></div>
					<div class="rating-sum">343054人评价</div>
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
				好于 95% 科幻片<br />
				好于 92% 冒险片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '46px', per : '35.6%'},
					{ words : '推荐', width : '64px', per : '49.2%'},
					{ words : '还行', width : '18px', per : '14.0%'},
					{ words : '较差', width : '1px', per : '0.9%'},
					{ words : '很差', width : '0px', per : '0.2%'}
				]
			}
		}
	}
</script>
