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

Colors.getColor = function ( color, shade){

	console.log('shade is '+JSON.stringify(shade))
	console.log('color is '+JSON.stringify(color))
	if ( shade == 'Day'){
		switch(color){
			case 'Blue':
				return Blue.day
			case 'Green':
				return Green.day
			case 'Grey':
				return Grey.day 
			case 'Orange':
				return Orange.day				
		}
	}
	else{
		switch(color){
			case 'Blue':
				return Blue.night
			case 'Green':
				return Green.night
			case 'Grey':
				return Grey.night 
			case 'Orange':
				return Orange.night				
		}
	}
}

module.exports = Colors;