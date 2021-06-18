<template>
	<div class="subject">
		<div class="mainpic">
			<img src="@/assets/images/11.jpg" />
		</div>
		<div class="info">
			<span class='item'>导演</span>: 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什<br/>
			<span class='item'>编剧</span>: 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什 / 吉姆·里尔顿 / 乔西·特立尼达 / 菲尔·约翰斯顿 / 珍妮弗·李<br/>
			<span class="actor"><span class='item'>主演</span>: 金妮弗·古德温 / 杰森·贝特曼 / 伊德里斯·艾尔巴 / 珍妮·斯蕾特 / 内特·托伦斯 / 邦尼·亨特</span><br/>
			<span class="item">类型:</span> 喜剧 / 动画 / 冒险<br/>
			<span class="item">制片国家/地区:</span> 美国<br/>
			<span class="item">语言:</span> 英语 / 挪威语<br/>
			<span class="item">上映日期:</span> 2016-03-04(中国大陆/美国)<br/>
			<span class="item">片长:</span> 109分钟(中国大陆) / 108分钟<br/>
			<span class="item">又名:</span> 优兽大都会(港) / 动物方城市(台) / 动物乌托邦 / 动物大都会 / Zootropolis<br/>
			<span class="item">IMDb链接:</span> tt2948356<br>
		</div>
		<div class="rating">
			<div class="rating-logo">豆瓣评分</div>
			<div class="rating-level">
				<span class="rating-score">9.1</span>
				<div class="rating-right">
					<div><span class="starrating"><span class="star45"></span></span></div>
					<div class="rating-sum">687073人评价</div>
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
				好于 99% 喜剧片<br />
				好于 98% 动画片
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function () {
			return {
				data : [
					{ words : '力荐', width : '64px', per : '63.9%'},
					{ words : '推荐', width : '30px', per : '30.2%'},
					{ words : '还行', width : '5px', per : '5.5%'},
					{ words : '较差', width : '0px', per : '0.3%'},
					{ words : '很差', width : '0px', per : '0.1%'}
				]
			}
		}
	}
</script>
