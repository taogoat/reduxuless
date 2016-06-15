'use strict;'

var Html = require('./layout.html.js')
var tgt = require('../../../../taogoat')

module.exports = {
  drawLayout : function() {
    tgt.id('root').html(Html.mainHtml).styl({backgroundColor:'black', color:'red'}, {color:'white'})
  },

// set body margins and padding to 0 to normalize display for different devices
// set body backgroundColor to red to show bleed-through
//     switch body backgroundColor to something else for production!!!
  setAppContainer : function() {
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'white'
    document.body.style.padding = '0'
    document.body.style.margin = '0'
  }
}

