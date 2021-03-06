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
    define(['ApiClient', 'model/NodeEdge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeEdge'));
  } else {
    // Browser globals (root is window)
    if (!root.phonetworks) {
      root.phonetworks = {};
    }
    root.phonetworks.InlineResponse2003In = factory(root.phonetworks.ApiClient, root.phonetworks.NodeEdge);
  }
}(this, function(ApiClient, NodeEdge) {
  'use strict';




  /**
   * The InlineResponse2003In model module.
   * @module model/InlineResponse2003In
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>InlineResponse2003In</code>.
   * @alias module:model/InlineResponse2003In
   * @class
   * @param _5f9e769ff6fe4cee02b3b4547200db6b {module:model/NodeEdge} 
   */
  var exports = function(_5f9e769ff6fe4cee02b3b4547200db6b) {
    var _this = this;

    _this['5f9e769ff6fe4cee02b3b4547200db6b'] = _5f9e769ff6fe4cee02b3b4547200db6b;
  };

  /**
   * Constructs a <code>InlineResponse2003In</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003In} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003In} The populated <code>InlineResponse2003In</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('5f9e769ff6fe4cee02b3b4547200db6b')) {
        obj['5f9e769ff6fe4cee02b3b4547200db6b'] = NodeEdge.constructFromObject(data['5f9e769ff6fe4cee02b3b4547200db6b']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NodeEdge} 5f9e769ff6fe4cee02b3b4547200db6b
   */
  exports.prototype['5f9e769ff6fe4cee02b3b4547200db6b'] = undefined;



  return exports;
}));


