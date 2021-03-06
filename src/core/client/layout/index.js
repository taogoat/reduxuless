'use strict;'

var Html = require('./layout.html.js')
var my = require('./layout.styles.js')
var tgt = require('../../../../taogoat')
var breakpoints = require('./layout.breakpoints.js')

module.exports = {
  render : function() {
    tgt.id('root').html(Html.mainHtml).styl(tgt.styles.rootContainer)

    tgt.id('main_main').html(Html.contentHtml)
    tgt.id('head_main').styl(tgt.styles.layout, my.styleHeadFoot,{height:'8%'})
    tgt.id('main_main').styl(tgt.styles.layout, my.styleMain)
    tgt.id('foot_main').styl(tgt.styles.layout, my.styleHeadFoot,{height:'4%', top:'92%'})

    tgt.id(  'leftside_cont').styl(tgt.styles.layout, my.sideContent,{width:'25%'})
    tgt.id('leftinside_cont').styl(tgt.styles.layout, my.insideContent,{left: '26%', width: '10%'})
    tgt.id(   'content_cont').styl(tgt.styles.layout, my.contentContainer, {left: '37%', width: '48.5%', overflow:'scroll'})
    tgt.id( 'rightside_cont').styl(tgt.styles.layout, my.sideContent,{right: '0%', width: '10%'})

    this.breakState = breakpoints.check(window.innerWidth)
    breakpoints.resetView(this.breakState)
    window.addEventListener('resize', function(event){
      var w = window.innerWidth
      var b = breakpoints.check(w)
      if(this.breakState != b) {
        this.breakState = b
        breakpoints.resetView(b)
        var message = 'View is '+this.breakState+'<small> called from layout/index line 31</small>'
      tgt.id('foot_main').html(message)
      }
    });
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
