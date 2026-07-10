import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useLang } from '../context/LanguageContext'
import { supabase } from '../lib/supabase'

const RECAPTCHA_SITE_KEY = '6LdR3kwtAAAAABwOX72-HbUeYZxXSFvGbaOArOPK'

export default function LeadForm({ darkMode = true }) {
  const { lang, t } = useLang()
  const tf = t.form

  const [fields, setFields] = useState({ name: '', email: '', phone: '', address: '' })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})
  const recaptchaRef = useRef(null)

  const set = (key) => (e) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: null }))
  }

  const validate = () => {
    const errs = {}
    // name: optional — no validation
    if (fields.email.trim() && !/\S+@\S+\.\S+/.test(fields.email)) errs.email = tf.emailInvalid
    if (!fields.phone.trim()) errs.phone = tf.phoneRequired
    if (!fields.address.trim()) errs.address = tf.addressRequired
    if (!captchaToken) errs.captcha = tf.captchaRequired
    if (!termsAccepted) errs.terms = tf.termsRequired
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')
    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert([
          { ...fields, language: lang },
        ])
        if (error) throw error
      }
      setStatus('success')
      setFields({ name: '', email: '', phone: '', address: '' })
      setTermsAccepted(false)
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch {
      setStatus('error')
      recaptchaRef.current?.reset()
      setCaptchaToken(null)
    }
  }

  const baseInput = darkMode
    ? 'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-primary-bright focus:border-transparent transition-all duration-200 text-sm'
    : 'w-full bg-surface border border-outline-light rounded-lg px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm'

  const baseLabel = darkMode
    ? 'block text-white/75 text-xs font-heading font-semibold uppercase tracking-wider mb-1.5'
    : 'block text-text-muted text-xs font-heading font-semibold uppercase tracking-wider mb-1.5'

  const errClass = 'text-red-400 text-xs mt-1'

  if (status === 'success') {
    return (
      <div className={`p-8 rounded-2xl text-center ${darkMode ? 'glass-card' : 'bg-white shadow-xl'}`}>
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <h3 className={`font-heading font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-text-main'}`}>
          {tf.success}
        </h3>
        <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-text-muted'}`}>
          info@restorahomebuyers.com
        </p>
      </div>
    )
  }

  const optionalTag = (
    <span className={`ml-1.5 text-[10px] font-normal normal-case tracking-normal ${darkMode ? 'text-white/35' : 'text-outline'}`}>
      ({tf.optional})
    </span>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Address — required */}
      <div className="mb-4">
        <label className={baseLabel}>
          {tf.address}
          <span className={`ml-1 text-red-400`}>*</span>
        </label>
        <input
          type="text"
          value={fields.address}
          onChange={set('address')}
          placeholder={tf.addressPlaceholder}
          className={`${baseInput} ${errors.address ? 'border-red-400' : ''}`}
        />
        {errors.address && <p className={errClass}>{tf.addressRequired}</p>}
      </div>

      {/* Name (optional) + Phone (required) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={baseLabel}>
            {tf.name}{optionalTag}
          </label>
          <input
            type="text"
            value={fields.name}
            onChange={set('name')}
            placeholder={tf.namePlaceholder}
            className={baseInput}
          />
        </div>
        <div>
          <label className={baseLabel}>
            {tf.phone}
            <span className={`ml-1 text-red-400`}>*</span>
          </label>
          <input
            type="tel"
            value={fields.phone}
            onChange={set('phone')}
            placeholder={tf.phonePlaceholder}
            className={`${baseInput} ${errors.phone ? 'border-red-400' : ''}`}
          />
          {errors.phone && <p className={errClass}>{tf.phoneRequired}</p>}
        </div>
      </div>

      {/* Email — optional */}
      <div className="mb-5">
        <label className={baseLabel}>
          {tf.email}{optionalTag}
        </label>
        <input
          type="email"
          value={fields.email}
          onChange={set('email')}
          placeholder={tf.emailPlaceholder}
          className={`${baseInput} ${errors.email ? 'border-red-400' : ''}`}
        />
        {errors.email && <p className={errClass}>{tf.emailInvalid}</p>}
      </div>

      {/* reCAPTCHA */}
      <div className="mb-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(token) => {
            setCaptchaToken(token)
            if (errors.captcha) setErrors((e) => ({ ...e, captcha: null }))
          }}
          onExpired={() => setCaptchaToken(null)}
          theme={darkMode ? 'dark' : 'light'}
        />
        {errors.captcha && <p className={errClass}>{tf.captchaRequired}</p>}
      </div>

      {/* Terms & Conditions — required */}
      <div
        className={`mb-5 rounded-lg px-3 py-2.5 border transition-all duration-200 ${
          errors.terms
            ? 'border-red-400 bg-red-500/10'
            : darkMode
            ? 'border-transparent'
            : 'border-transparent'
        }`}
      >
        <label className="flex items-start gap-3 cursor-pointer">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked)
                if (errors.terms) setErrors((prev) => ({ ...prev, terms: null }))
              }}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                termsAccepted
                  ? 'bg-primary border-primary'
                  : errors.terms
                  ? 'border-red-400 bg-red-400/10'
                  : darkMode
                  ? 'border-white/40 bg-transparent'
                  : 'border-outline bg-white'
              }`}
            >
              {termsAccepted && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
          </div>
          <span className={`text-xs leading-relaxed ${darkMode ? 'text-white/65' : 'text-text-muted'}`}>
            {tf.termsPrefix}{' '}
            <a href="#terms" className="underline hover:text-primary-light transition-colors font-semibold">
              {tf.termsLink}
            </a>{' '}
            {tf.termsAnd}{' '}
            <a href="#privacy" className="underline hover:text-primary-light transition-colors font-semibold">
              {tf.privacyLink}
            </a>
            <span className="text-red-400 ml-1">*</span>
          </span>
        </label>
        {errors.terms && (
          <p className="flex items-center gap-1.5 text-red-400 text-xs mt-2 ml-8 font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            {tf.termsRequired}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-heading font-bold uppercase tracking-widest rounded-xl text-sm shadow-lg hover:shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? tf.submitting : tf.submit}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center mt-3">{tf.error}</p>
      )}

      <p className={`text-center text-[11px] mt-3 uppercase tracking-widest ${darkMode ? 'text-white/35' : 'text-outline'}`}>
        🔒 {tf.confidential}
      </p>
    </form>
  )
}
