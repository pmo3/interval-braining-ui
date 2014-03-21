(function() {

  function StateHome($stateProvider, $templateUrl) {
    this.breadcrumb = 'Home';
    this.data = {
      pageTitle: {
        defaultValue: 'Welcome!'
      },
      pageHeader: {
        class: 'blue'
      }
    };
    this.name = 'home';
    this.parent = 'root';
    this.template = '';
    this.url = '';
  }

  angular.module('states.home', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new(StateHome);
    }
  ]);

})();
