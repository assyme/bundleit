"use strict";

var compressor = require("yuicompressor");


var minifyFile = function(path){
	
	if (typeof path === "undefined"){
		throw new Error ("please provide path of the file to minify");
	}

	compressor.compress(path,{
		charset: 'utf8',
    	type: 'js',
    	nomunge: true,
    	'line-break': 80
	},function(err,data,extra){
		
	});
}

module.exports = minifyFile;