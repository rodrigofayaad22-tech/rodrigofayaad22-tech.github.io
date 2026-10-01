import { useEffect } from 'react'

let locks = 0

/** Locks page scroll while `active` (compensates the scrollbar width to avoid layout shift). */
export default function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined
    const root = document.documentElement
    if (locks === 0) {
      const scrollbar = window.innerWidth - root.clientWidth
      root.style.setProperty('--scrollbar-comp', `${scrollbar}px`)
      root.classList.add('is-scroll-locked')
    }
    locks += 1
    return () => {
      locks -= 1
      if (locks === 0) {
        root.classList.remove('is-scroll-locked')
        root.style.removeProperty('--scrollbar-comp')
      }
    }
  }, [active])
}
