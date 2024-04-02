// components/palette/palette.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeColor(e) {
      let rgb = e.currentTarget.dataset.rgb;
      this.setData({
        rgb: {
          r: rgb === 'r' ? e.detail.value : this.data.rgb.r,
          g: rgb === 'g' ? e.detail.value : this.data.rgb.g,
          b: rgb === 'b' ? e.detail.value : this.data.rgb.b,
        }
      })
      console.log(this.data.rgb);
    },
  }
})
