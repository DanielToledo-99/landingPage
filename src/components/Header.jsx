import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#benefits', label: t.nav.benefits },
    { href: '#situations', label: t.nav.situations },
    { href: '#process', label: t.nav.process },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-content mx-auto px-5 md:px-10 h-18 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-base tracking-tight leading-tight text-text-main">
            RESTORA<br />
            <span className="font-extrabold text-primary">HOME BUYERS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-body font-medium text-sm text-text-muted hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-light text-xs font-heading font-semibold uppercase tracking-wider text-text-muted hover:border-primary hover:text-primary transition-all duration-200"
          >
            <span>{lang === 'en' ? '🇺🇸' : '🇪🇸'}</span>
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          {/* CTA Phone */}
          <a
            href="tel:+16179095756"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full font-heading font-semibold text-xs uppercase tracking-wider hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {t.nav.callNow}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-text-main"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              {menuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 font-body font-medium text-sm py-2 hover:text-primary-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="tel:+16179095756"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full font-heading font-semibold text-xs uppercase tracking-wider"
            >
              📞 {t.nav.callNow}
            </a>
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-3 py-1.5 border border-white/30 text-white/80 rounded-full text-xs font-heading font-semibold uppercase tracking-wider"
            >
              {lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
