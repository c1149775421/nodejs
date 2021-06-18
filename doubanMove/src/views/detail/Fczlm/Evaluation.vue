<template>
<div>
  <div class="evaluation">
			<div id="first">
				<a class="wantto" @click="wantPopup()">想看</a>
				<a class="seen" @click="seenPopup()">看过</a>
				<div>评价:&nbsp;
					<span class="star" @mouseout="Darken('#first')">
        				<span v-for="n in 5" @mouseover="Brighten('#first',n)" @click="starPopup(n)"><i class="bright"></i><i class="dark"></i></span>
    				</span>
					<span class="evaluation-word"></span>
				</div>
			</div>
			
			<div id="second" style="display:none">
				我想看这部电影
				<span class="now-time"></span>
				<a class="del" @click="del">删除</a><br />
				<span class="show-tips"></span>
			</div>
			
			<div id="third" style="display:none">
				我看过这部电影
				<span class="now-time"></span>
				<a class="del" @click="del">删除</a>
				<div class="show-evaluation" style="display:none">我的评价:&nbsp;
					<span class="star" @mouseout="Darken('.show-evaluation')">
        				<span v-for="n in 5" @mouseover="Brighten('.show-evaluation',n)" @click="star_level=n"><i class="bright"></i><i class="dark"></i></span>
    				</span>
					<span class="evaluation-word"></span>
				</div>
			</div>
		</div>
		<div id="show-layer" style="display:none">
	<div class="layer-bg"></div>
	<div class="layer-body">
		<div class="layer-top">
			<span class="title">添加收藏:我想看这部电影</span>
			<span class="x" @click="closeLayer">x</span>
		</div>
		<div class="layer-middle">
			<div id="wantto">
				<span>标签(多个标签用空格分隔):</span>
				<input type="text" name="movietip" />
				<div class="tip">
					<span>常用标签:</span>
					<ul>
						<li v-for="(v,i) in tiplist" @click="getTips(i)">{{v}}</li>
					</ul>
				</div>
			</div>
			<div id="seen">
				<span>给个评价吧？(可选):&nbsp;</span>
				<span class="star" @mouseout="Darken('#seen')">
        			<span v-for="n in 5" @mouseover="Brighten('#seen',n)" @click="star_level=n"><i class="bright"></i><i class="dark"></i></span>
    			</span>
				<span class="evaluation-word"></span>
			</div>
		</div>
		<div class="layer-bottom">
			<input type="button" value="保存" @click="save" />
		</div>
	</div>
</div>
	</div>
</template>

<script>
export default {
  	name: 'evaluation',
	data: function(){
		return {
			flag: 1,
			star_level: 0,
			tiplist: ['Marvel','3D','动作','漫画改编','2012','美国','科幻','漫威'],
			tips: ''
		}
	},
	mounted: function(){
		
	},
	methods: {
		getEvaluationWord: function(name,index){
			switch(index){
				case 1:
					$(name).find(".evaluation-word").text("很差");//定义一星评价词
					break;
				case 2:
					$(name).find(".evaluation-word").text("较差");//定义二星评价词
					break;
				case 3:
					$(name).find(".evaluation-word").text("还行");//定义三星评价词
					break;
				case 4:
					$(name).find(".evaluation-word").text("推荐");//定义四星评价词
					break;
				case 5:
					$(name).find(".evaluation-word").text("力荐");//定义五星评价词
					break;
				default:
					$(name).find(".evaluation-word").text("");//评价词设置为空
					break;
			}
		},
		setLayerCenter: function(){
			var top = ($(window).height()-$(".layer-bg").height())/2;//设置元素距浏览器顶部距离
			var left = ($(window).width()-$(".layer-bg").width())/2;//设置元素距浏览器左侧距离
			var scrolltop = $(window).scrollTop();//获取垂直滚动条位置
			var scrollleft = $(window).scrollLeft();//获取水平滚动条位置
			//设置弹出层位置
			$("#show-layer").css({"top":top+scrolltop,"left":left+scrollleft}).show();
		},
		Brighten: function(id,n){
			var t = id+" .star span";
			$(t).eq(n-1).prevAll().find(".bright").css("z-index",1);//前面的星星变亮
			$(t).eq(n-1).find(".bright").css("z-index",1);//当前星星变亮
			$(t).eq(n-1).nextAll().find(".bright").css("z-index",0);//后面的星星变暗
			this.getEvaluationWord(id,n);//输出评价词
		},
		Darken: function(id){
			var t = id+" .star";
			$(t).find(".bright").css("z-index",0);//所有星星变暗
			$(t).next().text("");//评价词设置为空
			if(id != "#first"){
				//根据星级数目使星星变亮
				$(t+" span:lt("+this.star_level+")").find(".bright").css("z-index",1);
				this.getEvaluationWord(id,this.star_level);//输出评价词
			}
		},
		starPopup: function(n){
			var t = this;
			this.flag = 2;
			this.setLayerCenter();//设置弹出层居中
			$(window).on("scroll resize",function(){t.setLayerCenter();});//添加事件处理程序
			$("#wantto").hide();//隐藏元素
			$("#seen").show();//显示元素
			$("#show-layer .title").html("添加收藏:我看过这部电影");//设置弹出层标题
			$("#seen .star span").find(".bright").css("z-index",0);//所有星星变暗
			this.star_level = n;
			//根据星级数目使星星变亮
			$("#seen .star span:lt("+n+")").find(".bright").css("z-index",1);
			this.getEvaluationWord("#seen",n);//输出评价词
		},
		seenPopup: function(){
			var t = this;
			this.flag = 2;
			this.setLayerCenter();//设置弹出层居中
			$(window).on("scroll resize",function(){t.setLayerCenter();});//添加事件处理程序
			$("#wantto").hide();//隐藏元素
			$("#show-layer .title").html("添加收藏:我看过这部电影");//设置弹出层标题
			$("#seen").show();//显示元素
			this.star_level = 0;
			$("#seen .star span").find(".bright").css("z-index",0);//所有星星变暗
			$("#seen .evaluation-word").text("");//评价词设置为空
		},
		wantPopup: function(){
			var t = this;
			this.flag = 1;
			this.setLayerCenter();//设置弹出层居中
			$(window).on("scroll resize",function(){t.setLayerCenter();});//添加事件处理程序
			$("#seen").hide();//隐藏元素
			$("#show-layer .title").html("添加收藏:我想看这部电影");//设置弹出层标题
			$("#wantto").show();//显示元素
			$("input[name='movietip']").val("");//设置电影标签为空
			$(".tip li").removeClass("active");//移除标签样式
		},
		closeLayer: function(){
			$("#show-layer").hide();//隐藏弹出层
			$(window).off();//移除事件处理程序
		},
		getTips: function(i){
			var t = ".tip li";
			if(!$(t).eq(i).hasClass("active")){//如果当前标签不具有该样式
				$(t).eq(i).addClass("active");//为当前标签添加样式
				this.tips = $("input[name='movietip']").val();//获取文本框中的电影标签
				this.tips += $(t).eq(i).text()+" ";//当前标签后添加空格
				$("input[name='movietip']").focus();//文本框获得焦点
				$("input[name='movietip']").val(this.tips);//显示电影标签
			}else{
				$(t).eq(i).removeClass("active");//移除当前标签样式
				var ti = $(t).eq(i).text()+" ";//当前标签后添加空格
				this.tips = $("input[name='movietip']").val().replace(ti,"");//删除选择的标签
				$("input[name='movietip']").val(this.tips);//显示电影标签
				$("input[name='movietip']").focus();//文本框获得焦点
			}
		},
		save: function(){
			if(this.flag == 1){
				$("#show-layer").hide();//隐藏弹出层
				$(window).off();//移除事件处理程序
				$("#first").hide();//隐藏元素
				$("#second").show();//显示元素
				if(this.tips != "")
					$(".show-tips").text("标签:"+this.tips);//设置文本内容
			}else{
				$("#show-layer").hide();//隐藏弹出层
				$(window).off();//移除事件处理程序
				$("#first").hide();//隐藏元素
				$("#third").show();//显示元素
				$(".show-evaluation").show();//显示评价词
				//所有星星变暗
				$(".show-evaluation .star span").find(".bright").css("z-index",0);
				//根据星级数目使星星变亮
				$(".show-evaluation .star span:lt("+this.star_level+")").find(".bright").css("z-index",1);
				this.getEvaluationWord(".show-evaluation",this.star_level);//输出评价词
			}
			var nowdate = new Date();//定义日期对象
			var year = nowdate.getFullYear();//获取当前年份
			var month = nowdate.getMonth()+1;//获取当前月份
			var date = nowdate.getDate();//获取当前日期
			$(".now-time").html(year+"-"+month+"-"+date);//输出年月日
		},
		del: function(){
			if(window.confirm("真的要删除这个收藏？")){
				this.tips = "";//变量设置为空
				$(".show-tips").text("");//电影标签设置为空
				$("#first").show();//显示元素
				$("#second").hide();//隐藏元素
				$("#third").hide();//隐藏元素
			}
		}
	}
}
</script>
