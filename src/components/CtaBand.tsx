import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

export function CtaBand() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[28px] bg-gradient-to-br from-cta-from via-cta-to to-highlight-400 px-8 py-[72px] text-center shadow-[0_36px_80px_-30px_rgba(76,29,149,0.6)] md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)', backgroundSize: '26px 26px' }}
        />
        <div className="relative z-[2]">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-[44px]">
            Ready to run your whole property from one place?
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-lg text-white/90">
            Start your free trial today, no credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-[15px] text-base font-extrabold text-cta-from transition hover:-translate-y-0.5"
            >
              Start free trial <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border-[1.5px] border-white/35 bg-white/[0.14] px-8 py-[15px] text-base font-bold text-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
