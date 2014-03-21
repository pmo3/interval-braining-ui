(function() {
  var app = angular.module('IntervalBraining', [
    'ngResource',
    'factories.stateFactory',
    'states',
    'resources.user',
    'services.currentUser',
    'services.pageTitle',
    'services.pageHeader',
    'directives.navbarCollapse',
    'directives.dropdown',
    'directives.pageTitle',
    'directives.pageHeader'
  ]);
})();
