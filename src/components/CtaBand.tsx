import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <div className="rounded-3xl border border-accent-100 bg-accent-50 px-8 py-14 text-center md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight text-accent-700 md:text-4xl">
          Ready to run your property from one place?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">Start your free trial today and see it in action.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-cta-from/30 hover:shadow-xl"
          >
            Start Free Trial <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
