/* StudyOS service worker: offline-first shell for the installed app. */
const CACHE = 'studyos-v1';
const CORE = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon-512.png', '/og.jpg', '/preview.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    // network-first for pages so updates land; cached shell when offline
    e.respondWith(
      fetch(e.request)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('/index.html', cp)); return r; })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }
  // stale-while-revalidate for everything else same-origin
  e.respondWith(
    caches.match(e.request).then(hit => {
      const fresh = fetch(e.request).then(r => {
        if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
        return r;
      }).catch(() => hit);
      return hit || fresh;
    })
  );
});
