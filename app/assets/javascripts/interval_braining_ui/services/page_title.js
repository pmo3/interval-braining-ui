(function() {
  var pageTitle = angular.module('services.pageTitle', ['ui.router.helpers']);

  pageTitle.factory('pageTitle', [
    'stateAttr',
    function(stateAttr) {
      return stateAttr.new('pageTitle', {resetValueOnStateChange: true});
    }
  ]);
})();
