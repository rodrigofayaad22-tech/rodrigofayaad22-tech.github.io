import { createContext, useContext } from 'react'

export const LANGS = ['pt', 'en']
export const STORAGE_KEY = 'rg-portfolio-lang'

export const I18nContext = createContext(null)

/**
 * const { lang, setLang, t, l } = useI18n()
 * t('nav.about')            -> string / array / object from the active locale
 * l({ pt: '…', en: '…' })   -> picks the active language from a bilingual data field
 */
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <LanguageProvider>')
  return ctx
}

export function detectInitialLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    /* storage unavailable (private mode, blocked cookies) */
  }
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || ''
  return /^pt/i.test(nav) ? 'pt' : 'en'
}

export function persistLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
}
