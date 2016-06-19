'use strict;'

var Html = require('./counter.html.js')
var my = require('./counter.styles.js')
var tgt = require('../../../taogoat')

var state = {count:0}

module.exports = {
	getState: getState,
	render: render,
	resolve: resolve
}

function getState() {
	return state
}

function setState(newState) {
  state.count = newState
}

function render(target, state, dispatch) {
  tgt.id(target).html(Html.main)
  tgt.id('banner').styl({textAlign:'center'})
  tgt.id('increment').styl(my.count_btn)
  tgt.id('decrement').styl(my.count_btn)
  addListeners(dispatch)
  setState(state['count'])
  resolve(state)
}

function resolve(state) {
	console.log('into count resolve')
  var c = '<h1>'+state['count']+'</h1>'
  tgt.id('counter').html(c)

}

function addListeners(dispatch) {
  tgt.id('increment').dispatch = dispatch
  tgt.id('increment').addEventListener("click",
      function() {
        listenerResponse( 1, this.dispatch);
      })
  tgt.id('decrement').dispatch = dispatch
  tgt.id('decrement').addEventListener("click",
      function() {
        listenerResponse( -1, this.dispatch);
      }) 
}

function listenerResponse(key, dispatch) {
  var message = 'Click event from +/- is '+key
  tgt.id('leftside_cont').html(message)
  state['count']+= key
  dispatch({'nav':'Counter','count':state['count']}, resolve)
}
