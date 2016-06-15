'use strict'
var tgt = require('taogoat')

module.exports = {
  drawLayout : function (){
    tgt.id("root").innerHTML = html;
  }
}


var html = `
    <div id="cont_head">
	  Header
    </div>
    <div id="cont_main">
	  A layout!
    </div>
    <div id="cont_foot">
      Footer 
    </div>
`
