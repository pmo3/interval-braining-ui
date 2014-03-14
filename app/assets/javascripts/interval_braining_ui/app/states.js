(function() {
  var states = angular.module('states', [
    'ui.router',
    'states.home',
    'states.dashboard'
  ]);

  states.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    'stateHome',
    'stateDashboard',
    function($locationProvider, $stateProvider, $urlRouterProvider, stateHome, stateDashboard) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', stateHome('/'));
      $stateProvider.state('dashboard', stateDashboard('dashboard'));
    }
  ]);

})();
