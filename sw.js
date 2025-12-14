self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('parcheggio-v1').then((cache) => {
            return cache.addAll(['./index.html', './sw.js', './img/logo-192x192.svg', './img/logo-512x512.svg']);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
