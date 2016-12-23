---
permalink: service-worker.js
---

"use strict";


var version = 'v1.0.3';

console.log('WORKER: executing.', version);

var pathsToCache = [
  '/',
  '/lang/pt_br/',
  '/lang/de_de/',
  '/lang/id/',
  '/lang/es_es/',
  '/lang/tr/',
  '/lang/th/',
  '/lang/zh_tw/',
  '/lang/ko/',
  '/lang/ru/',
  '/lang/zh_cn/',
  '/lang/it/',
  '/lang/fr_fr/',
  '/lang/uk/',
  '/lang/nl_nl/',
  '/lang/ja/',
  '/lang/ro/',
  '/code_of_conduct/',
  '/service-worker.js'
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