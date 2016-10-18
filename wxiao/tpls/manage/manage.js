//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    item: {
      precept:{
        "src": "/images/test_ziceyongyao.png",
        "title": "自测用药",
        "describe": "个性化用药及健康方案"
      },
      symptom: {
        "src": "/images/anbingzhaoyao.png",
        "title": "按病找药",
        "describe": "具体症状定点清除"
      },
      record: {
        "src": "/images/yongyaojilu.png",
        "title": "用药记录"
      },
      inquiry: {
        "src": "/images/chunyuyishengicon.png",
        "title": "快速问诊"
      }
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
