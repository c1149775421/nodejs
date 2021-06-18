<template>
    <div class="left">
        <div class="left_box">
            <ul class="ul1">
                <li class="li1" v-for="(item,index) in list" :key="index">
                    <div class="left_btn">
                        {{item.btnName}}<span>></span>
                        <div class="left_btn_box">
                            <div class="left_btn_box_content">
                                <ul class="ul2">
                                    <li class="li2" v-for="(item2,index2) in item.box_content" :key="index2">
                                        <div class="li2_box" @click="active(item2)">
                                            <img :src="item2.img"/>
                                            {{item2.name}}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    methods:{
        active(item2){
            // location.href=item2.url;
            window.open(item2.url)
        }
    }
}
</script>

<style scoped lang="scss">
.left_box{
    float:left;
    width:15%;
    height:70vh;
    background-color:gray;
    // margin-top:2vh;
    margin-left: 8%;
    .ul1{
      list-style: none;
      padding: 0;
      background-color: gray;
      width: 100%;
      height: 65vh;
    }
    .ul1 .li1{
        &:hover{
            background-color: #ff6700;
        }
        .left_btn{
            color: #fff;
            text-align: left;
            height: 8vh;
            line-height: 7vh;
            padding-left: 10%;
            span{
                padding-left: 55%;
                color: lightgray;
                font-size: 25px;
            }
            & .left_btn_box {
                display: none;
                z-index: 10;
                position: absolute;
                width: 72%;
                height: 70vh;
                margin-top: 8%;
                left: 22.3%;
                top: 0;
                background-color: #fff;
                color: #000;
                box-shadow: 2px 5px 8px gray;
            }
            &:hover{
                .left_btn_box{
                    display: block;
                }
            }
        }
    }
    .ul2{
        list-style: none;
        padding: 0;
        width: 100%;
        height: 70vh;
        .li2{
            .li2_box{
                // background-color: #b0b0b0;
                // border-radius: 6px;
                float: left;
                text-align: left;
                width: 20%;
                height: 10vh;
                line-height: 5vh;
                margin-left: 4%;
                margin-top: 2%;
                img{
                    float: left;
                    width: 55%;
                }
                &:hover{
                    color: #ff6700;
                }
            }
        }
    }
}
</style>