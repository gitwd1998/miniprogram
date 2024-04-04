//app.js
App({

  accountInfo: wx.getAccountInfoSync().miniProgram,
  globalData: {
    
  },
  onLaunch: function () {
    wx.setEnableDebug({
      enableDebug: this.accountInfo.envVersion === 'trial'
    })
    // 获取系统信息
    wx.getSystemInfo({
      success: res => {
        console.info('systemInfo', res)
      },
      fail: err => {
        console.error(err)
      }
    })

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      timeout: 3000,
      success: res => {
        console.log('wx.login', res)
        // 发送 res.code 通过request方法到后台换取 openId, sessionKey, unionId做后续操作
        wx.request({
          // url: 'https://miniprograme.applinzi.com/xinlang/miniprograme.php',
          url: 'https://gitwd.com/wd/weixin/code2Session',
          method: 'GET',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.error(err)
          },
        })
      },
      fail: err => {
        console.error(err)
      },
    })

    // console.log(wx.cloud);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function () {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('onError: ', msg)
  },

  /**
   * 当小程序主题切换时会触发此回调
   */
  onThemeChange: function (res) {
    
  },

})