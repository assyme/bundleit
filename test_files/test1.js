"use strict";

var app = app || {};

app.foo = function(){
	var longstringasvariable = "yo";
	return {
		"a" : function(){
			console.log(longstringasvariable);
		},
		"b" : function(){
			console.log(longstringasvariable);
		}
	};
};