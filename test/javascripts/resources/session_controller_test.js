describe('SessionsController', function(){
  var sessionsController, growlNotifications, sessionResource;
  var sessionData = {email: 'foo@example.com', password: 'qwer1234', remember_me: false};

  beforeEach(function(){
      module('IntervalBraining');

  inject(function($injector, $controller){

    sessionResource = $injector.get('sessionResource');
    growlNotifications = $injector.get('growlNotifications');
    currentUser = $injector.get('currentUser');

    spyOn(growlNotifications, 'add');
    sessionsController = $controller('SessionsController', {sessionResource : sessionResource, growlNotifications : growlNotifications, currentUser : currentUser});

    });
      });

  afterEach(inject(function($httpBackend){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));


  it('adds a growl notification when sign in fails', inject(function($httpBackend){
    $httpBackend.expect('POST', '/api/v1/users/sign_in.json', sessionData).respond(401, '');
    $httpBackend.expect('GET', '/api/v1/users/me.json').respond(401, ''); 
    $httpBackend.expect('GET', '/assets/interval_braining_ui/layouts/navbar_page_header_layout.html').respond(null);
    $httpBackend.expect('GET', '/assets/interval_braining_ui/sessions/new.html').respond(null);
    sessionsController.email = sessionData.email;
    sessionsController.password = sessionData.password;
    sessionsController.remember_me = sessionData.remember_me;
    sessionsController.submit();
    $httpBackend.flush();

    expect(growlNotifications.add).toHaveBeenCalled();
    }));

  it('sets currentUser on successful POST', inject(function($httpBackend){
    spyOn(currentUser, 'set');
    $httpBackend.when('POST', '/api/v1/users/sign_in.json', sessionData).respond({id: 1, email: sessionData.email});
    $httpBackend.expect('GET', '/api/v1/users/me.json').respond({id: 1, email: sessionData.email}); 
    $httpBackend.expect('GET', '/assets/interval_braining_ui/layouts/navbar_page_header_layout.html').respond(null);

    sessionsController.email = sessionData.email;
    sessionsController.password = sessionData.password;
    sessionsController.remember_me = sessionData.remember_me;
    sessionsController.submit();
    $httpBackend.flush();
    expect(currentUser.set).toHaveBeenCalled();
    expect(currentUser.set).toHaveBeenCalledWith({id: 1, email: sessionData.email});
  }));
});
