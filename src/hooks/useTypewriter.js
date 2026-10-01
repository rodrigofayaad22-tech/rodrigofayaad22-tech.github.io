import { useEffect, useState } from 'react'

/**
 * Types a phrase, holds it, deletes it and moves to the next one.
 * With `reduced` the phrases swap instantly (no character animation).
 * Remount (e.g. key={lang}) to restart with a new list.
 */
export default function useTypewriter(
  phrases,
  { running = true, reduced = false, typeMs = 58, deleteMs = 28, holdMs = 1900, gapMs = 380, startDelay = 700 } = {},
) {
  const [state, setState] = useState({ index: 0, length: reduced ? phrases[0].length : 0 })

  useEffect(() => {
    if (!running) return undefined
    let timer
    let { index, length } = state
    let deleting = !reduced && length === phrases[index].length && length > 0

    const schedule = (ms) => {
      timer = window.setTimeout(step, ms)
    }

    function step() {
      if (reduced) {
        index = (index + 1) % phrases.length
        setState({ index, length: phrases[index].length })
        schedule(holdMs + 1400)
        return
      }
      const phrase = phrases[index]
      if (!deleting) {
        length += 1
        setState({ index, length })
        if (length >= phrase.length) {
          deleting = true
          schedule(holdMs)
        } else {
          schedule(typeMs + Math.random() * 40)
        }
      } else {
        length -= 1
        setState({ index, length })
        if (length <= 0) {
          deleting = false
          index = (index + 1) % phrases.length
          schedule(gapMs)
        } else {
          schedule(deleteMs)
        }
      }
    }

    schedule(length === 0 ? startDelay : holdMs)
    return () => window.clearTimeout(timer)
    // Resume from the current position when `running` toggles; state is read once per run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, reduced, phrases, typeMs, deleteMs, holdMs, gapMs, startDelay])

  const phrase = phrases[state.index] ?? ''
  return { text: phrase.slice(0, state.length), index: state.index }
}
