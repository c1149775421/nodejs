<template>
  <div>
        <ul class="list-unstyled">
            <li><ToIndex /></li><br/>
            <li v-for="(item,index) in booklist" :key="index">
                书名：{{item.name}}<br/>
                作者：{{item.author}}<br/>
                价格：{{item.price}}￥<br/>
                销量：{{item.sales}}<br/>
                库存：{{item.stock}}<br/>
                图片：{{item.img_path}}<br/>
                <button class="btn btn-danger" @click="del(index)(item.id)">删除</button>
                <br/><br/>
            </li>
        </ul>
  </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue'
export default {
     //组件内守卫，如果没有登录就跳转到登录界面
    beforeRouteEnter(to,from,next){
        // console.log(localStorage.token)
        if(localStorage.token=="null"){
            alert("请先登录")
            next('/login')
        }
        next()
    },
    components:{
        ToIndex
    },
    data(){
        return{
            booklist:[]
        }
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
            }
        )
    },
    methods:{
        del(index){
            let that = this
            let isConfirm=confirm('你确定删除吗？删除后不可恢复')
            return (itemid)=>{
                if(isConfirm==true){
                    console.log(index,itemid)
                    // 先发起删除请求，成功了再删除本地数据
                    that.$axios.get("/managerBookDelete",{
                        params:{
                            token:localStorage.token,
                            bookId:itemid
                        }
                    })
                    .then(
                        function(res){
                            console.log(res)
                            if(res.data.success){
                                that.booklist.splice(index,1)
                                that.$router.replace({
                                    name:"Redirect",
                                    params:{
                                        toPage:"/bookDelete",
                                        message:res.data.success
                                    }
                                })
                            }
                            if(res.data.error){
                                alert(res.data.error)
                            }
                        },
                        function(err){
                            console.log(err)
                        }
                    )
                }else{
                    return
                }
            }
        }
    }
}
</script>

<style>

</style>