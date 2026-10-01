import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { profile } from '../data/profile.js'
import { gsap, MOTION_QUERIES } from '../animations/gsap.js'
import { scrollToSection } from '../lib/scroll.js'
import ButtonLink from '../components/ButtonLink.jsx'
import NetworkLines from '../components/NetworkLines.jsx'
import TypingText from '../components/TypingText.jsx'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx'

function useHeroIntro(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const mm = gsap.matchMedia()
    mm.add(
      MOTION_QUERIES,
      ({ conditions }) => {
        if (!conditions.motionOK) return
        const q = gsap.utils.selector(root)

        // Entrance: short, content readable almost immediately.
        gsap
          .timeline({ delay: 0.1 })
          .from(q('.portrait'), { scale: 0.92, autoAlpha: 0, duration: 1.1 })
          .from(q('.hero__name .mask__inner'), { yPercent: 110, duration: 1, stagger: 0.09, ease: 'power4.out' }, 0.25)
          .from(q('[data-hero-item]'), { y: 14, autoAlpha: 0, duration: 0.7, stagger: 0.06 }, 0.5)
          .from(q('.scroll-cue'), { autoAlpha: 0, duration: 0.6 }, 1.1)
          .fromTo(
            q('[data-network-edge]'),
            { strokeDasharray: 1, strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.6, stagger: 0.035, ease: 'power2.inOut' },
            0,
          )
          .from(q('[data-network-node]'), { autoAlpha: 0, duration: 0.6, stagger: 0.04 }, 0.5)

        // Leaving the hero: gentle parallax (desktop only).
        if (conditions.isDesktop) {
          const scroll = { trigger: root, start: 'top top', end: 'bottom top', scrub: true }
          gsap.to(q('.hero__content'), { y: -70, opacity: 0.25, ease: 'none', scrollTrigger: scroll })
          gsap.to(q('.hero__network'), { yPercent: 10, ease: 'none', scrollTrigger: { ...scroll } })
          gsap.to(q('.hero__grid'), { yPercent: 18, ease: 'none', scrollTrigger: { ...scroll } })
        }
      },
      root,
    )
    return () => mm.revert()
  }, [rootRef])
}

export default function Hero() {
  const { t, lang } = useI18n()
  const rootRef = useRef(null)
  useHeroIntro(rootRef)

  const goTo = (id) => (event) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-title" ref={rootRef}>
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <NetworkLines className="hero__network" />
      </div>

      <div className="container hero__content">
        <div className="portrait">
          <div className="portrait__glow" aria-hidden="true" />
          <svg className="portrait__orbit" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
            <circle cx="100" cy="100" r="98" className="portrait__orbit-path" />
            <circle cx="100" cy="2" r="2.6" className="portrait__orbit-node" />
            <circle cx="15.1" cy="149" r="2" className="portrait__orbit-node portrait__orbit-node--violet" />
            <circle cx="184.9" cy="149" r="1.6" className="portrait__orbit-node" />
          </svg>
          <div className="portrait__ring" aria-hidden="true" />
          <div className="portrait__frame">
            <picture>
              <source type="image/avif" srcSet={profile.photo.avif} sizes="220px" />
              <source type="image/webp" srcSet={profile.photo.webp} sizes="220px" />
              <img
                src={profile.photo.fallback}
                width={profile.photo.width}
                height={profile.photo.height}
                alt={t('hero.photoAlt')}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <p className="portrait__badge" data-hero-item>
            <span className="status-dot" aria-hidden="true" />
            {t('hero.status')}
          </p>
        </div>

        <h1 id="hero-title" className="hero__name">
          <span className="mask">
            <span className="mask__inner">{profile.nameLines[0]}</span>
          </span>{' '}
          <span className="mask">
            <span className="mask__inner hero__name-accent">{profile.nameLines[1]}</span>
          </span>
        </h1>

        <p className="hero__role" data-hero-item>
          {t('hero.role')}
        </p>

        <p className="hero__focus" data-hero-item>
          {t('hero.focus').map((item, i) => (
            <span key={item}>
              {i > 0 ? (
                <span className="hero__focus-dot" aria-hidden="true">
                  •
                </span>
              ) : null}
              {item}
            </span>
          ))}
        </p>

        <div data-hero-item>
          <TypingText
            key={lang}
            phrases={t('hero.typing')}
            pauseLabel={t('hero.typingPause')}
            playLabel={t('hero.typingPlay')}
          />
        </div>

        <p className="hero__tagline" data-hero-item>
          {t('hero.tagline')}
        </p>

        <div className="hero__actions" data-hero-item>
          <ButtonLink href="#projects" onClick={goTo('projects')} iconEnd={ArrowRight}>
            {t('hero.ctaProjects')}
          </ButtonLink>
          <ButtonLink href="#contact" onClick={goTo('contact')} variant="secondary">
            {t('hero.ctaContact')}
          </ButtonLink>
        </div>

        <ul className="hero__links" data-hero-item>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-link">
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
              <LinkedinIcon size={16} />
              LinkedIn
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
          </li>
        </ul>
      </div>

      <a href="#about" className="scroll-cue" onClick={goTo('about')} aria-label={t('hero.scrollCue')}>
        <span className="scroll-cue__track" aria-hidden="true">
          <span className="scroll-cue__dot" />
        </span>
        <span className="scroll-cue__label" aria-hidden="true">
          scroll
        </span>
        <ArrowDown size={14} aria-hidden="true" className="scroll-cue__arrow" />
      </a>
    </section>
  )
}
