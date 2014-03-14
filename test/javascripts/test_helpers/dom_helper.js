var DOMMatchers = {
  toHaveClass: function() {
    return {
      compare: function(actual, expected) {
        return {
          message: 'Expected class list "' + actual.attr('class') + '" to include class "' + expected + '".',
          pass: actual.hasClass(expected)
        };
      }
    };
  }
};
