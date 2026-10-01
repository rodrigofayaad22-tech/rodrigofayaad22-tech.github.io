/**
 * Home page section. On desktop a vertical "rail" runs down the left column and is drawn
 * as the section scrolls by — together the rails connect the whole page.
 */
export default function Section({ id, className = '', labelledBy, children }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={labelledBy} data-scrub-scope>
      <div className="container section__inner">
        <div className="rail" aria-hidden="true">
          <span className="rail__track" />
          <span className="rail__fill" data-scrub="y" />
          <span className="rail__node" data-node />
        </div>
        {children}
      </div>
    </section>
  )
}
