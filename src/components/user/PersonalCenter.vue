<template>
    <div align="center">
		<div class="container">
			<div class="left-btn-group" >
				<button v-for="(item,index) in list" :key="index" type="button" class="btn btn-default" @click="setpagevalue(item.id)">
					{{item.btnName}}
				</button>
			</div>
			<div class="main">
				<div class="mainitem" v-if="pagevalue===0">
					<img src="../../assets/img/Logo/05.jpg" alt="头像">
					<div class="name">
						<table>
							<tr>
								<th>
									<h4>用户ID</h4>
								</th>
								<th>：</th>
								<td>
									<h4>000000</h4>
								</td>
							</tr>
							<tr>
								<th>
									<h4>用户名</h4>
								</th>
								<th>：</th>
								<td>
									<h4>爷</h4>
								</td>
							</tr>
							<tr>
								<th>
									<h4>性别</h4>
								</th>
								<th>：</th>
								<td>
									<h4>神是可男可女的</h4>
								</td>
							</tr>
							<tr>
								<th>
									<h4>出生日期</h4>
								</th>
								<th>：</th>
								<td>
									<h4>活太久，记不清了</h4>
								</td>
							</tr>
							<tr>
								<th>
									<h4>地址</h4>
								</th>
								<th>：</th>
								<td>
									<h4>宇宙深处</h4>
								</td>
							</tr>
						</table>
						
						
						
						
					</div>
					<div class="login-out">
						<button class="btn btn-danger">退出登录</button>
					</div>
				</div>
				<div class="mainitem" v-if="pagevalue===1">
					two2
				</div>
				<div class="mainitem" v-if="pagevalue===2">
					three3
				</div>
			</div>
			<button class="btn btn-primary" id="toIndex" @click="toBack">返回</button>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pagevalue: 0,
            list:[
                {
                    btnName:'个人信息',
                    id:0
                },
                {
                    btnName:'我的收藏',
                    id:1
                },
                {
                    btnName:'修改资料',
                    id:2
                }
            ]
        }
    },
    methods:{
        setpagevalue(value){
            this.pagevalue = value
        },
		toBack(){
			this.$router.replace("/")
		}
    }
}
</script>

<style scoped>
.container{
	width: 900px;
	height: 900px;
}
.btn-default{
	width: 100%;
}
.left-btn-group{
    position: absolute;
    top:40px;
    left:250px;
	width: 100px;
}
.main{
    position: absolute;
    top:40px;
    left:350px;
    width:800px;
    height:600px;
    background-color:rgb(228, 227, 227);
}
.mainitem{
	width: 100%;
	height: 100%;
	text-align: left;
	
}
.mainitem img{
	width: 100px;
	margin-top: 20px;
	margin-left: 50px;
	border-radius: 50px;
}
.name{
	margin-top: 50px;
	margin-left: 50px;
}
.name th h4{
	text-align-last: justify;
	margin: 5px;
}
.login-out{
	margin-top: 160px;
	margin-left: 50px;
}
#toIndex{
	position: absolute;
	top: 660px;
	left: 700px;
	width: 100px;
}
</style>
