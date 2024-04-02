// pages/component-page/form/checkbox/checkbox.js
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