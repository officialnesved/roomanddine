import { ArrowRight, BedDouble, UtensilsCrossed, TrendingUp } from 'lucide-react'
import { APP_URL } from '../config'
import { useDemoModal } from '../context/DemoModalContext'

// A loose cloud of dots with a few connecting lines, each dot twinkling independently — sits
// centrally behind the headline/card, same placement as the reference, rather than tucked in one
// corner. Positions are hand-placed rather than a perfect grid so it reads as organic texture.
function DotField() {
  const dots = [
    { x: 200, y: 30, r: 3, delay: 0 }, { x: 260, y: 15, r: 2, delay: 0.4 }, { x: 300, y: 60, r: 4, delay: 0.8 },
    { x: 230, y: 90, r: 2, delay: 1.2 }, { x: 330, y: 30, r: 3, delay: 0.2 }, { x: 280, y: 110, r: 2, delay: 1.6 },
    { x: 210, y: 140, r: 3, delay: 0.6 }, { x: 260, y: 130, r: 2, delay: 1 }, { x: 320, y: 70, r: 3, delay: 1.4 },
    { x: 240, y: 160, r: 2, delay: 0.3 }, { x: 350, y: 150, r: 4, delay: 1.8 }, { x: 220, y: 190, r: 2, delay: 0.9 },
    { x: 190, y: 200, r: 3, delay: 0.5 }, { x: 300, y: 200, r: 2, delay: 1.1 },
  ]
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 380 220" fill="none" aria-hidden="true">
      <line x1="200" y1="30" x2="300" y2="60" stroke="#8b6cf0" strokeWidth="1" opacity="0.45" />
      <line x1="300" y1="60" x2="330" y2="30" stroke="#8b6cf0" strokeWidth="1" opacity="0.45" />
      <line x1="230" y1="90" x2="300" y2="60" stroke="#8b6cf0" strokeWidth="1" opacity="0.35" />
      <line x1="260" y1="130" x2="240" y2="160" stroke="#8b6cf0" strokeWidth="1" opacity="0.35" />
      <line x1="240" y1="160" x2="300" y2="200" stroke="#8b6cf0" strokeWidth="1" opacity="0.35" />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={i % 3 === 0 ? '#7d5eef' : '#a89cf5'}
          className="animate-twinkle"
          style={{ animationDelay: `${d.delay}s` }}
        />
      ))}
    </svg>
  )
}

function PreviewCard() {
  return (
    <div className="animate-float-slow relative rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl shadow-accent-300/40">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-500">
          <BedDouble className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="text-sm font-bold text-accent-700">Shivar Garden Resort</span>
      </div>

      <div className="mt-3 flex gap-1.5">
        <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">Rooms</span>
        <span className="rounded-full px-3 py-1 text-xs font-semibold text-slate-500">Restaurant</span>
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-500">Revenue this week</span>
          <span className="flex items-center gap-1 font-bold text-emerald-600">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <svg viewBox="0 0 180 50" className="mt-2 h-12 w-full">
          <defs>
            <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#637eff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#637eff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,40 25,32 50,35 75,20 100,24 125,10 150,14 180,4 180,50 0,50" fill="url(#chart-fill)" />
          <polyline
            points="0,40 25,32 50,35 75,20 100,24 125,10 150,14 180,4"
            fill="none"
            stroke="#637eff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[0, 25, 50, 75, 100, 125, 150, 180].map((x, i) => (
            <circle key={x} cx={x} cy={[40, 32, 35, 20, 24, 10, 14, 4][i]} r="2.5" fill="#637eff" />
          ))}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {['Hotels', 'Banquet Halls', 'Restaurants'].map((t) => (
          <span key={t} className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 border-t border-slate-100 pt-3">
        <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Recent Activity</div>
        {[
          { icon: BedDouble, label: 'Room 101 booked', time: '2m ago', tone: 'text-accent-600 bg-accent-50' },
          { icon: UtensilsCrossed, label: 'Table 4 order placed', time: '6m ago', tone: 'text-amber-600 bg-amber-50' },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2 py-1">
            <span className={`flex h-6 w-6 items-center justify-center rounded-md ${row.tone}`}>
              <row.icon className="h-3 w-3" />
            </span>
            <span className="flex-1 text-xs font-medium text-slate-700">{row.label}</span>
            <span className="text-[11px] text-slate-400">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const openDemo = useDemoModal()

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <DotField />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div className="animate-fade-in-up text-center lg:text-left">
          <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight text-accent-700 md:text-6xl">
            Predictable
            <br />
            operations
            <br />
            start here.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            RoomAndDine gives you full control over every booking, order, and bill across your property — so you can
            run rooms and restaurant together, more predictably.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-cta-from/30 transition hover:shadow-xl hover:shadow-cta-from/40"
            >
              Get Started <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <button
              type="button"
              onClick={openDemo}
              className="text-base font-semibold text-accent-700 underline decoration-accent-300 decoration-2 underline-offset-4 hover:text-accent-900"
            >
              or Book a Demo
            </button>
          </div>
        </div>

        <div className="animate-fade-in-up-delay relative mx-auto w-full max-w-md">
          <PreviewCard />
        </div>
      </div>
    </section>
  )
}
