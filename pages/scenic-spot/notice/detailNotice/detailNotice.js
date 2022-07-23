const util = require('../../../../utils/util.js');
const api = require('../../../../config/api.js');
var WxParse = require('../../../../lib/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    notice: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getData(options.id)
  },
  getData(id){
    let that = this
    util.request(api.getNoticeAll, {id: id}).then(function (res) {
      if (res.errno === 0) {
        res.data[0].start_time = that.toDate(res.data[0].start_time)
        res.data[0].end_time = that.toDate(res.data[0].end_time)
        that.setData({
          notice: res.data[0]
        })
        setTimeout(() => {
          WxParse.wxParse('goodsDetail', 'html', res.data[0].content, that);
      }, 1000);
      }
    });
  },
  toDate(str){
    let date = new Date(str*1000)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    return `${y}-${m}-${d}`
  },
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