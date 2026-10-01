import { useLayoutEffect } from 'react'
import { createScrollAnimations } from '../animations/scrollAnimations.js'

/** Wires the declarative data-anim/data-scrub/... attributes inside `scopeRef`. */
export default function useScrollAnimations(scopeRef) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined
    return createScrollAnimations(scopeRef.current)
  }, [scopeRef])
}
