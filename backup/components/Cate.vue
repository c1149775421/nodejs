<template>
    <div align='center'>
        <table v-if="list.length>0" cellpadding='10' cellspacing='0'>
            <tr>
                <th>序号</th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index" :class="{action1:index%2!=0,action2:index%2==0}">
                <td>{{item.id}}</td>
                <td @click="getDetail(item.id)">{{item.name}}</td>
                <td>{{item.price | formatPrice}}</td>
                <td>
                    <button @click="countDel(index)" :disabled="item.count<=0">-</button>
                    {{item.count}}
                    <button @click="countAdd(index)">+</button>
                </td>
                <td><button @click="remove(index)">删除</button></td>
            </tr>
            <tr>
                <td colspan="5" style="text-align:right">总价：￥{{totalPrice | formatPrice}} (元)</td>
            </tr>
        </table>
        <div v-else>暂无数据</div>

        <ul class="catenav">
            <router-link to="/nopay" tag="li">未付款</router-link>|
            <router-link to="/pay" tag="li">已付款</router-link>
            <div class="content">
                <transition mode="out-in" name="fade">
                    <router-view/>
                </transition>
            </div>
        </ul>

    </div>
</template>

<script>
export default {
    //组件内守卫
    beforeRouteEnter(to,from,next){
        if(to.path=='/cate'){
            next('/login')
        }else{
            next()
        }
    },

    props:{
        list:Array
    },
    mounted(){
        console.log(this.list)
    },
    methods:{
        countAdd(index){
            this.list[index].count+=1
        },
        countDel(index){
            if(this.list[index].count<=0){
                return
            }
            this.list[index].count-=1
        },
        remove(index){
            this.list.splice(index,1)
        },
        getDetail(id){
            // push可以返回上一级，replace不能返回上一级
            // this.$router.push(`/detail/${id}`)
            this.$router.push({
                name:'Detail',
                params:{
                    detail:id
                }
            })
        }
    },
    computed:{
        totalPrice(){
            var total=0
            for(var i=0;i<this.list.length;i++){
                total+=this.list[i].price*this.list[i].count;
            }
            return total;
        }
    },
    filters:{
        formatPrice(value){
            return value.toFixed(2)
        }
    }
}
</script>

<style lang="scss" scoped>
    .action1{
        background-color: lightgray;
    }
    .action2{
        background-color: yellow;
    }
    .catenav{
        width: 600px;
        height: 50px;
        line-height: 50px;
        background-color: pink;
        margin: 0 auto;
        text-align: center;
    }
    .catenav li{
        display: inline;
        margin: 20px;
        cursor: pointer;
        font-family: "幼圆","宋体","微软雅黑";
        font-size: 15px;
        font-weight: bold;
    }
    .content{
        width: 600px;
        margin: 0 auto;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>