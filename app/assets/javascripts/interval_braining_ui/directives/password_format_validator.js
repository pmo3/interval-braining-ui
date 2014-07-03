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
          var truths = 0;
          angular.forEach(PASSWORD_FORMATS, function(regex) {
            if(regex.test(value)) {
              truths = truths + 1;
            }
          });
          ngModel.$setValidity('password-format', truths >= 3 && value.length >= 8);
          return value;
        });
      }
    }
  });
})();
