//= require test_helper

describe('Service: $templateUrl', function() {

  beforeEach(module('services.$templateUrl'));


  describe('default get():', function() {

    var $templateUrl;

    beforeEach(inject([
      '$templateUrl',
      function(_$templateUrl_) { $templateUrl = _$templateUrl_; }
    ]));

    it('retrieves the template Url at the given key', function() {
      $templateUrl.$$templateUrls = { key: 'value' };
      expect($templateUrl.get('key')).toBe('value');
    });

  });

});
