(function() {
  var navbar = angular.module('directives.navbarCollapse', []);

  navbar.directive('navbarCollapse', [
    function() {
      function link(scope, element, attrs) {
        var toggle = element.parents('.navbar').find('.navbar-toggle').first();
        toggle.on('click', function() {
          element.toggleClass('in');
        });
      };

      return {
        link: link,
        restrict: 'AC'
      };
    }
  ]);
})()
