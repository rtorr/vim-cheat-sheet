---
permalink: service-worker.js
---

'use strict';

var precacheConfig = [["/","1c4508d7b9f483a397f18318a8b891ff"],["/code_of_conduct/","9762953fb2f9c3d7fe3928c6f52ce650"],["/code_of_conduct/index.html","8d53d952822d114f023be602f90077d8"],["/icon/drrrrr.png","10dbeacfee532ad57fbd5a426649441a"],["/images/vim-cheat-sheet-icon-128.png","0cfce8ac8f3d3df62bb5584d09e189da"],["/images/vim-cheat-sheet-icon-144.png","0f935212fb1587f4d736dbcfb2d48943"],["/images/vim-cheat-sheet-icon-192.png","2c42a123ac7dfb6a8e562d3086ae985c"],["/images/vim-cheat-sheet-icon-32.png","2d76a20d2f7edb7be4059d04aff9ca38"],["/images/vim-cheat-sheet-icon-384.png","98144f0160a82d83d31691d10b4dadcd"],["/index.html","061b975df57be5065a6a73f4de36ef8b"],["/lang/ar/index.html","74b5c36763ad5be898eedd6a0c210516"],["/lang/de_de/","ed46aa031e4ff4d237a4abf310b85782"],["/lang/de_de/index.html","7d45dfccb204493ae2e4228280f13202"],["/lang/es_es/","21261856e171d3f44ecb3863e993418f"],["/lang/es_es/index.html","36cb80c8bfcd5ed3bd079e946a393b04"],["/lang/fr_fr/","d02fd0ce667e87d850f639a5ca38ab12"],["/lang/fr_fr/index.html","0364ea168e68359faaeaa386a352928e"],["/lang/id/","63b81a6796fd857cbac21b0c99b7a033"],["/lang/id/index.html","76f09be89ae407923945632ebf2ced74"],["/lang/it/","7eb8c07da2cc32e1a9907b8e7a084357"],["/lang/it/index.html","6b092f230dbbf19cf9832f580966f924"],["/lang/ja/","1625a04140b59a49eef75e60d69a6418"],["/lang/ja/index.html","4db060cd99dd431e4040d05f2f191862"],["/lang/ko/","7f31b84695c0903d488014e8c1bbeb18"],["/lang/ko/index.html","e64d64aa4eee8bfcfc1206461f86a8c4"],["/lang/nl_nl/","3b6f3a3b376f231a24d44362f9280f69"],["/lang/nl_nl/index.html","8c8bc0dfd60d58e7d95236bf791d8eb5"],["/lang/pt_br/","42ef00cfa739cf31f8f8f4999af4b6b0"],["/lang/pt_br/index.html","5501f9e7ac391b7c196d1937fc1909fa"],["/lang/ro/","59c60d68f884965e40464d57271bcbb0"],["/lang/ro/index.html","87b1114483d6f0174e555fbbe7dd0e33"],["/lang/ru/","f9b36eddc21a5e286ac29ba48b4d48e7"],["/lang/ru/index.html","874867b873eaa48d858848764a8daa9d"],["/lang/th/","73596e1893efc981acc1cf68cb124534"],["/lang/th/index.html","5b353119cfc4c656722c7262c35c6a53"],["/lang/tr/","89a0ae1c94649563369008e58e3853a5"],["/lang/tr/index.html","0a422a5ffe38c6aef364b10138673901"],["/lang/uk/","fa2496353929b9d0b73fc3cda4a4a42b"],["/lang/uk/index.html","a2b4e86ca4c7fb6f4e7e31814c3f9c3c"],["/lang/zh_cn/","e80cd1868d708f4089d7425c58464646"],["/lang/zh_cn/index.html","db8bd30b5a84b9ed80e99124420dc858"],["/lang/zh_tw/","650c37cd50946529df47ca42f94cf52e"],["/lang/zh_tw/index.html","0c079a3cf9ea8fd8fcdf238b14f0c503"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});