//= require_self
//= require_tree ./states

(function() {
  var states = angular.module('states', [
    'ui.router',
    'ui.router.hooks.beforeState',
    'services.$templateUrl',
    'states.root',
    'states.home',
    'states.registrations',
    'states.sessions',
    'states.dashboard',
    'states.decks'
  ]);

  states.config([
    '$locationProvider',
    '$urlRouterProvider',
    function($locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    }
  ]);

})();
