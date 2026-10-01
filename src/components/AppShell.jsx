import { useEffect } from 'react'
import { useI18n } from '../i18n/context.js'
import { ScrollTrigger } from '../animations/gsap.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './ScrollProgress.jsx'

/** Removes the <RG /> boot mark from index.html as soon as React has painted. */
function useBootScreen() {
  useEffect(() => {
    const boot = document.getElementById('boot')
    if (!boot) return
    requestAnimationFrame(() => boot.classList.add('is-done'))
    const remove = () => boot.remove()
    boot.addEventListener('transitionend', remove, { once: true })
    const fallback = window.setTimeout(remove, 900)
    return () => window.clearTimeout(fallback)
  }, [])
}

export default function AppShell({ onHome = false, children }) {
  const { t, lang } = useI18n()
  useBootScreen()

  // Text length changes with the language: recompute scroll trigger positions.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [lang])

  return (
    <>
      <div id="top-sentinel" className="top-sentinel" aria-hidden="true" />
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <ScrollProgress />
      <Navbar onHome={onHome} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
