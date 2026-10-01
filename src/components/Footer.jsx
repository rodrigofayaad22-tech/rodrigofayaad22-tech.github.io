import { ArrowUp, Mail } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { emailHref, profile } from '../data/profile.js'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import Logo from './Logo.jsx'

function backToTop(event) {
  event.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  document.getElementById('main')?.focus({ preventScroll: true })
}

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__line" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <div>
            <p className="footer__credit">{t('footer.credit')}</p>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>
        </div>

        <ul className="footer__social" aria-label={t('footer.social')}>
          <li>
            <a className="icon-btn icon-btn--ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${t('common.newTab')}`}>
              <GithubIcon size={18} />
            </a>
          </li>
          <li>
            <a className="icon-btn icon-btn--ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${t('common.newTab')}`}>
              <LinkedinIcon size={18} />
            </a>
          </li>
          <li>
            <a className="icon-btn icon-btn--ghost" href={emailHref} aria-label={`E-mail: ${profile.links.email}`}>
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="footer__bottom">
          <p>
            © {year} {profile.shortName}
          </p>
          <a href="#main" className="footer__top" onClick={backToTop}>
            {t('common.backToTop')}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
