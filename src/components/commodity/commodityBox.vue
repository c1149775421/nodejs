<template>
    <div>
        <div class="commodity">
            <div class="commodity_box" v-for="(item,index) in list" :key="index">
                <div @click="action(item)">
                    <div class="img_box">
                        <img :src="item.imgUrl" />
                    </div>
                    <p class="pName">
                        {{item.name}}
                    </p>
                    <p class="pPrice">
                        {{item.price}}￥
                    </p>
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
.commodity{
//   background-color: lightgray;
  height: 30vh;
  width: 87%;
  margin-top: 1%;
  margin-bottom: 2%;
  margin-left: 8%;
  .commodity_box{
      background-color: #fff;
    //   border-top: 2px solid #f60;
      float: left;
      width: 15.1%;
      height: 30vh;
      margin-right: 1.2vw;
      text-align: center;
      .pName{
          margin-top: 0;
          font-size: 20px;
      }
      .pPrice{
          margin-top: -1.8vh;
      }
      .img_box{
        //   width: 15%;
          img{
            height: 20vh;
          }
      }
      &:hover{
          color: #ff6700;
          box-shadow: 2px 5px 8px gray;
          .pPrice{
              color: #000;
          }
      }
  }
}
</style>