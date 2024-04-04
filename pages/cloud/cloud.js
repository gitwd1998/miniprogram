// pages/cloud/cloud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: -1,
    list: [
      {
        title: '用户鉴权',
        icon: 'info',
        items: [
          {
            name: '获取OpenID',
            url: '/'
          }
        ]
      },
      {
        title: '数据库',
        icon: 'info',
        items: [
          {
            name: '基本操作',
            url: '/'
          },
          {
            name: '权限管理',
            url: '/'
          },
          {
            name: '服务端时间',
            url: '/'
          },
        ]
      },
      {
        title: '存储',
        icon: 'info',
        items: [
          {
            name: '上传文件',
            url: '/'
          },
          {
            name: '下载文件',
            url: '/'
          },
          {
            name: '删除文件',
            url: '/'
          },
          {
            name: '换取临时链接',
            url: '/'
          },
          {
            name: '组件支持',
            url: '/'
          },
        ]
      },
      {
        title: '云函数',
        icon: 'info',
        items: [
          {
            name: 'WXContext',
            url: '/'
          },
          {
            name: '数据库',
            url: '/'
          },
          {
            name: '存储',
            url: '/'
          },
          {
            name: '云调用',
            url: '/'
          },
        ]
      },
    ]
  },

  handleSelected(e) {
    let { index } = e.currentTarget.dataset
    this.setData({
      selected: this.data.selected === index ? -1 : index,
    })
  },

  toPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})