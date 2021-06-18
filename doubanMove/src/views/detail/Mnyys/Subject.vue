<template>
	<div class="subject">
			<div class="mainpic">
				<img src="@/assets/images/1.jpg" />
			</div>
			<div class="info">
        		<span class='item'>导演</span>: 比尔·康顿<br/>
        		<span class='item'>编剧</span>: 斯蒂芬·卓博斯基 / 埃文·斯彼里奥托普洛斯<br/>
        		<span class="actor"><span class='item'>主演</span>: 艾玛·沃森 / 丹·史蒂文斯 / 卢克·伊万斯 / 凯文·克莱恩 / 乔什·加德 / 伊万·麦克格雷格</span><br/>
        		<span class="item">类型:</span> 爱情 / 歌舞 / 奇幻<br/>
        		<span class="item">制片国家/地区:</span> 美国<br/>
        		<span class="item">语言:</span> 英语<br/>
        		<span class="item">上映日期:</span> 2017-03-17(中国大陆/美国)<br/>
        		<span class="item">片长:</span> 129分钟<br/>
        		<span class="item">IMDb链接:</span> tt2771200<br>
			</div>
			<div class="rating">
				<div class="rating-logo">豆瓣评分</div>
				<div class="rating-level">
					<span class="rating-score">7.2</span>
					<div class="rating-right">
						<div><span class="starrating"><span class="star40"></span></span></div>
						<div class="rating-sum">199569人评价</div>
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
					好于 56% 爱情片<br />
					好于 60% 奇幻片
				</div>
			</div>
		</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '22px', per : '14.4%'},
					{ words : '推荐', width : '56px', per : '36.8%'},
					{ words : '还行', width : '64px', per : '41.6%'},
					{ words : '较差', width : '9px', per : '6.2%'},
					{ words : '很差', width : '1px', per : '0.9%'}
				]
			}
		}
	}
</script>
