import { useLang } from '../context/LanguageContext'
import LeadForm from './LeadForm'

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

export default function Hero() {
  const { t } = useLang()
  const th = t.hero
  const tf = t.form

  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15,31,61,0.97) 0%, rgba(26,58,82,0.88) 50%, rgba(0,109,55,0.75) 100%), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-bright/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-5 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: copy */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary-bright rounded-full animate-pulse" />
              <span className="font-heading font-semibold text-xs uppercase tracking-widest text-primary-bright">
                {th.badge}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-tight mb-5 drop-shadow-lg">
              {th.title}
              <br />
              <span className="text-primary-bright">{th.titleAccent}</span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              {th.subtitle}
            </p>

            <ul className="space-y-3 mb-10">
              {th.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm sm:text-base">
                  <span className="text-primary-bright">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-white/70 text-xs font-medium">Google 5.0</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                <span className="text-primary-bright text-sm">✓</span>
                <span className="text-white/70 text-xs font-medium">BBB A+</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                <span className="text-primary-bright text-sm">🏠</span>
                <span className="text-white/70 text-xs font-medium">500+ Homes</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div id="form" className="glass-card rounded-2xl p-7 sm:p-9 shadow-2xl">
            <LeadForm darkMode />
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs text-center leading-relaxed">{tf.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full fill-surface">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
