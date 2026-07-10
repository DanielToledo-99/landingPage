import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TrustSection() {
  const { t } = useLang()
  const tt = t.trust
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 bg-surface-high px-5 md:px-10">
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: trust points */}
          <div className="reveal">
            <span className="inline-block font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {tt.badge}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-main mb-10">
              {tt.title}
            </h2>

            <ul className="space-y-7">
              {tt.points.map((point, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-main text-base mb-1">
                      {point.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-10 p-5 bg-white rounded-2xl border border-outline-light/50 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex-1">
                <p className="font-heading font-semibold text-text-main text-sm mb-0.5">
                  Talk to a real person
                </p>
                <a
                  href="mailto:info@restorahomebuyers.com"
                  className="text-primary text-sm hover:underline"
                >
                  info@restorahomebuyers.com
                </a>
              </div>
              <a
                href="tel:+16179095756"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-heading font-semibold text-sm hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +1 617 909 5756
              </a>
            </div>
          </div>

          {/* Right: image + testimonial */}
          <div className="reveal delay-200 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Happy homeowners"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Testimonial overlay card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 max-w-sm bg-navy text-white p-6 rounded-2xl shadow-2xl border border-primary/25">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#4ae183">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed italic mb-4">
                {tt.testimonial.text}
              </p>
              <div>
                <p className="font-heading font-bold text-primary-bright text-sm">
                  — {tt.testimonial.author}
                </p>
                <p className="text-white/50 text-xs">{tt.testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
