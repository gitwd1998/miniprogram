// pages/component-page/form/picker/picker.js
Page({
  data: {
    selector: 0,
    selectorRang: ['selector', 'multiSelector', 'time', 'date', 'region'],
    multiSelector: [0],
    multiSelectorText: [],
    multiSelectorRang: [['中国', '美国', '英国', '法国'], ['安徽省', '河南省', '浙江省', '山东省', '江苏省']],
  },
  changeSelector(e) {
    this.setData({
      selector: e.detail.value
    })
  },
  changeMultiSelector(e) {
    console.log(e);
    let textArr = []
    textArr = e.detail.value.map((v, i) => this.data.multiSelectorRang[i][v])
    this.setData({
      multiSelector: e.detail.value,
      multiSelectorText: textArr
    })
  },
  changeColumnMultiSelector(e) {
    console.log(e);
  },
  onLoad: function () {
    let temp = []
    temp = this.data.multiSelector.map((v, i) => this.data.multiSelectorRang[i][v])
    this.setData({
      multiSelectorText: temp
    })
  },
})