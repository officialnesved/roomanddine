import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { Features } from '../components/Features'
import { SolutionSplit } from '../components/SolutionSplit'
import { Testimonials } from '../components/Testimonials'
import { Pricing } from '../components/Pricing'
import { Faq } from '../components/Faq'
import { CtaBand } from '../components/CtaBand'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <SolutionSplit />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBand />
      <Contact />
    </>
  )
}
