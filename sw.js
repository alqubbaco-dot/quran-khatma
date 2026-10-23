/* يحفظ ملفات التطبيق على الجهاز حتى يعمل بدون إنترنت،
   ويحفظ آخر التلاوات التي استمعت لها لتعمل بدون إنترنت أيضاً. */
const VERSION = 'v1.0.0';
const APP_CACHE = 'quran-app-' + VERSION;
const AUDIO_CACHE = 'quran-audio-v1';
const AUDIO_MAX = 400; // عدد ملفات الآيات المحفوظة كحد أقصى

const APP_FILES = [
  './', 'index.html', 'app.js', 'adhkar.js', 'quran-text.js', 'quran-search.js',
  'icons.css', 'manifest.webmanifest', 'privacy.html',
  'fonts/AmiriQuran-Regular.ttf', 'fonts/NotoNaskhArabic.ttf',
  'icons/icon-192.png', 'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('quran-app-') && k !== APP_CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

async function trimAudio() {
  const c = await caches.open(AUDIO_CACHE);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - AUDIO_MAX; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // ملفات التلاوة: من الذاكرة إن وُجدت، وإلا من الإنترنت ثم تُحفظ
  if (url.hostname === 'cdn.islamic.network') {
    if (req.headers.get('range')) return; // طلبات التقديم والتأخير تذهب للإنترنت مباشرة
    e.respondWith(caches.open(AUDIO_CACHE).then(async c => {
      const hit = await c.match(req.url);
      if (hit) return hit;
      const res = await fetch(req.url, { mode: 'cors' }).catch(() => null);
      if (res && res.ok) { c.put(req.url, res.clone()).then(trimAudio); return res; }
      return res || fetch(req);
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // صفحات التطبيق: من الإنترنت إن أمكن (لتصل التحديثات)، وإلا من الذاكرة
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(APP_CACHE).then(c => c.put('index.html', copy)); return res;
    }).catch(() => caches.match('index.html')));
    return;
  }

  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(APP_CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
