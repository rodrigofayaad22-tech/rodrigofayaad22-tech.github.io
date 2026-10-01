import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useI18n } from '../i18n/context.js'
import { emailHref, profile, whatsappHref } from '../data/profile.js'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ButtonLink from '../components/ButtonLink.jsx'
import NetworkLines from '../components/NetworkLines.jsx'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons.jsx'

const CHANNELS = [
  { id: 'email', icon: Mail, href: emailHref, value: profile.links.email, external: false },
  { id: 'linkedin', icon: LinkedinIcon, href: profile.links.linkedin, value: profile.links.linkedinHandle, external: true },
  { id: 'github', icon: GithubIcon, href: profile.links.github, value: profile.links.githubHandle, external: true },
  { id: 'whatsapp', icon: WhatsappIcon, href: whatsappHref, value: profile.links.whatsappDisplay, external: true },
]

function CopyEmailButton() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = emailHref
    }
  }

  return (
    <>
      <button type="button" className={`contact-card__copy ${copied ? 'is-copied' : ''}`} onClick={copy} aria-label={t('contact.copyEmail')} title={t('contact.copyEmail')}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span className="sr-only" role="status">
        {copied ? t('contact.copied') : ''}
      </span>
      <span className={`toast ${copied ? 'is-visible' : ''}`} aria-hidden="true">
        {t('contact.copied')}
      </span>
    </>
  )
}

export default function Contact() {
  const { t } = useI18n()

  return (
    <Section id="contact" className="contact" labelledBy="contact-title">
      <div className="contact__backdrop" aria-hidden="true">
        <NetworkLines draw={false} className="contact__network" />
      </div>

      <SectionHeader
        index="06"
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        titleId="contact-title"
        lead={t('contact.lead')}
      />

      <p className="availability" data-anim="up">
        <span className="status-dot" aria-hidden="true" />
        {t('contact.availability')}
      </p>

      <ul className="contact__grid" data-anim-stagger>
        {CHANNELS.map((channel) => {
          const Icon = channel.icon
          return (
            <li key={channel.id} className={`contact-card contact-card--${channel.id}`} data-anim-item>
              <span className="icon-badge" aria-hidden="true">
                <Icon size={20} />
              </span>
              <p className="contact-card__channel">{t(`contact.channels.${channel.id}`)}</p>
              <a
                className="contact-card__link"
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-card__value">{channel.value}</span>
                <span className="contact-card__action">
                  {t(`contact.actions.${channel.id}`)}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
                {channel.external ? <span className="sr-only"> {t('common.newTab')}</span> : null}
              </a>
              {channel.id === 'email' ? <CopyEmailButton /> : null}
            </li>
          )
        })}
      </ul>

      {profile.resume.available ? (
        <div className="contact__cv" data-anim="up">
          <ButtonLink href={profile.resume.url} download={profile.resume.fileName} variant="secondary" icon={Download}>
            {t('common.downloadCv')}
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  )
}
