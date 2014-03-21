(function() {
  function RegistrationsController(userResource, currentUser, $state) {
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';

    this.submit = function() {
      var request = userResource.save({
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      });
      request.$promise.then(function(user) {
        currentUser.set(user);
        $state.go('dashboard');
      });
    };
  }

  var app = angular.module('IntervalBraining');
  app.controller('RegistrationsController', [
    'userResource',
    'currentUser',
    '$state',
    RegistrationsController
  ]);
})();
