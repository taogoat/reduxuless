'use strict;'

var Html = require('./counter.html.js')
//var my = require('./layout.styles.js')
var tgt = require('../../../taogoat')

module.exports = {
	initalState: {count: 0},
	render: render,
	resolve: resolve
}

function render(target) {
  tgt.id(target).html(Html.main)
  tgt.id('banner').styl({textAlign:'center'})
  // tgt.clas('listItem').styl({padding:'5px', textDecoration: 'none', color:'yellow'})
  // tgt.clas('subItem').styl({padding:'5px',color:'white'})
  addListeners({count: 0})
}

function resolve() {

}

function addListeners(countState) {
  console.log('countState is '+ countState['count'])
  tgt.id('increment').addEventListener("click",
      function() {
        listenerResponse('increment');
      })
  tgt.id('decrement').addEventListener("click",
      function() {
        listenerResponse('decrement');
      }) 
}

function listenerResponse(key) {
  var message = 'Click event from '+key
  tgt.id('leftside_cont').html(message)
  //dispatch({'nav':key}, resolve)
}
