// pages/component-page/base/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 20,
    showInfo: false,
    fontSize: 16,
    borderRadius: 0,
    strokeWidth: 6,
    activeColor: '#09BB07',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: 0,
    activeModeList: ['backwards', 'forwards'],
    duration: 30,
  },
  changePercent(e) {
    this.setData({
      percent: e.detail.value
    })
  },
  changeShowInfo(e) {
    this.setData({
      showInfo: e.detail.value
    })
  },
  changeFontSize(e) {
    this.setData({
      fontSize: e.detail.value
    })
  },
  changeBorderRadius(e) {
    this.setData({
      borderRadius: e.detail.value
    })
  },
  changeStrokeWidth(e) {
    this.setData({
      strokeWidth: e.detail.value
    })
  },
  changeActiveColor(e) {
    this.setData({
      activeColor: e.detail.value
    })
  },
  changeBackgroundColor(e) {
    this.setData({
      backgroundColor: e.detail.value
    })
  },
  changeActive(e) {
    this.setData({
      active: e.detail.value
    })
  },
  changeActiveMode(e) {
    this.setData({
      activeMode: e.detail.value
    })
  },
  changeDuration(e) {
    this.setData({
      duration: e.detail.value
    })
  },
})