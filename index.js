/**
 *
 *  Webit Design Studios Ltd.
 *
 *  Created by Alex Tanti
 *  Copyright (c) 2013
 *
 */
var init = function(args){   
    return new require('./lib/core').createClient(args);
}

module.exports.createClient = function(args){
    return new init(args);
}





