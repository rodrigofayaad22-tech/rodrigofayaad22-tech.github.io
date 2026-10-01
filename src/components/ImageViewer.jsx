import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { ExternalLink, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import Modal from './Modal.jsx'

const PAD = 16
const maxScaleFor = (v) => Math.max(2, v.fit * 3)

/**
 * Full-screen lightbox for large diagrams: mouse-wheel / pinch zoom, drag to pan,
 * double-click / double-tap to zoom, keyboard shortcuts (+, −, 0, arrows), Esc closes.
 * Transforms are applied directly to the <img> (translate3d + scale, GPU friendly)
 * without re-rendering React on every pointer move.
 */
export default function ImageViewer({ images, index, onIndexChange, onClose }) {
  const { t, l } = useI18n()
  const titleId = useId()
  const closeRef = useRef(null)
  const stageRef = useRef(null)
  const imgRef = useRef(null)
  const view = useRef({ scale: 1, x: 0, y: 0, fit: 1, w: 0, h: 0 })
  const pointers = useRef(new Map())
  const gesture = useRef(null)
  const lastTap = useRef({ time: 0, x: 0, y: 0 })
  const [zoom, setZoom] = useState(100)
  const [loaded, setLoaded] = useState(false)

  const image = images[index]
  const multiple = images.length > 1

  const apply = useCallback((animate = false) => {
    const img = imgRef.current
    if (!img) return
    const { x, y, scale } = view.current
    img.classList.toggle('is-animating', animate)
    img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    setZoom(Math.round((scale / view.current.fit) * 100))
  }, [])

  const clampPan = useCallback(() => {
    const v = view.current
    const stage = stageRef.current
    if (!stage) return
    const sw = stage.clientWidth
    const sh = stage.clientHeight
    const iw = v.w * v.scale
    const ih = v.h * v.scale
    v.x = iw <= sw ? (sw - iw) / 2 : Math.min(0, Math.max(sw - iw, v.x))
    v.y = ih <= sh ? (sh - ih) / 2 : Math.min(0, Math.max(sh - ih, v.y))
  }, [])

  const fitToScreen = useCallback(
    (animate = false) => {
      const stage = stageRef.current
      const v = view.current
      if (!stage || !v.w) return
      v.fit = Math.min((stage.clientWidth - PAD * 2) / v.w, (stage.clientHeight - PAD * 2) / v.h)
      v.scale = v.fit
      clampPan()
      apply(animate)
    },
    [apply, clampPan],
  )

  const zoomAt = useCallback(
    (nextScale, cx, cy, animate = false) => {
      const v = view.current
      const target = Math.min(maxScaleFor(v), Math.max(v.fit, nextScale))
      const k = target / v.scale
      v.x = cx - (cx - v.x) * k
      v.y = cy - (cy - v.y) * k
      v.scale = target
      clampPan()
      apply(animate)
    },
    [apply, clampPan],
  )

  const zoomCenter = useCallback(
    (factor) => {
      const stage = stageRef.current
      if (!stage) return
      zoomAt(view.current.scale * factor, stage.clientWidth / 2, stage.clientHeight / 2, true)
    },
    [zoomAt],
  )

  // New image: reset to "fit".
  useLayoutEffect(() => {
    view.current.w = image.width
    view.current.h = image.height
    fitToScreen(false)
  }, [image, fitToScreen])

  // Keep the fit on resize / rotation.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined
    const observer = new ResizeObserver(() => {
      const v = view.current
      const atFit = Math.abs(v.scale - v.fit) < 0.001
      const prevFit = v.fit
      v.fit = Math.min((stage.clientWidth - PAD * 2) / v.w, (stage.clientHeight - PAD * 2) / v.h)
      v.scale = atFit ? v.fit : Math.max(v.fit, v.scale * (v.fit / prevFit))
      clampPan()
      apply(false)
    })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [apply, clampPan])

  // Wheel zoom needs a non-passive listener to prevent page zoom/scroll.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined
    const onWheel = (event) => {
      event.preventDefault()
      const rect = stage.getBoundingClientRect()
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY
      zoomAt(view.current.scale * Math.exp(-delta * 0.0018), event.clientX - rect.left, event.clientY - rect.top)
    }
    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  const local = (event) => {
    const rect = stageRef.current.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const startGesture = () => {
    const pts = [...pointers.current.values()]
    const v = view.current
    if (pts.length === 1) {
      gesture.current = { type: 'pan', sx: pts[0].x, sy: pts[0].y, x0: v.x, y0: v.y }
    } else if (pts.length >= 2) {
      const [a, b] = pts
      gesture.current = {
        type: 'pinch',
        d0: Math.hypot(b.x - a.x, b.y - a.y) || 1,
        mx: (a.x + b.x) / 2,
        my: (a.y + b.y) / 2,
        s0: v.scale,
        x0: v.x,
        y0: v.y,
      }
    }
  }

  const onPointerDown = (event) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return
    stageRef.current.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, local(event))
    stageRef.current.classList.add('is-grabbing')
    startGesture()
  }

  const onPointerMove = (event) => {
    if (!pointers.current.has(event.pointerId)) return
    pointers.current.set(event.pointerId, local(event))
    const g = gesture.current
    const v = view.current
    if (!g) return
    const pts = [...pointers.current.values()]
    if (g.type === 'pan' && pts.length === 1) {
      v.x = g.x0 + (pts[0].x - g.sx)
      v.y = g.y0 + (pts[0].y - g.sy)
    } else if (g.type === 'pinch' && pts.length >= 2) {
      const [a, b] = pts
      const d = Math.hypot(b.x - a.x, b.y - a.y)
      const mx = (a.x + b.x) / 2
      const my = (a.y + b.y) / 2
      v.scale = Math.min(maxScaleFor(v), Math.max(v.fit, g.s0 * (d / g.d0)))
      const k = v.scale / g.s0
      v.x = mx - (g.mx - g.x0) * k
      v.y = my - (g.my - g.y0) * k
    }
    clampPan()
    apply(false)
  }

  const toggleZoomAt = (x, y) => {
    const v = view.current
    if (v.scale > v.fit * 1.05) fitToScreen(true)
    else zoomAt(Math.max(v.fit * 2.5, 1), x, y, true)
  }

  const onPointerUp = (event) => {
    if (!pointers.current.has(event.pointerId)) return
    const point = pointers.current.get(event.pointerId)
    pointers.current.delete(event.pointerId)
    if (pointers.current.size === 0) {
      stageRef.current?.classList.remove('is-grabbing')
      gesture.current = null
      // Double-tap (touch) to zoom — mouse uses the native dblclick event.
      if (event.pointerType !== 'mouse' && event.type === 'pointerup') {
        const now = performance.now()
        const prev = lastTap.current
        if (now - prev.time < 300 && Math.hypot(point.x - prev.x, point.y - prev.y) < 30) {
          toggleZoomAt(point.x, point.y)
          lastTap.current = { time: 0, x: 0, y: 0 }
        } else {
          lastTap.current = { time: now, x: point.x, y: point.y }
        }
      }
    } else {
      startGesture()
    }
  }

  const onKeyDown = (event) => {
    const v = view.current
    const zoomed = v.scale > v.fit * 1.01
    const step = 80
    switch (event.key) {
      case '+':
      case '=':
        zoomCenter(1.35)
        break
      case '-':
      case '_':
        zoomCenter(1 / 1.35)
        break
      case '0':
        fitToScreen(true)
        break
      case 'ArrowLeft':
      case 'ArrowRight':
        if (zoomed) {
          v.x += event.key === 'ArrowLeft' ? step : -step
          clampPan()
          apply(true)
        } else if (multiple) {
          const dir = event.key === 'ArrowLeft' ? -1 : 1
          handleIndex((index + dir + images.length) % images.length)
        } else return
        break
      case 'ArrowUp':
      case 'ArrowDown':
        if (!zoomed) return
        v.y += event.key === 'ArrowUp' ? step : -step
        clampPan()
        apply(true)
        break
      default:
        return
    }
    event.preventDefault()
  }

  const handleIndex = (i) => {
    setLoaded(false)
    onIndexChange(i)
  }

  return (
    <Modal className="viewer" labelledBy={titleId} onClose={onClose} initialFocusRef={closeRef} onKeyDown={onKeyDown}>
      <div className="viewer__bar">
        <div className="viewer__heading">
          <h2 id={titleId} className="viewer__title">
            {l(image.title)}
          </h2>
          {multiple ? <span className="viewer__counter">{t('viewer.counter')(index + 1, images.length)}</span> : null}
        </div>
        {multiple ? (
          <div className="viewer__tabs" role="group" aria-label={t('viewer.diagrams')}>
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                className="viewer__tab"
                aria-pressed={i === index}
                onClick={() => handleIndex(i)}
              >
                {l(img.title).split(' — ')[0]}
              </button>
            ))}
          </div>
        ) : null}
        <button ref={closeRef} type="button" className="icon-btn viewer__close" onClick={onClose} aria-label={t('viewer.close')}>
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div
        ref={stageRef}
        className="viewer__stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(event) => {
          const p = local(event)
          toggleZoomAt(p.x, p.y)
        }}
      >
        {!loaded ? <div className="viewer__spinner" aria-hidden="true" /> : null}
        <img
          key={image.id}
          ref={imgRef}
          src={image.src}
          alt={l(image.alt)}
          width={image.width}
          height={image.height}
          className={`viewer__img ${loaded ? 'is-loaded' : ''}`}
          draggable="false"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{ width: image.width, height: image.height }}
        />
      </div>

      <div className="viewer__footer">
        <p className="viewer__caption">{l(image.caption)}</p>
        <div className="viewer__tools">
          <button type="button" className="icon-btn" onClick={() => zoomCenter(1 / 1.35)} aria-label={t('viewer.zoomOut')} title={t('viewer.zoomOut')}>
            <ZoomOut size={18} aria-hidden="true" />
          </button>
          <output className="viewer__zoom" aria-live="polite">
            {zoom}%
          </output>
          <button type="button" className="icon-btn" onClick={() => zoomCenter(1.35)} aria-label={t('viewer.zoomIn')} title={t('viewer.zoomIn')}>
            <ZoomIn size={18} aria-hidden="true" />
          </button>
          <button type="button" className="icon-btn" onClick={() => fitToScreen(true)} aria-label={t('viewer.fit')} title={t('viewer.fit')}>
            <Maximize2 size={17} aria-hidden="true" />
          </button>
          <a className="icon-btn" href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${t('viewer.openOriginal')} ${t('common.newTab')}`} title={t('viewer.openOriginal')}>
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="viewer__hint">
          <span className="viewer__hint--pointer">{t('viewer.hint')}</span>
          <span className="viewer__hint--touch">{t('viewer.hintTouch')}</span>
        </p>
      </div>
    </Modal>
  )
}
