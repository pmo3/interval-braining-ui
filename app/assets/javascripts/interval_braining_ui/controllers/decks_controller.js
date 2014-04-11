(function() {
  function DecksController(deckResource, currentUser, growlNotifications) {
    var owned, ownedPromise;

    Object.defineProperty(this, 'owned', {
      get: function() {
        var out;
        if(!ownedPromise) {
          owned = deckResource.query({creatorId: currentUser.id});
          ownedPromise = owned.$promise;
        }
        return owned;
      },
      enumerable: true
    });
  }

  angular.module('IntervalBraining').controller('DecksController', [
    'deckResource',
    'currentUser',
    'growlNotifications',
    DecksController
  ]);
})();
