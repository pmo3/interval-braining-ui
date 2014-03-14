(function() {
  var stateDashboard = angular.module('states.dashboard', []);

  stateDashboard.constant('stateDashboard', function(url) {
    var controller = [
      function() { }
    ];

    return {
      breadcrumb: 'Dashbaord',
      controller: controller,
      data: {
        pageTitle: {
          defaultValue: 'Dashboard'
        },
        pageHeader: {
          class: 'blue'
        }
      },
      parent: 'home',
      template: 'Something?',
      url: url
    };
  });
})();
