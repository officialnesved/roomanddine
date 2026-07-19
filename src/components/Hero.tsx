import { ArrowRight, CheckCircle2, BedDouble, UtensilsCrossed, TrendingUp, Bell } from 'lucide-react'
import { APP_URL } from '../config'
import { useDemoModal } from '../context/DemoModalContext'

// A CSS-built mockup of the app's dashboard — not a real screenshot, just an illustrative
// preview so the hero doesn't feel like empty marketing text with nothing to look at.
function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-accent-200/50 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent-300/40 blur-3xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/40">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-accent-50 p-3.5">
            <div className="flex items-center gap-2 text-accent-700">
              <BedDouble className="h-4 w-4" />
              <span className="text-xs font-bold">Rooms Occupied</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-slate-900">18 / 24</div>
          </div>
          <div className="rounded-xl bg-amber-50 p-3.5">
            <div className="flex items-center gap-2 text-amber-700">
              <UtensilsCrossed className="h-4 w-4" />
              <span className="text-xs font-bold">Tables Active</span>
            </div>
            <div className="mt-1.5 text-xl font-extrabold text-slate-900">7 / 10</div>
          </div>
        </div>
        <div className="mt-3 rounded-xl bg-slate-50 p-3.5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <TrendingUp className="h-4 w-4 text-emerald-600" /> Revenue Today
            </span>
            <span className="text-sm font-extrabold text-slate-900">₹1,42,300</span>
          </div>
          <div className="mt-2.5 flex items-end gap-1.5">
            {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-accent-400" style={{ height: `${h * 0.5}px` }} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-slate-200 p-3">
          <Bell className="h-4 w-4 shrink-0 text-accent-500" />
          <span className="text-xs font-medium text-slate-600">3 new bookings awaiting confirmation</span>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const openDemo = useDemoModal()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-accent-100 px-3.5 py-1.5 text-xs font-bold text-accent-700">
            Rooms + Restaurant, one platform
          </span>
          <h1
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Run your whole property from one dashboard.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Bookings, quotations, GST invoicing, dine-in POS, inventory, and staff — RoomAndDine replaces the
            spreadsheets and separate apps with one system built for hotels, banquet halls, and restaurants.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-500" /> No credit card to start
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-500" /> 3-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-500" /> Cancel anytime
            </span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}
