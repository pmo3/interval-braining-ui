(function() {

  function StateDashboard($stateProvider, $templateUrl) {
    this.breadcrumb = 'Dashboard';

    this.data = {
      pageTitle: {
        defaultValue: 'Dashboard'
      },
      pageHeader: {
        class: 'blue'
      }
    };

    this.name = 'dashboard';
    this.template = 'Something?';
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
