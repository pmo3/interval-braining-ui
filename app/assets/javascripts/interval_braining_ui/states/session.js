(function() {
  var stateSession = angular.module('states.session', []);

  stateSession.constant('stateSession', function(url) {
    var controller = [function() {}];

    return {
      breadcrumb: 'Sign In',
      controller: controller,
      data: {
        beforeAction: [],
        pageTitle: {
          defaultValue: 'Sign In'
        },
        pageHeader: {}
      },
      template: 'Please sign in',
      url: url
    };
  });
})();
