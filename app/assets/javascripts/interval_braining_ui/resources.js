//= require_self
//= require_tree ./resources

(function() {
  var resources = angular.module('resources', [
    'ngResource',
    'resources.user',
    'resources.session',
    'resources.deck',
  ]);
})();
