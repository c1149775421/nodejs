<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/14.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 乔·德特杜巴<br/>
			<span class='item'>编剧</span>: 迪恩·乔格瑞斯 / 乔·霍贝尔 / 埃里希·霍贝尔 / 史蒂夫·艾尔顿<br/>
			<span class="actor"><span class='item'>主演</span>: 杰森·斯坦森 / 李冰冰 / 雷恩·威尔森 / 鲁比·罗丝 / 赵文瑄 / 佩吉·肯尼迪</span><br/>
			<span class="item">类型:</span> 动作 / 科幻 / 惊悚<br/>
			<span class="item">制片国家/地区:</span> 美国 / 中国大陆 / 香港<br/>
			<span class="item">语言:</span> 英语 / 汉语普通话 / 泰语<br/>
			<span class="item">上映日期:</span> 2018-08-10(美国/中国大陆)<br/>
			<span class="item">片长:</span> 115分钟(中国大陆) / 113分钟<br/>
			<span class="item">又名:</span> 极悍巨鲨(港) / 麦格<br/>
			<span class="item">IMDb链接:</span> tt4779682<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">5.9</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star30"></span></span></div>
					<div class="rating-sum">97697人评价</div>
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
				好于 25% 惊悚片<br />
				好于 28% 科幻片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '3px', per : '3.1%'},
					{ words : '推荐', width : '18px', per : '16.3%'},
					{ words : '还行', width : '64px', per : '55.9%'},
					{ words : '较差', width : '23px', per : '20.7%'},
					{ words : '很差', width : '4px', per : '4.1%'}
				]
			}
		}
	}
</script>
