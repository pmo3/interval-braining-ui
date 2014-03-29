(function() {
  var app = angular.module('IntervalBraining', [
    'ngResource',
    'ngAnimate',
    'factories.stateFactory',
    'states',
    'resources.user',
    'resources.session',
    'services.currentUser',
    'services.$templateUrl',
    'services.pageTitle',
    'services.pageHeader',
    'directives.inputMatch',
    'directives.navbarCollapse',
    'directives.dropdown',
    'directives.pageTitle',
    'directives.pageHeader',
    'ngSanitize',
    'growlNotifications'
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
