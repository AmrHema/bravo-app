const cacheName = 'bravo-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png' // تأكد من وجود ملف الصورة بهذا الاسم
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});