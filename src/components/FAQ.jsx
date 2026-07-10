import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`border-l-4 rounded-r-xl bg-white shadow-sm transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-primary' : 'border-transparent hover:border-primary/30'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 outline-none"
      >
        <span className="font-heading font-semibold text-text-main text-sm sm:text-base pr-2">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary text-white rotate-45' : 'bg-surface-low text-text-muted'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const tf = t.faq
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useScrollReveal()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 bg-surface px-5 md:px-10">
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="reveal text-center mb-14">
          <span className="inline-block font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {tf.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-main">
            {tf.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {tf.items.map((item, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
