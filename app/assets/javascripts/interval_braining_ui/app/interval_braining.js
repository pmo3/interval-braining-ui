(function() {
  var app = angular.module('IntervalBraining', [
    'ngResource',
    'states',
    'resources.user',
    'services.currentUser',
    'services.$templateCache',
    'services.pageTitle',
    'services.pageHeader',
    'directives.navbarCollapse',
    'directives.dropdown',
    'directives.pageTitle',
    'directives.pageHeader'
  ]);
})();
