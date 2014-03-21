//= require test_helper

describe('Factory: stateFactory', function() {

  describe('$get():', function() {

    it('returns self', function() {
      var stateFactory;
      module('factories.stateFactory');
      angular.module('dummy', []).config([
        'stateFactoryProvider',
        function(sF) { stateFactory = sF; }
      ]);
      module('dummy');
      // Need to create injector to kick off config call
      inject();
      expect(stateFactory.$get()).toBe(stateFactory);
    });

  });


  describe('$new():', function() {

    var $stateProvider, stateFactory, $templateUrl, spy;

    beforeEach(function() {
      module('factories.stateFactory');
      angular.module('dummy', []).config([
        '$stateProvider',
        'stateFactoryProvider',
        '$templateUrlProvider',
        function(sP, sF, tUP) {
          $stateProvider = sP;
          stateFactory = sF;
          $templateUrl = tUP;
          spy = spyOn($stateProvider, 'state');
        }
      ]);
      module('dummy');
      // Need to create injector to kick off config call
      inject();
    });


    it('treats a function argument like a constructor and creates a new state from new instance', function() {
      var dummyInstance;
      stateFactory.$new(function DummyState(stProvider, $templateUrl) {
        this.name = 'dummy';
        this.url = '';
        dummyInstance = this;
      });
      expect(spy).toHaveBeenCalledWith(dummyInstance.name, dummyInstance);
    });


    it('invokes the constructor function with $stateProvider and $templateUrl', function() {
      spy = jasmine.createSpy('spyConstructor');
      stateFactory.$new(spy)
      expect(spy).toHaveBeenCalledWith($stateProvider, $templateUrl);
    });


    it('treats an object argument like state and creates a state from it', function() {
      var dummyInstance = {
        name: 'dummy',
        url: ''
      };
      stateFactory.$new(dummyInstance);
      expect(spy).toHaveBeenCalledWith(dummyInstance.name, dummyInstance);
    })


    it('throws if neither an object nor function are supplied', function() {
      var throwFn = function() {
        stateFactory.$new('not a state');
      };
      expect(throwFn).toThrow();
      expect(spy).not.toHaveBeenCalled();
    });
  });

});
