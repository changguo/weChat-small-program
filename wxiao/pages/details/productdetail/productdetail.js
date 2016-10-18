Page({
  data:{
    id:0,
    flag:0,
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    imgDetails:{
      url:'/images/szxq1.jpg'
    }
  },
  bindChangeColor:function(event){
    this.setData({
      flag:1
    })
  },
 onLoad: function (params) {
    this.setData({
      id: params.id
    })
    console.log(this.data.id)
  },
  onReady:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8088/mock/shopList.json',
      header: {
           'Content-Type': 'application/json'
       },
      success: function(res) {
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].product.id==that.data.id){
           that.setData({
            shopList: res.data[i],
            shopListProduct: res.data[i].product
          })
         }
        }


      },
      fail: function (error) {
        console.log(error);
      }
    })
   }
})