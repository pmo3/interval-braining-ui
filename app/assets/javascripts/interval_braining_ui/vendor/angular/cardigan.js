/**
 * Card based web UI using AngularJS
 * @version v0.0.1-dev-2014-03-08
 * @link https://github.com/interval-braining/cardigan
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'cardigan';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/cardigan.js
/* exported cardigan */
/* jshint unused: false */
var cardigan = angular.module('cardigan', ['ng']);

// Source: src/controllers/card.js
function CardController($attrs, $element) {
  Object.defineProperties(this, {
    $attrs: {
      configurable: false,
      enumerable: true,
      value: $attrs,
      writable: false,
    },
    $element: {
      configurable: false,
      enumerable: true,
      value: $element,
      writable: false,
    }
  });
}

CardController.unboundConstructor = function($attrs, $element) {
  return new CardController($attrs, $element);
};

// Source: src/controllers/cardContainer.js
function CardContainerController($attrs, $element) {
  Object.defineProperties(this, {
    $attrs: {
      configurable: false,
      enumerable: true,
      value: $attrs,
      writable: false,
    },
    $element: {
      configurable: false,
      enumerable: true,
      value: $element,
      writable: false,
    }
  });
}

CardContainerController.unboundConstructor = function($attrs, $element) {
  return new CardContainerController($attrs, $element);
};

// Source: src/controllers/cardMultiView.js
function CardMultiViewController(currentViewIndex) {
  Object.defineProperties(this, {
    views: {
      configurable: false,
      enumerable: true,
      get: CardMultiViewController.prototype.views
    },
    $viewIndex: {
      configurable: false,
      enumerable: false,
      value: currentViewIndex || 0,
      writable: true
    }
  });
}

CardMultiViewController.prototype.nextView = function nextView() {
  return this.setViewDelta(1);
};

CardMultiViewController.prototype.prevView = function prevView() {
  return this.setViewDelta(-1);
};

CardMultiViewController.prototype.setView = function setView(index) {
  var views = this.views,
    newView = views.eq(index);

  // Short circuit if same index and element visible
  if(!newView || this.$viewIndex === index && !newView.hasClass('ng-hide')) { return this; }
  viewCount = views.length;
  views.eq(this.$viewIndex).addClass('ng-hide');
  newView.removeClass('ng-hide');
  this.$viewIndex = index;
  return this;
};

CardMultiViewController.prototype.views = function views() {
  return angular.element(this.$element[0].querySelectorAll('[card-view], .card-view'));
};


CardMultiViewController.prototype.setViewDelta = function setViewDelta(delta) {
  var newIndex = this.$viewIndex + delta,
    viewCount;
  if(newIndex < 0) {
    newIndex = 0;
  } else if(newIndex >= (viewCount = this.views.length)) {
    newIndex = viewCount - 1;
  }
  return this.setView(newIndex);
};

// Source: src/directives/card.js
cardigan.directive('card', [
  function() {
    return {
      controller: [
        '$attrs',
        '$element',
        CardController.unboundConstructor
      ],
      link: function link(scope, element, attrs, controllers) {
        var card = controllers[0],
          cardContainer = controllers[1];
        scope.card = card;
        if(cardContainer) {
          cardContainer.card = card;
          card.container = cardContainer;
        }
      },
      priority: 5000,
      require: ['card', '?^cardContainer'],
      restrict: 'AC',
      scope: true
    };
  }
]);

// Source: src/directives/cardContainer.js
cardigan.directive('cardContainer', [
  function() {
    function link(scope, element, attrs, controller) {
      if(!controller.card) {
        throw new Error('Unable to find CardController required by cardContainer directive');
      }

      scope.card = controller.card;
    }

    return {
      controller: [
        '$attrs',
        '$element',
        CardContainerController.unboundConstructor
      ],
      link: link,
      restrict: 'AC',
      scope: true
    };
  }
]);

// Source: src/directives/cardDismiss.js
cardigan.directive('cardDismiss', [
  function() {
    function link(scope, element, attrs, card) {
      card.dismiss = function cardDismiss() {
        if(this.container) {
          this.container.$element.remove();
        } else {
          this.$element.remove();
        }
      };

      element.on('click', function() { card.dismiss(); });
    }

    return {
      link: link,
      require: '^card',
      restrict: 'AC'
    };
  }
]);

// Source: src/directives/cardMultiView.js
cardigan.directive('cardMultiView', [
  '$injector',
  function($injector) {
    var PRIORITY = 0, hasSwipe;

    if($injector.has('$swipe')) {
      PRIORITY = 1 + Math.max.apply(null, [
        $injector.get('ngSwipeLeftDirective')[0].priority,
        $injector.get('ngSwipeRightDirective')[0].priority
      ]);
      hasSwipe = true;
    }

    function link(scope, element, attrs, card) {
      angular.extend(card, CardMultiViewController.prototype);
      CardMultiViewController.apply(card);
      card.views.addClass('ng-hide');
      card.setView(Number(attrs['cardMultiView']));
    }

    return {
      compile: function(tElement, attrs) {
        if(hasSwipe) {
          attrs.$set('ng-swipe-left', 'card.nextView()');
          attrs.$set('ng-swipe-right', 'card.prevView()');
        }

        return {
          post: function(scope, element, attrs, card) {
            link.apply(this, arguments);
            // Need to recompile if swipe directives have been added
            if(hasSwipe) { $injector.get('$compile')(element, undefined, PRIORITY)(scope); }
          }
        };
      },
      priority: PRIORITY,
      require: 'card',
      restrict: 'AC',
      terminal: true
    };
  }
]);
})(window, window.angular);