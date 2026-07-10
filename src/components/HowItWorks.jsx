import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stepIcons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>,
]

const bgColors = ['bg-primary', 'bg-navy-light', 'bg-primary-dark']
const lightColors = ['bg-primary/8', 'bg-navy-light/8', 'bg-primary-dark/8']
const textColors = ['text-primary', 'text-navy-light', 'text-primary-dark']
const borderColors = ['border-primary/20', 'border-navy-light/20', 'border-primary-dark/20']

export default function HowItWorks() {
  const { t } = useLang()
  const tp = t.process
  const ref = useScrollReveal()

  return (
    <section id="process" className="py-24 bg-surface px-5 md:px-10 overflow-hidden">
      <div className="max-w-content mx-auto" ref={ref}>

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {tp.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-main mb-3">
            {tp.title}
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
            {tp.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tp.steps.map((step, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} relative group`}>

              {/* Card */}
              <div className={`relative overflow-hidden rounded-2xl border ${borderColors[i]} bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>

                {/* Giant background number */}
                <span
                  className="absolute -bottom-4 -right-2 font-heading font-extrabold text-[120px] leading-none select-none pointer-events-none"
                  style={{ color: i === 1 ? 'rgba(67,97,123,0.06)' : 'rgba(0,109,55,0.07)' }}
                >
                  {i + 1}
                </span>

                {/* Top accent bar */}
                <div className={`h-1.5 w-full ${bgColors[i]} rounded-t-2xl`} />

                <div className="p-7 relative z-10">
                  {/* Icon + step badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${lightColors[i]} flex items-center justify-center ${textColors[i]}`}>
                      {stepIcons[i]}
                    </div>
                    <span className={`font-heading font-extrabold text-4xl ${textColors[i]} opacity-30`}>
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-text-main mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Bottom connector arrow — only on 1 & 2 */}
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-outline-light shadow-md">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M14 7l5 5-5 5"
                          stroke="#006d37" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile arrow */}
              {i < 2 && (
                <div className="flex md:hidden justify-center py-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5"
                          stroke="#006d37" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="w-px h-4 bg-primary/30" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold uppercase tracking-wider text-sm rounded-full shadow-md hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
