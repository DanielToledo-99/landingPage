import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const situationImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=700&q=80',
]

const situationIcons = [
  // Foreclosure
  <svg key="0" width="36" height="36" viewBox="0 0 24 24" fill="white">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Inherited
  <svg key="1" width="36" height="36" viewBox="0 0 24 24" fill="white">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>,
  // Repairs
  <svg key="2" width="36" height="36" viewBox="0 0 24 24" fill="white">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
  </svg>,
  // Relocating
  <svg key="3" width="36" height="36" viewBox="0 0 24 24" fill="white">
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
  </svg>,
]

export default function Situations() {
  const { t } = useLang()
  const ts = t.situations
  const ref = useScrollReveal()

  return (
    <section id="situations" className="py-24 bg-surface-low px-5 md:px-10">
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="reveal mb-14">
          <span className="inline-block font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
            We Buy
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-main">
            {ts.title}{' '}
            <span className="text-primary">{ts.titleAccent}</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            {ts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ts.items.map((item, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} group relative rounded-2xl overflow-hidden h-72 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${situationImages[i]}')` }}
              />

              {/* Default overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-400 delay-75">
                  {situationIcons[i]}
                </div>
                <h4 className="text-white font-heading font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-100">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-150">
                  {item.desc}
                </p>
              </div>

              {/* Default label */}
              <div className="absolute bottom-5 left-5 right-5 group-hover:opacity-0 transition-opacity duration-200">
                <h4 className="text-white font-heading font-bold text-lg drop-shadow-lg">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
