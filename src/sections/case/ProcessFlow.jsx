import { TriangleAlert } from 'lucide-react'
import { useI18n } from '../../i18n/context.js'

/** Step-by-step process (AS-IS / TO-BE) with lanes, decisions and pain points. */
export default function ProcessFlow({ steps, variant, label }) {
  const { t, l } = useI18n()
  return (
    <div className={`flow flow--${variant}`} data-scrub-scope>
      <span className="flow__track" aria-hidden="true">
        <span className="flow__fill" data-scrub="y" />
      </span>
      <ol className="flow__list" aria-label={label}>
        {steps.map((step, i) => (
          <li
            key={step.text.en}
            className={`flow__step lane--${step.lane} ${step.decision ? 'flow__step--decision' : ''} ${step.pain ? 'flow__step--pain' : ''}`}
            data-anim="up"
          >
            <span className="flow__marker" aria-hidden="true">
              {step.decision ? <span className="flow__diamond" /> : String(i + 1).padStart(2, '0')}
            </span>
            <div className="flow__body">
              <span className={`lane-chip lane-chip--${step.lane}`}>{t(`case.lane.${step.lane}`)}</span>
              <p className="flow__text">
                {step.decision ? <span className="sr-only">{t('case.decision')}: </span> : null}
                {l(step.text)}
              </p>
              {step.decision ? (
                <div className="flow__branches">
                  <p className="branch branch--yes">
                    <span className="branch__label">{t('case.yes')}</span>
                    {l(step.yes)}
                  </p>
                  <p className="branch branch--no">
                    <span className="branch__label">{t('case.no')}</span>
                    {l(step.no)}
                  </p>
                </div>
              ) : null}
              {step.pain ? (
                <p className="pain-chip">
                  <TriangleAlert size={13} aria-hidden="true" />
                  <span className="sr-only">{t('case.painLegend')}: </span>
                  {l(step.pain)}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
