// Overrides built in template cache with a template cache that knows how to
// handle a single file providing all templates.
// source: https://gist.github.com/vojtajina/3354046

(function() {
  var templateCacheService = angular.module('services.$templateCache', []);

  templateCacheService.factory('$templateCache', function($cacheFactory, $http, $injector) {
    var concatenatedTemplatesPromise,
      cache = $cacheFactory('templates');

    return {
      get: function(url) {
        var fromCache = cache.get(url);

        // already have required template in the cache
        if (fromCache) {
          return fromCache;
        }

        // first template request ever - get the all tpl file
        if (!concatenatedTemplatesPromise) {
          concatenatedTemplatesPromise = $http.get('templates.html').then(function(response) {
            // compile the response, which will put stuff into the cache
            $injector.get('$compile')(response.data);
            return response;
          });
        }

        // return the promise to all template requests
        return concatenatedTemplatesPromise.then(function(response) {
          return {
            status: response.status,
            data: cache.get(url)
          };
        });
      },

      put: function(key, value) {
        cache.put(key, value);
      }
    };
  });
})();
