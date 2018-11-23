self.addEventListener('install', event => {
  console.info('Installing service worker');
});


self.addEventListener('fetch', function(event) {
  console.log("hello from SW::fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
