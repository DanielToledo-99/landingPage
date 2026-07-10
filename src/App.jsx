import { LanguageProvider } from './context/LanguageContext'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Situations from './components/Situations'
import HowItWorks from './components/HowItWorks'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Situations />
        <HowItWorks />
        <TrustSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}
