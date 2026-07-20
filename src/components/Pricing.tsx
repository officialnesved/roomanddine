import { Check } from 'lucide-react'
import { PLANS } from '../plans'
import { APP_URL } from '../config'

function fmt(n: number) {
  return n.toLocaleString('en-IN')
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#faf9fc] py-24">
      <div className="mx-auto max-w-[1040px] px-5">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <span className="text-sm font-bold tracking-[1px] text-accent-700">PRICING</span>
          <h2 className="mb-3.5 mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-[42px]">
            Simple plans that scale with you
          </h2>
          <p className="text-lg text-slate-600">Pick only what your property runs — switch plans anytime.</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={
                p.recommended
                  ? 'flex scale-[1.04] flex-col rounded-[22px] bg-gradient-to-br from-cta-from to-cta-to p-[34px] text-white shadow-[0_30px_60px_-24px_rgba(76,29,149,0.6)]'
                  : 'flex flex-col rounded-[20px] border border-slate-100 bg-white p-8 transition duration-200 hover:-translate-y-1.5 hover:border-accent-500/30 hover:shadow-[0_28px_60px_-22px_rgba(76,29,149,0.35)]'
              }
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-[19px] font-bold ${p.recommended ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                {p.recommended && (
                  <span className="rounded-full bg-white/20 px-[11px] py-1 text-[11px] font-bold text-white">POPULAR</span>
                )}
              </div>
              <p className={`mb-[18px] mt-1.5 text-sm ${p.recommended ? 'text-white/80' : 'text-slate-400'}`}>{p.tag}</p>
              <div className={`text-[40px] font-extrabold ${p.recommended ? 'text-white' : 'text-slate-900'}`}>
                ₹{fmt(p.price)}
                <span className={`text-[15px] font-medium ${p.recommended ? 'text-white/80' : 'text-slate-400'}`}>/year</span>
              </div>
              <div className={`my-[22px] h-px ${p.recommended ? 'bg-white/20' : 'bg-slate-100'}`} />
              <ul className="flex flex-1 flex-col gap-3 text-[14.5px]">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 ${p.recommended ? 'text-white/90' : 'text-slate-700'}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.recommended ? 'text-white' : 'text-accent-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.recommended
                    ? 'mt-6 rounded-[11px] bg-white py-[13px] text-center font-extrabold text-cta-from transition hover:-translate-y-0.5'
                    : 'mt-6 rounded-[11px] border-[1.5px] border-slate-200 py-[13px] text-center font-bold text-slate-700 hover:border-accent-500/40'
                }
              >
                {p.recommended ? 'Start Free Trial' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Not sure which plan fits?{' '}
          <a href="#contact" className="font-semibold text-accent-700 underline hover:text-accent-800">
            Contact us
          </a>{' '}
          and we'll help you decide.
        </p>
        <p className="mt-2 text-center text-xs text-slate-400">Prices exclusive of applicable taxes. Cancel anytime.</p>
      </div>
    </section>
  )
}
