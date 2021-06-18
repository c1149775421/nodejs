<template>
    <div class="container">
        <h2>个人中心</h2>
        <br/><br/>
        <ul class="list-unstyled">
            <li><ToIndex /></li>
            <li><ToBookAdd /></li>
            <li><ToBookDelete /></li>
            <li><ToBookUpdate /></li>
            <li>
                <button @click="sub" class="btn btn-lg btn-danger">注销账户</button>
            </li>
        </ul>
    </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue';
import ToBookAdd from '@/components/btns/ToBookAdd.vue';
import ToBookDelete from '@/components/btns/ToBookDelete.vue';
import ToBookUpdate from '@/components/btns/ToBookUpdate.vue';
export default {
    components:{
        ToIndex: ToIndex,
        ToBookAdd: ToBookAdd,
        ToBookDelete: ToBookDelete,
        ToBookUpdate: ToBookUpdate
    },
    //组件内守卫，如果没有登录就跳转到登录界面
    beforeRouteEnter(to,from,next){
        // console.log(localStorage.token)
        if(localStorage.token=="null"){
            alert("请先登录")
            next('/login')
        }
        next()
    },
    data(){
        return{
            token:localStorage.getItem("token")
        }
    },
    methods:{
        sub(){
            let that=this
            let isConfirm=confirm('你确定注销吗？将永久删除账户')
            // console.log(isConfirm)
            if(isConfirm==true){
                that.$axios.get('/registOut?token='+that.token)
                .then(
                    function(res){
                        console.log(res)
                        if(res.data.success){
                            localStorage.token=null
                            alert("用户："+res.data.success.split("：")[0]+" 注销成功")
                            that.$router.push('/')
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
                // alert("你点击了取消")
                return
            }        
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .container{
        padding-top: 80px;
        text-align: center;
    }
    li{
        margin-bottom: 20px;
    }
</style>