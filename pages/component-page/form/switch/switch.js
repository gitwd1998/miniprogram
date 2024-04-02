// pages/component-page/form/switch/switch.js
Page({
  data: {
    checked: false,
    disabled: false,
    type: 'switch',
    typeList: ['switch', 'checkbox'],
    color: '#04BE02',
  },
  changeChecked(e) {
    this.setData({
      checked: e.detail.value
    })
  },
  changeDisabled(e) {
    this.setData({
      disabled: e.detail.value
    })
  },
  changeType(e) {
    this.setData({
      type: e.detail.value
    })
  },
  changeColor(e) {
    this.setData({
      color: e.detail.value
    })
  }
})