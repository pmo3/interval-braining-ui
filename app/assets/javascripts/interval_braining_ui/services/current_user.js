(function() {
  var currentUserService = angular.module('services.currentUser', ['resources.user']);

  currentUserService.factory('currentUser', [
    'userResource',
    function(userResource) {
      return {
      };
    }
  ]);
})();
