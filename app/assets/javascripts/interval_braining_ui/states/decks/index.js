(function() {

  function StateDecksIndex($stateProvider, $templateUrl) {
    this.breadcrumb = 'Decks';

    this.data = {
      pageTitle: {
        defaultValue: 'Decks'
      },
      pageHeader: {}
    };

    this.name = 'decks.index'
    this.templateUrl = $templateUrl.get('interval_braining_ui/decks/index.html');
    this.url = 'decks';
  }

  angular.module('states.decks', []).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new({
        abstract: true,
        name: 'decks',
        parent: 'home',
        url: ''
      });
      stateFactory.$new(StateDecksIndex);
    }
  ]);

})();
