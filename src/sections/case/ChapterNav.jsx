import { useEffect, useLayoutEffect, useRef } from 'react'
import { useI18n } from '../../i18n/context.js'
import { gsap } from '../../animations/gsap.js'
import { scrollToSection } from '../../lib/scroll.js'

const pad = (n) => String(n).padStart(2, '0')

/**
 * Chapter navigation: a sticky vertical list on desktop, a sticky horizontal
 * strip on smaller screens. Shows reading progress through the case body.
 */
export default function ChapterNav({ chapters, active, bodyRef }) {
  const { t, l } = useI18n()
  const listRef = useRef(null)
  const fillRef = useRef(null)

  useLayoutEffect(() => {
    if (!bodyRef.current) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { '--progress': 0 },
        {
          '--progress': 1,
          ease: 'none',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 60%', end: 'bottom 60%', scrub: 0.4 },
        },
      )
    })
    return () => ctx.revert()
  }, [bodyRef])

  // Keep the active chip visible in the horizontal (mobile) strip — but only once the page
  // has stopped scrolling: moving another scroller mid-scroll makes Chromium cut the page's
  // smooth/momentum scroll short.
  useEffect(() => {
    const list = listRef.current
    if (!list || list.scrollWidth <= list.clientWidth) return undefined
    const sync = () => {
      const item = list.querySelector('.is-active')
      if (item) list.scrollLeft = item.offsetLeft - 16
    }
    let timer = window.setTimeout(sync, 200)
    const onScroll = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(sync, 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [active])

  return (
    <nav className="chapter-nav" aria-label={t('case.chaptersLabel')}>
      <div className="chapter-nav__progress" aria-hidden="true">
        <span ref={fillRef} className="chapter-nav__fill" />
      </div>
      <ol className="chapter-nav__list" ref={listRef}>
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={`chapter-nav__link ${active === chapter.id ? 'is-active' : ''}`}
              aria-current={active === chapter.id ? 'location' : undefined}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(chapter.id)
              }}
            >
              <span className="chapter-nav__num">{pad(i + 1)}</span>
              <span className="chapter-nav__title">{l(chapter.title)}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
