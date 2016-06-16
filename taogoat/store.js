'use strict;'

module.exports = {
  // dispatch() takes a single object arg
  // the key is the module state key
  // the value is the dispatch payload
  // the payload is stored at state[key]
  // simple example: {'nav':'home'} 
  dispatch: function(context) {
  	var state = resolve(context)
    return state
  },
  init: function(init) {
    storeState = init
  }
}

var storeState = {}

function resolve(context){
  var newState = {}
  for (var key in context) {
    if (Object.prototype.hasOwnProperty.call(context, key)) {
	  newState[key] = context[key]
    }
  }
  newState.next = storeState
  storeState = newState
  return storeState
}
