/** Numbered section heading: "01 —— // about" + masked title reveal + optional lead. */
export default function SectionHeader({ index, eyebrow, title, titleId, lead, align = 'start', as: Tag = 'h2' }) {
  return (
    <header className={`section-head section-head--${align}`}>
      <p className="eyebrow" data-anim="up">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__line" aria-hidden="true" />
        <span className="eyebrow__label">
          <span aria-hidden="true">// </span>
          {eyebrow}
        </span>
      </p>
      <Tag id={titleId} className="section-title">
        <span className="mask" data-anim="mask">
          <span className="mask__inner">{title}</span>
        </span>
      </Tag>
      {lead ? (
        <p className="section-lead" data-anim="up" data-anim-delay="0.1">
          {lead}
        </p>
      ) : null}
    </header>
  )
}
