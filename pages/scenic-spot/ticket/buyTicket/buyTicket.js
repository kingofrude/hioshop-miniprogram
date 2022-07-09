Page({
  data: {
    steps: [
      {
        text: '步骤一',
        desc: '选择日期',
      },
      {
        text: '步骤二',
        desc: '添加游客',
      },
      {
        text: '步骤三',
        desc: '订单确认',
      },
      {
        text: '步骤四',
        desc: '订单支付',
      },
    ],
    next: true,
    back: false,
    active: 1,
    value: '',
    idNum: '',
    price: 55,
    touristMes: [{value: '', idCard: ''}]
  },
  // 新建游客信息
  newpeople(){
    this.data.touristMes.push({value: '', idCard: ''})
  },
  // 下一步按钮
  next(){
    this.setData({
      active: this.data.active+1
    })
  },
  // 上一步按钮
  back(){
    if(this.data.active <= 1){
      wx.navigateTo({
        url: '../ticket',
      })
    }
    this.setData({
      active: this.data.active-1
    })
  },
  nameChange(event) {
    this.setData({
      [`touristMes[${event.target.dataset.index}].value`] : event.detail.value
    })
  },
  idChange(event) {
    this.setData({
      [`touristMes[${event.target.dataset.index}].idCard`] : event.detail.value
    })
  },
  newpeople(){
    if(this.data.touristMes.length < 5){
      let temp = new Array(this.data.touristMes.push({value: '', idCard: ''}))
      this.setData({
        touristMes: temp
      })
    }else{
      wx.showToast({
        title: '最多同时添加五名游客信息',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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