//= require test_helper

describe('Resource: user', function() {

  var userResource, $httpBackend;

  beforeEach(module('resources.user'))


  beforeEach(inject(function(_userResource_, _$httpBackend_) {
    userResource = _userResource_;
    $httpBackend = _$httpBackend_;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });


  var userData = {email: 'foo@example.com', password: 'qwer1234', password_confirmation: 'qwer1234'};


  describe('save():', function() {

    it('makes a POST request with the given creation data', function() {
      $httpBackend.expect('POST', '/users.json', userData).respond({id: 1, email: userData.email});
      userResource.save(userData);
      $httpBackend.flush();
    });

  });

  describe('get():', function() {

    it('makes a GET request for the requested user', function() {
      $httpBackend.expect('GET', '/users/me.json', null).respond(userData);
      userResource.get({id: 'me'});
      $httpBackend.flush();
    });

  });

});
