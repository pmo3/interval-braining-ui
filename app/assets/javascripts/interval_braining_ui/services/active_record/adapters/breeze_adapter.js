(function() {
  var svcBreezeAdapater = angular.module('services.activeRecord.adapters.breezeAdapter'. [
    'services.stringTransform',
    'services.activeRecord'
  ]);

  svcBreezeAdapater.provider('breezeAdapter', [
    'stringTransform',
    function(stringTransform) {
      var breezeAdapter = {},
        defaultNamingConvention = new breeze.NamingConvention({
          name: 'underscoreToCamelCaseNamingConvention',
          serverPropertyNameToClient: stringTransform.camelize,
          clientPropertyNameToServer: stringTransform.underscore
        });

      breezeAdapter.$get = function() {
        defaultNamingConvention.setAsDefault();
        return breezeAdapter;
      };

      return breezeAdapter;
    }
  ]);

  svcBreezeAdapter.config([
    'activeRecordProvider',
    'breezeProvider',
    function(activeRecordProvider, breezeProvider) {

    }
  ]);
})();
