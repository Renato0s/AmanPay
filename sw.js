const CACHE_NAME = 'amanpay-cache-v3';

// Установка Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Активация
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Обработка запросов (обязательно для того, чтобы Chrome разрешил установку)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
