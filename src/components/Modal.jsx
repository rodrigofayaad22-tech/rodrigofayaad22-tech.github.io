import { useEffect, useLayoutEffect, useRef } from 'react'
import useScrollLock from '../hooks/useScrollLock.js'

/**
 * Accessible modal built on the native <dialog>: focus is contained, the rest of the
 * page becomes inert, Esc closes it and focus returns to the element that opened it.
 * Mount it only while open.
 */
export default function Modal({ onClose, className = '', labelledBy, label, initialFocusRef, children, onKeyDown }) {
  const dialogRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useLayoutEffect(() => {
    onCloseRef.current = onClose
  })

  useScrollLock(true)

  useEffect(() => {
    const dialog = dialogRef.current
    const opener = document.activeElement
    if (dialog && !dialog.open) dialog.showModal()
    ;(initialFocusRef?.current || dialog)?.focus({ preventScroll: true })

    const handleCancel = (event) => {
      event.preventDefault() // keep React as the source of truth
      onCloseRef.current()
    }
    dialog.addEventListener('cancel', handleCancel)
    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      if (dialog.open) dialog.close()
      if (opener && typeof opener.focus === 'function') opener.focus({ preventScroll: true })
    }
  }, [initialFocusRef])

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      onKeyDown={onKeyDown}
    >
      {children}
    </dialog>
  )
}
