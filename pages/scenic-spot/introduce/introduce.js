const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerAutoplay: false,
    videoAutoplay: false,
    showBanner: true,
    showVideo: false,
    banner: [],
    video: [],
    fold: false,
    scenic: [],
    hotScenic: []
  },
  goDetail(e){
    wx.navigateTo({
      url: `/pages/scenic-spot/scenicDetail/scenicDetail?id=${e.currentTarget.dataset.num}&&title=${e.currentTarget.dataset.title}`,
    })
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
  // 获取页面数据
  getSpotShowInfo: function (e) {
    let that = this;
    util.request(api.getIntroduce).then(function (res) {
      if (res.errno === 0) {
        let banner = res.data.banner;
        let video = res.data.video
        that.setData({
          banner: banner,
          video: video,
          showBanner: true,
          loading: 1,
          bannerAutoplay: true,
        });
      }
    });
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
  // 切换显示
  changeShow() {
    this.setData({
      showBanner: !this.data.showBanner,
      showVideo: !this.data.showVideo,
    })
    if (this.data.showVideo === true) {
      this.setData({
        videoAutoplay: true,
      })
    } else {
      this.setData({
        bannerAutoplay: true,
      })
    }
  },
  // 切换展开与否
  changeFold() {
    this.setData({
      fold: !(this.data.fold)
    })
  },
  // 滑动风景展示栏
  move(event) {
    console.log(event);
  },
  // 返回上一页
  back(){
    wx.navigateBack(1)
  }
})