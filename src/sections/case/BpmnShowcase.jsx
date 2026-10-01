import { Maximize2 } from 'lucide-react'
import { useI18n } from '../../i18n/context.js'

const LEGEND = ['start', 'end', 'task', 'gateway', 'document', 'flow']

/** Large BPMN preview + legend + entry points to the full-screen viewer. */
export default function BpmnShowcase({ diagrams, onOpen }) {
  const { t, l } = useI18n()
  const [main, ...models] = diagrams

  return (
    <figure className="bpmn" aria-labelledby="bpmn-title">
      <div className="bpmn__frame" data-anim="scale">
        <div className="bpmn__bar" aria-hidden="true">
          <span className="bpmn__bar-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="bpmn__bar-label">bpmn / as-is + to-be</span>
        </div>
        <button type="button" className="bpmn__preview" onClick={() => onOpen(0)}>
          <img
            src={main.preview}
            srcSet={`${main.preview} 900w, ${main.src} 1536w`}
            sizes="(min-width: 1200px) 860px, 100vw"
            width={main.width}
            height={main.height}
            alt={l(main.alt)}
            loading="lazy"
            decoding="async"
          />
          <span className="bpmn__overlay">
            <span className="bpmn__overlay-cta">
              <Maximize2 size={16} aria-hidden="true" />
              {t('case.viewFullProcess')}
            </span>
          </span>
        </button>
      </div>

      <figcaption className="bpmn__caption">
        <div className="bpmn__caption-text" data-anim="up">
          <h3 id="bpmn-title" className="bpmn__title">
            {l(main.title)}
          </h3>
          <p>{l(main.caption)}</p>
          <p className="bpmn__source">{t('case.bpmnSource')}</p>
        </div>
        <div data-anim="up">
          <button type="button" className="btn btn--primary btn--md" onClick={() => onOpen(0)}>
            <Maximize2 className="btn__icon" size={18} aria-hidden="true" />
            <span className="btn__label">{t('case.viewFullProcess')}</span>
          </button>
        </div>
      </figcaption>

      <div className="bpmn__legend" data-anim="up">
        <p className="bpmn__legend-title">{t('case.legendTitle')}</p>
        <ul className="bpmn__legend-list">
          {LEGEND.map((key) => (
            <li key={key}>
              <span className={`bpmn-symbol bpmn-symbol--${key}`} aria-hidden="true" />
              {t(`case.legend.${key}`)}
            </li>
          ))}
        </ul>
      </div>

      {models.length ? (
        <div className="bpmn__models">
          <p className="bpmn__models-title" data-anim="up">
            {t('case.presentedModels')}
          </p>
          <ul className="bpmn__thumbs" data-anim-stagger>
            {models.map((model, i) => (
              <li key={model.id} data-anim-item>
                <button type="button" className="bpmn-thumb" onClick={() => onOpen(i + 1)}>
                  <span className="bpmn-thumb__img">
                    <img src={model.preview} width={model.width} height={model.height} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="bpmn-thumb__text">
                    <span className="bpmn-thumb__title">{l(model.title)}</span>
                    <span className="bpmn-thumb__caption">{l(model.caption)}</span>
                  </span>
                  <Maximize2 size={16} aria-hidden="true" className="bpmn-thumb__icon" />
                  <span className="sr-only"> — {t('case.viewDiagram')}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </figure>
  )
}
