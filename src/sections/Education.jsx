import { ArrowRight, GraduationCap, Workflow } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { CASE_STUDY_URL } from '../lib/paths.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ButtonLink from '../components/ButtonLink.jsx'

export default function Education() {
  const { t } = useI18n()

  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeader index="05" eyebrow={t('education.eyebrow')} title={t('education.title')} titleId="education-title" />

      <div className="edu__grid">
        <article className="card edu-card" aria-labelledby="edu-degree" data-anim="left">
          <div className="edu-card__top">
            <span className="icon-badge icon-badge--lg" aria-hidden="true">
              <GraduationCap size={24} />
            </span>
            <div>
              <h3 id="edu-degree" className="edu-card__degree">
                {t('education.degree')}
              </h3>
              <p className="edu-card__inst">{t('education.institution')}</p>
            </div>
          </div>

          <dl className="edu-card__facts">
            <div>
              <dt>{t('education.scheduleLabel')}</dt>
              <dd>{t('education.schedule')}</dd>
            </div>
            <div>
              <dt>{t('education.statusLabel')}</dt>
              <dd>
                <span className="status-dot status-dot--blue" aria-hidden="true" />
                {t('education.status')}
              </dd>
            </div>
          </dl>

          <h4 className="edu-card__subhead">{t('education.topicsTitle')}</h4>
          <ul className="tags">
            {t('education.topics').map((topic) => (
              <li key={topic} className="tag">
                {topic}
              </li>
            ))}
          </ul>
        </article>

        <aside className="card edu-highlight" aria-labelledby="edu-highlight" data-anim="right">
          <span className="icon-badge icon-badge--violet" aria-hidden="true">
            <Workflow size={18} />
          </span>
          <h3 id="edu-highlight" className="card__eyebrow">
            {t('education.highlightTitle')}
          </h3>
          <p className="edu-highlight__text">{t('education.highlightText')}</p>
          <ButtonLink href={CASE_STUDY_URL} variant="secondary" size="sm" iconEnd={ArrowRight}>
            {t('education.highlightCta')}
          </ButtonLink>
        </aside>
      </div>
    </Section>
  )
}
