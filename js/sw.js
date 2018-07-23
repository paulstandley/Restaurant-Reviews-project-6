'use strict';
var num;
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/style.css',
  '/css/small.css',
  '/js/main.js',
  '/js/bdhelper.js',
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
  '/img/10.jpg',
  '/restaurant.html',
  '/index.html'
];

/* https://developers.google.com/web/fundamentals/primers/service-workers/ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('js/sw.js').then(function(registration) {
        self.addEventListener('install', function(event) {
            // Perform install steps
            event.waitUntil(
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  console.log('Opened cache');
                  return cache.addAll(urlsToCache);
                })
            );
          });
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
}