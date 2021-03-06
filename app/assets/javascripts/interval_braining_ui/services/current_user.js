(function() {
  var currentUserService = angular.module('services.currentUser', ['resources.user']);

  currentUserService.factory('currentUser', [
    'userResource',
    'sessionResource',
    '$rootScope',
    function(userResource, sessionResource, $rootScope) {
      var user,
        currentUser = {},
        promise;

      Object.defineProperties(currentUser, {
        authenticated: {
          enumerable: true,
          get: function() { return !!user; }
        },
        displayName: {
          enumerable: true,
          get: function() { return user.displayName; }
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

      currentUser.signOut = function() {
        sessionResource['delete']();
      };

      $rootScope.$on('$sessionDestroy', currentUser.clear);

      return currentUser;
    }
  ]);
})();
