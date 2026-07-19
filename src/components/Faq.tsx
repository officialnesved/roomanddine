import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every new signup gets a 3-day free trial on the plan you pick, with full access to that plan\'s features. No credit card required to start.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes, anytime from Plans & Billing inside the app. Switching takes effect immediately, and if your payment method supports it, no new checkout is needed.',
  },
  {
    q: 'Do I need separate software for my restaurant and my rooms?',
    a: 'No — that\'s the point. The All Inclusive plan covers both under one login, including charging restaurant orders straight to a guest\'s room bill.',
  },
  {
    q: 'Are the invoices GST-compliant?',
    a: 'Yes — invoices, receipts, and quotations support GST numbers, configurable tax rates, and CGST/SGST splitting.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data stays yours. You can export what you need before cancelling, and your account simply stops being billed going forward.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes — passwords are hashed, sessions are server-side, and every account is scoped strictly to your own venue\'s data.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900"
              >
                {f.q}
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
