
Page({
  data: {
    motto: 'Hello World',
    diseasItem: []
  },
  accordion: function(e){
    var _index = e.target.dataset.index;
    var diseasItem = this.data.diseasItem;

    for(var i =0; i< diseasItem.length; i++){
      if( i==_index ){
        diseasItem[_index].upIsDowm = !diseasItem[_index].upIsDowm;
      }else{
        diseasItem[i].upIsDowm = "true";
      }   
    }
    
    this.setData({
      "diseasItem": diseasItem
    });
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://localhost:8088/mock/disease.json",
      header: {
        'Content-Type': 'application/json'
      },
      
      success: function(res){
        that.setData({
          diseasItem:  res.data 
        });
         console.log(res.data)
      }
    });

  }
})
