import { useCallback, useEffect, useMemo, useState } from 'react'
import pt from '../locales/pt.js'
import en from '../locales/en.js'
import { I18nContext, detectInitialLang, persistLang } from './context.js'

const DICTS = { pt, en }

function setMeta(selector, value) {
  const el = document.head.querySelector(selector)
  if (el && value) el.setAttribute('content', value)
}

/** Keeps <html lang>, <title> and descriptions in sync with the chosen language. */
function applyDocumentMeta(lang, meta) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  if (!meta) return
  document.title = meta.title
  setMeta('meta[name="description"]', meta.description)
  setMeta('meta[property="og:title"]', meta.title)
  setMeta('meta[property="og:description"]', meta.description)
  setMeta('meta[name="twitter:title"]', meta.title)
  setMeta('meta[name="twitter:description"]', meta.description)
  setMeta('meta[property="og:locale"]', lang === 'pt' ? 'pt_BR' : 'en_US')
  setMeta('meta[property="og:locale:alternate"]', lang === 'pt' ? 'en_US' : 'pt_BR')
}

export default function LanguageProvider({ page = 'home', children }) {
  const [lang, setLangState] = useState(detectInitialLang)
  const dict = DICTS[lang]

  useEffect(() => {
    persistLang(lang)
    applyDocumentMeta(lang, dict.meta[page])
  }, [lang, dict, page])

  const setLang = useCallback((next) => {
    if (DICTS[next]) setLangState(next)
  }, [])

  const t = useCallback(
    (key) => {
      const value = key.split('.').reduce((node, part) => (node == null ? node : node[part]), dict)
      if (value === undefined && import.meta.env.DEV) console.warn(`[i18n] missing key "${key}" (${lang})`)
      return value ?? key
    },
    [dict, lang],
  )

  const l = useCallback(
    (field) => (field && typeof field === 'object' && !Array.isArray(field) && 'en' in field ? field[lang] : field),
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t, l }), [lang, setLang, t, l])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
