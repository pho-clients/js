# phonetworks.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/phonetworks/server-rest/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttribute**](DefaultApi.md#addAttribute) | **POST** /{uuid}/attribute/{key} | updates (or creates) an attribute
[**delAttribute**](DefaultApi.md#delAttribute) | **DELETE** /{uuid}/attribute/{key} | deletes an attribute
[**delEntity**](DefaultApi.md#delEntity) | **DELETE** /{uuid} | deletes an entity
[**getAllEdges**](DefaultApi.md#getAllEdges) | **GET** /{uuid}/edges/all | retrieves the edges of a node
[**getAttribute**](DefaultApi.md#getAttribute) | **GET** /{uuid}/attribute/{key} | retrieves the value of an entity attribute
[**getAttributes**](DefaultApi.md#getAttributes) | **GET** /{uuid}/attributes | retrieves the existing attribute keys of an entity (edge or node)
[**getEdge**](DefaultApi.md#getEdge) | **GET** /edge/{uuid} | retrieves an edge
[**getEdgeGetters**](DefaultApi.md#getEdgeGetters) | **GET** /{uuid}/edges/getters | retrieves the edge getter methods of a node
[**getEdgeSetters**](DefaultApi.md#getEdgeSetters) | **GET** /{uuid}/edges/setters | retrieves the edge setter methods of a node
[**getFounder**](DefaultApi.md#getFounder) | **GET** /founder | retrieves the Graph Founder
[**getGraph**](DefaultApi.md#getGraph) | **GET** /graph | retrieves the main Graph
[**getIncomingEdges**](DefaultApi.md#getIncomingEdges) | **GET** /{uuid}/edges/in | retrieves the incoming edges of a node
[**getNode**](DefaultApi.md#getNode) | **GET** /{uuid} | retrieves a node
[**getNodeEdge**](DefaultApi.md#getNodeEdge) | **GET** /{uuid}/{edge} | edge getter
[**getOutgoingEdges**](DefaultApi.md#getOutgoingEdges) | **GET** /{uuid}/edges/out | retrieves the outgoing edges of a node
[**getSpace**](DefaultApi.md#getSpace) | **GET** /space | retrieves the Space
[**getType**](DefaultApi.md#getType) | **GET** /{uuid}/type | fetches entity type
[**makeActor**](DefaultApi.md#makeActor) | **POST** /actor | creates an Actor object
[**makeEdge**](DefaultApi.md#makeEdge) | **POST** /{uuid}/{edge} | creates an edge
[**setAttribute**](DefaultApi.md#setAttribute) | **PUT** /{uuid}/attribute/{key} | updates (or creates) an attribute


<a name="addAttribute"></a>
# **addAttribute**
> InlineResponse2004 addAttribute(opts)

updates (or creates) an attribute

Works with all entities, including nodes and edges. Given its key, updates an  attribute value, or creates it, if it doesn&#39;t yet exist. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var opts = { 
  'value': "value_example" // String | The value to update the key with.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAttribute(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| The value to update the key with. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="delAttribute"></a>
# **delAttribute**
> InlineResponse2004 delAttribute()

deletes an attribute

Works with all entities, including nodes and edges. Given its key, deletes an  attribute. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.delAttribute(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="delEntity"></a>
# **delEntity**
> delEntity()

deletes an entity

Works with all entities, including nodes and edges.  

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.delEntity(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllEdges"></a>
# **getAllEdges**
> InlineResponse2003 getAllEdges(uuid)

retrieves the edges of a node

By passing in a node ID, you can fetch all the edges of the node in question; including incoming and outgoing. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllEdges(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttribute"></a>
# **getAttribute**
> &#39;String&#39; getAttribute(uuid, key)

retrieves the value of an entity attribute

Attribute key must be case-sensitive. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID

var key = "key_example"; // String | The attribute key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttribute(uuid, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 
 **key** | **String**| The attribute key | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttributes"></a>
# **getAttributes**
> [&#39;String&#39;] getAttributes(uuid)

retrieves the existing attribute keys of an entity (edge or node)

Attribute keys are case-sensitive, and they will be listed in an array. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttributes(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdge"></a>
# **getEdge**
> Edge getEdge(uuid)

retrieves an edge

By passing in an ID, you can search for available edges in the system.  

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The edge ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEdge(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The edge ID | 

### Return type

[**Edge**](Edge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdgeGetters"></a>
# **getEdgeGetters**
> [&#39;String&#39;] getEdgeGetters(uuid)

retrieves the edge getter methods of a node

By passing in a node UUID that exists in the database, you can fetch  the edge getter methods of the node in question. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEdgeGetters(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEdgeSetters"></a>
# **getEdgeSetters**
> [&#39;String&#39;] getEdgeSetters(uuid)

retrieves the edge setter methods of a node

By passing in a node UUID that exists in the database, you can fetch  the edge setter methods of the node in question. These setters may or  may not be formative. If they are formative, a new node is created in result. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEdgeSetters(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFounder"></a>
# **getFounder**
> InlineResponse200 getFounder()

retrieves the Graph Founder

The Founder must be a \\Pho\\Framework\\Actor object.  This method returns the object type as well as object ID. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFounder(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGraph"></a>
# **getGraph**
> InlineResponse2001 getGraph()

retrieves the main Graph

The Graph must be a \\Pho\\Lib\\Graph\\SubGraph and \\Pho\\Framework\\Graph object.  This method returns the object type as well as object ID. The Graph contains all nodes and edges in the system.  Though it is contained by Space, its one and only container. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGraph(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncomingEdges"></a>
# **getIncomingEdges**
> [NodeEdge] getIncomingEdges(uuid)

retrieves the incoming edges of a node

By passing in a node ID, you can fetch  the incoming edges of the node in question. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | the node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIncomingEdges(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| the node ID | 

### Return type

[**[NodeEdge]**](NodeEdge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> Node getNode(uuid)

retrieves a node

By passing in an ID, you can search for available nodes in the system. Please note, this function will not return edges. This method  is  reserved for nodes only.  

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNode(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNodeEdge"></a>
# **getNodeEdge**
> [&#39;String&#39;] getNodeEdge(uuid, edge)

edge getter

Fetches edge results, whether as edge IDs or node IDs, depending on edge&#39;s characteristics.  

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | The node ID

var edge = "edge_example"; // String | The edge getter label


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNodeEdge(uuid, edge, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The node ID | 
 **edge** | **String**| The edge getter label | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOutgoingEdges"></a>
# **getOutgoingEdges**
> [NodeEdge] getOutgoingEdges(uuid)

retrieves the outgoing edges of a node

By passing in a node ID, you can fetch  the outgoing edges of the node in question. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | the node ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOutgoingEdges(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| the node ID | 

### Return type

[**[NodeEdge]**](NodeEdge.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpace"></a>
# **getSpace**
> InlineResponse2002 getSpace()

retrieves the Space

The Space must be a \\Pho\\Lib\\Graph\\Graph object.  This method returns the object type as well as object uuid. Space always comes with the nil ID;  00000000000000000000000000000000, and under normal circumstances its class is always Pho\\Kernel\\Standards\\Space 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpace(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getType"></a>
# **getType**
> &#39;String&#39; getType(uuid)

fetches entity type

Possible values are; \&quot;Space\&quot;, \&quot;Node\&quot;, \&quot;Graph Node\&quot;, \&quot;Graph\&quot;, \&quot;Actor Node\&quot; \&quot;Object Node\&quot;, \&quot;Edge\&quot;, \&quot;Read Edge\&quot;, \&quot;Write Edge\&quot;, \&quot;Subscribe Edge\&quot;, \&quot;Mention Edge\&quot;, \&quot;Unidentified\&quot;. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var uuid = "uuid_example"; // String | the node


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getType(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| the node | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="makeActor"></a>
# **makeActor**
> &#39;String&#39; makeActor(opts)

creates an Actor object

Fetches whatever set as \&quot;default_object\&quot;&#x3D;&gt;\&quot;actor\&quot; while determining what Actor object to construct. If it doesn&#39;t exist, uses \&quot;default_object\&quot;&#x3D;&gt;\&quot;founder\&quot; class. Otherwise fails. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var opts = { 
  'param1': "param1_example" // String | Actor constructor argument. More parameters may be passed via param2, param3 ... param50. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.makeActor(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param1** | **String**| Actor constructor argument. More parameters may be passed via param2, param3 ... param50.  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="makeEdge"></a>
# **makeEdge**
> &#39;String&#39; makeEdge(opts)

creates an edge

Used to set new edges. If the edge is formative, then a node is also formed. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var opts = { 
  'param1': "param1_example" // String | The value to update the key with. There can be 50 of those. For example;  param1=\"value1\", param2 =\"another value\" depending on the edge's default constructor variable count. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.makeEdge(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param1** | **String**| The value to update the key with. There can be 50 of those. For example;  param1&#x3D;\&quot;value1\&quot;, param2 &#x3D;\&quot;another value\&quot; depending on the edge&#39;s default constructor variable count.  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setAttribute"></a>
# **setAttribute**
> InlineResponse2004 setAttribute(opts)

updates (or creates) an attribute

Works with all entities, including nodes and edges. Given its key, updates an  attribute value, or creates it, if it doesn&#39;t yet exist. 

### Example
```javascript
var phonetworks = require('pho-js-client');

var apiInstance = new phonetworks.DefaultApi();

var opts = { 
  'value': "value_example" // String | The value to update the key with.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setAttribute(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| The value to update the key with. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

