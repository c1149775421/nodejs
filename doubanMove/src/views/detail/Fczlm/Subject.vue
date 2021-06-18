<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/12.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 乔斯·韦登<br/>
			<span class='item'>编剧</span>: 乔斯·韦登 / 扎克·佩恩<br/>
			<span class="actor"><span class='item'>主演</span>: 小罗伯特·唐尼 / 克里斯·埃文斯 / 斯嘉丽·约翰逊 / 克里斯·海姆斯沃斯 / 杰瑞米·雷纳 / 马克·鲁弗洛</span><br/>
			<span class="item">类型:</span> 动作 / 科幻 / 奇幻 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国<br/>
			<span class="item">语言:</span> 英语 / 俄语<br/>
			<span class="item">上映日期:</span> 2012-05-05(中国大陆) / 2012-05-04(美国)<br/>
			<span class="item">片长:</span> 142分钟<br/>
			<span class="item">又名:</span> 复仇者 / 复联<br/>
			<span class="item">IMDb链接:</span> tt0848228<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">8.1</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star40"></span></span></div>
					<div class="rating-sum">382315人评价</div>
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
				好于 90% 科幻片<br />
				好于 93% 动作片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '40px', per : '29.7%'},
					{ words : '推荐', width : '64px', per : '46.5%'},
					{ words : '还行', width : '29px', per : '21.2%'},
					{ words : '较差', width : '2px', per : '2.1%'},
					{ words : '很差', width : '0px', per : '0.6%'}
				]
			}
		}
	}
</script>
