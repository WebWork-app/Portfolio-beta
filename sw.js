const staticCacheName = 'site-static';
const assets = [
    '/',
    'index.html',
    '/js/app.js',
    'j'
] 
// install service worker
self.addEventListener('install', evt =>{
    console.log('sw installed')
    caches.open(staticCacheName)
    .then(cache => {
        cache.addAll()
    })
})
 
// activate service worker
self.addEventListener('activate', evt =>{
    console.log('service Active')
})

// fetch event
self.addEventListener('fetch', evt => {
    //cghg
})