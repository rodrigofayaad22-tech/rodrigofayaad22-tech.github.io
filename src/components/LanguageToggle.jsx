import { useI18n } from '../i18n/context.js'

const OPTIONS = [
  { code: 'pt', label: 'PT', name: 'Português (PT)', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', name: 'English (EN)', htmlLang: 'en' },
]

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label={t('common.language')}>
      {OPTIONS.map((option, i) => (
        <span key={option.code} className="lang-toggle__item">
          {i > 0 ? (
            <span className="lang-toggle__sep" aria-hidden="true">
              |
            </span>
          ) : null}
          <button
            type="button"
            className="lang-toggle__btn"
            lang={option.htmlLang}
            aria-pressed={lang === option.code}
            aria-label={option.name}
            title={t('common.switchTo')[option.code]}
            onClick={() => setLang(option.code)}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  )
}
