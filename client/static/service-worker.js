let cacheName = 'cache-v1';
var urlsToCache = [
  '/',
  '/Dieren',
  '/Vakanties',
  '/Boeken',
  '/Stoer',
  '/css/style.css',
  '/img/marco_l.png',
  '/img/marco_r.png',
  '/js/app.js',
  '/js/modules/controller.js',
  '/js/modules/register.js',
  '/js/modules/render.js',
  '/js/modules/vars.js'
  ];

self.addEventListener('install', function (event) {

  const cache = caches.open(cacheName).then(function (_cache){
    _cache.addAll(urlsToCache);
  });

  event.waitUntil(cache);
});

//inspired by https://stackoverflow.com/a/51948641
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});