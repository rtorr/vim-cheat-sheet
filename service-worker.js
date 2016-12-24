---
permalink: service-worker.js
---

'use strict';

var precacheConfig = [["/code_of_conduct/index.html","8d53d952822d114f023be602f90077d8"],["/icon/drrrrr.png","10dbeacfee532ad57fbd5a426649441a"],["/images/vim-cheat-sheet-icon-128.png","0cfce8ac8f3d3df62bb5584d09e189da"],["/images/vim-cheat-sheet-icon-144.png","0f935212fb1587f4d736dbcfb2d48943"],["/images/vim-cheat-sheet-icon-192.png","2c42a123ac7dfb6a8e562d3086ae985c"],["/images/vim-cheat-sheet-icon-32.png","2d76a20d2f7edb7be4059d04aff9ca38"],["/images/vim-cheat-sheet-icon-384.png","98144f0160a82d83d31691d10b4dadcd"],["/index.html","71d5134da4735f9580a0f6ed66154c5c"],["/lang/ar/index.html","74b5c36763ad5be898eedd6a0c210516"],["/lang/de_de/index.html","969e0385a7c35125a6d204e8c80674f3"],["/lang/es_es/index.html","1d71fcef6ee12c295480806130404c49"],["/lang/fr_fr/index.html","8e1018dc9023045d03bb09a8e101ec3e"],["/lang/id/index.html","2c34a392c2761a41f4ec2e19e20f5d4f"],["/lang/it/index.html","a0f1992f0970cf67ff06d2461c0f592b"],["/lang/ja/index.html","157305a285ba7222f294f0c68ccbaf9b"],["/lang/ko/index.html","9a6032a6dd85e3693fe426a24c7d0d10"],["/lang/nl_nl/index.html","269cafe16e50b490b071bc9627a1deb1"],["/lang/pt_br/index.html","925ebfd65909314394d0526e3f4aef9b"],["/lang/ro/index.html","f597517026a9f18bf1b246f4e78c5ceb"],["/lang/ru/index.html","da3df67f1a5bf0508c5083a5e95759f8"],["/lang/th/index.html","392a97de7d7c83eda6568e8b80f6df4d"],["/lang/tr/index.html","119f16e0ff68359a817d4a4e778866d9"],["/lang/uk/index.html","062335fd748309896046afc4814ea95f"],["/lang/zh_cn/index.html","12b0a441dd3afa03b020a28896948073"],["/lang/zh_tw/index.html","f56c32d1575ce277c6db8e878dbd20db"]];
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