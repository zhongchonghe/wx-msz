// components/mySwiper/mySwiper.js

const myBehavior = require('../../pages/assets/js/my-behavior')
Component({

  behaviors:[myBehavior],
  
  /**
   * 组件的属性列表
   */
  properties: {
    imgData:{
      type:Array,
      value:['../../pages/assets/lb1.png','https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/144969/10/12802/82614/5f9e7414E9de7609a/c209e623282ad85a.jpg!q70.jpg.dpg']
      // value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
