import { ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n/context.js'

/** AS-IS → TO-BE side-by-side comparison (ARIA table so it can reflow into cards on mobile). */
export default function Comparison({ rows }) {
  const { t, l } = useI18n()
  return (
    <div className="compare" role="table" aria-label={t('case.compareTitle')}>
      <div className="compare__row compare__row--head" role="row">
        <span className="compare__aspect" role="columnheader">
          {t('case.compareAspect')}
        </span>
        <span className="compare__cell compare__cell--as-is" role="columnheader">
          AS-IS
        </span>
        <span className="compare__arrow" aria-hidden="true" />
        <span className="compare__cell compare__cell--to-be" role="columnheader">
          TO-BE
        </span>
      </div>
      {rows.map((row) => (
        <div className="compare__row" role="row" key={row.aspect.en} data-anim="up">
          <span className="compare__aspect" role="rowheader">
            {l(row.aspect)}
          </span>
          <span className="compare__cell compare__cell--as-is" role="cell">
            <span className="compare__tag" aria-hidden="true">
              AS-IS
            </span>
            {l(row.asIs)}
          </span>
          <span className="compare__arrow" aria-hidden="true">
            <ArrowRight size={16} />
          </span>
          <span className="compare__cell compare__cell--to-be" role="cell">
            <span className="compare__tag" aria-hidden="true">
              TO-BE
            </span>
            {l(row.toBe)}
          </span>
        </div>
      ))}
    </div>
  )
}
