'use strict'

module.exports = {
	main: `
	<div id="banner">
		<h1>Welcome to the Home module</h1>
	</div>
	<br/>
	<br/>
	<div id="content">
      <div style="text-align: center;">
		Some interesting things about this page
	  </div>
	  <br/>
	  <div class='listItem'><h4>It is rendered without any html files!</h4>
	    <div class='subItem'>
		  All the html you see here is rendered
		  as strings from pure JavaScript functions.  A naive
		  implementation of the same design pattern
		  as React
		</div>
	  </div>
	  <div class='listItem'><h4>It is built with stateless modules!</h4>
		<div class='subItem'>
		  Each content page on this site is a 
		  self describing module.  Modules
		  are detected at runtime by
		  the server. Each module has a config file
		  at the top level which contains it's name,
		  it's public label,  it's own internal state object,
		  a render function, and a resolve() function 
		  which executes as a callback when an action is
		  registered by the Store 
		</div>
	  </div>
	  <div class='listItem'><h4>Oh yeah, it has a store!</h4>
		<div class='subItem'>
		  A naive native version of Redux with an immutable state.
		  It differs from Redux by following  the MobX approach,
		  pub/subbing to interact with the Store.
		  This means that each module calls the same dispatch()
		  function to access the Store, and the Store passes
		  back the resolve() function provided by the module.
		  The modules don't need to know about the Store, and
		  the Store doesn't need to know about the modules.  This 
		  differs from the Redux pattern in that the root reducer
		  is static, and modules contain their own reducers.
		  actions are not imported to the store, they are passed as callbacks.
		  This allows the state to be parsed as a tree.
		</div>
	  </div>
	  <br/>
      <div style="text-align: center;">
		Umm, cool, so what?
	  </div>
	  <br/>
	  <br/>
	`
}
