import { Check } from 'lucide-react'
import { PLANS } from '../plans'
import { APP_URL } from '../config'
import { useDemoModal } from '../context/DemoModalContext'

function fmt(n: number) {
  return n.toLocaleString('en-IN')
}

export function Pricing() {
  const openDemo = useDemoModal()

  return (
    <section id="pricing" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-lg text-slate-600">Pick only what your property runs — switch plans anytime.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.recommended ? 'border-transparent bg-accent-500 text-white shadow-xl' : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-600 shadow">
                  Recommended
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.recommended ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.recommended ? 'text-white/80' : 'text-slate-500'}`}>{p.tag}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-3xl font-extrabold ${p.recommended ? 'text-white' : 'text-slate-900'}`}>₹{fmt(p.price)}</span>
                <span className={`text-sm ${p.recommended ? 'text-white/80' : 'text-slate-500'}`}>/year</span>
              </div>
              <div className={`my-5 border-t ${p.recommended ? 'border-white/25' : 'border-slate-200'}`} />
              <ul className="flex flex-1 flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.recommended ? 'text-white' : 'text-accent-500'}`} />
                    <span className={p.recommended ? 'text-white/90' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`mt-7 rounded-lg px-4 py-2.5 text-center text-sm font-bold ${
                  p.recommended ? 'bg-white text-accent-600 hover:bg-accent-50' : 'bg-accent-500 text-white hover:bg-accent-600'
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Not sure which plan fits?{' '}
          <button type="button" onClick={openDemo} className="font-semibold text-accent-600 underline hover:text-accent-700">
            Book a demo
          </button>{' '}
          and we'll help you decide.
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">Prices exclusive of applicable taxes. Cancel anytime.</p>
      </div>
    </section>
  )
}
