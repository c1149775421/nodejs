<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <button @click="test({url:'/pages/counter/main'})">去往Vuex示例页面</button>
    <button @click="test({url:'/pages/myTest/main'})">去往我的测试页面</button>
    <button @click="test({url:'/pages/test/main'})">去往test页面</button>
    <button @click="test({url:'/pages/test2/main'})">去往test2页面</button>
    
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      userInfo: {
        nickName: 'mpvue'
      }
    }
  },

  components: {
    card
  },

  methods: {
    test(url){
      wx.navigateTo(url)
    },
    bindViewTap () {
      const url = '../logs/main'
      console.log(mpvuePlatform)
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
    }
  },

  created () {

  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
</style>
