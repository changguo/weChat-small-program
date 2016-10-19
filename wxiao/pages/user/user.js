Page({
  data: {
    modalHidden: true,
    toastHidden: true,

    userInfo: {
      username: '',
      password: ''
    },

    actionSheet: {
      actionSheetHidden: false,
      actionSheetItems: ['催办', '举报']
    }
  },

  onLoad: function(options) {
    // console.log('loaded');
  },
  onReady: function() {
    // console.log('ready');
  },
  onHide: function() {
    // console.log('hidden');
  },
  onUnload: function() {
    // console.log('unload');
  },
  onShow: function() {
    var u = wx.getStorageSync('username');
    if(!u) {
      this.setData({
        userInfo: {
          username: '',
          password: ''
        },
        modalHidden: false
      });
    }
  },

  actionConfirm: function () {
    wx.setStorageSync('username', this.data.userInfo.username);
    wx.setStorageSync('password', this.data.userInfo.password);
    this.setData({
      modalHidden: true
    })
  },
  actionCancel: function () {
    this.setData({
      modalHidden: true
    })
  },

  saveUsername: function (event) {
    this.setData({
      'userInfo.username': event.detail.value
    })
  },
  savePassword: function (event) {
    this.setData({
      'userInfo.password': event.detail.value
    })
  },

  bindItemTap: function (event) {
    switch (event.target.dataset.name) {
      case '催办':
        this.setData({
          toastHidden: false
        })
        break;
      case '举报':
        console.log(1);
        break;
    }
  },
  cancelActionSheet: function () {
    this.setData({
      'actionSheet.actionSheetHidden': true
    });
  },
  actionSheetChange: function () {
    console.log(3);
  },

  toastChange: function () {
    this.setData({
      toastHidden: true
    });
  }
});
