// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: -1,
    list: [
      {
        title: '视图容器',
        icon: 'info',
        items: [
          { name: 'view', url: '/'},
          { name: 'scroll-view', url: '/'},
          { name: 'swiper', url: '/'},
          { name: 'moveable-view', url: '/'},
          { name: 'cover-view', url: '/'},
        ]
      },
      {
        title: '基础内容',
        icon: 'info',
        items: [
          { name: 'text', url: '/'},
          { name: 'icon', url: '/'},
          { name: 'progress', url: '/'},
          { name: 'rich-text', url: '/'},
        ]
      },
      {
        title: '表单组件',
        icon: 'info',
        items: [
          { name: 'button', url: '/'},
          { name: 'checkbox', url: '/'},
          { name: 'form', url: '/'},
          { name: 'input', url: '/'},
          { name: 'label', url: '/'},
          { name: 'picker', url: '/'},
          { name: 'picker-view', url: '/'},
          { name: 'radio', url: '/'},
          { name: 'switch', url: '/'},
          { name: 'textarea', url: '/'},
          { name: 'editor', url: '/'},
        ]
      },
      {
        title: '导航',
        icon: 'info',
        items: [
          { name: 'navigator', url: '/'},
        ]
      },
      {
        title: '媒体组件',
        icon: 'info',
        items: [
          { name: 'image', url: '/'},
          { name: 'video', url: '/'},
          { name: 'camera', url: '/'},
          { name: 'live-pusher', url: '/'},
          { name: 'live-player', url: '/'},
        ]
      },
      {
        title: '地图',
        icon: 'info',
        items: [
          { name: 'map', url: '/'},
          { name: '腾讯位置服务示例中心', url: '/'},
        ]
      },
      {
        title: '画布',
        icon: 'info',
        items: [
          { name: 'canvas-2d', url: '/'},
          { name: 'webgl', url: '/'},
        ]
      },
      {
        title: '开放能力',
        icon: 'info',
        items: [
          { name: 'ad', url: '/'},
          { name: 'open-data', url: '/'},
          { name: 'web-view', url: '/'},
        ]
      },
      {
        title: '无障碍访问',
        icon: 'info',
        items: [
          { name: 'aria-component', url: '/'},
        ]
      },
    ],
    buttons: [
      { text: '取消' },
      { text: '确认' }
    ],
    imgUrls:[
      'http://pic50.photophoto.cn/20190305/1190120588923839_b.jpg',
      'http://pic50.photophoto.cn/20190305/1190120588923839_b.jpg',
      'http://pic50.photophoto.cn/20190305/1190120588923839_b.jpg',
      'http://pic50.photophoto.cn/20190305/1190120588923839_b.jpg',
      'http://pic50.photophoto.cn/20190305/1190120588923839_b.jpg',
    ],
    radioItems: [
      {name: 'radio item A', value: '0', checked: true},
      {name: 'radio item B', value: '1', checked: false}
    ],
    checkboxItems: [
      {name: 'checkbox item A', value: '0', checked: true},
      {name: 'checkbox item B', value: '1', checked: false}
    ],
  },

  handleSelected(e) {
    this.setData({ selected: e.currentTarget.dataset.index })
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