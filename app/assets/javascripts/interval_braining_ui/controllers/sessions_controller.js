(function() {
  function SessionsController(sessionResource, currentUser, $state) {
    this.email = '';
    this.password = '';
    this.rememberMe = false;

    this.submit = function() {
      var request = sessionResource.save({
        email: this.email,
        password: this.password,
        remember_me: this.rememberMe
      });
      request.$promise.then(function(response) {
        currentUser.set(response.data);
        $state.go('dashboard');
      });
    };
  }

  var app = angular.module('IntervalBraining');
  app.controller('SessionsController', [
    'sessionResource',
    'currentUser',
    '$state',
    SessionsController
  ]);
})();
