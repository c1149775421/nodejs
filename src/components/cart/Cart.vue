<template>
    <div class="container" align="center">

        <table v-if="list.length>0" class="table table-striped">
            <tr class="row">
                <th class="col-md-2 col-sm-2 col-xs-2 text-center">序号</th>
                <th class="col-md-3 col-sm-3 col-xs-3 text-center">商品名称</th>
                <th class="col-md-2 col-sm-2 col-xs-2 text-center">商品单价</th>
                <th class="col-md-3 col-sm-3 col-xs-3 text-center">商品数量</th>
                <th class="col-md-2 col-sm-2 col-xs-2 text-center">操作</th>
            </tr>
            <tr class="row" v-for="(item,index) in list" :key="index" :class="{action1:index%2!=0,action2:index%2==0}">
                <td class="col-md-2 col-sm-2 col-xs-2 text-center">{{item.id}}</td>
                <td class="col-md-3 col-sm-3 col-xs-3 text-center" @click="getDetail(item.id)">{{item.name}}</td>
                <td class="col-md-2 col-sm-2 col-xs-2 text-center">{{item.price | formatPrice}}</td>
                <td class="col-md-3 col-sm-3 col-xs-3 text-center" style="font-size:18px;">
                    <button style="margin-right:5px;" class="btn btn-default btn-md" @click="countDel(index)" :disabled="item.count<=0">-</button>
                    {{item.count}}
                    <button style="margin-left:5px;" class="btn btn-default btn-md" @click="countAdd(index)">+</button>
                </td>
                <td class="col-md-2 col-sm-2 col-xs-2 text-center">
                    <button class="btn btn-default btn-md" @click="remove(index)">删除</button>
                </td>
            </tr>
            <tr class="row">
                <td class="text-right" colspan="5" style="padding-top:20px;font-size:18px;">总价：￥{{totalPrice | formatPrice}} (元)</td>
            </tr>
        </table>
        <div v-else>暂无数据</div>
        <div>
            <button type="button" class="btn btn-primary" @click="toBack">返回</button>     
        </div>

    </div>
</template>

<script>
export default {
    //组件内守卫
    // beforeRouteEnter(to,from,next){
    //     if(to.path=='/cart'){
    //         next('/login')
    //     }else{
    //         next()
    //     }
    // },

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
        toBack(){
            this.$router.replace("/")
        },
        // getDetail(id){
        //     // push可以返回上一级，replace不能返回上一级
        //     // this.$router.push(`/detail/${id}`)
        //     this.$router.push({
        //         name:'Detail',
        //         params:{
        //             detail:id
        //         }
        //     })
        // }
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