"use strict";

var uglify = require("uglify-js");
var fs = require("fs");

var minifyFile = function(path,fileout){
	
	if (typeof path === "undefined"){
		throw new Error ("please provide path of the file to minify");
	}

	console.log("minifying %d files",path.length);

	var result = uglify.minify(path);
	fs.writeFile(fileout,result.code,function(err){
		if (err){
			throw err;
		}
	});
}

module.exports = minifyFile;