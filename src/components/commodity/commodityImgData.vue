<template>
    <div>
        <div class="commodityImgData">
            <CommodityImg :list="listData"/>
        </div>
    </div>
</template>

<script>
import CommodityImg from '@/components/commodity/commodityImg.vue'
export default {
    data(){
        return{
            listData: [
                {
                    name:"小米笔记本Pro15",
                    url:"https://www.mi.com/buy?product_id=10000284",
                    imgUrl:require('@/assets/img/PC/Pro15.png'),
                    price:"6499"
                },
                {
                    name:"RedmiBook16",
                    url:"https://www.mi.com/buy?product_id=10000242",
                    imgUrl:require('@/assets/img/PC/RedmiBook16.jpg'),
                    price:"4999"
                },
                {
                    name:"RedmiBookAir13",
                    url:"https://www.mi.com/buy?product_id=10000253",
                    imgUrl:require('@/assets/img/PC/RedmiBookAir13.jpg'),
                    price:"5199"
                },
                {
                    name:"RedmiBookPro14",
                    url:"https://www.mi.com/redmibook/pro14",
                    imgUrl:require('@/assets/img/PC/RedmiBookPro14.png'),
                    price:"4699"
                },
                {
                    name:"RedmiBookPro15",
                    url:"https://www.mi.com/redmibook/pro15",
                    imgUrl:require('@/assets/img/PC/RedmiBookPro15.jpg'),
                    price:"4999"
                },
                {
                    name:"RedmiG",
                    url:"https://www.mi.com/redmi-g",
                    imgUrl:require('@/assets/img/PC/RedmiG.jpg'),
                    price:"5499"
                }
            ]
        }
    },
    components:{
        CommodityImg
    }
}
</script>

<style scoped lang="scss">
.commodityImgData{
    width: 100%;
    margin-left: 8%;
}
</style>