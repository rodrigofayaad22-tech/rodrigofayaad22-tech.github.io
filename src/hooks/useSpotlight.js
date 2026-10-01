import { useCallback } from 'react'

/**
 * One delegated pointermove handler for a grid of `.spot` cards: sets --mx/--my on the
 * hovered card so CSS can draw a soft light that follows the cursor (mouse only).
 */
export default function useSpotlight() {
  return useCallback((event) => {
    if (event.pointerType !== 'mouse') return
    const card = event.target.closest('.spot')
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])
}
