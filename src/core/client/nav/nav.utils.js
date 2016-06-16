'use strict'

var modules = require('../../server/config').modules
var tgt = require('../../../../taogoat')

var maxLabelsLength = 23

module.exports = {
  padButtons: padButtons,
  drawButtons: drawButtons
}

function LabelsLength() {
  var ln = 0
  for(var key in modules){ln += modules[key].length}
  return ln
}

function padButtons() {
	var pad = 1-(LabelsLength() / maxLabelsLength)
// check for zero or neg value
  if (pad >0) {
    var qty = modules.length-1
    pad = pad/qty
    pad = JSON.stringify(pad)
    pad = pad[2]+pad[3]+'%'
    return {paddingRight:pad}    
  }
  else{ return {paddingRight:0}}
}

function drawButtons(){
  if(LabelsLength()>maxLabelsLength){
  	var message = 'rabbit hole is '+LabelsLength()
  	console.log(message)
  	return message
  }
  else {
    var html = `<ul">`
    for(var key in modules){
      html += `<li id="${modules[key]}_btn_nav" class="btn_nav" style="cursor:pointer; display:inline;"><strong>${modules[key]}</strong></li>`
      html += `<li id="${modules[key]}_disabled_btn_nav" class="btn_nav" style="cursor:default; display:none;">${modules[key]}</li>`
    }
    html += `</ul>`
    return html
  }
}
