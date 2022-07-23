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
    notice: [],
    scenic: [],
    hotScenic: []
  },
  onLoad(options) {
    this.getSpotShowInfo()
    this.getNotice()
    this.getIndexTabScenic()
  },
  onReady() {

  },
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
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
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
  getNotice: function(){
    let that = this
    util.request(api.getIndexNotice).then(function (res) {
      if (res.errno === 0) {
        let notice = res.data;
        that.setData({
          notice
        });
      }
    });
  },
  getIndexTabScenic: function() {
    let that = this;
    util.request(api.getIndexTabScenic).then(function (res) {
      if (res.errno === 0) {
        let hotScenic = res.data.filter((item)=>item.ishot == 1);
        that.setData({
          scenic: res.data,
          hotScenic
        })
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