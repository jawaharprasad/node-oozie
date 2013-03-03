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
	
	var endpoint = args.config.url + ":" + args.config.port + "/" + args.config.webapp + "/";
	var version = "v" + args.config.version;
		
    function get(url, next) {
    
		url = util.parseUrl(url);
		
		if(url != "version")
			endpoint += version + "/";
	
        var options = {
			method: "GET",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + url
		};		
		_request(options, next);        
    }
	this.get = get;

    function post(url, data, next) {
	
		url = util.parseUrl(url);
	
        var options = {
			method: "POST",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + url,
			body: util.getBodyString(data)
		};		
		_request(options, next);   
    }
	this.post = post;

    function put(url, data, next) {
	
		url = util.parseUrl(url);
	
        var options = {
			method: "PUT",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + url,
			body: util.getBodyString(data)
		};		
		_request(options, next);   
    }
	this.put = put;
    
    function del(url, next) {
	
		url = util.parseUrl(url);
		
        var options = {
			method: "DELETE",
			headers: {"content-type": "application/x-www-form-urlencoded"},
			url: endpoint + url
		};		
		_request(options, next);   
    }
	this.del = del;

    function _request(options, next) {
        request(options, function (error, response, body) {
            if (!error && response && response.body)	{
                next(null, JSON.parse(response.body));				
            } else {
                next(error, null);
            }
        });
    }

    return this;
}