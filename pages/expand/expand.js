// pages/expand/expand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: -1,
    list: [{
        title: '表单',
        icon: 'info',
        items: [{
            name: 'cell',
            url: '../expand-page/form/cell/cell'
          },
          {
            name: 'sliderview',
            url: '../expand-page/form/sliderview/sliderview'
          },
          {
            name: 'form',
            url: '../expand-page/form/form/form'
          },
          {
            name: 'uploader',
            url: '../expand-page/form/uploader/uploader'
          },
        ]
      },
      {
        title: '基础组件',
        icon: 'info',
        items: [{
            name: 'article',
            url: '../expand-page/base/article/article'
          },
          {
            name: 'icons',
            url: '../expand-page/base/icons/icons'
          },
          {
            name: 'badge',
            url: '../expand-page/base/badge/badge'
          },
          {
            name: 'flex',
            url: '../expand-page/base/flex/flex'
          },
          {
            name: 'footer',
            url: '../expand-page/base/footer/footer'
          },
          {
            name: 'gallery',
            url: '../expand-page/base/gallery/gallery'
          },
          {
            name: 'grid',
            url: '../expand-page/base/grid/grid'
          },
          {
            name: 'loadmore',
            url: '../expand-page/base/loadmore/loadmore'
          },
          {
            name: 'loading',
            url: '../expand-page/base/loading/loading'
          },
          {
            name: 'panel',
            url: '../expand-page/base/panel/panel'
          },
          {
            name: 'preview',
            url: '../expand-page/base/panelview/panelview'
          },
        ]
      },
      {
        title: '操作反馈',
        icon: 'info',
        items: [{
            name: 'dialog',
            url: '../expand-page/feedback/dialog/dialog'
          },
          {
            name: 'msg',
            url: '../expand-page/feedback/msg/msg'
          },
          {
            name: 'half-screen-dialog',
            url: '../expand-page/feedback/half-screen-dialog/half-screen-dialog'
          },
          {
            name: 'actionsheet',
            url: '../expand-page/feedback/actionsheet/actionsheet'
          },
          {
            name: 'toptips',
            url: '../expand-page/feedback/toptips/toptips'
          },
        ]
      },
      {
        title: '导航相关',
        icon: 'info',
        items: [{
            name: 'navigation',
            url: '../expand-page/nav/navigation/navigation'
          },
          {
            name: 'tabbar',
            url: '../expand-page/nav/tabber/tabber'
          },
        ]
      },
      {
        title: '搜索相关',
        icon: 'info',
        items: [{
          name: 'searchbar',
          url: '../expand-page/search/searchbar/searchbar'
        }, ]
      },
      {
        title: '扩展组件',
        icon: 'info',
        items: [{
            name: 'emoji',
            url: '../expand-page/expand/emoji/emoji'
          },
          {
            name: 'video-swiper',
            url: '../expand-page/expand/video-swiper/video-swiper'
          },
          {
            name: 'index-list',
            url: '../expand-page/expand/index-list/index-list'
          },
          {
            name: 'recycle-view',
            url: '../expand-page/expand/recycle-view/recycle-view'
          },
          {
            name: 'sticky',
            url: '../expand-page/expand/sticky/sticky'
          },
          {
            name: 'tabs',
            url: '../expand-page/expand/tabs/tabs'
          },
          {
            name: 'vtabs',
            url: '../expand-page/expand/vtabs/vtabs'
          },
          {
            name: 'barrage',
            url: '../expand-page/expand/barrage/barrage'
          },
          {
            name: 'select-text',
            url: '../expand-page/expand/select-text/select-text'
          },
          {
            name: 'wxml-to-canvas',
            url: '../expand-page/expand/wxml-to-canvas/wxml-to-canvas'
          },
        ]
      },
      {
        title: '多端适配（需在PC端体验）',
        icon: 'info',
        items: [{
            name: '左右伸缩',
            url: '../expand-page/adaptation/stretch/stretch'
          },
          {
            name: '换行排列',
            url: '../expand-page/adaptation/wrap-arrangement/wrap-arrangement'
          },
          {
            name: '侧边栏导航',
            url: '../expand-page/adaptation/sidebar/sidebar'
          },
          {
            name: '分页展示',
            url: '../expand-page/adaptation/paging/paging'
          },
          {
            name: '自由布局',
            url: '../expand-page/adaptation/free/free'
          },
          {
            name: '分层展示',
            url: '../expand-page/adaptation/layered/layered'
          },
          {
            name: '横向拓展',
            url: '../expand-page/adaptation/horizontal/horizontal'
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