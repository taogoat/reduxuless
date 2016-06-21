'use strict;'
var tgt = require('../../../../taogoat')

var config = require('../../server/config')
var theme = require('../theme')

var Html = require('./nav.html.js')
var my = require('./nav.styles.js')
var utils = require('./nav.utils')

module.exports={
  render: render
}

function render(nav_targ, navState, dispatch){
    tgt.id(nav_targ).html(Html.navHtml)
    tgt.id('left_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline',width:'10%'})
    tgt.id('main_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline', width:'60%',left:'15%',paddingLeft:'0'})
    tgt.id('right_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline',width:'15%',right:'8%',textAlign:'right'})
    tgt.id('main_nav').html(utils.drawButtons())
    tgt.clas('btn_nav').styl(my.btn_nav, utils.padButtons())
    addListeners(dispatch)
    resolve(navState, dispatch)
    theme.resolve(navState['theme'])
}

function addListeners(dispatch) {
  for(var i in config.modules){
    var key = config.modules[i]
    var e = tgt.id(key +'_btn_nav')
      e.key = key
      e.dispatch = dispatch
      e.addEventListener("click",
      function() {
        listenerResponse(this.key, this.dispatch);
      })      
  }  
}

function listenerResponse(key, dispatch) {
  var message = 'Click event from '+key
  tgt.id('leftside_cont').html(message)
  dispatch({'nav':key}, resolve)
}

function resolve(state, dispatch) {
  var message = 'Nav switch event to resolve '+JSON.stringify(state['nav'])
  tgt.id('rightside_cont').html(message)
  console.log(message)

  // nav calls the render() module of children
  // this should be a switch

  if (state['nav']=='Home'){
    config['Home'](config.content_target)
  }

  if (state['nav']=='Counter'){
    config['Counter'](config.content_target, state, dispatch)
  }

  if (state['nav']=='Theme'){
    config['Theme'](config.content_target, state, dispatch)
  }  

  utils.toggleButtons(state)
}
