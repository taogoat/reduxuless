'use strict'

module.exports = {
  id: id 	// access DOM element by id
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



