
# A NodeJS Client for Sqoop2 REST API

<a href="http://sqoop.apache.org/" target="_blank">Apache Sqoop</a> (TM) is a tool designed for efficiently transferring bulk data between Apache Hadoop and structured datastores such as relational databases.

Sqoop successfully graduated from the Incubator in March of 2012 and is now a Top-Level Apache project: More information

Latest stable release is 1.4.2. Latest cut of Sqoop2 is 1.99.1. 

The latest version of Sqoop which is still in development supports a rest api which makes it easier for developers to access Sqoop in any language. The node-sqoop module facilitates the Sqoop2 rest api integration.


## Installation
```
npm install node-sqoop
```
## Usage

### Configuration
```
 var config = {
        "url": "[HOST]",
        "port": "[PORT]",
        "webapp": "[SQOOP WEBAPP]",
        "version": "[SQOOP VERSION]"
    };
```
```
var Sqoop = require('node-sqoop');  
var sqoop = Sqoop.createClient({ config: config });
```

### Methods
<b>GET</b>
```
sqoop.get(url, function(error, response){ ... });
```
<b>POST</b>
```
sqoop.post(url, data, function(error, response){ ... });
```
<b>PUT</b>
```
sqoop.put(url, data, function(error, response){ ... });
```
<b>DELETE</b>
```
sqoop.del(url, function(error, response){ ... });
```

## Example

<b>Request</b>
```
sqoop.get('version', function(error, response) {
      console.log(response);
});
```

<b>Response</b>
```
{
     revision: "Unknown",
     protocols: [
        "1"
     ],
     date: "Fri Dec 21 12:09:07 PST 2012",
     user: "jarcec",
     url: "file:///home/jarcec/apache/repos/sqoop_1.99.1/common",
     version: "1.99.1"
}
```
