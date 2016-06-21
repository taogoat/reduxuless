var tgt = require('../../../../taogoat')
var html = require('./theme.html.js')

var Themer =  {}
var colors = tgt.getColors()


Themer.draw = function(targ) {
  tgt.id(targ).html(html())
}

Themer.getColor = function (theme){
  return tgt.getColor(theme.color, theme.shade)
}

Themer.addStyles = function(message){
  toggleDayNight(Store.getState(message).theme.shade)
}

Themer.addListeners = function(callback){

  for(let i=0; i<colors.length;i++){
    let key = colors[i];
    document.getElementById('btn_'+key)
    .addEventListener("click",
      function() {
      	var state = Store.getState('anon inner from ThemeManager.js')
      	var theme = state.theme
        Store.dispatch('THEME', {color:key, shade:theme.shade});
        listenerResponse({color:key, shade:theme.shade})
    });
  }
  document.getElementById('btn_Day')
  .addEventListener("click",
    function() {
      onClick('Day')
  });
  document.getElementById('btn_Night')
  .addEventListener("click",
    function() {
      onClick('Night')
  });
}

function onClick(key){
      var state = Store.getState('onClick() from ThemeManager.js')
      var theme = state.theme
      Store.dispatch('THEME', {color:theme.color, shade:key})
      listenerResponse({color:theme.color, shade:key})
      toggleDayNight(key)	
}

function toggleDayNight(key){
  if (key == 'Day'){
    document.getElementById('btn_Day').style.display = 'none'
    document.getElementById('btn_Night').style.display = 'inline'
    document.getElementById('btn_Night').style.backgroundColor = color.background
  }
  else {
    document.getElementById('btn_Night').style.display = 'none'
    document.getElementById('btn_Day').style.display = 'inline'
    document.getElementById('btn_Day').style.backgroundColor = color.background
  }	
}

function listenerResponse(key){
  var header = document.getElementById("cont_head")
  var footer = document.getElementById("cont_foot")
  var content = document.getElementById("content")
  var left_inside = document.getElementById("left_inside")

  var color = tgt.getColor(key.color, key.shade)
  document.body.style.backgroundColor = color.background
  document.body.style.color = color.innerText
  document.getElementById('btn_settings').style.backgroundColor = color.background
  left_inside.style.backgroundColor = color.insideBar
  content.style.backgroundColor = color.content
  header.style.color = color.outerText
  footer.style.color = color.outerText
}

Themer.resolve = function (key){
  listenerResponse(key)
}

module.exports = Themer

