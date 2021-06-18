<template>
    <div class="menuData">
        <Menu :list="listData"/>
    </div>
</template>

<script>
import Menu from './menu.vue'
export default {
    components:{
        Menu
    },
    data(){
        return{
            listData:[
                {
                    btnName:'手机',
                    contentList:[
                        {
                            contentName:'小米10S',
                            imgUrl:require('@/assets/img/Tab/Phone/mi10S.webp'),
                            url:"https://www.mi.com/mi10s"
                        },
                        {
                            contentName:'小米11青春版',
                            imgUrl:require('@/assets/img/Tab/Phone/mi11Lite.webp'),
                            url:"https://www.mi.com/mi11youth"
                        },
                        {
                            contentName:'小米11Pro',
                            imgUrl:require('@/assets/img/Tab/Phone/mi11Pro.webp'),
                            url:"https://www.mi.com/mi11Pro"
                        },
                        {
                            contentName:'小米11Ultra',
                            imgUrl:require('@/assets/img/Tab/Phone/mi11Ultra.webp'),
                            url:"https://www.mi.com/mi11ultra"
                        },
                        {
                            contentName:'小米MIX FOLD',
                            imgUrl:require('@/assets/img/Tab/Phone/mixFOLD.webp'),
                            url:"https://www.mi.com/mixfold"
                        }
                    ]
                },
                {
                    btnName:'电脑',
                    contentList:[
                        {
                            contentName:'RedmiBook 14',
                            imgUrl:require('@/assets/img/Tab/PC/RedmiBook14.jpg'),
                            url:"https://www.mi.com/buy?product_id=10000241"
                        },
                        {
                            contentName:'RedmiBook 16',
                            imgUrl:require('@/assets/img/Tab/PC/RedmiBook16.jpg'),
                            url:"https://www.mi.com/buy?product_id=10000242"
                        },
                        {
                            contentName:'RedmiBookPro 14',
                            imgUrl:require('@/assets/img/Tab/PC/RedmiBookPro14.png'),
                            url:"https://www.mi.com/redmibook/pro14"
                        },
                        {
                            contentName:'RedmiBookPro 15',
                            imgUrl:require('@/assets/img/Tab/PC/RedmiBookPro15.jpg'),
                            url:"https://www.mi.com/redmibook/pro15"
                        },
                        {
                            contentName:'RedmiBook G',
                            imgUrl:require('@/assets/img/Tab/PC/RedmiG.jpg'),
                            url:"https://www.mi.com/redmi-g"
                        },
                    ]
                },
                {
                    btnName:'电视',
                    contentList:[
                        {
                            contentName:'小米电视4A',
                            imgUrl:require('@/assets/img/Tab/TV/4A.webp'),
                            url:"https://www.mi.com/buy?product_id=11843"
                        },
                        {
                            contentName:'Redmi电视A55',
                            imgUrl:require('@/assets/img/Tab/TV/A55.webp'),
                            url:"https://www.mi.com/buy?product_id=12809"
                        },
                        {
                            contentName:'全面屏电视E32C',
                            imgUrl:require('@/assets/img/Tab/TV/E32C.webp'),
                            url:"https://www.mi.com/mitvall-screen/e32c/"
                        },
                        {
                            contentName:'全面屏电视E43K',
                            imgUrl:require('@/assets/img/Tab/TV/E43K.webp'),
                            url:"https://www.mi.com/buy?product_id=12045"
                        },
                        {
                            contentName:'全面屏电视E65X',
                            imgUrl:require('@/assets/img/Tab/TV/E65X.webp'),
                            url:"https://www.mi.com/buy?product_id=12849"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
