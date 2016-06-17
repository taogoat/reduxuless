'use strict'

module.exports = {
	main: `
	<div id="banner"
		<h1><strong>Welcome to the Home module</strong></h1>
	</div>
	<br/>
	<br/>
	<div id="content">
	<div style="text-align: center;">
	Some interesting things about this page
	</div>
	<br/>
	<div class='listItem'>It is rendered without any html!
	<div class='subItem'><small>
	All the html you see here is rendered
	as strings inside JavaScript.  A naive
	implementation of the same design pattern
	as React
	</small></div></div>
	<div class='listItem'>It is built with stateless modules!
	<div class='subItem'><small>
	Each content page on this site is a 
	self-describing module.  Modules
	are dynamically detected at runtime by
	the server. Each module has a config file
	at the top level which contains it's name,
	it's public label,  it's own internal state object,
	a render function, and a resolve() function 
	which executes as a callback when an action is
	registered by the Store 
	</small></div></div>
	<div class='listItem'>Oh yeah, it has a store!
	<div class='subItem'><small>
	A naive implementation that i coded myself,
	but it emulates Redux with an immutable state.
	It differs from Redux by following  the MobX
	approach, pub/subbing to interact with the Store.
	This means that each module calls the same dispatch()
	function to access the Store, and the Store passes
	back the resolve() function provided by the module.
	</small></div></div>
	`
}