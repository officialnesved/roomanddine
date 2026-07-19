import { UserPlus, SlidersHorizontal, Rocket } from 'lucide-react'

const STEPS = [
  {
    icon: UserPlus,
    title: 'Sign up in 2 minutes',
    desc: 'Create your account and pick the plan that matches your property — Rooms, Restaurant, or both.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Set up your property',
    desc: 'Add your rooms, menu, tax settings, and staff. Your 3-day free trial runs on the real plan you picked.',
  },
  {
    icon: Rocket,
    title: 'Run day to day',
    desc: 'Take bookings, serve tables, bill guests, and see reports — all from the same login, every day after.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Up and running, fast
        </h2>
      </div>

      <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block" />
        {STEPS.map((s, i) => (
          <div key={s.title} className="relative flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white shadow-md shadow-accent-500/30">
              <s.icon className="h-5.5 w-5.5" />
            </div>
            <div className="mt-4 text-xs font-bold uppercase tracking-wide text-accent-600">Step {i + 1}</div>
            <h3 className="mt-1 text-base font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
