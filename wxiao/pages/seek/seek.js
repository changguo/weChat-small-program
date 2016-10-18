//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    seekItem: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  seekHidden: function(e) {
    var _index = e.target.dataset.index;
    var seekItem = this.data.seekItem;
    console.log(_index);
    for(var i=0; i<seekItem.length; i++){
      if( i == _index){
        seekItem[i].bool = false;
      }else{
        seekItem[i].bool = true;
      }
    }

    this.setData({
      seekItem: seekItem
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://localhost:8088/mock/seek.json",
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          seekItem: res.data
        });
      }
    })
  }
})
