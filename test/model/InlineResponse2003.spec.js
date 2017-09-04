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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.phonetworks);
  }
}(this, function(expect, phonetworks) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new phonetworks.InlineResponse2003();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2003', function() {
    it('should create an instance of InlineResponse2003', function() {
      // uncomment below and update the code to test InlineResponse2003
      //var instane = new phonetworks.InlineResponse2003();
      //expect(instance).to.be.a(phonetworks.InlineResponse2003);
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new phonetworks.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new phonetworks.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property _in (base name: "in")', function() {
      // uncomment below and update the code to test the property _in
      //var instane = new phonetworks.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property out (base name: "out")', function() {
      // uncomment below and update the code to test the property out
      //var instane = new phonetworks.InlineResponse2003();
      //expect(instance).to.be();
    });

  });

}));
