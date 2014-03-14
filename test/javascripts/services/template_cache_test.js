//= require test_helper

describe('$templateCache service', function() {

  var service,
    httpBackend,
    template = "<div>test</div>",
    templateResponse = '<script id="test" type="text/ng-template">' + template + '</script>';


  beforeEach(function() {
    module('IntervalBraining');

    inject(function($httpBackend, $templateCache) {
      httpBackend = $httpBackend;
      service = $templateCache;
    });
  });


  describe('get()', function() {

    beforeEach(function() {
      httpBackend.expectGET('templates.html').respond(templateResponse);
    });


    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });


    it('should request templates and return the requested template markup if available', function() {
      var promise = service.get('test');
      var test = {
        handler: function (){}
      };
      spyOn(test, 'handler');
      promise.then(test.handler);
      httpBackend.flush();
      expect(test.handler).toHaveBeenCalledWith({status: 200, data: template});
    });


    it('should return undefined if the requested template could not be found', function() {
      var promise = service.get('does_not_exist');
      var test = {
        handler: function (){}
      };
      spyOn(test, 'handler');
      promise.then(test.handler);
      httpBackend.flush();
      expect(test.handler).toHaveBeenCalledWith({status: 200, data: undefined});
    });


    it('should not make a web request if the templates have already been retrieved', function() {
      var promise = service.get('test');
      var test = {
        handler: function (){}
      };
      spyOn(test, 'handler');
      promise.then(test.handler);
      httpBackend.flush();
      expect(test.handler).toHaveBeenCalledWith({status: 200, data: template});

      // Repeat request
      template = service.get('test');
      httpBackend.verifyNoOutstandingRequest();
      expect(template).toBe(template);

      // Shouldn't make request even for missing template
      promise = service.get('does_not_exist');
      httpBackend.verifyNoOutstandingRequest();
      promise.then(function(response) {
        expect(response.data).toBe(undefined);
      });
    });

  });


  describe('put()', function() {

    it('should cache the given value at the given key', function() {
      service.put('test', template);
      expect(service.get('test')).toBe(template);
    });


    it('should not make a web request if put template found', function() {
      service.put('test', template);
      httpBackend.verifyNoOutstandingRequest();
      expect(service.get('test')).toBe(template);
    });

  });

});
