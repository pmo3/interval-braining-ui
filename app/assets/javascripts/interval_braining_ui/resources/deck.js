(function() {
  var deckResource = angular.module('resources.deck', [
    'ngResource'
  ]);

  deckResource.factory('deckResource', [
    '$resource',
    function($resource) {
      return $resource('/api/v1/decks/:id.json');
    }
  ]);
})();

