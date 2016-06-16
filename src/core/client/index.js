'use strict'
var Layout = require('./layout')
var Nav = require('./nav')
var Store = require('../../../taogoat').Store

var initialState = window.__INITIAL_STATE__
initialState.next = null

Store.init(initialState)

function dispatch(obj,callback){
 	var full = Store.dispatch(obj)
 	var state = JSON.parse(JSON.stringify(full))
  delete state.next
 	postState(state)
 	callback(obj)
}

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

Layout.setAppContainer()
Layout.drawLayout()
Nav.drawNav(initialState, dispatch)
