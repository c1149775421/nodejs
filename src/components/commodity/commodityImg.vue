<template>
    <div class="allData">
        <div class="commodityImg" v-for="(item,index) in list" :key="index">
            <div class="img_box" @click="action(item)">
                <img :src="item.imgUrl"/>
                <div class="text_box">
                    <div class="text">
                        {{item.name}}
                    </div>
                    <div class="price">
                        ¥{{item.price}}
                    </div>
                    <button class="btn">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    methods:{
        action(item){
            // location.href=item.url;
            window.open(item.url)
        }
    }
}
</script>

<style scoped lang="scss">
.allData{
    height: 300px;
}
.commodityImg{
    background-color: #fff;
    float: left;
    width: 14.1%;
    height: 45vh;
    margin-top: 2%;
    margin-bottom: 2%;
    // margin-left: 8%;
    .img_box{
        // background-color: #fff;
        width: 100%;
        height: 40  vh;
        margin-right: 1.2vw;
            text-align: center;
        img{
            width: 95%;
            transition: width,transform 0.5s;
            margin-top: 3%;
            &:hover{
                transform:scale(1.05,1.05)
                // width: 105%;
                // box-shadow: 2px 5px 8px gray;
            }
        }
        .text_box:hover{
            color: #ff6700;
            .price{
                color: #000;
            }
        }
    }
}
</style>