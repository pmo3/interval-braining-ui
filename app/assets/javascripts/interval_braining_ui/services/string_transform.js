(function() {

  StringTransformer.prototype = new ProtoStringTransformer;

  var svcStringTransform = angular.module('services.stringTransform', []);
  svcStringTransform.constant('stringTransform', new StringTransformer);


  // Internals

  // StringTransformer prototype handles defining properties for string
  // transformation functions
  function ProtoStringTransformer() {
    Object.defineProperties(this, {
      camelize: {
        enumerable: true,
        value: camelize
      },
      capitalize: {
        enumerable: true,
        value: capitalize
      },
      downcase: {
        enumerable: true,
        value: downcase
      },
      underscore: {
        enumerable: true,
        value: underscore
      }
    });
  }

  // Barebones StringTransformer constructor
  function StringTransformer() {};

  // Transforms the provided string into camelCase. As part of the transformation,
  // certain separator characters will be removed. The separators that are
  // collapsed are _, -, /, and all space characters.
  //
  // The upperCaseFirstLetter argument can be used to transform the provided
  // string into UpperCamelCase.
  //
  // Example:
  //   camelize('underscored_string') => 'underscoredString'
  //   camelize('underscored_string', true) => 'UnderscoredString'
  //   camelize('path/like/string') => 'pathLikeString'
  function camelize(string, upperCaseFirstLetter) {
    if (!string.match(/[A-Z][a-z]/)) {
      string = string.replace(/[a-z\d]+/g, capitalize);
    }
    string = (upperCaseFirstLetter ? capitalize : downcase)(string[0]) + string.slice(1);;
    return string.replace(/(?:_|(\/)|\s|-)([a-z\d]*)/gi, "$1" + capitalize("$2"));
  }

  // Transforms the provided string such that the first letter is capitalized
  // and all other characters are lower cased.
  //
  // Example:
  //  capitalize('camBridge') => 'Cambridge'
  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  // Transforms the provided string such that all capital letters are replaced
  // with their lower case equivilents.
  //
  // Example:
  //  downcase('SHOUTING') => 'shouting'
  function downcase(string) {
    return string.toLowerCase();
  }

  // Transforms the provided string such that word boundaries and certain
  // separator characters are replaced with underscores. Separator characters
  // that will be replaced with underscores are _, -, /, and all space characters.
  //
  // Example:
  //   underscore('camelCaseString') => 'camel_case_string'
  function underscore(string) {
    return string.replace(/(?:_|(\/)|\s|-)([a-z\d]*)/gi, '$1_$2').toLowerCase();
  }

})();
