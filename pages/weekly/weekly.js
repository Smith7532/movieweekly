Page({
  data: {
    WeeklyMovieList: [{
      name: "泰坦尼克号",
      comment: "失去才是永恒的",
      imagePath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550212575397&di=9774b1dcd66c3172c3db376392ed6f6a&imgtype=0&src=http%3A%2F%2Fwww.renderg.com%2Fuploads%2Fallimg%2F171220%2F3_1044436184.jpg",
      isHighlyRecommended: false
    },
    {
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
      imagePath: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1826794556,3178197553&fm=26&gp=0.jpg",
      isHighlyRecommended: false
    },
    {
      name: "教父",
      comment: "最精彩的剧本，最真实的黑帮电影。",
      imagePath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550123589460&di=ab56480397011adf40644246d0e784be&imgtype=0&src=http%3A%2F%2Fi5.hexunimg.cn%2F2016-02-29%2F182477377.png",
      isHighlyRecommended: true
    }],
    count: 123,
    score: 68,
  },
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.WeeklyMovieList.length - 1
    })
  },

  f0:function(event){
    this.setData({
      currentIndex: this.data.WeeklyMovieList.length - 1
  })
  }
})