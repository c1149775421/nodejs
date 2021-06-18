<template>
  <div>
        <ul class="list-unstyled">
            <li><ToIndex /></li><br/>
            <li v-for="(item,index) in booklist" :key="index">
                书名：{{item.name}}<br/>
                修改为：<input type="text" v-model="name"><br/>

                作者：{{item.author}}<br/>
                修改为：<input type="text" v-model="author"><br/>

                价格：{{item.price}}￥<br/>
                修改为：<input type="text" v-model="price"><br/>

                销量：{{item.sales}}<br/>
                修改为：<input type="text" v-model="sales"><br/>

                库存：{{item.stock}}<br/>
                修改为：<input type="text" v-model="stock"><br/>

                图片：{{item.img_path}}<br/>
                修改为：<input type="text" v-model="img_path"><br/>

                <button class="btn btn-warning" @click="update(index)(item.id)">修改</button>
                <br/><br/>
            </li>
        </ul>
  </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue'
export default {
    components: { 
        ToIndex 
    },
    data(){
      return{
        booklist:[],
        name:null,
        author:null,
        price:null,
        sales:null,
        stock:null,
        img_path:null
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
        update(index){
            let that = this
            return (itemid)=>{
                console.log(index,itemid)
                if(that.name==null||that.price==null||that.author==null||that.sales==null||that.stock==null||that.img_path==null){
                    alert("请填写完整!")
                    return
                }
                that.$axios.get("/managerBookUpdate",{
                    params:{
                        token:localStorage.token,
                        bookId:itemid,
                        name:that.name,
                        price:that.price,
                        author:that.author,
                        sales:that.sales,
                        stock:that.stock,
                        img_path:that.img_path
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
                                    toPage:"/bookUpdate",
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
            }
        }
    }
}
</script>

<style>

</style>