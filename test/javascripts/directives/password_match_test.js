//= require test_helper

describe('password match validation', function() {
  var $scope, form;
  beforeEach(module('IntervalBraining'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();
    var element = angular.element('<form name="userForm">' + 
      '<input ng-model="model.password" name="password" />' + 
      '<input ng-model="model.passwordConfirmation" name="password_confirmation" match-validator="model.password" />' +
      '</form>');
    $scope.model = {password : null,
                    passwordConfirmation : null};
    $compile(element)($scope);
    form = $scope.userForm;
  }));

    it('should return true when passwords match', function() {
      form.password.$setViewValue('test1.Test');
      form.password_confirmation.$setViewValue('test1.Test');
      $scope.$digest();
      expect(form.password_confirmation.$valid).toBe(true);
    });

    it('should return false when passwords do not match', function() {
      form.password.$setViewValue('test1.Test');
      form.password_confirmation.$setViewValue('test1.test');
      $scope.$digest();
      expect(form.password_confirmation.$valid).toBe(false);
    });
});
