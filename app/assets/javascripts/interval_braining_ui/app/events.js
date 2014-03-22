(function() {

  angular.module('IntervalBraining').run([
    '$rootScope',
    '$state',
    function($rootScope, $state) {

      function onSessionDestroy() {
        $state.go('sessions.new');
      }

      $rootScope.$on('$sessionDestroy', onSessionDestroy);
    }
  ]);

})();
