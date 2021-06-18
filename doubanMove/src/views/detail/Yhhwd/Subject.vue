<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/5.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 詹姆斯·古恩<br/>
			<span class='item'>编剧</span>: 詹姆斯·古恩 / 尼科尔·帕尔曼 / 丹·阿布内特 / 安迪·兰宁<br/>
			<span class="actor"><span class='item'>主演</span>: 克里斯·帕拉特 / 佐伊·索尔达娜 / 布莱德利·库珀 / 范·迪塞尔 / 戴夫·巴蒂斯塔 / 李·佩斯</span><br/>
			<span class="item">类型:</span> 动作 / 科幻 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国 / 英国<br/>
			<span class="item">语言:</span> 英语 / 萨卡语<br/>
			<span class="item">上映日期:</span> 2014-10-10(中国大陆) / 2014-07-21(洛杉矶首映) / 2014-08-01(美国)<br/>
			<span class="item">片长:</span> 121分钟<br/>
			<span class="item">又名:</span> 银河守护队(港) / 星际异攻队(台) / 银河守卫者 / 银河守护者 / Full Tilt / G.O.T.G.<br/>
			<span class="item">IMDb链接:</span> tt2015381<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">8.0</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star40"></span></span></div>
					<div class="rating-sum">294510人评价</div>
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
				好于 88% 科幻片<br />
				好于 92% 动作片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '37px', per : '27.9%'},
					{ words : '推荐', width : '64px', per : '47.3%'},
					{ words : '还行', width : '29px', per : '22.0%'},
					{ words : '较差', width : '3px', per : '2.3%'},
					{ words : '很差', width : '0px', per : '0.5%'}
				]
			}
		}
	}
</script>
