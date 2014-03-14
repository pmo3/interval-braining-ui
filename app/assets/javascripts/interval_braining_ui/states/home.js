(function() {
  var stateHome = angular.module('states.home', []);

  stateHome.constant('stateHome', function(url) {
    var controller = [function() {}];

    return {
      breadcrumb: 'Home',
      controller: controller,
      data: {
        pageTitle: {
          defaultValue: 'Welcome!'
        },
        pageHeader: {
          class: 'blue'
        }
      },
      template: 'So maybe a nav of common actions here?',
      url: url
    };
  });
})();
