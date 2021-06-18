<template>
    <div align="center">
        <h1>结账成功</h1>
        <ul class="list-unstyled">
            <li>商品名称：</li>
            <li>数量：</li>
            <li>总价：{{totalPrice}}￥</li>
            <li>订单号：</li>
        </ul>
        <ToIndex />
    </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue'
export default {
    components:{
        ToIndex
    },
    data(){
        return{
            totalPrice:localStorage.getItem('totalPrice')
        }
    }
}
</script>

<style>

</style>