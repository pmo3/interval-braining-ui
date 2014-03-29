(function() {

  angular.module('IntervalBraining').run([
    '$rootScope',
    '$state',
    'growlNotifications',
    function($rootScope, $state, growlNotifications) {

      function onSessionDestroy() {
        $state.go('sessions.new');
        growlNotifications.add("You've been signed out", 'default', 5000);
      }

      $rootScope.$on('$sessionDestroy', onSessionDestroy);
    }
  ]);

})();
