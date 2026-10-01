/** One numbered chapter of the case study (01 … 09). */
export default function Chapter({ id, number, title, className = '', children }) {
  const titleId = `${id}-title`
  return (
    <section id={id} className={`chapter ${className}`} aria-labelledby={titleId}>
      <header className="chapter__head">
        <span className="chapter__num" aria-hidden="true" data-anim="up">
          {number}
        </span>
        <h2 id={titleId} className="chapter__title">
          <span className="sr-only">{number}. </span>
          <span className="mask" data-anim="mask">
            <span className="mask__inner">{title}</span>
          </span>
        </h2>
      </header>
      {children}
    </section>
  )
}
