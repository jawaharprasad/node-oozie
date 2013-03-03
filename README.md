# A NodeJS Client for Oozie Webservice API

<a href="http://oozie.apache.org/" target="_blank">Oozie</a> is a workflow scheduler system to manage Apache Hadoop jobs.

The node-oozie module facilitates the Sqoop2 rest api integration.

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
