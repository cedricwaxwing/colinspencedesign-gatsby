/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-45119eea1ac4e0edeb4d.js"
  },
  {
    "url": "styles.9db905ddfedfc2f50fec.css"
  },
  {
    "url": "styles-8d3db5124725dcff78a7.js"
  },
  {
    "url": "framework-af4a585f79038c74deaa.js"
  },
  {
    "url": "app-832cfb0d69e49da72933.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "95777f7270121ef97703d3930a6602af"
  },
  {
    "url": "google-fonts/s/barlowcondensed/v4/HTx3L3I-JCGChYJ8VI-L6OO_au7B6xHT2g.woff2",
    "revision": "692180036dbae2e62ee9e69b98357518"
  },
  {
    "url": "google-fonts/s/barlowcondensed/v4/HTxwL3I-JCGChYJ8VI-L6OO_au7B4-Lwz3bWuQ.woff2",
    "revision": "df8ca18d911b4903b34a29d874cc918a"
  },
  {
    "url": "google-fonts/s/barlowcondensed/v4/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuQ.woff2",
    "revision": "86079b714f39270490850875ad81f748"
  },
  {
    "url": "google-fonts/s/barlowcondensed/v4/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3bWuQ.woff2",
    "revision": "8b0dd43ee56a8e1b0a4c1b73cc88a516"
  },
  {
    "url": "google-fonts/s/notoserif/v8/ga6Iaw1J5X9T9RW6j9bNfFcWaA.woff2",
    "revision": "6e4fd5dff8891c5b0dc0a05393e04026"
  },
  {
    "url": "google-fonts/s/notoserif/v8/ga6Law1J5X9T9RW6j9bNdOwzfReecQ.woff2",
    "revision": "1159294dc010b8f2be4e23976202f6e1"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4dfecd1f2d0e74648e38.js"
  },
  {
    "url": "polyfill-072544d75ef1e5821393.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f9d273256794615fb0a65bfe5c7d86af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-832cfb0d69e49da72933.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
