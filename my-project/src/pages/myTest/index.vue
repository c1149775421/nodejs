<template>
  <div class="container">
    <input type="text" v-model="test">
    <div class="btn" @click="clear">清空</div>
    {{test}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      test:'My Test'
    }
  },
  methods:{
    clear(){
      let that = this
      that.test=''
    }
  }
}
</script>

<style scoped>
  input{
    border: 1px solid gray;
    width: 60%;
    margin-bottom: 50rpx;
  }
  .btn{
    background-color: rgb(103, 179, 223);
    padding: 20rpx 40rpx;
    margin-bottom: 20rpx;
    border-radius: 20rpx;
    box-shadow: 2px 5px 8px gray;
  }
</style>
