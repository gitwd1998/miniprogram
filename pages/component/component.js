// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: -1,
    list: [{
        title: '视图容器',
        icon: 'info',
        items: [{
            name: 'view',
            url: '../component-page/view/view/view'
          },
          {
            name: 'scroll-view',
            url: '../component-page/view/scroll-view/scroll-view'
          },
          {
            name: 'swiper',
            url: '../component-page/view/swiper/swiper'
          },
          {
            name: 'moveable-view',
            url: '../component-page/view/moveable-view/moveable-view'
          },
          {
            name: 'cover-view',
            url: '../component-page/view/cover-view/cover-view'
          },
        ]
      },
      {
        title: '基础内容',
        icon: 'info',
        items: [{
            name: 'text',
            url: '../component-page/base/text/text'
          },
          {
            name: 'icon',
            url: '../component-page/base/icon/icon'
          },
          {
            name: 'progress',
            url: '../component-page/base/progress/progress'
          },
          {
            name: 'rich-text',
            url: '../component-page/base/rich-text/rich-text'
          },
        ]
      },
      {
        title: '表单组件',
        icon: 'info',
        items: [{
            name: 'button',
            url: '../component-page/form/button/button'
          },
          {
            name: 'checkbox',
            url: '../component-page/form/checkbox/checkbox'
          },
          {
            name: 'form',
            url: '../component-page/form/form/form'
          },
          {
            name: 'input',
            url: '../component-page/form/input/input'
          },
          {
            name: 'label',
            url: '../component-page/form/label/label'
          },
          {
            name: 'picker',
            url: '../component-page/form/picker/picker'
          },
          {
            name: 'picker-view',
            url: '../component-page/form/picker-view/picker-view'
          },
          {
            name: 'radio',
            url: '../component-page/form/radio/radio'
          },
          {
            name: 'slider',
            url: '../component-page/form/slider/slider'
          },
          {
            name: 'switch',
            url: '../component-page/form/switch/switch'
          },
          {
            name: 'textarea',
            url: '../component-page/form/textarea/textarea'
          },
          {
            name: 'editor',
            url: '../component-page/form/editor/editor'
          },
        ]
      },
      {
        title: '导航',
        icon: 'info',
        items: [{
          name: 'navigator',
          url: '../component-page/nav/navigator/navigator'
        }, ]
      },
      {
        title: '媒体组件',
        icon: 'info',
        items: [{
            name: 'image',
            url: '../component-page/media/image/image'
          },
          {
            name: 'video',
            url: '../component-page/media/video/video'
          },
          {
            name: 'camera',
            url: '../component-page/media/camera/camera'
          },
          {
            name: 'live-pusher',
            url: '../component-page/media/live-pusher/live-pusher'
          },
          {
            name: 'live-player',
            url: '../component-page/media/live-player/live-player'
          },
        ]
      },
      {
        title: '地图',
        icon: 'info',
        items: [{
            name: 'map',
            url: '../component-page/map/map/map'
          },
          {
            name: '腾讯位置服务示例中心',
            url: '../component-page/map/location-service/location-service'
          },
        ]
      },
      {
        title: '画布',
        icon: 'info',
        items: [{
            name: 'canvas-2d',
            url: '../component-page/canvas/canvas-2d/canvas-2d'
          },
          {
            name: 'webgl',
            url: '../component-page/canvas/webgl/webgl'
          },
        ]
      },
      {
        title: '开放能力',
        icon: 'info',
        items: [{
            name: 'ad',
            url: '../component-page/open/ad/ad'
          },
          {
            name: 'open-data',
            url: '../component-page/open/open-data/open-data'
          },
          {
            name: 'web-view',
            url: '../component-page/open/web-view/web-view'
          },
        ]
      },
      {
        title: '无障碍访问',
        icon: 'info',
        items: [{
          name: 'aria-component',
          url: '../component-page/aria/aria-component/aria-component'
        }, ]
      },
    ],
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
    console.log(this);
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