<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/2.jpg" />
		</div>
		<div class="info">
        	<span class='item'>导演</span>: 史蒂文·斯皮尔伯格<br/>
        	<span class='item'>编剧</span>: 扎克·佩恩 / 恩斯特·克莱恩<br/>
        	<span class="actor"><span class='item'>主演</span>: 泰伊·谢里丹 / 奥利维亚·库克 / 本·门德尔森 / 马克·里朗斯 / 丽娜·维特 / 森崎温</span><br/>
        	<span class="item">类型:</span> 动作 / 科幻 / 冒险<br/>
        	<span class="item">制片国家/地区:</span> 美国<br/>
        	<span class="item">语言:</span> 英语 / 日语 / 汉语普通话<br/>
        	<span class="item">上映日期:</span> 2018-03-30(中国大陆) / 2018-03-11(西南偏南电影节) / 2018-03-29(美国)<br/>
        	<span class="item">片长:</span> 140分钟<br/>
        	<span class="item">又名:</span> 玩家一号 / 挑战者1号(港) / 一级玩家(台) / 一号玩家<br/>
        	<span class="item">IMDb链接:</span> tt1677720<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">8.7</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star45"></span></span></div>
					<div class="rating-sum">549342人评价</div>
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
				好于 98% 科幻片<br />
				好于 97% 冒险片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '64px', per : '50.2%'},
					{ words : '推荐', width : '46px', per : '36.9%'},
					{ words : '还行', width : '14px', per : '11.4%'},
					{ words : '较差', width : '1px', per : '1.2%'},
					{ words : '很差', width : '0px', per : '0.4%'}
				]
			}
		}
	}
</script>
