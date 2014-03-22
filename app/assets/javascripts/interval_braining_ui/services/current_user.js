(function() {
  var currentUserService = angular.module('services.currentUser', ['resources.user']);

  currentUserService.factory('currentUser', [
    'userResource',
    function(userResource) {
      var user,
        currentUser = {},
        promise;

      Object.defineProperties(currentUser, {
        authenticated: {
          enumerable: true,
          get: function() { return !!user; }
        },
        email: {
          enumerable: true,
          get: function() { return user.email; }
        },
        id: {
          enumerable: true,
          get: function() { return user.id; }
        }
      });

      currentUser.clear = function() { user = null; };

      currentUser.get = function() {
        if(promise) { return promise; }
        var request = userResource.get({id: 'me'});
        request.$promise.then(function(currUser) {
          user = currUser;
        });
        return promise = request.$promise;
      };

      currentUser.set = function(currUser) { user = currUser; };

      return currentUser;
    }
  ]);
})();
