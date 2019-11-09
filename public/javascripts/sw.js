const urlsToCache = ['/stylesheets/style.css'];

function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&');
  let params = {};
  hashes.map(hash => {
    let [key, val] = hash.split('=');
    params[key] = decodeURIComponent(val);
  });

  return params;
}

let CACHE_NAME = getUrlParams(self.location.search).version;

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            console.log(cacheName, self);
            return cacheName !== CACHE_NAME;
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
