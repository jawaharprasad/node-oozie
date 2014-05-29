# A NodeJS Client for Oozie web-services API

<a href="http://oozie.apache.org/" target="_blank">Oozie</a> is a workflow scheduler system to manage Apache Hadoop jobs.

The node-oozie module facilitates the Oozie web-services api integration.

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


## Example

<b>Request</b>
```
oozie.get('versions', function(error, response) {
      console.log(response);
});
```

<b>Response</b>
```
[0, 1, 2]
```

## POSTing a new Job

<b>Request</b>
```
var xml_data = '<?xml version="1.0" encoding="UTF-8"?>\
                <configuration>\
                <property><name>nameNode</name><value>hdfs://localhost:8020</value></property>\
                <property><name>jobTracker</name><value>localhost:8021</value></property>\
                <property><name>queueName</name><value>default</value></property>\
                <property><name>user.name</name><value>oozie</value></property>\
                <property><name>oozie.libpath</name><value>/user/oozie/share/lib</value></property>\
                <property><name>oozie.wf.application.path</name><value>hdfs://localhost:8020/user/oozie/myapp/pig</value></property>\
                <property><name>oozie.use.system.libpath</name><value>true</value></property>\
                <property><name>oozie.wf.workflow.notification.url</name><value>http://localhost:8085/callback?id=$jobId&amp;status=$status</value></property>\
                <property><name>oozie.wf.rerun.failnodes</name><value>false</value></property>\
                </configuration>';

oozie.post('jobs?action=start', xml_data, function(error, response) {
      console.log(response);
});
```

<b>Response</b>
```
{ id: '0000004-140528180915475-oozie-abc-W' }
```