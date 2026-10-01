import { gsap, ScrollTrigger, MOTION_QUERIES } from './gsap.js'

/*
 * Declarative scroll animations. Components only add data attributes; this file decides
 * how (and whether) they move. Content is visible by default in CSS, so with
 * prefers-reduced-motion — or if JavaScript fails — nothing is ever hidden.
 *
 *   data-anim="up | left | right | scale | mask | clip"   reveal once when scrolled into view
 *   data-anim-stagger (+ children with data-anim-item)     staggered reveal of a group
 *   data-draw                                               SVG stroke drawn once (needs pathLength="1")
 *   data-scrub="y | x"                                      scaleY / scaleX tied to scroll (lines, rails)
 *   data-scrub-scope                                        element that drives a data-scrub inside it
 *   data-node                                               gets .is-active once its scope reaches the viewport
 *   data-parallax="<yPercent>"                              subtle parallax (desktop only)
 */

const START = 'top 86%'

// Explicit end values: GSAP never has to *measure* where an element should end up.
// (Measuring breaks when a CSS transition on transform — e.g. a card's hover lift — is
// mid-flight during a ScrollTrigger refresh: the element would stay stuck a few px off.)
const END = { x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, autoAlpha: 1 }
// Once revealed, inline styles are removed so CSS hover transitions take over again.
const CLEAR = 'transform,translate,rotate,scale,opacity,visibility,transition'

function reveal(targets, from, { trigger, delay = 0, duration = 0.9, ease = 'power3.out', stagger = 0 } = {}) {
  const to = Object.fromEntries(Object.keys(from).map((key) => [key, END[key]]))
  gsap.set(targets, { transition: 'none' }) // CSS transitions would fight GSAP's per-frame writes
  gsap.fromTo(targets, from, {
    ...to,
    delay,
    duration,
    ease,
    stagger,
    clearProps: CLEAR,
    scrollTrigger: { trigger, start: START, once: true },
  })
}

function revealOnce(el, from, options = {}) {
  reveal(el, from, { trigger: el, ...options })
}

export function createScrollAnimations(scope) {
  const mm = gsap.matchMedia()

  mm.add(
    MOTION_QUERIES,
    (context) => {
      const { motionOK, isDesktop, isMobile } = context.conditions
      if (!motionOK) return

      const q = gsap.utils.selector(scope)
      const dist = isMobile ? 18 : 30
      const side = isMobile ? 0 : 56

      q('[data-anim]').forEach((el) => {
        const type = el.dataset.anim
        const delay = Number(el.dataset.animDelay || 0)
        switch (type) {
          case 'left':
          case 'right':
            revealOnce(
              el,
              { x: type === 'left' ? -side : side, y: isMobile ? dist : 0, autoAlpha: 0 },
              { duration: 1, delay },
            )
            break
          case 'scale':
            revealOnce(el, { scale: 0.94, autoAlpha: 0 }, { duration: 1, delay })
            break
          case 'mask': {
            const inner = el.firstElementChild
            if (inner) reveal(inner, { yPercent: 110 }, { trigger: el, duration: 1.05, ease: 'power4.out', delay })
            break
          }
          case 'clip':
            gsap.fromTo(
              el,
              { clipPath: 'inset(0% 100% 0% 0% round 16px)' },
              {
                clipPath: 'inset(0% 0% 0% 0% round 16px)',
                duration: 1.3,
                ease: 'power4.inOut',
                delay,
                scrollTrigger: { trigger: el, start: START, once: true },
              },
            )
            break
          default:
            revealOnce(el, { y: dist, autoAlpha: 0 }, { delay })
        }
      })

      q('[data-anim-stagger]').forEach((group) => {
        const items = group.querySelectorAll('[data-anim-item]')
        if (!items.length) return
        reveal(items, { y: dist * 0.8, autoAlpha: 0 }, { trigger: group, duration: 0.8, stagger: isMobile ? 0.05 : 0.08 })
      })

      q('[data-draw]').forEach((path) => {
        gsap.fromTo(
          path,
          { strokeDasharray: 1, strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: path.closest('svg') || path, start: START, once: true },
          },
        )
      })

      q('[data-scrub]').forEach((line) => {
        const axis = line.dataset.scrub === 'x' ? 'scaleX' : 'scaleY'
        const trigger = line.closest('[data-scrub-scope]') || line.parentElement
        gsap.fromTo(
          line,
          { [axis]: 0 },
          {
            [axis]: 1,
            ease: 'none',
            scrollTrigger: { trigger, start: 'top 70%', end: 'bottom 70%', scrub: 0.6 },
          },
        )
      })

      q('[data-node]').forEach((node) => {
        const trigger = node.closest('[data-scrub-scope]') || node.parentElement
        ScrollTrigger.create({
          trigger,
          start: 'top 70%',
          onEnter: () => node.classList.add('is-active'),
          onLeaveBack: () => node.classList.remove('is-active'),
        })
      })

      if (isDesktop) {
        q('[data-parallax]').forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax) || -8,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          })
        })
      }
    },
    scope,
  )

  // Fonts can shift layout after the first measure.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh())
  }

  return () => mm.revert()
}
