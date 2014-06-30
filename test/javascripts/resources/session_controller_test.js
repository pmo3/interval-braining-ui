//= require test_helper

describe('SessionsController', function(){

  var currentUser, growlNotifications, $httpBackend, sessionData,
    sessionsController, usersSignInExpectation, usersMeEpectation;
  sessionData = {
    email: 'foo@example.com',
    password: 'qwer1234',
    remember_me: false
  };

  beforeEach(function(){
    module('IntervalBraining');

    inject(function($controller, sessionResource, _$httpBackend_, _growlNotifications_, _currentUser_) {
      currentUser = _currentUser_;
      growlNotifications = _growlNotifications_;
      $httpBackend = _$httpBackend_;

      sessionsController = $controller('SessionsController', {
        currentUser: currentUser,
        growlNotifications: growlNotifications,
        sessionResource: sessionResource
      });
    });

    usersSignInExpectation = $httpBackend.expect('POST', '/api/v1/users/sign_in.json', sessionData);
    usersMeExpectation = $httpBackend.expect('GET', '/api/v1/users/me.json');
    // TODO: better isolate tests so this expectation is not required.
    $httpBackend.expect('GET', '/assets/interval_braining_ui/layouts/navbar_page_header_layout.html').respond(null);
  });


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('adds a growl notification when sign in fails', function() {
    usersSignInExpectation.respond(401, '{ "error": "Error msg" }');
    usersMeExpectation.respond(401, '');
    // TODO: better isolate tests so this expectation is not required.
    $httpBackend.expect('GET', '/assets/interval_braining_ui/sessions/new.html').respond(null);
    spyOn(growlNotifications, 'add');

    angular.extend(sessionsController, sessionData);
    sessionsController.submit();
    $httpBackend.flush();
    expect(growlNotifications.add).toHaveBeenCalledWith('Error msg', 'alert', 5000);
  });


  it('sets currentUser on successful POST', function() {
    var sessionResponse = { id: 1, email: sessionData.email };
    usersSignInExpectation.respond(sessionResponse);
    usersMeExpectation.respond(sessionResponse);
    spyOn(currentUser, 'set');

    angular.extend(sessionsController, sessionData);
    sessionsController.submit();
    $httpBackend.flush();
    expect(currentUser.set).toHaveBeenCalledWith(sessionResponse);
  });

});
