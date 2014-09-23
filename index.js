var fs = require("fs");
var bundleit  = require('./src/bundleit');


var bundleByJsonConfig = function(bundleConfig){
	var rootPath = bundleConfig.rootPath;
	for (var key in bundleConfig.bundles){
		var fileList = bundleConfig.bundles[key];
		bundleit(fileList,rootPath + "/" + key);
	}
}

var exec = function(){
	
	//Read the bundle.json file.
	var bundleJson;
	fs.readFile("./bundle.json",{encoding : "utf8"},function(err,data){
		if (err){
			throw err;
		}else{
			bundleByJsonConfig(JSON.parse(data));
		}
	});



	//bundleit("./test_files/test1.js","./test_files/test1.min.js");	

}


exec();
