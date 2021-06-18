<template>
  <div class="is-on">
		<div class="hd">
			<h2>正在热映</h2>
			<div class="right">
				<span>1/3</span>
				<a class="leftBtn" href="javascript:;" @click="turnLeft"></a>
				<a class="rightBtn" href="javascript:;" @click="turnRight"></a>
			</div>
		</div>
		<div class="bd" @mouseenter="stopMove" @mouseleave="continueMove">
			<div class="container">
				<ul>
					<li v-for="item in data">
						<a @click="show(item.shorthand)"><img :src="item.imgurl" :title="item.name" /></a>
						<p><a @click="show(item.shorthand)">{{item.name}}</a></p>
						<div class="rating">
							<span class="starrating"><span :class="item.star"></span></span>
							<span class="score">{{item.score}}</span>
						</div>
						<a href="javascript:;" class="goupiao">选座购票</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import data from '@/assets/js/data' //引入电影数据
export default {
	name: 'rotate',
	data: function(){
		return {
			data: data,
			nowScreen : 0,	//屏幕号
			screenAmount : 0,
			timer: 0
		}
	},
	mounted: function(){
		this.screenAmount = $(".container ul li").length / 5;//计算屏幕数量
	$(".container ul li:lt(5)").clone().appendTo(".container ul");//复制前5个元素
		//每隔5秒钟自动触发元素的click事件
		this.timer = setInterval(function(){
			var ele = document.getElementsByClassName("rightBtn")[0];
			var myEvent = document.createEvent("HTMLEvents");//创建事件类型
        	myEvent.initEvent("click", true, true);  //初始化事件
			ele.dispatchEvent(myEvent);//触发事件
		}, 5000);
	},
	destroyed: function(){
		clearInterval(this.timer);//销毁组件时停止移动
	},
	methods: {
		turnLeft: function(){
			this.stopMove();
			this.continueMove();
			if(this.nowScreen > 0){
			this.nowScreen-- ;//屏幕号减1
			$(".container").animate({"left" : -775 * this.nowScreen} , 800);//定义动画
		}else{
			this.nowScreen = this.screenAmount - 1;
			$(".container").css("left" , -775 * this.screenAmount).animate({"left" : -775 * (this.screenAmount - 1)},800);//移动到复制的5个元素并执行动画
		}
		$(".hd .right span").html(this.nowScreen + 1 + "/" + this.screenAmount);//显示屏幕号
		},
		turnRight: function(){
			this.stopMove();
			this.continueMove();
			if(this.nowScreen < this.screenAmount - 1){
			this.nowScreen++ ;//屏幕号加1
			$(".container").animate({"left" : -775 * this.nowScreen} , 800);//定义动画
		}else{
			this.nowScreen = 0;
			$(".container").animate({"left" : -775 * this.screenAmount} , 800 , function(){
				$(this).css("left",0);//元素回到初始位置
			});
		}
		$(".hd .right span").html(this.nowScreen + 1 + "/" + this.screenAmount);//显示屏幕号
		},
		stopMove: function(){
			clearInterval(this.timer);//鼠标进入元素停止移动
		},
		continueMove: function(){
			//鼠标离开元素恢复移动
			this.timer = setInterval(function(){
				var ele = document.getElementsByClassName("rightBtn")[0];
				var myEvent = document.createEvent("HTMLEvents");//创建事件类型
        		myEvent.initEvent("click", true, true);  //初始化事件
				ele.dispatchEvent(myEvent);//触发事件
			}, 5000);
		},
		show: function(value){
			this.$router.push({name : value});
		}
	}
}
</script>
