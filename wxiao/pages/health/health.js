//index.js
//获取应用实例
var app = getApp();

var commonSwiper = require('../../tpls/bannertap/bannertap.js');

Page({
  data: {
    healthPack:[{
      "src": "/images/seek_durg_item_bg3.png",
      "praise": "/images/collection.png",
      "praiseClick": "/images/collection01.png",
      "praiseNumber": "5",
      "list": [
        "/images/jibing298.png",
        "/images/jibing300.png",
        "/images/jibing303.png",
        "/images/jibing343.png",
        "/images/jibing372.png",
        "/images/jibing381.png",
        "/images/jibing411.png",
        "/images/jibing421.png"
      ]
    },{
      "src": "/images/seek_durg_item_bg3.png",
      "praise": "/images/collection.png",
      "praiseClick": "/images/collection01.png",
      "praiseNumber": "4",
      "list": [
        "/images/jibing298.png",
        "/images/jibing300.png",
        "/images/jibing303.png",
        "/images/jibing343.png",
        "/images/jibing372.png",
        "/images/jibing381.png",
        "/images/jibing411.png",
        "/images/jibing421.png"
      ]
    }],
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
    },
    banneritem: {
      indexImgUrls: [
        '/images/menu6.jpg',
        '/images/menu7.jpg'
      ],
      swiper: {
        indicatorDots: false,
        autoplay: true, 
        interval: 2000,
        duration: 300
      },
      current: 0
    }
  },
  swiperCurrent: function(event) {
    commonSwiper.swiperCurrent(event,this,this.data.current);
  },
  swiperChange: function(event) {
    commonSwiper.swiperChange(event,this,this.data.current);
  }
})
