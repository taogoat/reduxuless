'use strict;'

var Html = require('./home.html.js')
//var my = require('./layout.styles.js')
var tgt = require('../../../../taogoat')

module.exports = {
	render: render
}

function render(target) {
  tgt.id(target).html(Html.main)
  tgt.id('banner').styl({textAlign:'center'})
  tgt.clas('listItem').styl({padding:'5px', textDecoration: 'none', color:'yellow'})
  tgt.clas('subItem').styl({padding:'5px',color:'white'})
}