// pages/component-page/form/button/button.js
Page({
  data: {
    text: '按钮',
    size: 'default',
    sizeList: ['default', 'mini'],
    type: 0,
    typeList: ['default', 'primary', 'warn'],
    plain: false,
    disabled: false,
    loading: false,
  },
  changeText(e) {
    this.setData({
      text: e.detail.value
    })
  },
  changeSize(e) {
    this.setData({
      size: e.detail.value
    })
  },
  changeType(e) {
    this.setData({
      type: e.detail.value
    })
  },
  changePlain(e) {
    this.setData({
      plain: e.detail.value
    })
  },
  changeDisabled(e) {
    this.setData({
      disabled: e.detail.value
    })
  },
  changeLoading(e) {
    this.setData({
      loading: e.detail.value
    })
  }
})