//= require interval_braining_ui/vendor/breeze/breeze
//= require interval_braining_ui/vendor/breeze/breeze_angular
//= require_self

angular.module('breeze.angular').config([
  'breezeProvider',
  function(breezeProvider) {
    breezeProvider.NamingConvention.camelCase.setAsDefault();
  }
]);

angular.module('breeze.angular').run([
  'breeze',
  function(breeze) {
  }
]);
