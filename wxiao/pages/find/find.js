//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   imgUrls:[
      '/images/seek_durg_item_bg1.png',
      '/images/seek_durg_item_bg2.png',
      '/images/seek_durg_item_bg3.png',
      '/images/seek_durg_item_bg4.png',
      '/images/seek_durg_item_bg5.png',
    ],
    shopbanner:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000
    },
    findIcon:'/images/jibingzhengz.png',
    searchIcon:[
    {
      src:'/images/search-icon1.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    },
     {
      src:'/images/search-icon2.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    },
     {
      src:'/images/search-icon3.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    },
     {
      src:'/images/search-icon4.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    },
     {
      src:'/images/search-icon5.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    },
     {
      src:'/images/search-icon6.png',
      title:'我的药箱',
      desc:'居家、旅行常备药推荐'
    }
    ]

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
