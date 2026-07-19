import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { HowItWorks } from '../components/HowItWorks'
import { Pricing } from '../components/Pricing'
import { Testimonials } from '../components/Testimonials'
import { Faq } from '../components/Faq'
import { CtaBand } from '../components/CtaBand'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <CtaBand />
      <Contact />
    </>
  )
}
