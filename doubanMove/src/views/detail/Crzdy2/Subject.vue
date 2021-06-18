<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/6.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 布拉德·伯德<br/>
			<span class='item'>编剧</span>: 布拉德·伯德<br/>
			<span class="actor"><span class='item'>主演</span>: 格雷格·T·尼尔森 / 霍利·亨特 / 莎拉·沃威尔 / 赫克·米尔纳 / 伊莱·富西尔 / 凯瑟琳·基纳</span><br/>
			<span class="item">类型:</span> 动作 / 喜剧 / 动画 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国<br/>
			<span class="item">语言:</span> 英语<br/>
			<span class="item">上映日期:</span> 2018-06-22(中国大陆) / 2018-06-15(美国)<br/>
			<span class="item">片长:</span> 118分钟 / 126分钟(中国大陆)<br/>
			<span class="item">又名:</span> 超人特攻队2(台) / 超人特工队2(港) / 超人家族2<br/>
			<span class="item">IMDb链接:</span> tt3606756<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">8.1</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star40"></span></span></div>
					<div class="rating-sum">89669人评价</div>
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
				好于 74% 动画片<br />
				好于 89% 喜剧片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '37px', per : '28.4%'},
					{ words : '推荐', width : '64px', per : '47.8%'},
					{ words : '还行', width : '29px', per : '22.1%'},
					{ words : '较差', width : '2px', per : '1.5%'},
					{ words : '很差', width : '0px', per : '0.2%'}
				]
			}
		}
	}
</script>
