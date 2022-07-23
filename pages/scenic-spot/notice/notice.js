const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
Page({
  data: {
    notice: []
  },
  onLoad(options) {
    this.getData()
  },
  onReady() {

  },
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
  // 跳转到公告详情页
  detailNotice(e){
    if(e.currentTarget.dataset.show){
      wx.navigateTo({
        url: `./detailNotice/detailNotice?id=${e.currentTarget.dataset.id}`,
      })
    }else{
      return false
    }
    
  },
  getData(){
    let that = this
    util.request(api.getNotice).then(function (res) {
      let now = new Date()
      if (res.errno === 0) {
        res.data.filter((item)=>{
          if(item.end_time*1000 < now){
            item.show = false
          }else{
            item.show = true
          }
          item.start_time = that.toDate(item.start_time)
          item.end_time = that.toDate(item.end_time)
        })
        that.setData({
          notice: res.data
        })
      }
    });
  },
  toDate(str){
    let date = new Date(str*1000)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    return `${y}-${m}-${d}`
  }
})
