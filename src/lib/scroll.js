const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Smoothly scrolls to a section and moves keyboard focus to it (like a skip link). */
export function scrollToSection(id, { updateHash = true } = {}) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
  if (updateHash) window.history.replaceState(null, '', `#${id}`)
}
