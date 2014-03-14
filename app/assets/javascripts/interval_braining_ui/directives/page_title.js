(function() {
  var pageTitle = angular.module('directives.pageTitle', [
    'services.pageTitle'
  ]);

  pageTitle.directive('pageTitle', [
    'pageTitle',
    function(pageTitle) {
      function link(scope, element, attrs) {
        scope.pageTitle = pageTitle;
      }

      return {
        link: link,
        restrict: 'AC'
      };
    }
  ]);
})();
