<template>
    <div class="leftData">
        <Left :list="listData"/>
    </div>
</template>

<script>
import Left from './Left.vue'
export default {
    components:{
        Left
    },
    data(){
        return{
            listData:[
                {
                    btnName:"手机",
                    box_content:[
                        {
                            name:"小米MIX FOLD",
                            img:require('@/assets/img/Top/Phone/mixFOLD.webp'),
                            url:"https://www.mi.com/mixfold"
                        },
                        {
                            name: "小米10S",
                            img:require('@/assets/img/Top/Phone/mi10S.webp'),
                            url:"https://www.mi.com/mi10s"
                        },
                        {
                            name:"小米11Pro",
                            img:require('@/assets/img/Top/Phone/mi11Pro.webp'),
                            url:"https://www.mi.com/mi11Pro"
                        },
                        {
                            name:"小米11Ultra",
                            img:require('@/assets/img/Top/Phone/mi11Ultra.webp'),
                            url:"https://www.mi.com/mi11ultra"
                        }
                    ]
                },
                {
                    btnName:"电视",
                    box_content:[
                        {
                            name:"小米透明电视",
                            img:require('@/assets/img/Top/TV/touming.webp'),
                            url:"https://www.mi.com/mitv-great/hyaline"
                        },
                        {
                            name:"小米电视大师65英寸 OLED",
                            img:require('@/assets/img/Top/TV/dashi65OLED.webp'),
                            url:"https://www.mi.com/buy?product_id=12049"
                        },
                        {
                            name:"小米电视大师82英寸",
                            img:require('@/assets/img/Top/TV/dashi82.webp'),
                            url:"https://www.mi.com/buy?product_id=12829"
                        },
                        {
                            name:"Redmi Max 86英寸",
                            img:require('@/assets/img/Top/TV/RedmiMax86.webp'),
                            url:"https://www.mi.com/buy?product_id=13498"
                        }
                    ]
                },
                {
                    btnName:"电脑",
                    box_content:[
                        {
                            name:"RedmiBook Air13",
                            img:require('@/assets/img/Top/PC/RedmiBookAir13.webp'),
                            url:"https://www.mi.com/buy?product_id=10000253"
                        },
                        {
                            name:"RedmiBook Pro14",
                            img:require('@/assets/img/Top/PC/RedmiBookPro14.webp'),
                            url:"https://www.mi.com/redmibook/pro14"
                        },
                        {
                            name:"RedmiBook Pro15",
                            img:require('@/assets/img/Top/PC/RedmiBookPro15.webp'),
                            url:"https://www.mi.com/redmibook/pro15"
                        },
                        {
                            name:"RedmiBook 16",
                            img:require('@/assets/img/Top/PC/RedmiBook16.webp'),
                            url:"https://www.mi.com/buy/detail?product_id=10000242"
                        }
                    ]
                }
            ]
        }
    }
}
</script>