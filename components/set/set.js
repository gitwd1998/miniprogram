// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo: '',
    device_position:'back'
  },

  loadSuccess(s){
    console.log('图片加载成功', s)
  },
  loadError(e){
    console.log('图片加载失败', e)
  },
  takePhoto(){
    let t = wx.createCameraContext()
    t.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          photo: res.tempImagePath
        }) 
      },
    })
  },
  takePhotoError(e){
    console.log(e)
  },
  handleChange(e){
    this.setData({
      device_position: e.detail.value
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