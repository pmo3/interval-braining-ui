(function() {
  var stateHome = angular.module('states.home', [
    'services.currentUser'
  ]);

  stateHome.constant('stateHome', function(url) {
    var controller = [function() {}];

    return {
      breadcrumb: 'Home',
      controller: controller,
      data: {
        beforeState: ['currentUser', function(currentUser) {
          if(!currentUser.authenticated) {
            return {
              to: 'session'
            };
          }
        }],
        pageTitle: {
          defaultValue: 'Welcome!'
        },
        pageHeader: {
          class: 'blue'
        }
      },
      template: '',
      url: url
    };
  });
})();
