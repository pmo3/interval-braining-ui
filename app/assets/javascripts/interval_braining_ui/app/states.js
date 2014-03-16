(function() {
  var states = angular.module('states', [
    'ui.router',
    'ui.router.hooks.beforeState',
    'states.home',
    'states.session',
    'states.dashboard',
  ]);

  states.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    'stateHome',
    'stateSession',
    'stateDashboard',
    function($locationProvider, $stateProvider, $urlRouterProvider, stateHome, stateSession, stateDashboard) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', stateHome('/'));
      $stateProvider.state('session', stateSession('/signin'));
      $stateProvider.state('dashboard', stateDashboard('dashboard'));
    }
  ]);

})();
