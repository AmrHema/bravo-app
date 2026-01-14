const cacheName = 'bravo-v2026';
const assets = [
  'index.html',
  'manifest.json',
  'logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      // إضافة محاولة صيد الأخطاء لضمان التحميل
      return cache.addAll(assets).catch(err => console.log("خطأ في تحميل الملفات للكاش:", err));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

