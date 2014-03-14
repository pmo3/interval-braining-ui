(function() {
  var states = angular.module('states', [
    'ui.router',
    'states.home',
    'states.dashboard'
  ]);

  states.config([
    '$stateProvider',
    '$urlRouterProvider',
    'stateHome',
    'stateDashboard',
    function($stateProvider, $urlRouterProvider, stateHome, stateDashboard) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', stateHome('/'));
      $stateProvider.state('dashboard', stateDashboard('dashboard'));
    }
  ]);

})();
