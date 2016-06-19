'use strict;'

var config = require('./nav.config')
var tgt = require('../../../../taogoat')
var Html = require('./nav.html.js')
var my = require('./nav.styles.js')
var modules = require('../../server/config').modules
var utils = require('./nav.utils')

module.exports={
  drawNav: function(navState, dispatch){
    tgt.id('head_main').html(Html.navHtml)
    tgt.id('left_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline',width:'10%'})
    tgt.id('main_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline', width:'60%',left:'15%',paddingLeft:'0'})
    tgt.id('right_nav').styl(tgt.styles.layout, tgt.styles.test, {display:'inline',width:'15%',right:'8%',textAlign:'right'})
    tgt.id('main_nav').html(utils.drawButtons())
    tgt.clas('btn_nav').styl(my.btn_nav, utils.padButtons())
    addListeners(navState, dispatch)
    toggleButtons(navState)
    resolve(navState, dispatch)
  }
}

function addListeners(navState, dispatch) {
  console.log('navState is '+ navState['nav'])
  for(var i in modules){
    var key = modules[i]
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
  var message = 'Callback event to resolve dispatch '+JSON.stringify(state['nav'])
  tgt.id('rightside_cont').html(message)
  console.log(message)

  if (state['nav']=='Home'){
    config['Home'](config.target)
  }

  if (state['nav']=='Counter'){
    config['Counter'](config.target, state, dispatch)
  }
  toggleButtons(state)
}

function toggleButtons(navState) {
  for(var i in modules){
    var key = modules[i]
    if(key == navState['nav']){
      tgt.id(key+'_btn_nav').styl({display:'none'})
      tgt.id(key+'_disabled_btn_nav').styl({display:'inline'})
    }
    else{
      tgt.id(key+'_btn_nav').styl({display:'inline'})
      tgt.id(key+'_disabled_btn_nav').styl({display:'none'})
    }
  }
}
