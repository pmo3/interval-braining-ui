(function() {
  function SessionsController(sessionResource, currentUser, $state, growlNotifications) {
    this.email = '';
    this.password = '';
    this.rememberMe = false;
    var self = this;

    this.submit = function() {
      var request = sessionResource.save({
        email: this.email,
        password: this.password,
        remember_me: this.rememberMe
      });
      var promise = request.$promise.then(function(response) {
        currentUser.set(response.data);
        $state.go('dashboard');
      },
      function(response){
        growlNotifications.add(response.data.error, 'alert', 5000);
        self.password = '';
      });
    };
  }

  var app = angular.module('IntervalBraining');
  app.controller('SessionsController', [
    'sessionResource',
    'currentUser',
    '$state',
    'growlNotifications',
    SessionsController
  ]);
})();
