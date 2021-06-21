// pages/my1/my1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ip:"",
        time:"20:25",
        date:"2020-12-23",
        index:0,
        city:["北京","上海","广州","深圳"],
        times:"",
        dates:"",
        citys:""
    },
    bindTimeChange:function(e){
        console.log(e.detail.value);
        this.setData({
            time:e.detail.value
        })
    },

    bindDateChange:function(e){
        console.log(e.detail.value);
        this.setData({
            date:e.detail.value
        })
    },

    bindCityChange:function(e){
        console.log(e.detail.value);
        this.setData({
            index:e.detail.value
        })
    },
    ip:function(e){
        console.log(e.detail.value);
        this.setData({
            ip:e.detail.value
        })
    },
    btn:function(){
        var that=this;
        wx.request({
            // method:'post',
            url: `http://${that.data.ip}:666/get2`,
            data:{
                "times":this.data.time,
                "dates":this.data.date,
                "citys":this.data.city[that.data.index]
            },
            header:{},
            success(res){
                console.log(res.data);
                that.setData({
                    times:res.data.times,
                    dates:res.data.dates,
                    citys:res.data.citys
                });
            }
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})