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
    navList:[
        {
          url:'/images/s1.png',
          name:'干货',
          jump:'cargo'
        },
         {
          url:'/images/s2.png',
          name:'购物车',
          jump:'shopcar'

        },
        {
          url:'/images/s3.png',
          name:'分类',
          jump:'classification'
        },
         {
          url:'/images/s4.png',
          name:'男性',
          jump:'male'
        },
        {
          url:'/images/s5.png',
          name:'女性',
          jump:'female'
        },
         {
          url:'/images/s6.png',
          name:'老人',
          jump:'old'
        },
        {
          url:'/images/s7.png',
          name:'京东到家',
          jump:'jingdong'
        },
         {
          url:'/images/s8.png',
          name:'健康体检',
          jump:'test'
        }
      ],
      hUrl:'/images/healthproduct.jpg',
      healthList:[
      {
        name:'增强免疫',
      },
      {
        name:'塑形瘦身',
      },
      {
        name:'美容养颜',
      },
      {
        name:'抗疲劳',
      },
      {
        name:'润肠通便',
      },
      {
        name:'补气养血',
      }
      ],
      healthList2:{
        name:'三页通便茶',
        desc:'润肠通便 排毒养颜',
        url:'/images/healthproduct2-1.jpg'
        },
        healthList3:{
        name:'枣仁安神颗粒',
        desc:'安神补脑 祝您入睡',
        url:'/images/healthproduct2-2.jpg'
        },
        healthList4:{
        name:'澳洲小犀牛鼻炎喷雾',
        desc:'缓解鼻塞 一喷见效',
        url:'/images/healthproduct2-3.jpg'
        },
        // choiceList: [
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         },
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         },
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         },
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         },
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         },
        //         {
        //           "img":"/images/shopList1.jpg",
        //           "love":"/images/love.png",
        //           "title":"糖护士血糖仪专用扣扣",
        //           "price":"￥288.00",
        //           "command":"954"
        //         }
        //     ]

    },

   onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8088/mock/shopList.json',
      // url: 'http://felixlu.bceapp.com/list.php',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        setTimeout(function () {
          that.setData({
            shopList: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
    },

  //事件处理函数
  // lower:function(){
  //   var that =this;
  //   this.setData({
  //     loadingHidden:false
  //   });
  //   wx.request({
  //     url:'http://localhost:8088/mock/shopMore.json',
  //     header: {
  //         'Content-Type': 'application/json'
  //     },
  //     success:function(res){
  //       setTimeout(function(){
  //           that.setData({
  //             shopList : that.data.shopList.concat(res.data),
  //             loadingHidden:true,
  //             // scrollTop:1
  //           });
  //       },1500)
  //     }
  //   });
  // },
  //滑动到底部触发

})
