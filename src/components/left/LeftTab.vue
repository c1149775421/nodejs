<template>
  <div class="container">
        <ul class="nav nav-pills nav-stacked" id="leftTab">
            <li v-for="(item,index) in list" :key="index">
                <a href="javascript:void(0)" class="a1">
                    {{item.btnName}}<span class="cates_r">></span>
                    <div class="honor" :style="{top: -20-index*42+'px'}">
                        <ul class="row list-unstyled text-left">
                            <li v-for="(item2,index2) in item.contentList" :key="index2" class="col-md-3 col-sm-3 col-xs-3">
                                <a :href="item2.url" target="blank">
                                    <img :src="item2.imgUrl" alt=""/>
                                    {{item2.contentName}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </a>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>

<style scoped lang="scss">
    #leftTab{
        position: absolute;
        margin-top: 10px;
        width: 200px;
        background-color: rgba(105,101,101,.6);
        padding: 20px 0 20px 0;//上右下左
    }

    #leftTab .a1{
        text-decoration: none;
        color: #fff;
        padding-left: 20px;
        line-height: 20px;  
    }

    #leftTab .a1:hover{
        background-color: #ff6700;
        .honor{
            display: block;
        }
    }

    #leftTab .a1 .honor{
        position: absolute;
        display: none;
        background-color: #fff;
        color: #000;
        border-top: 1px solid #ff6700;
        box-shadow: 2px 5px 8px #757575;
        width: 900px;
        height: 460px;
        position: absolute;
        left: 200px;
        ul{
            margin-top: 20px;
            padding-left: 25px;
            li{
                margin-bottom: 20px;
                height: 41px;
                a{
                    color: #000;
                    text-decoration: none;
                    &:hover{
                        color: #ff6700;
                    }
                }
                img{
                    width: 20%;
                }
            }
        }
    }

    .cates_r{
        margin-left: 70%;
    }
</style>