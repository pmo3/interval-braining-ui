(function() {
  var svcPageHeader = angular.module('services.pageHeader', [
    'services.pageTitle',
    'directives.pageTitle'
  ]);

  svcPageHeader.factory('pageHeader', [
    '$state',
    'pageTitle',
    'stateAttr',
    function($state, pageTitle, stateAttr) {

      var pageHeader = stateAttr.new('pageHeader', {resetValueOnStateChange: true});

      function defaultTitleBuilder($state, pageTitle) {
        var value = pageTitle.value();
        return value && value.defaultValue;
      }

      pageHeader.class = function() {
        var value = pageHeader.value();
        return (value && value.class) || '';
      };

      pageHeader.title = function() {
        var value = pageHeader.value(),
          builder = (value && value.titleBuilder) || defaultTitleBuilder;
        return builder($state, pageTitle);
      }

      return pageHeader;
    }
  ]);
})();
