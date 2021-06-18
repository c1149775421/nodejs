<template>
	<div class="subject">
			<div class="mainpic">
				<img src="@/assets/images/4.jpg" />
			</div>
			<div class="info">
        		<span class='item'>导演</span>: 罗森·马歇尔·瑟伯<br/>
        		<span class='item'>编剧</span>: 罗森·马歇尔·瑟伯<br/>
        		<span class="actor"><span class='item'>主演</span>: 道恩·强森 / 内芙·坎贝尔 / 黄经汉 / 罗兰·默勒 / 麦肯纳·罗伯茨 / 诺亚·科特雷尔</span><br/>
        		<span class="item">类型:</span> 动作 / 惊悚 / 冒险<br/>
        		<span class="item">制片国家/地区:</span> 美国<br/>
        		<span class="item">语言:</span> 英语 / 粤语 / 汉语普通话<br/>
        		<span class="item">上映日期:</span> 2018-07-20(中国大陆) / 2018-07-13(美国)<br/>
        		<span class="item">片长:</span> 102分钟<br/>
				<span class="item">又名:</span> 摩天大楼(台) / 高凶浩劫(港) / 高耸入云<br/>
        		<span class="item">IMDb链接:</span> tt5758778<br>
			</div>
			<div class="rating">
				<div class="rating-logo">豆瓣评分</div>
				<div class="rating-level">
					<span class="rating-score">6.4</span>
					<div class="rating-right">
						<div><span class="starrating"><span class="star35"></span></span></div>
						<div class="rating-sum">69725人评价</div>
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
					好于 41% 动作片<br />
					好于 31% 冒险片
				</div>
			</div>
		</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '5px', per : '4.8%'},
					{ words : '推荐', width : '27px', per : '24.9%'},
					{ words : '还行', width : '64px', per : '57.1%'},
					{ words : '较差', width : '12px', per : '11.6%'},
					{ words : '很差', width : '1px', per : '1.6%'}
				]
			}
		}
	}
</script>
