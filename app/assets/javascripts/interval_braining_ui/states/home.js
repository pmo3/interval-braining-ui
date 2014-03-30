(function() {

  function StateHome($stateProvider, $templateUrl) {
    this.breadcrumb = 'Home';
    this.data = {
      pageTitle: {
        defaultValue: 'Welcome!'
      },
      pageHeader: {
      }
    };
    this.name = 'home';
    this.parent = 'root';
    this.views = {
      'content@': {
        template: '<h4>Hello, this is the home page</h4>'
      }
    };
    this.url = '';
  }

  angular.module('states.home', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new(StateHome);
    }
  ]);

})();
