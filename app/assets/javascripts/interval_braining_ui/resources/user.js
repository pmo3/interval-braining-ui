(function() {
  var userResource = angular.module('resources.user', [
    'ngResource'
  ]);

  userResource.factory('userResource', [
    '$resource',
    function($resource) {
      return $resource('/api/v1/users/:id.json');
    }
  ]);
})();
