"use strict";

console.log('WORKER: executing.');

var version = 'v1.0.0';
var pathsToCache = [
  '/'
];

self.addEventListener('install', event => {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches
      .open(version)
      .then(cache => cache.addAll(pathsToCache))
      .then(_ => console.log('WORKER: install completed'))
  );
});

self.addEventListener('activate', event => {
  console.log('WORKER: activate event in progress.');
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(key => !key.startsWith(version)).map(key => caches.delete(key))))
      .then( _ => console.log('WORKER: activate completed.'))
  );
});