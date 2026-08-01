import type { FormatOverrideBundle } from './format-overrides'
import { EMPTY_FORMAT_OVERRIDE_BUNDLE } from './format-overrides'

export const FORMAT_OVERRIDES_WILL_UPDATE_EVENT = 'format-overrides:will-update'

let current: FormatOverrideBundle = EMPTY_FORMAT_OVERRIDE_BUNDLE
const listeners = new Set<() => void>()

export function getFormatOverrideBundle(): FormatOverrideBundle {
  return current
}

export function setFormatOverrideBundle(bundle: FormatOverrideBundle): void {
  window.dispatchEvent(new CustomEvent(FORMAT_OVERRIDES_WILL_UPDATE_EVENT, { detail: bundle }))
  current = bundle
  listeners.forEach((fn) => fn())
}

export function subscribeFormatOverrideBundle(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export default { getFormatOverrideBundle, setFormatOverrideBundle, subscribeFormatOverrideBundle }
