import { Compass } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { interests, skillGroups } from '../data/skills.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import useSpotlight from '../hooks/useSpotlight.js'

export default function Skills() {
  const { t, l } = useI18n()
  const onPointerMove = useSpotlight()

  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeader
        index="02"
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        titleId="skills-title"
        lead={t('skills.lead')}
      />

      <div className="skills__grid" data-anim-stagger onPointerMove={onPointerMove}>
        {skillGroups.map((group) => {
          const Icon = group.icon
          const titleId = `skills-${group.id}`
          return (
            <article key={group.id} className={`card spot skill-card skill-card--${group.id}`} aria-labelledby={titleId} data-anim-item>
              <header className="skill-card__head">
                <span className="icon-badge" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <h3 id={titleId} className="skill-card__title">
                  {t(`skills.categories.${group.id}`)}
                </h3>
                <span className="skill-card__count" aria-hidden="true">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </header>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill" key={item.name}>
                    <div className="skill__top">
                      <span className="skill__name">{item.name}</span>
                      <span className="chip chip--stage">{l(item.stage)}</span>
                    </div>
                    <p className="skill__note">{l(item.note)}</p>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}

        <article className="card spot skill-card skill-card--interests" aria-labelledby="skills-interests" data-anim-item>
          <header className="skill-card__head">
            <span className="icon-badge icon-badge--violet" aria-hidden="true">
              <Compass size={18} />
            </span>
            <h3 id="skills-interests" className="skill-card__title">
              {t('skills.categories.interests')}
            </h3>
          </header>
          <p className="skill-card__lead">{t('skills.interestsLead')}</p>
          <ul className="interest-list">
            {interests.map((interest) => {
              const Icon = interest.icon
              return (
                <li className="interest" key={interest.label.en}>
                  <Icon size={16} aria-hidden="true" />
                  {l(interest.label)}
                </li>
              )
            })}
          </ul>
        </article>
      </div>

      <div className="learning-now" data-anim="up">
        <p className="learning-now__label">
          <span className="status-dot status-dot--blue" aria-hidden="true" />
          {t('skills.learningNow')}
        </p>
        <ul className="learning-now__list">
          {t('skills.learningNowItems').map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
