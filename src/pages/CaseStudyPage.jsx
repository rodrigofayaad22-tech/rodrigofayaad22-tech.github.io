import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CircleDashed, Info, Maximize2, MessageSquareQuote, TriangleAlert } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { caseStudy as cs } from '../data/caseStudy.js'
import { HOME_URL, sectionHref } from '../lib/paths.js'
import useActiveSection from '../hooks/useActiveSection.js'
import useScrollAnimations from '../hooks/useScrollAnimations.js'
import ButtonLink from '../components/ButtonLink.jsx'
import ImageViewer from '../components/ImageViewer.jsx'
import NetworkLines from '../components/NetworkLines.jsx'
import Chapter from '../sections/case/Chapter.jsx'
import ChapterNav from '../sections/case/ChapterNav.jsx'
import ProcessFlow from '../sections/case/ProcessFlow.jsx'
import Comparison from '../sections/case/Comparison.jsx'
import BpmnShowcase from '../sections/case/BpmnShowcase.jsx'

const CHAPTER_IDS = cs.chapters.map((c) => c.id)
const num = (id) => String(CHAPTER_IDS.indexOf(id) + 1).padStart(2, '0')

function CaseHero({ onOpen }) {
  const { t, l } = useI18n()
  const main = cs.diagrams[0]
  return (
    <header className="case-hero">
      <div className="case-hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <NetworkLines draw={false} className="case-hero__network" />
      </div>
      <div className="container">
        <a href={sectionHref('projects', false)} className="back-link" data-anim="up">
          <ArrowLeft size={16} aria-hidden="true" />
          {t('case.backToProjects')}
        </a>

        <div className="case-hero__grid">
          <div className="case-hero__text">
            <p className="chip chip--accent" data-anim="up">
              {t('case.kicker')}
            </p>
            <h1 className="case-hero__title">
              <span className="mask" data-anim="mask">
                <span className="mask__inner">{l(cs.title)}</span>
              </span>
            </h1>
            <p className="case-hero__subtitle" data-anim="up" data-anim-delay="0.1">
              {l(cs.subtitle)}
            </p>
            <div className="scope-note" role="note" data-anim="up" data-anim-delay="0.2">
              <Info size={18} aria-hidden="true" className="scope-note__icon" />
              <div>
                <p className="scope-note__title">{t('case.scopeTitle')}</p>
                <p className="scope-note__text">{l(cs.scopeNote)}</p>
              </div>
            </div>
          </div>

          <button type="button" className="case-hero__visual" onClick={() => onOpen(0)} data-anim="scale">
            <img
              src={main.preview}
              srcSet={`${main.preview} 900w, ${main.src} 1536w`}
              sizes="(min-width: 1024px) 560px, 100vw"
              width={main.width}
              height={main.height}
              alt={l(main.alt)}
              fetchPriority="high"
              decoding="async"
            />
            <span className="case-hero__visual-cta">
              <Maximize2 size={15} aria-hidden="true" />
              {t('case.viewFullProcess')}
            </span>
          </button>
        </div>

        <dl className="case-meta" data-anim-stagger>
          {cs.meta.map((item) => (
            <div className="case-meta__item" key={item.label.en} data-anim-item>
              <dt>{l(item.label)}</dt>
              <dd>{l(item.value)}</dd>
            </div>
          ))}
        </dl>

        <ul className="case-stats" data-anim-stagger>
          {cs.stats.map((stat) => (
            <li className="case-stat" key={stat.label.en} data-anim-item>
              <span className="case-stat__value">{stat.value}</span>
              <span className="case-stat__label">{l(stat.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default function CaseStudyPage() {
  const { t, l } = useI18n()
  const scopeRef = useRef(null)
  const bodyRef = useRef(null)
  const [viewerIndex, setViewerIndex] = useState(null)
  const active = useActiveSection(CHAPTER_IDS, '-35% 0px -60% 0px')
  useScrollAnimations(scopeRef)

  const title = (id) => l(cs.chapters.find((c) => c.id === id).title)

  return (
    <div ref={scopeRef} className="case-page">
      <CaseHero onOpen={setViewerIndex} />

      <div className="container case-layout">
        <aside className="case-layout__aside">
          <ChapterNav chapters={cs.chapters} active={active} bodyRef={bodyRef} />
        </aside>

        <article className="case-layout__body" ref={bodyRef}>
          {/* 01 — Context */}
          <Chapter id="context" number={num('context')} title={title('context')}>
            <div className="split">
              <div className="prose">
                {cs.context.paragraphs.map((p) => (
                  <p key={p.en} data-anim="up">
                    {l(p)}
                  </p>
                ))}
              </div>
              <ul className="stack" data-anim-stagger>
                {cs.context.fronts.map((front) => {
                  const Icon = front.icon
                  return (
                    <li className="card mini-card" key={front.title.en} data-anim-item>
                      <span className="icon-badge" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <h3 className="mini-card__title">{l(front.title)}</h3>
                      <p className="mini-card__text">{l(front.text)}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <p className="callout" data-anim="up">
              <Info size={18} aria-hidden="true" />
              <span>{l(cs.context.note)}</span>
            </p>
          </Chapter>

          {/* 02 — Problem */}
          <Chapter id="problem" number={num('problem')} title={title('problem')}>
            <div className="prose prose--wide">
              {cs.problem.paragraphs.map((p) => (
                <p key={p.en} data-anim="up">
                  {l(p)}
                </p>
              ))}
            </div>
            <ul className="pain-grid" data-anim-stagger>
              {cs.problem.pains.map((pain) => {
                const Icon = pain.icon
                return (
                  <li className="card pain-card" key={pain.title.en} data-anim-item>
                    <span className="icon-badge icon-badge--warn" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <h3 className="pain-card__title">{l(pain.title)}</h3>
                    <p className="pain-card__text">{l(pain.text)}</p>
                  </li>
                )
              })}
            </ul>
            <blockquote className="challenge" data-anim="up">
              <MessageSquareQuote size={22} aria-hidden="true" />
              <p>{l(cs.problem.challenge)}</p>
            </blockquote>
          </Chapter>

          {/* 03 — Discovery / elicitation */}
          <Chapter id="discovery" number={num('discovery')} title={title('discovery')}>
            <p className="prose prose--wide" data-anim="up">
              {l(cs.discovery.intro)}
            </p>
            <ul className="technique-grid" data-anim-stagger>
              {cs.discovery.techniques.map((tech) => {
                const Icon = tech.icon
                const applied = tech.status === 'applied'
                return (
                  <li className={`card technique ${applied ? 'technique--applied' : 'technique--next'}`} key={tech.title.en} data-anim-item>
                    <div className="technique__head">
                      <span className="icon-badge" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <span className={`status-chip ${applied ? 'status-chip--done' : 'status-chip--next'}`}>
                        {applied ? t('case.applied') : t('case.nextValidation')}
                      </span>
                    </div>
                    <h3 className="technique__title">{l(tech.title)}</h3>
                    <p className="technique__text">{l(tech.text)}</p>
                    {tech.items ? (
                      <ul className="checklist">
                        {tech.items.map((item) => (
                          <li key={item.en}>{l(item)}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
            <div className="questions" data-anim="up">
              <h3 className="questions__title">{l(cs.discovery.questionsTitle)}</h3>
              <ul className="questions__list">
                {cs.discovery.questions.map((q) => (
                  <li key={q.en}>{l(q)}</li>
                ))}
              </ul>
            </div>
          </Chapter>

          {/* 04 — AS-IS */}
          <Chapter id="as-is" number={num('as-is')} title={title('as-is')} className="chapter--process">
            <div className="process-grid">
              <div className="process-grid__side">
                <p className="prose" data-anim="up">
                  {l(cs.asIs.intro)}
                </p>
                <div className="side-box" data-anim="up">
                  <p className="side-box__title">{t('case.lanesTitle')}</p>
                  <ul className="lane-legend">
                    <li>
                      <span className="lane-chip lane-chip--family">{t('case.lane.family')}</span>
                    </li>
                    <li>
                      <span className="lane-chip lane-chip--association">{t('case.lane.association')}</span>
                    </li>
                  </ul>
                  <p className="side-box__title">{t('case.painsTitle')}</p>
                  <ul className="pain-summary">
                    {cs.problem.pains.map((pain) => (
                      <li key={pain.title.en}>
                        <TriangleAlert size={14} aria-hidden="true" />
                        {l(pain.title)}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="text-link text-link--button" onClick={() => setViewerIndex(1)}>
                    <Maximize2 size={15} aria-hidden="true" />
                    {t('case.viewAsIsModel')}
                  </button>
                </div>
              </div>
              <ProcessFlow steps={cs.asIs.steps} variant="as-is" label={title('as-is')} />
            </div>
          </Chapter>

          {/* 05 — TO-BE */}
          <Chapter id="to-be" number={num('to-be')} title={title('to-be')} className="chapter--process">
            <div className="process-grid">
              <div className="process-grid__side">
                <p className="prose" data-anim="up">
                  {l(cs.toBe.intro)}
                </p>
                <div className="side-box" data-anim="up">
                  <p className="side-box__title">{t('case.lanesTitle')}</p>
                  <ul className="lane-legend">
                    <li>
                      <span className="lane-chip lane-chip--family">{t('case.lane.family')}</span>
                    </li>
                    <li>
                      <span className="lane-chip lane-chip--association">{t('case.lane.association')}</span>
                    </li>
                    <li>
                      <span className="lane-chip lane-chip--system">{t('case.lane.system')}</span>
                    </li>
                  </ul>
                  <p className="side-box__title">{t('case.systemTitle')}</p>
                  <ul className="system-summary">
                    {t('case.systemItems').map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <ProcessFlow steps={cs.toBe.steps} variant="to-be" label={title('to-be')} />
            </div>

            <h3 className="block-title" data-anim="up">
              {t('case.compareTitle')}
            </h3>
            <Comparison rows={cs.toBe.comparison} />

            <BpmnShowcase diagrams={cs.diagrams} onOpen={setViewerIndex} />
          </Chapter>

          {/* 06 — Proposed capabilities */}
          <Chapter id="capabilities" number={num('capabilities')} title={title('capabilities')}>
            <p className="callout callout--accent" data-anim="up">
              <CircleDashed size={18} aria-hidden="true" />
              <span>{l(cs.capabilities.intro)}</span>
            </p>
            <ul className="capability-grid" data-anim-stagger>
              {cs.capabilities.groups.map((group) => {
                const Icon = group.icon
                return (
                  <li className="card capability" key={group.title.en} data-anim-item>
                    <div className="capability__head">
                      <span className="icon-badge" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <h3 className="capability__title">{l(group.title)}</h3>
                      <span className="status-chip status-chip--proposed">{t('case.proposedBadge')}</span>
                    </div>
                    <ul className="capability__list">
                      {group.items.map((item) => (
                        <li key={item.en}>{l(item)}</li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
            <div className="out-of-scope" data-anim="up">
              <h3 className="out-of-scope__title">{l(cs.capabilities.outOfScope.title)}</h3>
              <p>{l(cs.capabilities.outOfScope.text)}</p>
            </div>
          </Chapter>

          {/* 07 — My contribution */}
          <Chapter id="contribution" number={num('contribution')} title={title('contribution')}>
            <p className="callout callout--team" data-anim="up">
              <Info size={18} aria-hidden="true" />
              <span>{l(cs.contribution.teamNote)}</span>
            </p>
            <h3 className="block-title" data-anim="up">
              {t('case.teamTitle')}
            </h3>
            <ul className="team" data-anim-stagger>
              {cs.contribution.team.map((member) => (
                <li className={`team__member ${member.me ? 'is-me' : ''}`} key={member.name} data-anim-item>
                  <span className="team__avatar" aria-hidden="true">
                    {member.initials}
                  </span>
                  <span className="team__name">{member.name}</span>
                  {member.me ? <span className="chip chip--accent team__me">{t('case.me')}</span> : null}
                </li>
              ))}
            </ul>
            <h3 className="block-title" data-anim="up">
              {t('case.contributionTitle')}
            </h3>
            <ul className="contribution-grid" data-anim-stagger>
              {cs.contribution.items.map((item) => {
                const Icon = item.icon
                return (
                  <li className="contribution" key={item.text.en} data-anim-item>
                    <Icon size={18} aria-hidden="true" />
                    {l(item.text)}
                  </li>
                )
              })}
            </ul>
          </Chapter>

          {/* 08 — Skills applied */}
          <Chapter id="skills" number={num('skills')} title={title('skills')}>
            <ul className="tags tags--lg" data-anim-stagger>
              {cs.skills.map((skill) => (
                <li className="tag" key={skill.en} data-anim-item>
                  {l(skill)}
                </li>
              ))}
            </ul>
          </Chapter>

          {/* 09 — Learnings */}
          <Chapter id="learnings" number={num('learnings')} title={title('learnings')}>
            <ol className="learning-grid" data-anim-stagger>
              {cs.learnings.map((item, i) => (
                <li className="card learning" key={item.title.en} data-anim-item>
                  <span className="learning__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="learning__title">{l(item.title)}</h3>
                  <p className="learning__text">{l(item.text)}</p>
                </li>
              ))}
            </ol>
            <p className="callout callout--accent" data-anim="up">
              <ArrowRight size={18} aria-hidden="true" />
              <span>{l(cs.nextStep)}</span>
            </p>
          </Chapter>

          <section className="case-cta" aria-labelledby="case-cta-title" data-anim="up">
            <h2 id="case-cta-title" className="case-cta__title">
              {t('case.ctaTitle')}
            </h2>
            <p className="case-cta__text">{t('case.ctaText')}</p>
            <div className="case-cta__actions">
              <ButtonLink href={sectionHref('contact', false)} iconEnd={ArrowRight}>
                {t('case.ctaContact')}
              </ButtonLink>
              <ButtonLink href={`${HOME_URL}#projects`} variant="secondary" icon={ArrowLeft}>
                {t('case.ctaProjects')}
              </ButtonLink>
            </div>
          </section>
        </article>
      </div>

      {viewerIndex !== null ? (
        <ImageViewer
          images={cs.diagrams}
          index={viewerIndex}
          onIndexChange={setViewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      ) : null}
    </div>
  )
}
