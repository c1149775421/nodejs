<template>
    <div>
        <div id="box">
            <ul class="list">
                <li v-for="(item,i) in banners" :key="i">
                    <img :src="item" alt="图片丢失" v-if="(i+1)==index">
                </li>
            </ul>
            <ul class="count">
                <li v-for="num in 4" :key="num" :class="{current:num==index}">
                    {{num}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            banners:[
                // require('@/assets/images/ad1.png'),
                // require('@/assets/images/ad2.png'),
                // require('@/assets/images/ad3.png'),
                // require('@/assets/images/ad4.png')
                require('@/assets/img/Pic/mi11Ultra.jpg'),
                require('@/assets/img/Pic/mi10S.webp'),
                require('@/assets/img/Pic/RedmiMax86.webp'),
                require('@/assets/img/Pic/Pro15.webp')
            ],
            index:1
        }
    },
    mounted(){
        setInterval(() => {
            if (this.index>=4) return this.index = 1
            this.index ++
        }, 3000);
    }
}
</script>

<style scoped>
/* 图片的样式 */
#box ul li{
    list-style: none;
}
#box{
    width: 70%;
    margin-left: 23%;
    /* height: 455px; */
    height: 70vh;
    background-color: #ccc;
    /* border-radius: 5px; */
    position: relative;
}
#box .list{
    position: relative;
    /* height: 455px; */
    height: 70vh;
}
#box .list li{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 0;
}
#box img{
    width: 100%;
    height: 70vh;
}
/* 数字的样式 */
#box .count{
    position: absolute;
    /* left: 650px; */
    left: 40%;
    bottom: 40px;
}
#box .count li{
    color: #fff;
    background-color: #6D6B6A;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    float: left;
    margin-right: 5px;
    opacity: 0.7;
    line-height: 20px;
}
#box .count li.current{
    color: #fff;
    font-weight: bold;
    background-color: #f60;
    opacity: 0.7;
}
</style>