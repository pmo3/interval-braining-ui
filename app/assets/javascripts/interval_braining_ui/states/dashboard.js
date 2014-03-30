(function() {

  function StateDashboard($stateProvider, $templateUrl) {
    this.breadcrumb = 'Dashboard';

    this.data = {
      pageTitle: {
        defaultValue: 'Dashboard'
      },
      pageHeader: {
      }
    };

    this.name = 'dashboard';
    this.views = {
      'content@': {
        template: '<h4>Dashboards, dashboards, dashboards.</h4>'
      }
    };
    this.parent = 'home';
    this.url = 'dashboard';
  }

  angular.module('states.dashboard', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new(StateDashboard);
    }
  ]);

})();
