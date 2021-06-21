// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },
  num1:0,//保存第一个数字
  num2:0,//保存第二个数字
  num1change:function(e){
    this.num1 = Number(e.detail.value)
    console.log('第一个数字为：'+this.num1)
  },
  num2change:function(e){
    this.num2 = Number(e.detail.value)
    console.log('第二个数字为：'+this.num2)
  },
  compare:function(e){
    // console.log('比较按钮被点击了')
    // console.log(e)
    var str = ''
    if(this.num1 > this.num2){
      str = '第一个数大'
    }
    if(this.num2 > this.num1){
      str = '第二个数大'
    }
    if(this.num1 == this.num2){
      str = '两数相等'
    }
    this.setData(
      {
        result: str
      }
      )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log('页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('页面初次加载完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('页面卸载')
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('用户下拉触顶')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     //console.log('用户上拉触底')
  },

  // onPageSroll: function(){
  //   console.log('正在滚动页面')
  //   console.log('滚动距离：'+options.scrollTop)
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户点击分享')
  }
})