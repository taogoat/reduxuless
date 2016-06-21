'use strict;'

module.exports = {
  name: 'Taogoat Cud Nuggets',
  modules: ['Home', 'Counter', 'Theme'],
  content_target: 'content_cont',
  nav_target: 'head_main',
  collect: collect,
  merge: merge,
  breakpoints: {
  	phablet: 420,
  	tablet: 768,
  	desktop: 1024,
  },
  'Home': require('../client/home').render,
  'Theme': require('../client/theme').render,
  'Counter': require('../../modules/Counter').render
}

// collects initial state of available modules
//		still hard coded for now
function collect() {
	return {
		'nav': 'Home',
		'theme': {
			'color': 'Orange',
			'tone': 'Light'
		},
		'count': 0
	}
}

// still need function to get labels of modules
//		hard coded as modules objectfor now


// if cookies pass in a state, this function
// will merge it with the server state.
// This allows modules to be hot loaded
function merge(state) {
  
  var serverState = collect()
  for (var key in state) {
// check that it is a valid key
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      serverState[key] = state[key]
    }
  }
  return serverState  

}
