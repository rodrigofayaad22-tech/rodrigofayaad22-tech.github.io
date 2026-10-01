// All internal URLs go through BASE so the site works both at
// https://<user>.github.io/ and https://<user>.github.io/<repo>/.
export const BASE = import.meta.env.BASE_URL

export const HOME_URL = BASE
export const CASE_STUDY_URL = `${BASE}case-study/viver-divino/`

/** Link to a section of the home page. On the home page itself a plain hash is enough. */
export const sectionHref = (id, onHome) => (onHome ? `#${id}` : `${BASE}#${id}`)

/** URL of a file placed in /public. */
export const publicUrl = (file) => `${BASE}${file.replace(/^\/+/, '')}`
