const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
var WxParse = require('../../../lib/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title: '',
    scenic:{}
  },
  getData(id){
    let that = this
    util.request(api.getScenicAll, {id: id}).then(function (res) {
    if (res.errno === 0) {
        console.log(res);
        that.setData({
          scenic: res.data[0]
        })
        setTimeout(() => {
          WxParse.wxParse('goodsDetail', 'html', res.data[0].content, that)}, 1000)}})
  },
  onLoad(options) {
    this.setData({
      id: options.id,
      title: options.title
    })
    this.getData(options.id)
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

  }
})