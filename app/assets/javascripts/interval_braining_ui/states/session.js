(function() {

  function StateSessionNew($stateProvider, $templateUrl) {
    this.breadcrumb = 'Sign In';

    this.data = {
      // Clear out auth check beforeState filter
      beforeState: [],
      pageTitle: {
        defaultValue: 'Sign In'
      },
      pageHeader: {}
    };

    this.name = 'sessions.new'
    this.templateUrl = $templateUrl.get('interval_braining_ui/sessions/new.html');
    this.url = '/sign_in';
  }

  angular.module('states.sessions', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new({
        abstract: true,
        name: 'sessions',
        template: '<div ui-view></div>',
        url: ''
      });
      stateFactory.$new(StateSessionNew);
    }
  ]);

})();
