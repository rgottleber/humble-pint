import { derived, writable } from 'svelte/store'

const isBrowser = typeof window !== 'undefined'

const href = writable(isBrowser ? window.location.href : 'https://example.com')

const URL = isBrowser ? window.URL : require('url').URL

if (isBrowser) {
  const originalPushState = history.pushState
  const originalReplaceState = history.replaceState

  const updateHref = () => href.set(window.location.href)
}

export default {
  subscribe: derived(href, ($href) => new URL($href)).subscribe,
  ssrSet: (urlHref) => href.set(urlHref),
}