// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myInterval: {
      type: Number,
      value:3000
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
})