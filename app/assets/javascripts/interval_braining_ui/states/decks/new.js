(function() {

  function StateDecksNew($stateProvider, $templateUrl) {
    this.breadcrumb = 'New';

    this.data = {
      pageTitle: {
        defaultValue: 'New Deck'
      },
      pageHeader: {}
    };

    this.name = 'decks.new'
    this.parent = 'decks.index'
    this.templateUrl = $templateUrl.get('interval_braining_ui/decks/new.html');
    this.url = '/new';
  }

  angular.module('states.decks').config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new(StateDecksNew);
    }
  ]);

})();
