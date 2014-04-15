//= require test_helper

describe('Service: stringTransform', function() {

  var stringTransform;

  beforeEach(module('services.stringTransform'));
  beforeEach(inject(function(_stringTransform_) {
    stringTransform = _stringTransform_;
  }));


  describe('camelize:', function() {

    it('converts the provided string into camelCase', function() {
      var strs = {
        'space separated string': 'spaceSeparatedString',
        'underscore_separated_string': 'underscoreSeparatedString',
        'Onegiantword': 'onegiantword',
        '9 then spaces': '9ThenSpaces',
        "tab\tseparated\tstring": 'tabSeparatedString',
        'dash-separated-string': 'dashSeparatedString',
        "pretty\tstrange mix_of-separators": 'prettyStrangeMixOfSeparators',
        'word with num6er in the middle': 'wordWithNum6erInTheMiddle',
        'number 6 as word': 'number6AsWord'
      };

      for(var str in strs) {
        expect(stringTransform.camelize(str)).toBe(strs[str]);
      }
    });


    it('defaults to using lower case for the first letter', function() {
      var rawStr = 'space separated string',
        expectedStr = 'spaceSeparatedString';
      expect(stringTransform.camelize(rawStr)).toBe(expectedStr);
    });


    it('capitalizes the first letter if upperCaseFirstLetter is truthy', function() {
      var rawStr = 'space separated string',
        expectedStr = 'SpaceSeparatedString';
      expect(stringTransform.camelize(rawStr, 'withUpperCaseFirstLetter')).toBe(expectedStr);
    });

  });


  describe('capitalize:', function() {

    it('returns string with all letters lowercased execpt the first', function() {
      var strs = {
        'Already capitalized': 'Already capitalized',
        '9, now what?': '9, now what?',
        'all downcase': 'All downcase',
        'ALL UPCASE': 'All upcase'
      };

      for(var str in strs) {
        expect(stringTransform.capitalize(str)).toBe(strs[str]);
      }
    });

  });


  describe('downcase:', function() {

    it('returns the lower cased version of the string', function() {
      var str = 'LotS oF UPPERCASE ChArActers';
      expect(stringTransform.downcase(str)).toBe(str.toLowerCase());
    });

  });


  describe('underscore:', function() {

    it('returns the string with all word boundaries and separators replaced with underscores', function() {
      var strs = {
        'space separated string': 'space_separated_string',
        'underscore_separated_string': 'underscore_separated_string',
        'Onegiantword': 'onegiantword',
        '9 then spaces': '9_then_spaces',
        "tab\tseparated\tstring": 'tab_separated_string',
        'dash-separated-string': 'dash_separated_string',
        "pretty\tstrange mix_of-separators": 'pretty_strange_mix_of_separators',
        'word with num6er in the middle': 'word_with_num6er_in_the_middle',
        'number 6 as word': 'number_6_as_word'
      };

      for(var str in strs) {
        expect(stringTransform.underscore(str)).toBe(strs[str]);
      }
    });

  });

});
