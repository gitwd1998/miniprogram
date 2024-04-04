// pages/expand-page/expand/tabs/tabs.js
Page({
  data: {
    activeTab: 0,
    tabs: [
      { title: '技术开发', color: 'tomato' },
      { title: '产品解析', color: 'teal' },
      { title: '运营规范', color: 'red' },
      { title: '营销经验', color: 'yellow' },
      { title: '高校大赛', color: 'blue' },
    ]
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },
  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  }
})