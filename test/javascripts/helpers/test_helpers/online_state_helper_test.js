//= require test_helper

describe('test_helper', function() {

  describe('online/offline helpers', function() {

    var realNavigator = navigator;


    afterEach(function() {
      navigator = realNavigator;
    });


    describe('isOnLine()', function() {

      var desc = 'should return true when navigator.onLine is true';
      it(desc, function() {
        navigator = {onLine: true};
        if(!navigator.onLine) {
          // Firefox won't let us override navigator attributes
          console.log('Skipping "' + desc + '" because unable to override navigator.onLine to true');
          return;
        }
        expect(isOnLine()).toBe(true);
      });


      desc = 'should return false when navigator.onLine is false';
      it(desc, function() {
        navigator = {onLine: false};
        if(navigator.onLine) {
          // Firefox won't let us override navigator attributes
          console.log('Skipping "' + desc + '" because unable to override navigator.onLine to false');
          return;
        }
        expect(isOnLine()).toBe(false);
      });


      desc = 'should return false when navigator.onLine does not exist';
      it(desc, function() {
        navigator = {};
        if('onLine' in navigator) {
          // Firefox won't let us override navigator attributes
          console.log('Skipping "' + desc + '" because unable to delete navigator.onLine');
          return;
        }
        expect(isOnLine()).toBe(false);
      });

    });


    describe('offlineDescribe', function() {

      it('should run when isOnLine() is false', function() {
        spyOn(window, 'isOnLine').and.returnValue(false);
        var test = {
          describe: function() {}
        };
        spyOn(test, 'describe');
        offlineDescribe('run offline only tests', test.describe);
        expect(test.describe).toHaveBeenCalled();
      });


      it('should not run when isOnLine() is true, but should log skip', function() {
        spyOn(window, 'isOnLine').and.returnValue(true);
        var test = {
          describe: function() {}
        };
        spyOn(test, 'describe');
        spyOn(console, 'log');
        offlineDescribe('run offline only tests', test.describe);
        expect(test.describe).not.toHaveBeenCalled();
        expect(console.log).toHaveBeenCalled();
      });

    });


    describe('onlineDescribe', function() {

      it('should run when isOnLine() is true', function() {
        spyOn(window, 'isOnLine').and.returnValue(true);
        var test = {
          describe: function() {}
        };
        spyOn(test, 'describe');
        onlineDescribe('run online only tests', test.describe);
        expect(test.describe).toHaveBeenCalled();
      });


      it('should not run when isOnLine() is false, but should log skip', function() {
        spyOn(window, 'isOnLine').and.returnValue(false);
        var test = {
          describe: function() {}
        };
        spyOn(test, 'describe');
        spyOn(console, 'log');
        onlineDescribe('run online only tests', test.describe);
        expect(test.describe).not.toHaveBeenCalled();
        expect(console.log).toHaveBeenCalled();
      });

    });

  });

});
