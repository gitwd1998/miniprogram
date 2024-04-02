// pages/expand-page/feedback/toptips/toptips.js
Page({
  data: {
    showTips: false,
    scene: '',
  },
  openTips(e) {
    this.setData({
      showTips: true,
      scene: e.currentTarget.dataset.scene || '',
    })
  },
  closeTips() {
    this.setData({
      showTips: false,
      scene: '',
    })
  }
})