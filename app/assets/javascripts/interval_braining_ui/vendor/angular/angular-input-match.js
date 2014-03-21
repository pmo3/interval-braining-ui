/**
 * angular-input-match
 * ngModel validation for matching model attributes
 * @version v0.0.1-dev-2014-03-21
 * @link https://github.com/interval-braining/angular-input-match
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'directives.inputMatch';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/directives/inputMatch.js
(function() {
var inputMatch = angular.module('directives.inputMatch', []);
  inputMatch.directive('match', function () {

    function link(scope, elem, attrs, ctrl) {
      if(!ctrl) { return; }

      scope.$watch(
        function() {
          return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.match === ctrl.$modelValue;
        },
        function(currentValue) {
          ctrl.$setValidity('match', currentValue);
        }
      );
    }

    return {
      link: link,
      require: '?ngModel',
      restrict: 'A',
      scope: { match: '=' }
    };
  });
})();
})(window, window.angular);