import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import useTypewriter from '../hooks/useTypewriter.js'
import { useReducedMotion } from '../hooks/useMediaQuery.js'

/**
 * Terminal-style rotating phrases. The animated text is hidden from screen readers
 * (they get all phrases once, statically). It pauses off-screen and has a pause button
 * (WCAG 2.2.2) — mount with key={lang} so it restarts in the new language.
 */
export default function TypingText({ phrases, pauseLabel, playLabel }) {
  const reduced = useReducedMotion()
  const rootRef = useRef(null)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const { text } = useTypewriter(phrases, { running: visible && !paused, reduced })

  return (
    <p className="typing" ref={rootRef}>
      <span className="sr-only">{phrases.join(' ')}</span>
      <span className="typing__line" aria-hidden="true">
        <span className="typing__prompt">&gt;</span>
        <span className="typing__text">{text}</span>
        <span className={`typing__caret ${paused ? 'is-paused' : ''}`} />
      </span>
      <button
        type="button"
        className="typing__toggle"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? playLabel : pauseLabel}
        title={paused ? playLabel : pauseLabel}
      >
        {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
      </button>
    </p>
  )
}
