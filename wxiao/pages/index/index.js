//index.js
//获取应用实例
var app = getApp();
var commonSwiper = require('../../tpls/bannertap/bannertap.js');
Page({
  data: {
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
    },
    motto: 'Hello World',
    scrollTop: "1",
    loadingHidden: true,
    refreshHidden: true,
    loadmoreHidden: true,
    indexList: [
      {
        "src": "/images/an_ertong.png",
        "title": "感冒"
      },{
        "src": "/images/an_gengduo.png",
        "title": "失眠"
      },{
        "src": "/images/an_laoren.png",
        "title": "便秘"
      },{
        "src": "/images/an_nanxing.png",
        "title": "补肾益精"
      },{
        "src": "/images/an_nvxing.png",
        "title": "月经不调"
      },{
        "src": "/images/an_ertong.png",
        "title": "咳嗽"
      },{
        "src": "/images/an_siji.png",
        "title": "肠胃不适"
      },{
        "src": "/images/an_ertong.png",
        "title": "更多疾病"
      }
    ]
  },
  actionToupper: function(e){
 /*   this.setData({
      refreshHidden: false
    })*/
  },
  actionTolower: function(e){
    console.log(e);
/*    this.setData({
      loadmoreHidden: false
    })*/
  },
  bindScroll: function(e){
    console.log(e)
  },
  swiperCurrent: function(event) {
    /*this.setData({
      current: event.target.dataset.index
    });*/
    commonSwiper.swiperCurrent(event,this,this.data.current);
  },
  swiperChange: function(event) {
    commonSwiper.swiperChange(event,this,this.data.current);

    /*if(event.detail.current>2){
      that.setData({
        current: 0
      });
    }else{
      this.setData({
        current: event.detail.current
      });
    }*/
  }
})
