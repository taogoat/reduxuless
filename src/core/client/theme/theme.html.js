'use strict'

var tgt = require('../../../../taogoat')
var colors = tgt.getColors()

var getHtml = function(){
  
  var buttons = getColorButtons()
  return `
    <h2>Theme Manager</h2>
    <div id="theme_day_night_cont" style="position:relative; text-align:center;">
      <div id="btn_Day"
       style="color:black;
       		  background-color:white;
       		  position:absolute;
       		  width:30%;
              left:10%;
              padding: 10px;">
         <strong>
           Day
         </strong>
      </div>
      <div id="btn_Night"
       style="color:white;
       		  background-color:black;
       		  position:absolute;
       		  width:30%;
              right:10%;
              padding: 10px;">
        <strong>
          Night
        </strong>
      </div>
    </div>
    <br/>
    <br/>
    <div style="text-align:center;">
      ${buttons}
    </div>
  `  
}

function getColorButtons (){
	var html = '';
	for(var i=0; i<colors.length;i++){
		html += `<br/><div id="btn_${colors[i]}">
					<strong>${colors[i]}</strong>
				</div>`
	}
	return html
}

module.exports = getHtml