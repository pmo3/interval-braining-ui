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
    this.templateUrl = $templateUrl.get('interval_braining_ui/registrations/new.html');
    this.url = '/sign_up';
  }

  angular.module('states.registrations', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new({
        abstract: true,
        name: 'registrations',
        template: '<div ui-view></div>',
        url: ''
      });
      stateFactory.$new(StateRegistrationNew);
    }
  ]);

})();
