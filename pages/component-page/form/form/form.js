// pages/component-page/form/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      name: '',
      sex: '',
      age: '',
      skill: [],
      agree: false,
      skilled: '',
      remark: '',
    }
  },
  formSubmit(e) {
    console.log(e.detail.value);
  },
  formReset(e) {
    console.log(e.detail);
  }
})