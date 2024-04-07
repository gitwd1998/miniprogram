// pages/api/api.js
const app = getApp()
Page({
  data: {
    theme: app.systemInfo.theme,
    selected: -1,
    list: [
      {
        title: '开放接口',
        icon: 'info',
        items: [
          {
            name: '微信登录',
            url: '/'
          },
          {
            name: '获取用户信息',
            url: '/'
          },
          {
            name: '发起支付',
            url: '/'
          },
          {
            name: '转发',
            url: '/'
          },
          {
            name: '转发按钮',
            url: '/'
          },
          {
            name: '客服信息',
            url: '/'
          },
          {
            name: '订阅信息',
            url: '/'
          },
          {
            name: '收货地址',
            url: '/'
          },
          {
            name: '获取发票抬头',
            url: '/'
          },
          {
            name: '生物认证',
            url: '/'
          },
          {
            name: '设置',
            url: '/'
          },
        ]
      },
      {
        title: '界面',
        icon: 'info',
        items: [
          {
            name: '设置界面标题',
            url: '/'
          },
          {
            name: '标题栏加载动画',
            url: '/'
          },
          {
            name: '设置TabBar',
            url: '/'
          },
          {
            name: '页面跳转',
            url: '/'
          },
          {
            name: '下拉刷新',
            url: '/'
          },
          {
            name: '创建动画',
            url: '/'
          },
          {
            name: '创建回话',
            url: '/'
          },
          {
            name: '显示操作菜单',
            url: '/'
          },
          {
            name: '显示模态弹窗',
            url: '/'
          },
          {
            name: '页面滚动',
            url: '/'
          },
          {
            name: '显示消息提示框',
            url: '/'
          },
          {
            name: '获取WXML节点信息',
            url: '/'
          },
          {
            name: 'WXML节点布局相交状态',
            url: '/'
          },
        ]
      },
      {
        title: '设备',
        icon: 'info',
        items: [
          {
            name: '获取手机网络状态',
            url: '/'
          },
          {
            name: '监听手机网络变化',
            url: '/'
          },
          {
            name: '获取手机系统信息',
            url: '/'
          },
          {
            name: '获取手机设备电量',
            url: '/'
          },
          {
            name: '监听重力感应数据',
            url: '/'
          },
          {
            name: '监听罗盘数据',
            url: '/'
          },
          {
            name: '打电话',
            url: '/'
          },
          {
            name: '扫码',
            url: '/'
          },
          {
            name: '剪切板',
            url: '/'
          },
          {
            name: '蓝牙',
            url: '/'
          },
          {
            name: 'iBeacon',
            url: '/'
          },
          {
            name: '屏幕亮度',
            url: '/'
          },
          {
            name: '用户截屏事件',
            url: '/'
          },
          {
            name: '震动',
            url: '/'
          },
          {
            name: '手机联系人',
            url: '/'
          },
          {
            name: 'Wi-Fi',
            url: '/'
          },
        ]
      },
      {
        title: '性能',
        icon: 'info',
        items: [
          {
            name: '获取性能数据',
            url: '/'
          }
        ]
      },
      {
        title: '网络',
        icon: 'info',
        items: [
          {
            name: '发起一个请求',
            url: '/'
          },
          {
            name: 'WebSocker',
            url: '/'
          },
          {
            name: '上传文件',
            url: '/'
          },
          {
            name: '下载文件',
            url: '/'
          },
          {
            name: 'UDPSocker',
            url: '/'
          },
          {
            name: 'mDNS',
            url: '/'
          },
        ]
      },
      {
        title: '媒体',
        icon: 'info',
        items: [
          {
            name: '图片',
            url: '/'
          },
          {
            name: '音频',
            url: '/'
          },
          {
            name: '录音',
            url: '/'
          },
          {
            name: '背景音频',
            url: '/'
          },
          {
            name: '文件',
            url: '/'
          },
          {
            name: '视频',
            url: '/'
          },
          {
            name: '音视频合成',
            url: '/'
          },
          {
            name: '动态加载文字',
            url: '/'
          },
        ]
      },
      {
        title: '位置',
        icon: 'info',
        items: [
          {
            name: '获取当前位置',
            url: '/'
          },
          {
            name: '使用原生地图查看位置',
            url: '/'
          },
          {
            name: '使用原生地图选择位置',
            url: '/'
          },
        ]
      },
      {
        title: '数据',
        icon: 'info',
        items: [
          {
            name: '本地存储',
            url: '/'
          },
          {
            name: '周期性更新',
            url: '/'
          },
          {
            name: '数据预拉取',
            url: '/'
          },
        ]
      },
      {
        title: '多线程',
        icon: 'info',
        items: [
          {
            name: '多线程',
            url: '/'
          },

        ]
      },
      {
        title: '框架',
        icon: 'info',
        items: [
          {
            name: '双向绑定',
            url: '/'
          },
          {
            name: 'WXS',
            url: '/'
          },
          {
            name: '屏幕旋转',
            url: '/'
          },
        ]
      },
    ]
  },
  handleSelected(e) {
    let { index } = e.currentTarget.dataset
    this.setData({
      selected: this.data.selected === index ? -1 : index,
    })
  },
  toPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})