<template>
    <div>
        <div id="box">
            <ul class="list">
                <transition-group name="fade">
                    <li v-for="(item,i) in banners" :key="item">
                        <img :src="item" alt="图片丢失" v-if="(i+1)==index">
                    </li>
                </transition-group>
            </ul>
            <ul class="count">
                <li v-for="num in 4" :key="num" :class="{current:num==index}" @mouseover="over(num)" @mouseout="out">
                    {{num}}
                </li>
            </ul>
        </div>
        {{str}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            banners:[
                require('@/assets/images/ad1.png'),
                require('@/assets/images/ad2.png'),
                require('@/assets/images/ad3.png'),
                require('@/assets/images/ad4.png')
            ],
            index:1,
            setInt: null
        }
    },
    mounted(){
        this.init();
    },
    computed:{
        ...mapState({
            str:state=>state.swiper.str
        })
    },
    methods:{
        over(num){
            this.index=num;
            clearInterval(this.setInt);
        },
        out(){
            this.init();
        },
        init(){
            this.setInt = setInterval(() => {
                if (this.index>=4) return this.index = 1;
                this.index ++;
            }, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 图片的样式 */
#box ul li{
    list-style: none;
}
#box{
    width: 100%;
    height: 455px;
    background-color: #ccc;
    border-radius: 5px;
    position: relative;
}
#box .list{
    position: relative;
    height: 455px;
}
#box .list li{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    margin: auto;
    margin-top: 0;
}
#box img{
    width: 100%;
}
/* 数字的样式 */
#box .count{
    position: absolute;
    left: 650px;
    bottom: 40px;
}
#box .count li{
    color: #fff;
    background-color: #6D6B6A;
    width: 20px;
    height: 20px;
    border-radius: 20px;text-align: center;
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