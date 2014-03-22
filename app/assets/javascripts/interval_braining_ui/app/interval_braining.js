(function() {
  var app = angular.module('IntervalBraining', [
    'ng-rails-csrf',
    'ngResource',
    'factories.stateFactory',
    'states',
    'resources.user',
    'services.currentUser',
    'services.$templateUrl',
    'services.pageTitle',
    'services.pageHeader',
    'directives.inputMatch',
    'directives.navbarCollapse',
    'directives.dropdown',
    'directives.pageTitle',
    'directives.pageHeader'
  ]);

  // add some services to the $rootScope
  app.run([
    '$rootScope',
    '$templateUrl',
    'currentUser',
    function($rootScope, $templateUrl, currentUser) {
      $rootScope.currentUser = currentUser;
      $rootScope.$templateUrl = $templateUrl;
    }
  ]);
})();
