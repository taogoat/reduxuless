'use strict'
var Layout = require('./layout')
var Nav = require('./nav')
var Store = require('../../../taogoat').Store

var config = require('../server/config')
var cont_targ = config.content_target
var nav_targ = config.nav_target

var initialState = window.__INITIAL_STATE__

Store.init(initialState)

function dispatch(obj,callback){
 	var full = Store.dispatch(obj)
 	var state = JSON.parse(JSON.stringify(full))
  delete state.next
	postState(state)
  resolve(state, callback)
}


// postState function for sending state to server
//  to set cookies.  Only needed for dev hot reloading
function postState(state){
// Sending and receiving data in JSON format using POST mothod
//
  var xhr = new XMLHttpRequest();
  var url = "/";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log('server response is '+JSON.stringify(json))
    }
  }
  var data = JSON.stringify(state);
  xhr.send(data); 
 }

function resolve(obj, callback) {
  callback(obj, dispatch)
  console.log('Main dispatch resolve ')
  console.log(' --->callback obj is '+JSON.stringify(obj) )
}

Layout.setAppContainer()
Layout.render()
console.log(' firstDraw init is '+ JSON.stringify(initialState) )
Nav.render(nav_targ, initialState, dispatch)
