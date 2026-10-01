import { ArrowRight, ArrowUpRight, Info, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { featuredCase, projects } from '../data/projects.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ButtonLink from '../components/ButtonLink.jsx'
import { GithubIcon } from '../components/BrandIcons.jsx'

function FeaturedCase() {
  const { t, l } = useI18n()
  const { image } = featuredCase
  return (
    <article className="case-card" aria-labelledby="case-card-title">
      <a className="case-card__media" href={featuredCase.url} tabIndex={-1} aria-hidden="true" data-anim="clip">
        <div className="case-card__frame">
          <div className="case-card__bar" aria-hidden="true">
            <span className="case-card__bar-dot" />
            <span>BPMN · AS-IS → TO-BE</span>
          </div>
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 1024px) 640px, 100vw"
            width={image.width}
            height={image.height}
            alt={l(image.alt)}
            loading="lazy"
            decoding="async"
          />
        </div>
      </a>

      <div className="case-card__body" data-anim-stagger>
        <p className="chip chip--accent" data-anim-item>
          {t('projects.caseLabel')}
        </p>
        <h3 id="case-card-title" className="case-card__title" data-anim-item>
          {l(featuredCase.title)}
        </h3>
        <p className="case-card__subtitle" data-anim-item>
          {l(featuredCase.subtitle)}
        </p>
        <ul className="case-card__meta" data-anim-item>
          {featuredCase.meta.map((item) => (
            <li key={item.en}>{l(item)}</li>
          ))}
        </ul>
        <div data-anim-item>
          <a href={featuredCase.url} className="btn btn--primary btn--md case-card__cta">
            <span className="btn__label">{t('common.readCase')}</span>
            <ArrowRight className="btn__icon btn__icon--end" size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

function ProjectRow({ project, reverse }) {
  const { t, l } = useI18n()
  const titleId = `project-${project.id}-title`
  const host = new URL(project.liveUrl).hostname
  return (
    <article className={`project ${reverse ? 'project--reverse' : ''}`} aria-labelledby={titleId}>
      <a
        className="project__media"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        data-anim={reverse ? 'right' : 'left'}
      >
        <div className="browser">
          <div className="browser__bar">
            <span className="browser__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="browser__url">{host}</span>
          </div>
          <div className="browser__viewport">
          <img
            src={project.image.src}
            srcSet={project.image.srcSet}
            sizes="(min-width: 1024px) 620px, 100vw"
            width={project.image.width}
            height={project.image.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
          </div>
        </div>
      </a>

      <div className="project__body" data-anim={reverse ? 'left' : 'right'}>
        <p className="project__category">{l(project.category)}</p>
        <h3 id={titleId} className="project__title">
          {l(project.title)}
        </h3>
        <p className="project__desc">{l(project.description)}</p>
        {project.highlight ? (
          <p className="project__highlight">
            <Sparkles size={15} aria-hidden="true" />
            {l(project.highlight)}
          </p>
        ) : null}
        <ul className="tags" aria-label={t('projects.techLabel')}>
          {project.technologies.map((tech) => (
            <li key={tech} className={`tag ${tech === 'AI-assisted development' ? 'tag--accent' : ''}`}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="project__actions">
          <ButtonLink href={project.liveUrl} external size="sm" iconEnd={ArrowUpRight}>
            {t('common.liveDemo')}
          </ButtonLink>
          {project.githubUrl ? (
            <ButtonLink href={project.githubUrl} external size="sm" variant="secondary" icon={GithubIcon}>
              {t('common.code')}
            </ButtonLink>
          ) : null}
          {project.hosting ? <span className="project__hosting">{project.hosting}</span> : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useI18n()
  const visible = projects.filter((project) => project.featured)

  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeader
        index="03"
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        titleId="projects-title"
        lead={t('projects.lead')}
      />

      <FeaturedCase />

      <h3 className="subhead" data-anim="up">
        <span className="subhead__line" aria-hidden="true" />
        {t('projects.otherTitle')}
      </h3>

      <div className="project-list">
        {visible.map((project, i) => (
          <ProjectRow key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <aside className="note" data-anim="up" aria-labelledby="process-note-title">
        <Info size={18} aria-hidden="true" className="note__icon" />
        <div>
          <h3 id="process-note-title" className="note__title">
            {t('projects.processNoteTitle')}
          </h3>
          <p className="note__text">{t('projects.processNote')}</p>
        </div>
      </aside>
    </Section>
  )
}
