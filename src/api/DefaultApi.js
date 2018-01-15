/**
 * Social Graph API
 * Pho Networks REST API
 *
 * OpenAPI spec version: 1.1.1
 * Contact: emre@phonetworks.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Edge', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/Node', 'model/NodeEdge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Edge'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/Node'), require('../model/NodeEdge'));
  } else {
    // Browser globals (root is window)
    if (!root.phonetworks) {
      root.phonetworks = {};
    }
    root.phonetworks.DefaultApi = factory(root.phonetworks.ApiClient, root.phonetworks.Edge, root.phonetworks.InlineResponse200, root.phonetworks.InlineResponse2001, root.phonetworks.InlineResponse2002, root.phonetworks.InlineResponse2003, root.phonetworks.InlineResponse2004, root.phonetworks.Node, root.phonetworks.NodeEdge);
  }
}(this, function(ApiClient, Edge, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, Node, NodeEdge) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.1.1
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAttribute operation.
     * @callback module:api/DefaultApi~addAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates (or creates) an attribute
     * Works with all entities, including nodes and edges. Given its key, updates an  attribute value, or creates it, if it doesn&#39;t yet exist. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.value The value to update the key with.
     * @param {module:api/DefaultApi~addAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.addAttribute = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/{uuid}/attribute/{key}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the delAttribute operation.
     * @callback module:api/DefaultApi~delAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes an attribute
     * Works with all entities, including nodes and edges. Given its key, deletes an  attribute. 
     * @param {module:api/DefaultApi~delAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.delAttribute = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/{uuid}/attribute/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the delEntity operation.
     * @callback module:api/DefaultApi~delEntityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes an entity
     * Works with all entities, including nodes and edges.  
     * @param {module:api/DefaultApi~delEntityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.delEntity = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllEdges operation.
     * @callback module:api/DefaultApi~getAllEdgesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the edges of a node
     * By passing in a node ID, you can fetch all the edges of the node in question; including incoming and outgoing. 
     * @param {String} uuid The node ID
     * @param {module:api/DefaultApi~getAllEdgesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.getAllEdges = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getAllEdges");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/{uuid}/edges/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttribute operation.
     * @callback module:api/DefaultApi~getAttributeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the value of an entity attribute
     * Attribute key must be case-sensitive. 
     * @param {String} uuid The node ID
     * @param {String} key The attribute key
     * @param {module:api/DefaultApi~getAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getAttribute = function(uuid, key, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getAttribute");
      }

      // verify the required parameter 'key' is set
      if (key == undefined || key == null) {
        throw new Error("Missing the required parameter 'key' when calling getAttribute");
      }


      var pathParams = {
        'uuid': uuid,
        'key': key
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/{uuid}/attribute/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttributes operation.
     * @callback module:api/DefaultApi~getAttributesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the existing attribute keys of an entity (edge or node)
     * Attribute keys are case-sensitive, and they will be listed in an array. 
     * @param {String} uuid The node ID
     * @param {module:api/DefaultApi~getAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getAttributes = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getAttributes");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/{uuid}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdge operation.
     * @callback module:api/DefaultApi~getEdgeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Edge} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves an edge
     * By passing in an ID, you can search for available edges in the system.  
     * @param {String} uuid The edge ID
     * @param {module:api/DefaultApi~getEdgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Edge}
     */
    this.getEdge = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEdge");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Edge;

      return this.apiClient.callApi(
        '/edge/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdgeGetters operation.
     * @callback module:api/DefaultApi~getEdgeGettersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the edge getter methods of a node
     * By passing in a node UUID that exists in the database, you can fetch  the edge getter methods of the node in question. 
     * @param {String} uuid The node ID
     * @param {module:api/DefaultApi~getEdgeGettersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getEdgeGetters = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEdgeGetters");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/{uuid}/edges/getters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEdgeSetters operation.
     * @callback module:api/DefaultApi~getEdgeSettersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the edge setter methods of a node
     * By passing in a node UUID that exists in the database, you can fetch  the edge setter methods of the node in question. These setters may or  may not be formative. If they are formative, a new node is created in result. 
     * @param {String} uuid The node ID
     * @param {module:api/DefaultApi~getEdgeSettersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getEdgeSetters = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEdgeSetters");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/{uuid}/edges/setters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFounder operation.
     * @callback module:api/DefaultApi~getFounderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the Graph Founder
     * The Founder must be a \\Pho\\Framework\\Actor object.  This method returns the object type as well as object ID. 
     * @param {module:api/DefaultApi~getFounderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.getFounder = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/founder', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGraph operation.
     * @callback module:api/DefaultApi~getGraphCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the main Graph
     * The Graph must be a \\Pho\\Lib\\Graph\\SubGraph and \\Pho\\Framework\\Graph object.  This method returns the object type as well as object ID. The Graph contains all nodes and edges in the system.  Though it is contained by Space, its one and only container. 
     * @param {module:api/DefaultApi~getGraphCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.getGraph = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/graph', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIncomingEdges operation.
     * @callback module:api/DefaultApi~getIncomingEdgesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NodeEdge>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the incoming edges of a node
     * By passing in a node ID, you can fetch  the incoming edges of the node in question. 
     * @param {String} uuid the node ID
     * @param {module:api/DefaultApi~getIncomingEdgesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NodeEdge>}
     */
    this.getIncomingEdges = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getIncomingEdges");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [NodeEdge];

      return this.apiClient.callApi(
        '/{uuid}/edges/in', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNode operation.
     * @callback module:api/DefaultApi~getNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves a node
     * By passing in an ID, you can search for available nodes in the system. Please note, this function will not return edges. This method  is  reserved for nodes only.  
     * @param {String} uuid The node ID
     * @param {module:api/DefaultApi~getNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    this.getNode = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getNode");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Node;

      return this.apiClient.callApi(
        '/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeEdge operation.
     * @callback module:api/DefaultApi~getNodeEdgeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * edge getter
     * Fetches edge results, whether as edge IDs or node IDs, depending on edge&#39;s characteristics.  
     * @param {String} uuid The node ID
     * @param {String} edge The edge getter label
     * @param {module:api/DefaultApi~getNodeEdgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getNodeEdge = function(uuid, edge, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getNodeEdge");
      }

      // verify the required parameter 'edge' is set
      if (edge == undefined || edge == null) {
        throw new Error("Missing the required parameter 'edge' when calling getNodeEdge");
      }


      var pathParams = {
        'uuid': uuid,
        'edge': edge
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/{uuid}/{edge}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOutgoingEdges operation.
     * @callback module:api/DefaultApi~getOutgoingEdgesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NodeEdge>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the outgoing edges of a node
     * By passing in a node ID, you can fetch  the outgoing edges of the node in question. 
     * @param {String} uuid the node ID
     * @param {module:api/DefaultApi~getOutgoingEdgesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NodeEdge>}
     */
    this.getOutgoingEdges = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getOutgoingEdges");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [NodeEdge];

      return this.apiClient.callApi(
        '/{uuid}/edges/out', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSpace operation.
     * @callback module:api/DefaultApi~getSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieves the Space
     * The Space must be a \\Pho\\Lib\\Graph\\Graph object.  This method returns the object type as well as object uuid. Space always comes with the nil ID;  00000000000000000000000000000000, and under normal circumstances its class is always Pho\\Kernel\\Standards\\Space 
     * @param {module:api/DefaultApi~getSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.getSpace = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/space', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getType operation.
     * @callback module:api/DefaultApi~getTypeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetches entity type
     * Possible values are; \&quot;Space\&quot;, \&quot;Node\&quot;, \&quot;Graph Node\&quot;, \&quot;Graph\&quot;, \&quot;Actor Node\&quot; \&quot;Object Node\&quot;, \&quot;Edge\&quot;, \&quot;Read Edge\&quot;, \&quot;Write Edge\&quot;, \&quot;Subscribe Edge\&quot;, \&quot;Mention Edge\&quot;, \&quot;Unidentified\&quot;. 
     * @param {String} uuid the node
     * @param {module:api/DefaultApi~getTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getType = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid == undefined || uuid == null) {
        throw new Error("Missing the required parameter 'uuid' when calling getType");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/{uuid}/type', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the makeActor operation.
     * @callback module:api/DefaultApi~makeActorCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * creates an Actor object
     * Fetches whatever set as \&quot;default_object\&quot;&#x3D;&gt;\&quot;actor\&quot; while determining what Actor object to construct. If it doesn&#39;t exist, uses \&quot;default_object\&quot;&#x3D;&gt;\&quot;founder\&quot; class. Otherwise fails. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.param1 Actor constructor argument. More parameters may be passed via param2, param3 ... param50. 
     * @param {module:api/DefaultApi~makeActorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.makeActor = function(opts, callback) {
      opts = opts || {};
      var postBody = JSON.stringify(opts);


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/actor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the makeEdge operation.
     * @callback module:api/DefaultApi~makeEdgeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * creates an edge
     * Used to set new edges. If the edge is formative, then a node is also formed. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.param1 The value to update the key with. There can be 50 of those. For example;  param1&#x3D;\&quot;value1\&quot;, param2 &#x3D;\&quot;another value\&quot; depending on the edge&#39;s default constructor variable count. 
     * @param {module:api/DefaultApi~makeEdgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.makeEdge = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['param1'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/{uuid}/{edge}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setAttribute operation.
     * @callback module:api/DefaultApi~setAttributeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates (or creates) an attribute
     * Works with all entities, including nodes and edges. Given its key, updates an  attribute value, or creates it, if it doesn&#39;t yet exist. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.value The value to update the key with.
     * @param {module:api/DefaultApi~setAttributeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.setAttribute = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/{uuid}/attribute/{key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
