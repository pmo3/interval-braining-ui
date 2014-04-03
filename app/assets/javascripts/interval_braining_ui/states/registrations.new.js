(function() {

  function StateRegistrationNew($stateProvider, $templateUrl) {
    this.breadcrumb = 'Sign Up';

    this.data = {
      // Clear out auth check beforeState filter
      beforeState: [],
      pageTitle: {
        defaultValue: 'Sign Up'
      },
      pageHeader: {}
    };

    this.name = 'registrations.new'
    this.views = {
      'content': {
        templateUrl: $templateUrl.get('interval_braining_ui/registrations/new.html')
      }
    };
    this.url = '/sign_up';
  }

  angular.module('states.registrations', []).config([
    'stateFactoryProvider',
    '$templateUrlProvider',
    function(stateFactory, $templateUrl) {
      stateFactory.$new({
        abstract: true,
        name: 'registrations',
        views: {
          'layout': {
            templateUrl: $templateUrl.get('interval_braining_ui/layouts/navbar_page_header_layout.html')
          }
        },
        url: ''
      });
      stateFactory.$new(StateRegistrationNew);
    }
  ]);

})();
