(function() {
  function DeckController(deckResource, currentUser, growlNotifications) {
    this.name = '';
    this.description = '';

    this.create = function() {
      var request = deckResource.save({
        name: this.name,
        description: this.description
      });
      request.$promise.then(function(deck) {
        growlNotifications.add('Successfully created new deck "' + deck.name + '".', 'default', 5000);
      });
    };
  }

  angular.module('IntervalBraining').controller('DeckController', [
    'deckResource',
    'currentUser',
    'growlNotifications',
    DeckController
  ]);
})();
