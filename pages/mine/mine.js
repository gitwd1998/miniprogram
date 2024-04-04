// pages/mine/mine.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: '',
      avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    },
    canIUseButttonChooseAvatar: wx.canIUse('button.open-type.chooseAvatar'),
    canIUseInputNickname: wx.canIUse('input.type.nickname'),
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseGetUserInfo: wx.canIUse('button.open-type.getUserInfo'),


    // userInfo: null,
    // canIUseGetUserInfo: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: !!wx.getUserProfile,
    // canIUseOpenData: wx.canIUse('open-data'), // 如需尝试获取用户信息可改为false
    // genderMap: ['-', '男', '女']
  },

  onLoad() {
    console.log(1, getApp());
    console.log(2, getCurrentPages());
    console.log(3, this);
  },
  /**
   * 手动获取用户信息
   * 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
   */
  getUserProfile() {
    wx.getUserProfile({
      desc: '我要获取你的信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      lang: "zh_CN",
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },

  /**
   * 手动获取用户信息
   * 不推荐使用wx.getUserInfo获取用户信息，自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
   */
  getUserInfo() {
    wx.getUserInfo({
      lang: 'zh_CN',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: (err) => {
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },

  toLogs(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // getUserInfo(e) {
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //   })
  // },
  bindChooseavatar(e) {
    this.setData({
      'userInfo.avatarUrl': e.detail.avatarUrl
    })
  },
  bindGetphonenumber(e) {
    console.log(e);
  },
  bindChange(e) {
    this.setData({
      'userInfo.nickName': e.detail.value
    })
  }
})