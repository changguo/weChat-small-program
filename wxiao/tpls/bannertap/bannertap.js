//index.js
//获取应用实例
/*var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    item: {
      indexImgUrls: [
        '/images/menu6.jpg',
        '/images/menu7.jpg'
      ],
      swiper: {
        indicatorDots: false,
        autoplay: true, 
        interval: 2000,
        duration: 300
      }
    }
  },
   swiperCurrent: function(event) {
    this.setData({
      current: event.target.dataset.index
    });
  },
  swiperChange: function(event) {
    if(event.detail.current>2){
      that.setData({
        current: 0
      });
    }else{
      this.setData({
        current: event.detail.current
      });
    }
  }
});*/
  function swiperCurrent(event,that,current) {  
    that.setData({
      banneritem:{
        current: event.target.dataset.index
      }
    });
  }
  function swiperChange(event,that,current) {
    var banneritem = that.data.banneritem;
    banneritem.current = event.detail.current;
    that.setData({
       banneritem:banneritem
    });
  }
module.exports = {
  swiperCurrent: swiperCurrent,
  swiperChange: swiperChange
}

