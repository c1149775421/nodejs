// pages/my2/my2.js
Page({
    data: {
        ip:"",
        sj:[],
        bbs:[]
    },

    ip:function(e){
        console.log(e.detail.value);
        this.setData({
            ip:e.detail.value
        })
    },

    submit:function(e){
        this.setData({
            sj:e.detail.value
        });
        var that=this;
        console.log(this.data.sj);
        wx.request({
            // method:'post',
            url: 'http://'+this.data.ip+':666/get1',
            data:{
                "gender":this.data.sj.gender,
                "name":this.data.sj.name,
                "skills":this.data.sj.skills,
                "opinion":this.data.sj.opinion
            },
            header:{},
            success(res){
                console.log(res.data);
                that.setData({
                    // bbs:{"name":res.data.name,
                    // "gender":res.data.gender,
                    // "skills":res.data.skills,
                    // "opinion":res.data.opinion}
                    bbs:[res.data.name,res.data.gender,res.data.skills,res.data.opinion]
                });
            }
        })
    }
})