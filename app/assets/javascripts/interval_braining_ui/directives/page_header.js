(function() {
  var dtvPageHeader = angular.module('directives.pageHeader', [
    'services.pageHeader',
    'directives.pageTitle',
    'ui.router.breadcrumbs'
  ]);

  dtvPageHeader.directive('pageHeader', [
    '$compile',
    'pageHeader',
    function($compile, pageHeader) {
      function link(scope, element, attr) {
        scope.pageHeader = {
          class: pageHeader.class,
          title: pageHeader.title
        };
      };

      return {
        link: link,
        restrict: 'AC'
      };
    }
  ]);
})();
