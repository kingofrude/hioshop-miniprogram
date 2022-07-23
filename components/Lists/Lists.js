// components/Lists/Lists.js
Component({
  properties: {
    scenic: {
      type: Array,
      value: []
    }
  },
  data: {

  },
  methods: {
    goDetail(e){
      wx.navigateTo({
        url: `/pages/scenic-spot/scenicDetail/scenicDetail?id=${e.currentTarget.dataset.num}&&title=${e.currentTarget.dataset.title}`,
      })
    }
  }
})
