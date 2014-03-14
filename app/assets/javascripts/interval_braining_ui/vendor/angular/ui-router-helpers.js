/**
 * Helpful providers for angular-ui-router
 * @version v0.0.1-dev-2014-02-19
 * @link https://github.com/interval-braining/angular-ui-router-helpers
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui-router-helpers';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/ui-router-helpers.js
/* exported uiRouterHelpers */
var uiRouterHelpers = angular.module('ui.router.helpers', ['ng', 'ui.router']);

// Source: src/services/stateAttr.js
uiRouterHelpers.factory('stateAttr', [
  '$rootScope',
  '$state',
  function($rootScope, $state) {
var ProtoStateAttr = {
      resetValue: function(event, toState, toParams, fromState, fromParams) {
        /* jshint unused: false */ /* for full function signature */
        this._value = null;
      },
      set: function(newValue) {
        this._value = newValue;
      },
      value: function() {
        return this._value || $state.current.data && $state.current.data[this.attrName];
      }
    };

    function StateAttr(attrName) {
      this.attrName = attrName;
      this._value = null;
    }

    StateAttr.prototype = ProtoStateAttr;

    return {
      new: function(attrName, options) {
        var attr = new StateAttr(attrName);
        if(!options) { return attr; }

        if(options.resetValueOnStateChange === true) {
          $rootScope.$on('$stateChangeSuccess', function() { attr.resetValue(); });
        }
        return attr;
      }
    };
  }
]);
})(window, window.angular);