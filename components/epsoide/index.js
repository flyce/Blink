// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changePath) {
        this.setData({
          index: newVal.length < 2 ? '0' + newVal : newVal
        })
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: '',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月',
    '十一月', '十二月']
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function() {
    const date = new Date();
    const year = date.getFullYear();
    const month = this.data.months[date.getMonth()];
    this.setData({
      year,
      month
    });
  }
})
