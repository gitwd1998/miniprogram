// pages/component-page/base/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: 23,
    color: '',
    type: 0,
    typeList: [ 'success', 'success_no_circle', 'info', 'info_circle', 'circle', 'waiting', 'waiting_circle', 'cancel', 'download', 'search', 'clear' ],
  },

  changeType(e) {
    this.setData({
      type: e.detail.value
    })
  },
  changeSize(e) {
    this.setData({
      size: e.detail.value
    })
  },
  changeColor(e) {
    this.setData({
      color: e.detail.value
    })
  },
})