import { useI18n } from '../i18n/context.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function About() {
  const { t } = useI18n()
  const paragraphs = t('about.paragraphs')

  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeader index="01" eyebrow={t('about.eyebrow')} title={t('about.title')} titleId="about-title" />

      <div className="about__grid">
        <div className="about__text">
          {paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? 'about__lead' : undefined} data-anim="up">
              {text}
            </p>
          ))}
        </div>

        <aside className="card about__snapshot" aria-labelledby="snapshot-title" data-anim="right">
          <h3 id="snapshot-title" className="card__eyebrow">
            {t('about.snapshotTitle')}
          </h3>
          <dl className="snapshot">
            {t('about.snapshot').map((row) => (
              <div className="snapshot__row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="snapshot__status">
            <span className="status-dot" aria-hidden="true" />
            {t('contact.availability')}
          </p>
        </aside>
      </div>

      <ul className="pillars" data-anim-stagger>
        {t('about.pillars').map((pillar, i) => (
          <li className="card pillar" key={pillar.title} data-anim-item>
            <span className="pillar__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="pillar__title">{pillar.title}</h3>
            <p className="pillar__text">{pillar.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
