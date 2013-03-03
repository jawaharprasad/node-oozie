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