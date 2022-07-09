const util = require('../../utils/util.js');
const api = require('../../config/api.js');

Page({
  data: {
    autoplay: false,
    loading: 0,
    showBanner: 1,
    banner: [],
    sysHeight: 0,
    active: 0,
    notice: [{
      id: 1,
      context: 111111111
    }, {
      id: 2,
      context: 2222222
    }, {
      id: 3,
      context: '333333333333333333333333333333333333333333333333333333333333'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSpotShowInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that = this;
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo != '') {
      that.setData({
        userInfo: userInfo,
      });
    };
    let info = wx.getSystemInfoSync();
    let sysHeight = info.windowHeight - 100;
    this.setData({
      sysHeight: sysHeight,
      autoplay: true
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getSpotShowInfo: function (e) {
    let that = this;
    util.request(api.getBanner).then(function (res) {
      if (res.errno === 0) {
        let banner = res.data.banner;
        that.setData({
          banner: banner,
          showBanner: true,
          loading: 1,
        });
      }
    });
  },
  onChange(event) {
    wx.showToast({
      title: `切换到 ${event.detail.title}`,
      icon: 'none',
    });
  },

})