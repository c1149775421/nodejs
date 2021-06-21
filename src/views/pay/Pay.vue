<template>
  <div class="concent">
    <div class="paycont">
      <Address />
      <Logistics />
      <Payment />
      <Order />
      <Message />
      <div class="clear"></div>
      <Bottom />
    </div>
  </div>
</template>

<script>
import Address from './Address.vue'
import Logistics from './Logistics.vue'
import Payment from './Payment.vue'
import Order from './Order.vue'
import Message from './Message.vue'
import Bottom from './Bottom.vue'
export default {
    components:{
      Address,
      Logistics,
      Payment,
      Order,
      Message,
      Bottom
    },
}
</script>

<style scoped>
  @import "~@/assets/css/basic.css";
  @import "~@/assets/css/iconfont.css";
  .concent{
    width: 1000px;
    margin: 0 auto;
  }
</style>