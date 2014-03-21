(function() {
  var stateFactory = angular.module('factories.stateFactory', [
    'ui.router',
    'services.$templateUrl'
  ]);

  stateFactory.provider('stateFactory', [
    '$stateProvider',
    '$templateUrlProvider',
    function($stateProvider, $templateUrl) {
      var stateFactory = {
        $get: function() { return stateFactory; },
        $new: function(stateConstructor) {
          var state;
          if(angular.isFunction(stateConstructor)) {
            state = new stateConstructor($stateProvider, $templateUrl);
          } else if(stateConstructor && angular.isObject(stateConstructor)) {
            state = stateConstructor;
          } else {
            throw("Don't know how to build state from" + stateConstructor);
          }
          return $stateProvider.state(state.name, state);
        }
      };

      return stateFactory;
    }
  ]);
})();
