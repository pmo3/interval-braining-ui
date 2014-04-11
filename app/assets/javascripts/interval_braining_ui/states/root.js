(function() {

  function StateRoot($stateProvider, $templateUrl) {
    this.abstract = true;

    this.name = 'root';

    this.resolve = {
      currentUserLoader: [
        'currentUser',
        function(currentUser) {
          return currentUser.get().catch(function() { return null; });
        }
      ],
      redirect: [
        '$state',
        'currentUser',
        'currentUserLoader',
        function($state, currentUser, currentUserLoader) {
          if(currentUser.authenticated) { return; }
          $state.go('sessions.new');
        }
      ]
    };

    this.url = '/';
  }

  angular.module('states.root', [
    'services.currentUser'
  ]).config([
    'stateFactoryProvider',
    function(stateFactory) {
      stateFactory.$new(StateRoot);
    }
  ]);

})();
