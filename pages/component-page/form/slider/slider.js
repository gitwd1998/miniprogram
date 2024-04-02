// pages/component-page/form/slider/slider.js
Page({
  data: {
    step: 1,
    disabled: false,
    value: 50,
    activeColor: '#1aad19',
    backgroundColor: '#e9e9e9',
    blockColor: '#ffffff',
    blockSize: 28,
    showValue: false,
  },
  changeStep(e) {
    this.setData({
      step: e.detail.value
    })
  },
  changeDisabled(e) {
    this.setData({
      disabled: e.detail.value
    })
  },
  changeValue(e) {
    this.setData({
      value: e.detail.value
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
  changeBlockColor(e) {
    this.setData({
      blockColor: e.detail.value
    })
  },
  changeBlockSize(e) {
    this.setData({
      blockSize: e.detail.value
    })
  },
  changeShowValue(e) {
    this.setData({
      showValue: e.detail.value
    })
  },
})