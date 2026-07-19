import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'
import { useDemoModal } from '../context/DemoModalContext'

export function CtaBand() {
  const openDemo = useDemoModal()

  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <div className="rounded-3xl border border-accent-100 bg-accent-50 px-8 py-14 text-center md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Ready to run your property from one place?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">Start your free trial today, or book a live demo first — whichever you'd rather do.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600"
          >
            Start Free Trial <ArrowRight className="h-4.5 w-4.5" />
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
