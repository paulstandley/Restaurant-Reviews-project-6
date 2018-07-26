

var CACHE_NAME = 'cache-restaurant-v101';

/* https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker */

self.addEventListener('install', function(event) {
  /* event listener triggers when the service worker is first installed */
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/restaurant.html',
          '/css/styles.css',
          '/css/small.css',
          '/js/main.js',
          '/js/dbhelper.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('cache-restaurant-v101').then(function(cache) {
    /* caches the network responses as they are fetched */
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          /* update the page with the data in the response */
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});


