(function() {
  var activeRecord = angular.module('services.activeRecord', ['breeze.angular']);

  activeRecord.provider('activeRecord', [
    function() {
      var activeRecord = {},
        _defaultAdapter;

      Object.defineProperties(activeRecord, {
        defaultAdapter: {
          enumberable: true,
          get: function() { return _defaultAdapter; },
          set: function(adapter) { return _defaultAdapter = adapter }
        }
      });

      activeRecord.$get = function() {
        return activeRecord;
      };

      return activeRecord;
    }
  ]);

var ar = angular.module('services.activeRecord');

ar.config([
  'activeRecordProvider',
  'breezeProvider',
  function(activeRecordProvider, breezeProvider) {
  }
]);

ar.run([
  'activeRecord',
  'breeze',
  function(activeRecord, breeze) {
    //breeze.config.initializeAdapterInstance( "modelLibrary", "backingStore");
    //var dataManager = new breeze.EntityManager('http://0.0.0.0:3333/api/v1/decks');
  }
]);

})();

