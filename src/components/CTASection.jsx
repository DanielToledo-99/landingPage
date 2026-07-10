import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function CTASection() {
  const { t } = useLang()
  const tc = t.cta
  const ref = useScrollReveal()

  return (
    <section
      className="py-20 px-5 md:px-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #005228 0%, #006d37 60%, #008a45 100%)' }}
    >
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-content mx-auto relative z-10 text-center" ref={ref}>

        <span className="reveal inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 font-heading font-semibold text-xs uppercase tracking-widest text-white mb-5">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Get Started Today
        </span>

        <h2 className="reveal delay-100 font-heading font-bold text-3xl sm:text-4xl xl:text-5xl text-white mb-3 max-w-2xl mx-auto leading-tight">
          {tc.title}
        </h2>
        <p className="reveal delay-200 text-white/65 text-sm max-w-md mx-auto mb-12 leading-relaxed">
          {tc.subtitle}
        </p>

        {/* Stats */}
        <div className="reveal delay-300 grid grid-cols-3 max-w-md mx-auto mb-12 divide-x divide-white/20">
          {tc.stats.map((stat, i) => (
            <div key={i} className="px-6 first:pl-0 last:pr-0">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/55 text-[11px] uppercase tracking-widest leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Button — invertido: blanco con texto verde */}
        <a
          href="#form"
          className="reveal delay-400 inline-flex items-center gap-2 px-9 py-4 bg-white text-primary font-heading font-bold uppercase tracking-widest text-sm rounded-full shadow-lg hover:bg-surface hover:-translate-y-0.5 transition-all duration-200"
        >
          {tc.button}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>

        <p className="text-white/40 text-xs mt-5">
          info@restorahomebuyers.com · +1 617 909 5756
        </p>
      </div>
    </section>
  )
}
