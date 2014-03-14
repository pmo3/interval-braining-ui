//= require test_helper
//= require test_helpers/dom_helper

describe('dropdown directive', function() {

  beforeEach(function() {
    module('IntervalBraining')

    jasmine.Expectation.addMatchers(DOMMatchers);

    inject(function(_$compile_, _$rootScope_, _$document_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
      $document = _$document_;
    });
  });


  describe('compiled behavior', function() {

    it('should attach click behavior to dropdown-toggle if available', function() {
      var template = $compile('<div class="dropdown"><div class="dropdown-toggle"></div></div>')($scope),
        toggle = template.children('.dropdown-toggle');

      toggle.click();
      expect(template).toHaveClass('open');
      toggle.click();
      expect(template).not.toHaveClass('open');
    });


    it('should attach click behavior to element when no dropdown-toggle available', function() {
      var template = $compile('<div class="dropdown"></div>')($scope),
        toggle = template;

      toggle.click();
      expect(template).toHaveClass('open');
      toggle.click();
      expect(template).not.toHaveClass('open');
    });


    it('should close sibling dropdowns when a dropdown is opened', function() {
      var template = $compile('<div><div class="dropdown"></div><div class="dropdown open"></div></div>')($scope),
        dropdown = template.find('.dropdown:not(.open)'),
        sibling = template.find('.dropdown.open');

      dropdown.click();
      expect(dropdown).toHaveClass('open');
      expect(sibling).not.toHaveClass('open');
    });


    it('should close all dropdowns if non-dropdown clicked', function() {
      var template = $compile('<div><div class="non-dropdown"></div><div class="dropdown"></div></div>')($scope),
        dropdown = template.find('.dropdown'),
        nonDropdown = template.find('.non-dropdown'),
        sandbox = $('<div></div>');

      sandbox.append(template);
      $document.find('body').append(sandbox);

      dropdown.click();
      expect(dropdown).toHaveClass('open');
      nonDropdown.click();
      expect(dropdown).not.toHaveClass('open');
      sandbox.remove();
    });


    it('should close when an item is clicked', function() {
      var template = $compile('<div class="dropdown"><ul class="dropdown-menu"><li></li></ul></div>>')($scope),
        child = template.find('li');

      template.click();
      expect(template).toHaveClass('open');
      child.click();
      expect(template).not.toHaveClass('open');
    });

  });

});
