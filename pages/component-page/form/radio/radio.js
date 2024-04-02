// pages/component-page/form/radio/radio.js
Page({
  data: {
    openType: '',
    openTypeList: ['contact', 'share', 'getPhoneNumber', 'getUserInfo', 'launchApp', 'openSetting', 'feedback', 'feedback']
  },
  changeOpenType(e) {
    this.setData({
      openType: e.detail.value
    })
  }
})