<template>
    <div class="commodityBoxData">
        <CommodityBox :list="listData"/>
    </div>
</template>

<script>
import CommodityBox from './commodityBox'
export default {
    components:{
        CommodityBox
    },
    data(){
        return{
            listData:[
                {
                    name:'小米电视4A',
                    price:2699,
                    imgUrl:require('@/assets/img/TV/4A.webp'),
                    url:"https://www.mi.com/buy/detail?product_id=10764"
                },
                {
                    name:'Redmi电视A55',
                    price:2088,
                    imgUrl:require('@/assets/img/TV/A55.webp'),
                    url:"https://www.mi.com/buy/detail?product_id=12809"
                },
                {
                    name:'全面屏电视E32C',
                    price:949,
                    imgUrl:require('@/assets/img/TV/E32C.webp'),
                    url:"https://www.mi.com/buy?product_id=10126"
                },
                {
                    name:'全面屏电视E43K',
                    price:1349,
                    imgUrl:require('@/assets/img/TV/E43K.webp'),
                    url:"https://www.mi.com/buy?product_id=12045"
                },
                {
                    name:'全面屏电视E65X',
                    price:2999,
                    imgUrl:require('@/assets/img/TV/E65X.webp'),
                    url:"https://www.mi.com/buy?product_id=12849"
                },
                {
                    name:'全面屏电视E55X',
                    price:2299,
                    imgUrl:require('@/assets/img/TV/E55X.webp'),
                    url:"https://www.mi.com/buy/detail?product_id=10909"
                }
            ]
        }
    }
}
</script>
