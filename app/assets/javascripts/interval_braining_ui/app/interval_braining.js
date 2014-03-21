(function() {
  var app = angular.module('IntervalBraining', [
    'ngResource',
    'factories.stateFactory',
    'states',
    'resources.user',
    'services.currentUser',
    'services.$templateUrl',
    'services.pageTitle',
    'services.pageHeader',
    'directives.navbarCollapse',
    'directives.dropdown',
    'directives.pageTitle',
    'directives.pageHeader'
  ]);

  app.run([
    '$rootScope',
    '$templateUrl',
    'currentUser',
    function($rootScope, $templateUrl, currentUser) {
      // add some services to the $rootScope
      $rootScope.currentUser = currentUser;
      $rootScope.$templateUrl = $templateUrl;
    }
  ]);
})();
