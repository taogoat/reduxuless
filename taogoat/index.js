'use strict'
var Colors = require('./colors')
var Store = require('./store')
var styles = require('./styles')

module.exports = {
  clas: clas,       // access DOM by class
  getColor: Colors.getColor,   // color manager
  getColors: Colors.getColors,   // color manager
  id: id, 	        // access DOM element by id
  Store: Store,
  styles: styles    // common styles
}
function clas(clas){
  var selves = document.getElementsByClassName(clas)
// style seems to be some sort of reserved word
// so 'styl' sets the element styling
  function styl(style) {
// allow multiple style object args
    for (var i = 0; i < arguments.length; i++) {
// extract keys from each style object
      for (var key in arguments[i]) {
// check that it is a valid key
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          for (var j = 0; j < selves.length; j++) {
            if (Object.prototype.hasOwnProperty.call(selves, j)) {
              selves[j].style[key] = arguments[i][key]
            }      
          }
        }
      }
    }
  }
  //selves.html = html;
  selves.styl = styl;
  return selves

}
// mini API for DOM elements
function id(id){
// store reference to element
    var self = document.getElementById(id)

// set inner html of element
    function html(html) {
    	self.innerHTML = html
        return self;
    }

// style seems to be some sort of reserved word
// so 'styl' sets the element styling
    function styl(style) {
// allow multiple style object args
      for (var i = 0; i < arguments.length; i++) {
// extract keys from each style object
      	for (var key in arguments[i]) {
// check that it is a valid key
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
           	self.style[key] = arguments[i][key]
      	  }
      	}
      }
      return self;
    }   
    self.html = html;
    self.styl = styl;
    return self;
}
