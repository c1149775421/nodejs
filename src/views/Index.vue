<template>
    <div class="getAllBook">
        <Navbar/>
		<div class="container">
			<div class="starter">
				<h1>Bootstrap starter template</h1>
				<p class="lead"><strong>欢迎来到极客书城</strong></p>
			</div>
            <div class="content">
                <ul class="list-unstyled">
                    <li v-for="(item,index) in booklist" :key="index">
                        <img src="@/assets/05.jpg" /><br/>
                        书名：{{item.name}}<br/>
                        作者：{{item.author}}<br/>
                        价格：{{item.price}}￥<br/>
                        销量：{{item.sales}}<br/>
                        库存：{{item.stock}}<br/>
                        <button class="btn btn-primary" @click="addCart(index)">加入购物车</button>
                    </li>
                    <h1 v-if="nat">网络好像断开了呢!</h1>
                </ul>
            </div>
		</div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    data(){
        return{
            booklist:[],
            nat:false,
        }
    },
    components:{
        Navbar
    },
    mounted(){
        var that = this
        that.$axios.get('/getAllBook')
        .then(
            function(res){
                console.log(res)
                that.booklist=res.data
            },
            function(err){
                console.log(err)
                that.nat=true
            }
        )
    },
    methods:{
        addCart(index){
            let temp = this.booklist[index]
            alert("【"+temp.name+"】成功加入购物车")
            let arr = JSON.parse(localStorage.getItem('localCarts'))
            if( arr[temp.id] ){
                arr[temp.id].num += 1
            }else{
                arr[temp.id] = {
                    id: temp.id,
                    name: temp.name,
                    author: temp.author,
                    price: temp.price,
                    sales: temp.sales,
                    stock: temp.stock
                }
                arr[temp.id].num = 1
            }
            localStorage.setItem('localCarts',JSON.stringify(arr))
            console.log(JSON.parse(localStorage.getItem('localCarts')))
        }
    }
}
</script>

<style scoped lang="scss">
    .getAllBook{
        padding-top: 80px;
        text-align: center;
        background-color: #f5f5f5;
    }
    .container{
        margin: 0 auto;
    }
    li{
        float: left;
        width: 22%;
        height: 385px;
        background-color: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        text-align: left;
        padding-top: 175px;
        padding-left: 20px;
        border-top: 3px solid #ff6700;
        button{
            margin-top: 10px;
        }
        img{
            width: 90%;
            height: auto;
            margin-top: -175px;
            margin-bottom: 15px;
        }
    }
</style>