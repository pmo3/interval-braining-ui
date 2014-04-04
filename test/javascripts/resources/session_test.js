//= require test_helper

describe('Resource: session', function() {

  var sessionResource, $httpBackend;

  beforeEach(module('resources.session'))


  beforeEach(inject(function(_sessionResource_, _$httpBackend_) {
    sessionResource = _sessionResource_;
    $httpBackend = _$httpBackend_;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });


  describe('save():', function() {

    var sessionData = {email: 'foo@example.com', password: 'qwer1234', remember_me: false};

    it('makes a POST request with the given login data', function() {
      $httpBackend.expect('POST', '/api/v1/users/sign_in.json', sessionData).respond({id: 1, email: sessionData.email});
      sessionResource.save(sessionData);
      $httpBackend.flush();
    });


    it('broadcasts $sessionCreate on the $rootScope when successful', inject(function($rootScope) {
      var broadcastSpy = jasmine.createSpy('broadcastSpy');
      $rootScope.$on('$sessionCreate', broadcastSpy);

      $httpBackend.expect('POST', '/api/v1/users/sign_in.json', sessionData).respond({id: 1, email: sessionData.email});
      sessionResource.save(sessionData);
      $httpBackend.flush();
      expect(broadcastSpy).toHaveBeenCalled();
    }));

  });

  describe('delete():', function() {

    it('makes a DELETE request to the sign_out url', function() {
      $httpBackend.expect('DELETE', '/api/v1/users/sign_out.json', null).respond(204, '');
      sessionResource.delete();
      $httpBackend.flush();
    });


    it('broadcasts $sessionDestroy on the $rootScope when successful', inject(function($rootScope) {
      var broadcastSpy = jasmine.createSpy('broadcastSpy');
      $rootScope.$on('$sessionDestroy', broadcastSpy);

      $httpBackend.expect('DELETE', '/api/v1/users/sign_out.json', null).respond(204, '');
      sessionResource.delete();
      $httpBackend.flush();
      expect(broadcastSpy).toHaveBeenCalled();
    }));

  });

});
