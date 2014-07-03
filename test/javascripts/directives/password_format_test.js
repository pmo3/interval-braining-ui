//=require test_helper

describe('password format validation', function() {
  var $scope, form;
  beforeEach(module('IntervalBraining'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();
    var element = angular.element('<form name="userForm">' + 
      '<input ng-model="model.password" name="password" password-format-validator />' + 
      '</form>');
    $scope.model = {password : null};
    $compile(element)($scope);
    form = $scope.userForm;
  }));

  it('should fail when password length < 8 characters', function() {
    form.password.$setViewValue('t1.esT');
    $scope.$digest();
    expect(form.password.$valid).toBe(false);
  });

  it('should fail when missing required characters', function() {
    form.password.$setViewValue('testTest');
    $scope.$digest();
    expect(form.password.$valid).toBe(false);
  });


  it('should pass when requirements are met', function() {
    form.password.$setViewValue('test1.Test');
    $scope.$digest();
    expect(form.password.$valid).toBe(true);
  });
});
