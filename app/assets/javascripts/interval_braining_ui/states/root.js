(function() {

  function StateRoot($stateProvider, $templateUrl) {
    this.abstract = true;

    this.name = 'root';

    this.resolve = {
      currUser: [
        'currentUser',
        function(currentUser) {
          return currentUser.get().catch(function() { return null; });
        }
      ],
      redirect: [
        '$state',
        'currentUser',
        function($state, currentUser) {
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
