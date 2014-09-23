"use strict";

var app = app || {};

app.foo2 = function(){
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