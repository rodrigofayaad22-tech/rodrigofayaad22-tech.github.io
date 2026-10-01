import { useLayoutEffect, useRef } from 'react'
import useScrollAnimations from '../hooks/useScrollAnimations.js'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Projects from '../sections/Projects.jsx'
import Experience from '../sections/Experience.jsx'
import Education from '../sections/Education.jsx'
import Contact from '../sections/Contact.jsx'

/**
 * Content is rendered client-side, so honour a #section in the URL after mount (e.g. coming
 * back from the case study). Instant jumps: a smooth scroll would be cut short by the
 * ScrollTrigger refresh that runs on load. Repeated once fonts are in, as they shift layout.
 */
function useInitialHash() {
  useLayoutEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = id && document.getElementById(id)
    if (!target) return
    const jump = () => target.scrollIntoView({ block: 'start', behavior: 'instant' })
    requestAnimationFrame(jump)
    document.fonts?.ready.then(() => requestAnimationFrame(jump))
    window.addEventListener('load', () => requestAnimationFrame(jump), { once: true })
  }, [])
}

export default function HomePage() {
  const scopeRef = useRef(null)
  useScrollAnimations(scopeRef)
  useInitialHash()

  return (
    <div ref={scopeRef}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
