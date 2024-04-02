// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 获取当前页面
  handleGet(){
    console.log(getApp())
    console.log(getCurrentPages())
  },
  // 获取用户位置信息 
  handleLocation(){
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        console.log(res)
      }
    })
  },
  // 调用微信扫一扫
  handleScan(){
    wx.scanCode({
      onlyFromCamera: true,
      scanType: [],
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.error(err)
      },
    })
  },
  // 获取账号信息
  handleAccount(){
    console.log(wx.getAccountInfoSync())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onWindowResize((result) => {console.log(result)});
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
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('你已经看到了我的底线')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享');
    return {
      title:"胸胸的小吕"
    }
  },
  onResize(res){
    console.log(res)
  },
})