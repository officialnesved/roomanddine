import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="rounded-3xl bg-gradient-to-br from-cta-from to-cta-to px-8 py-14 text-center shadow-xl shadow-cta-from/25 md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Ready to run your property from one place?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">Start your free trial today and see it in action.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-accent-700 shadow-lg hover:shadow-xl"
          >
            Start Free Trial <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
