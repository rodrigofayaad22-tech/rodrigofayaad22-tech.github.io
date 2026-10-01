import { Lightbulb, MapPin } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { experiences } from '../data/experience.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function Experience() {
  const { t, l } = useI18n()

  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeader
        index="04"
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        titleId="experience-title"
        lead={t('experience.lead')}
      />

      <div className="timeline" data-scrub-scope>
        <span className="timeline__track" aria-hidden="true">
          <span className="timeline__fill" data-scrub="y" />
        </span>
        <ol className="timeline__list">
          {experiences.map((exp, i) => {
            const Icon = exp.icon
            const side = i % 2 === 0 ? 'left' : 'right'
            const titleId = `exp-${exp.id}`
            return (
              <li key={exp.id} className={`timeline__item timeline__item--${side}`}>
                <span className="timeline__node" aria-hidden="true">
                  <Icon size={16} />
                </span>
                <article className="card exp-card" aria-labelledby={titleId} data-anim={side}>
                  <header className="exp-card__head">
                    <p className="chip">{l(exp.area)}</p>
                    <h3 id={titleId} className="exp-card__title">
                      {exp.place}
                    </h3>
                    <p className="exp-card__location">
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </p>
                  </header>
                  <h4 className="exp-card__label">{t('experience.activitiesLabel')}</h4>
                  <ul className="exp-card__list">
                    {exp.activities.map((activity) => (
                      <li key={activity.en}>{l(activity)}</li>
                    ))}
                  </ul>
                  <ul className="tags tags--sm">
                    {exp.tags.map((tag) => (
                      <li key={tag.en} className="tag">
                        {l(tag)}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}
        </ol>
      </div>

      <aside className="card takeaway" aria-labelledby="takeaway-title" data-anim="up">
        <span className="icon-badge icon-badge--violet" aria-hidden="true">
          <Lightbulb size={18} />
        </span>
        <div>
          <h3 id="takeaway-title" className="takeaway__title">
            {t('experience.takeawayTitle')}
          </h3>
          <p className="takeaway__text">{t('experience.takeaway')}</p>
        </div>
      </aside>
    </Section>
  )
}
