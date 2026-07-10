import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const tf = t.footer
  const tl = tf.links

  return (
    <footer className="px-5 md:px-10 pt-4 pb-2" style={{ background: '#080F1A' }}>
      <div className="max-w-content mx-auto">

        {/* Main row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-3 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white text-sm leading-tight">
                RESTORA <span className="text-primary-light">HOME BUYERS</span>
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <a href="mailto:info@restorahomebuyers.com"
                className="w-7 h-7 rounded-md bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                title="Email"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://wa.me/16179095756"
                className="w-7 h-7 rounded-md bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-heading font-semibold text-white/50 text-[10px] uppercase tracking-widest mb-1.5">
              {tf.nav}
            </h5>
            <ul className="space-y-1">
              {[
                ['#', tl.home],
                ['#benefits', tl.benefits],
                ['#situations', tl.situations || 'Situations'],
                ['#process', tl.process],
                ['#testimonials', tl.testimonials],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 text-xs hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-heading font-semibold text-white/50 text-[10px] uppercase tracking-widest mb-1.5">
              {tf.legal}
            </h5>
            <ul className="space-y-1">
              {[
                ['#privacy', tl.privacy],
                ['#terms', tl.terms],
                ['#disclaimer', tl.disclaimer],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 text-xs hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-semibold text-white/50 text-[10px] uppercase tracking-widest mb-1.5">
              {tf.contact}
            </h5>
            <ul className="space-y-1">
              <li>
                <a href="mailto:info@restorahomebuyers.com"
                  className="text-white/50 text-xs hover:text-white transition-colors break-all">
                  info@restorahomebuyers.com
                </a>
              </li>
              <li>
                <a href="tel:+16179095756"
                  className="text-white font-heading font-semibold text-sm hover:text-primary-light transition-colors">
                  +1 617 909 5756
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-1">
          <p className="text-white/30 text-[11px]">{tf.copyright}</p>
          <p className="text-white/20 text-[11px]">Florida Real Estate Investors · Licensed &amp; Insured</p>
        </div>

      </div>
    </footer>
  )
}
