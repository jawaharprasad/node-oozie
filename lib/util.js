/**
 *
 *  Webit Design Studios Ltd.
 *
 *  Created by Alex Tanti
 *  Copyright (c) 2013
 *
 */
exports.getBodyString = function(data) {
 var body = '';
 if(data && !this.isEmpty(data)){
     Object.keys(data).forEach(function(key) {
      var val = data[key];
      if (exports.isArray(val)) {
       for (var i=0; i<val.length; i++) {
        body += key + '[]=' + encodeURIComponent(val[i]) + '&';
       }
      } else {
       body += key + '=' + encodeURIComponent(val) + '&';
      }
     });
     return body;
 }
 return null;
};

exports.parseUrl = function(url) {
	return (url.substring(0,1) == "/") ? url.substring(1) : url;
}

exports.isArray = function(obj) {
	return Object.prototype.toString.call( obj ) === '[object Array]';
}

exports.isObject = function(obj) {
	return Object.prototype.toString.call(obj) == "[object Object]";
}

exports.isFunction = function(data){
    if (typeof(data) == "function") {
        return true;
    }
    return false;
}

exports.isString = function(data){
    if (typeof(data) == "string") {
        return true;
    }
    return false;
}

exports.count = function(obj)
{
    var count = 0;
    for(var i in obj)
        if(obj.hasOwnProperty(i))
            count++;
    return count;
}

exports.isEmpty = function(obj) 
{ 
	for(var i in obj) { return false; } return true; 
}

exports.isJSON = function(data)
{
	try {
		JSON.parse(data);		
	} catch(e) {
		return false;
	}
	return true;
}
