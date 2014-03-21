(function() {

  function StateRoot($stateProvider, $templateUrl) {
    this.abstract = true;

    this.data = {
      beforeState: [
        'currentUser',
        function(currentUser) {
          if(currentUser.authenticated) { return; }
          return { to: 'sessions.new' };
        }
      ]
    };

    this.name = 'root';
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
