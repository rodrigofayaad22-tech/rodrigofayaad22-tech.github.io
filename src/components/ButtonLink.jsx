import { useI18n } from '../i18n/context.js'

/**
 * Link styled as a button. `external` opens in a new tab with a screen-reader hint.
 * variant: primary | secondary | ghost ; size: md | sm
 */
export default function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  icon: Icon,
  iconEnd: IconEnd,
  className = '',
  children,
  ...rest
}) {
  const { t } = useI18n()
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={`btn btn--${variant} btn--${size} ${className}`} {...externalProps} {...rest}>
      {Icon ? <Icon className="btn__icon" size={size === 'sm' ? 16 : 18} aria-hidden="true" /> : null}
      <span className="btn__label">{children}</span>
      {IconEnd ? <IconEnd className="btn__icon btn__icon--end" size={size === 'sm' ? 16 : 18} aria-hidden="true" /> : null}
      {external ? <span className="sr-only"> {t('common.newTab')}</span> : null}
    </a>
  )
}
