(function() {
  var sessionResource = angular.module('resources.session', [
    'ngResource'
  ]);

  sessionResource.factory('sessionResource', [
    '$resource',
    '$rootScope',
    function($resource, $rootScope) {

      var sessionActions = {
        save: {
          method: 'POST',
          interceptor: {
            response: function(response) {
              $rootScope.$broadcast('$sessionCreate');
              return response;
            }
          }
        },
        'delete': {
          method: 'DELETE',
          url: '/api/v1/users/sign_out.json',
          interceptor: {
            response: function(response) {
              $rootScope.$broadcast('$sessionDestroy');
              return response;
            }
          }
        }
      };

      return $resource('/api/v1/users/sign_in.json', {}, sessionActions);
    }
  ]);
})();
