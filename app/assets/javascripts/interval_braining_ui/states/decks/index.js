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
    this.views = {
      'layout@': {
        templateUrl: $templateUrl.get('interval_braining_ui/layouts/navbar_page_header_layout.html')
      },
      'content@decks.index': {
        templateUrl: $templateUrl.get('interval_braining_ui/decks/index.html')
      }
    };
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
