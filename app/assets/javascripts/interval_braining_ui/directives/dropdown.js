(function() {
  var dropdown = angular.module('directives.dropdown', []),
    isHandlerActive = false;

  dropdown.directive('dropdown', [
    '$document',
    function($document) {

      $document.on('click', function(e) {
        if(!isHandlerActive) { return; }

        var dropdowns = $('.dropdown.open, [dropdown].open');
        if(!dropdowns.is(e.target) && !dropdowns.find(e.target)[0]) {
          dropdowns.removeClass('open');
          isHandlerActive = false;
        }
      });


      function link(scope, element, attrs) {
        var toggles = element.find('.dropdown-toggle'),
          toggle = toggles.length > 0 ? toggles.first() : element;

        toggle.on('click', function(e) {
          element.siblings('.dropdown').removeClass('open');
          element.toggleClass('open');
          isHandlerActive = $('.dropdown.open, [dropdown].open')[0] ? true : false;
        });
      };

      return {
        link: link,
        restrict: 'AC'
      };
    }
  ]);
})()
