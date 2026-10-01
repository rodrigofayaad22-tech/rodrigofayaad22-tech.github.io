import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap.js'

/** Thin gradient bar at the top showing how far the page has been read. */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress__bar" />
    </div>
  )
}
