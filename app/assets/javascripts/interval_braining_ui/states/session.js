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
    this.views = {
      'content': {
        templateUrl: $templateUrl.get('interval_braining_ui/sessions/new.html')
      }
    };
    this.url = '/sign_in';
  }

  angular.module('states.sessions', []).config([
    'stateFactoryProvider',
    '$templateUrlProvider',
    function(stateFactory, $templateUrl) {
      stateFactory.$new({
        abstract: true,
        name: 'sessions',
        views: {
          'layout': {
            templateUrl: $templateUrl.get('interval_braining_ui/layouts/navbar_page_header_layout.html')
          }
        },
        url: ''
      });
      stateFactory.$new(StateSessionNew);
    }
  ]);

})();
