
# A NodeJS Client for Sqoop2 REST API

<a href="http://sqoop.apache.org/" target="_blank">Apache Sqoop</a> (TM) is a tool designed for efficiently transferring bulk data between Apache Hadoop and structured datastores such as relational databases.

Sqoop successfully graduated from the Incubator in March of 2012 and is now a Top-Level Apache project: More information

Latest stable release is 1.4.2. Latest cut of Sqoop2 is 1.99.1. 


## Installation
```
npm install node-oozie
```
## Usage

### Configuration
```
 var config = {
        "protocol": "[PROTOCOL]",
		"url": "[HOST]",
        "port": "[PORT]",
        "version": "[OOZIE VERSION]"
    };
```
```
var Oozie = require('node-oozie');  
var oozie = Oozie.createClient({ config: config });
```

### Methods
<b>GET</b>
```
oozie.get(url, function(error, response){ ... });
```
<b>POST</b>
```
oozie.post(url, data, function(error, response){ ... });
```
<b>PUT</b>
```
oozie.put(url, data, function(error, response){ ... });
```
<b>DELETE</b>
```
oozie.del(url, function(error, response){ ... });
```

## Example

<b>Request</b>
```
oozie.get('versions', function(error, response) {
      console.log(response);
});
```

<b>Response</b>
```
[0, 1]
```
