// Minimal service worker — enables "Add to Home Screen" installability.
// Notifications in this version are fired directly by the page's own JavaScript
// (local notifications), not server push, so no VAPID/backend setup is needed.

const CACHE_NAME = 'fx-signals-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Basic pass-through fetch handler (required for installability on some Android versions)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

