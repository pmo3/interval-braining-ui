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
    function($rootScope, $templateUrl) {
      // add $templateUrl to $rootScope
      $rootScope.$templateUrl = $templateUrl;
    }
  ]);
})();
