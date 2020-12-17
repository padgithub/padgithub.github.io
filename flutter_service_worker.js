'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2a83df5b9f89633e79c84213588989af",
"index.html": "1228e93edc0b5c3a4596b69946d581d6",
"/": "1228e93edc0b5c3a4596b69946d581d6",
"main.dart.js": "0b040e83acff93c93b93071151ae2e40",
"README.md": "2bf954a8306730a76504ea08f65d642f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f46b99de132b1181932a92026878b7be",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"assets/AssetManifest.json": "e2ba86b77bebdc3ea704e264f4f3186e",
"assets/NOTICES": "aef563bedfbe1010ca22ac6b5e66e5ad",
"assets/FontManifest.json": "52a435fb2ba55258edf45128d556627a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/tabbar_start.svg": "f7c383362ade1763f49c1dc1a85f2395",
"assets/assets/images/solar-system.svg": "92ce45a5fbf6cc047f4c27f1db967751",
"assets/assets/images/house.svg": "3348443d0e676f49f76a635aa10f1e72",
"assets/assets/images/earth-globe.svg": "c1ae38f015b5f82c00ee8b9e29467a33",
"assets/assets/images/blank-check-box.svg": "50294de8cb52f7114d015739bb6dfeb9",
"assets/assets/images/rat.svg": "54249f871f8e0b63b9e48f2e0a978404",
"assets/assets/images/clipboard.svg": "4d0bcd5456ca796bca2cacd2484256a2",
"assets/assets/images/turn-off.svg": "956cf942cf66a5d7a1caa5fe0f128d73",
"assets/assets/images/dna-structure.svg": "32131c3057d13a6e4a588f39621673ef",
"assets/assets/images/magnet.svg": "4b345cbd21b1e205089acf224fce8962",
"assets/assets/images/satellite.svg": "a0ed081deaafef387a66eee7d2f6677c",
"assets/assets/images/book.svg": "03833146e2a6021750be5f04a91cfa33",
"assets/assets/images/tick.svg": "7a38a3813fb46303f1ce3d15513cac31",
"assets/assets/images/thermometer.svg": "c31d59222108e7cf282bc347890d35d0",
"assets/assets/images/observation.svg": "50526e0a48137cad51f0863eabe22445",
"assets/assets/images/medicines.svg": "ab806c88c21f6609ba7db87222a61a7c",
"assets/assets/images/molecular.svg": "57a378bf96645d5aa29a2bad803d3a5d",
"assets/assets/images/axis.svg": "b1b535a59550937faa1428a94491995d",
"assets/assets/images/petri-dish.svg": "37cc7c17fc7637554600df771b0eb34b",
"assets/assets/images/first.svg": "8d11e859549b93d82365c7ab671d1004",
"assets/assets/images/messages.svg": "3532a9dccb792102c0cc6e0cbc8e40d4",
"assets/assets/images/third.svg": "c079941cf11eb09372baa57077a57722",
"assets/assets/images/molecule.svg": "a81f975fd4c6e6af16368361a831c9ae",
"assets/assets/images/bacteria.svg": "6a2032532a9b8b4dd135efd4e4e784cc",
"assets/assets/images/compass.svg": "528a8596b49593bbef2464c221eb2e05",
"assets/assets/images/app-store.svg": "f489acb1deb0aafdb77b8685032964e8",
"assets/assets/images/check-box.svg": "406450f3248f993f1c3a50f13b3eddf2",
"assets/assets/images/profile.svg": "af4bfe78db2f222e86d8059f038bfe17",
"assets/assets/images/second.svg": "44b6cd8741ed78359954bc994ddc3f3d",
"assets/assets/images/microscope.svg": "b5fc72a7079bc3f4d17ef4da7c32ac1b",
"assets/assets/images/bg_wellcome.svg": "a50e0a2c18d5168fc90fa30e431de3b2",
"assets/assets/images/magnifying-glass.svg": "f9c32c6cd9f1c18d7c4edfcde5038d6f",
"assets/assets/images/atom.svg": "ef53e7dbad4e87a87e1307697ce1665b",
"assets/assets/images/calculator.svg": "000924274ba6416977b659ad07b9dc86",
"assets/assets/images/apple.svg": "0ea9b82119d5f7e8aff5500893af2fda",
"assets/assets/images/scientist.svg": "9553f189a886260e34ab419f1c42b1da",
"assets/assets/images/login_fb.svg": "752ff3877cb21305a63d234d90cf5241",
"assets/assets/images/avatar.svg": "9db5990bd0b6602f8a2e0cd0697d1448",
"assets/assets/images/cell.svg": "6f3b7950470d1f5339520a115dbe0542",
"assets/assets/fonts/AvenirLTStd-Black.otf": "b1abb878e2529cb5cb4450139844155d",
"assets/assets/fonts/AvenirLTStd-Book.otf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/assets/fonts/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
