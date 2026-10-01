import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { HOME_SECTIONS } from '../data/navigation.js'
import { HOME_URL, sectionHref } from '../lib/paths.js'
import { scrollToSection } from '../lib/scroll.js'
import useActiveSection from '../hooks/useActiveSection.js'
import Logo from './Logo.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import Modal from './Modal.jsx'

const NO_SECTIONS = []

function MobileMenu({ onClose, active, onHome }) {
  const { t } = useI18n()
  const closeRef = useRef(null)

  const handleClick = (event, id) => {
    if (!onHome) return // regular navigation to the home page
    event.preventDefault()
    onClose()
    // Wait for the dialog to unmount (scroll lock released) before scrolling.
    window.setTimeout(() => scrollToSection(id), 0)
  }

  return (
    <Modal className="mobile-menu" label={t('common.mobileNav')} onClose={onClose} initialFocusRef={closeRef}>
      <div className="mobile-menu__panel">
        <div className="mobile-menu__top">
          <Logo />
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label={t('common.closeMenu')}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label={t('common.mobileNav')}>
          <ol className="mobile-menu__list">
            {HOME_SECTIONS.map((id, i) => (
              <li key={id} style={{ '--i': i }}>
                <a
                  href={sectionHref(id, onHome)}
                  className={`mobile-menu__link ${active === id ? 'is-active' : ''}`}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={(event) => handleClick(event, id)}
                >
                  <span className="mobile-menu__index" aria-hidden="true">
                    {String(i).padStart(2, '0')}
                  </span>
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__bottom">
          <LanguageToggle />
        </div>
      </div>
    </Modal>
  )
}

export default function Navbar({ onHome = false }) {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(onHome ? HOME_SECTIONS : NO_SECTIONS)

  // Background appears once the top sentinel leaves the viewport (no scroll listener).
  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel')
    if (!sentinel) return undefined
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (event, id) => {
    if (!onHome) return
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a
          href={onHome ? '#home' : HOME_URL}
          className="nav__logo"
          aria-label={t('common.homeLink')}
          onClick={(event) => handleNavClick(event, 'home')}
        >
          <Logo />
        </a>

        <nav className="nav__primary" aria-label={t('common.primaryNav')}>
          <ul className="nav__list">
            {HOME_SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={sectionHref(id, onHome)}
                  className={`nav__link ${active === id ? 'is-active' : ''}`}
                  aria-current={onHome && active === id ? 'location' : undefined}
                  onClick={(event) => handleNavClick(event, id)}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <LanguageToggle className="nav__lang" />
          <button
            type="button"
            className="icon-btn nav__burger"
            aria-label={t('common.openMenu')}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
      {menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} active={active} onHome={onHome} /> : null}
    </header>
  )
}
