(function() {
  var userResource = angular.module('resources.user', [
    'ngResource'
  ]);

  userResource.factory('userResource', [
    '$resource',
    function($resource) {
      return $resource('/users/:id.json');
    }
  ]);
})();
