(function() {
  var app = angular.module('IntervalBraining');

  app.directive('passwordFormatValidator', function() {
    var PASSWORD_FORMATS = [
      /[^\w\s]+/, //special characters
      /[A-Z]/, //uppercase letters
      /\w/, //other letters
      /\d/ //numbers
    ];

    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          var status = true;
          angular.forEach(PASSWORD_FORMATS, function(regex) {
            status = status && regex.test(value) && value.length >= 6;
          });
          ngModel.$setValidity('password-format', status);
          return value;
        });
      }
    }
  })
})();
