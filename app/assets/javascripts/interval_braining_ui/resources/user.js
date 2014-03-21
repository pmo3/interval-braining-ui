(function() {
  var userResource = angular.module('resources.user', []);

  userResource.factory('userResource', [
    '$resource',
    function($resource) {
      return $resource('/users/:id.json');
    }
  ]);
})();
