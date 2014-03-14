//= require test_helper
//= require test_helpers/dom_helper

describe('navbarCollapse directive', function() {

  beforeEach(function() {
    module('IntervalBraining');

    jasmine.Expectation.addMatchers(DOMMatchers);

    inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
    });
  });


  describe('compiled behavior', function() {

    it('should attach click behavior to navbar-toggle if available', function() {
      var template = $compile('<div class="navbar"><div class="navbar-collapse"></div><div class="navbar-toggle"></div></div>')($scope),
        collapsable = template.children('.navbar-collapse'),
        toggle = template.children('.navbar-toggle');

      toggle.click();
      expect(collapsable).toHaveClass('in');
      toggle.click();
      expect(collapsable).not.toHaveClass('in');
    });

  });

});
