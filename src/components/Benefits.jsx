import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const icons = [
  // No Obligation
  <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>,
  // No Fees
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
  </svg>,
  // Close Fast
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 16.26 22 13.27 22 10c0-5.18-3.94-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.27 2.09 6.26 5.22 7.78L6 21l5 3v-5l-2.28 2.28C6.81 20 5 17.21 5 14c0-4.08 3.05-7.44 7-7.93V2.05z" />
  </svg>,
  // Google rating
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>,
]

export default function Benefits() {
  const { t } = useLang()
  const tb = t.benefits
  const ref = useScrollReveal()

  return (
    <section id="benefits" className="py-24 bg-surface px-5 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {tb.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-main">
            {tb.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
          {tb.items.map((item, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} group bg-white rounded-2xl p-8 border border-outline-light/50 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-low flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icons[i]}
              </div>
              <h3 className="font-heading font-bold text-lg text-text-main mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
