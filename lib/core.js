/**
 *
 *  Webit Design Studios Ltd.
 *
 *  Created by Alex Tanti
 *  Copyright (c) 2013
 *
 */

var util = require('./util');
var request = require('request');

exports.createClient = function(args){
	
	var endpoint = args.config.protocol + "://" + args.config.url + ":" + args.config.port + "/oozie/";
	var version = (args.config.version) ?  "v" + args.config.version : "v1";
		
	/**
     * get()
     */	 
    function get(url, next) {
    
		url = util.parseUrl(url);
		var version_url = '';
		if(url != "versions")
      version_url= version + "/";
		
        var options = {
			method: "GET",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + version_url + url
		};
		
		_request(options, next);        
    }
	this.get = get;
	
	/**
     * post()
     */	 
    function post(url, data, next) {
	
		url = util.parseUrl(url);
	
        var options = {
			method: "POST",
			headers: {"content-type": "application/xml"},
			url: endpoint + version + "/" + url,
			body: data
		};		
		_request(options, next);   
    }
	this.post = post;

	/**
     * put()
     */
    function put(url, data, next) {
	
		url = util.parseUrl(url);
		
		var options = {
			method: "PUT",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + version + "/" + url,
			body: util.getBodyString(data)
		};		
		
		_request(options, next);   
    }
	this.put = put;
    
	/**
     * del()
     */
    function del(url, next) {
	
		url = util.parseUrl(url);
		
        var options = {
			method: "DELETE",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + version + "/" + url
		};		
		_request(options, next);   
    }
	this.del = del;

			
			
    function _request(options, next) {
        request(options, function (error, response, body) {
            if (!error && response && response.body)	{
                if(util.isJSON(response.body)){
					next(null, JSON.parse(response.body));				
				} else {
					next(null, response.body);
				}				
            } else {
                next(error, null);
            }
        });
    }

    return this;
}