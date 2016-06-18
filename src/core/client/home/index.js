'use strict;'

var Html = require('./home.html.js')
//var my = require('./layout.styles.js')
var tgt = require('../../../../taogoat')

module.exports = {
	render: render
}

function render(target) {
	// 'target' passed in as prop from nav module
  tgt.id(target).html(Html.main)
  	// 'banner', 'listItem', 'subItem'
  	//		are defined locally in home.html.js
  tgt.id('banner').styl({textAlign:'center', padding:'15px'})
  tgt.clas('listItem').styl({padding:'5px'})
  tgt.clas('subItem').styl({padding:'5px',opacity:'0.8', textAlign:'justify'})
}
