'use strict';

var Blue = require('./Blue')
var Green = require('./Green')
var Grey = require('./Grey')
var Orange = require('./Orange')

var Colors = {}

Colors.getColors = function () {
	var colors = ['Blue', 'Green', 'Grey', 'Orange'];
	return colors;
}

Colors.getColor = function (theme){

	var color = theme['color']
	var tone = theme['tone']

	console.log('tone is '+JSON.stringify(tone))
	console.log('color is '+JSON.stringify(color))
	if ( tone == 'Light'){
		switch(color){
			case 'Blue':
				return Blue.light
			case 'Green':
				return Green.light
			case 'Grey':
				return Grey.light 
			case 'Orange':
				return Orange.light				
		}
	}
	else{
		switch(color){
			case 'Blue':
				return Blue.dark
			case 'Green':
				return Green.dark
			case 'Grey':
				return Grey.dark 
			case 'Orange':
				return Orange.dark				
		}
	}
}

module.exports = Colors;