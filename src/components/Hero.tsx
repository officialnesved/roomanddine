import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

// Matches the approved design's exact gradient wave — deep violet to blue, with a faint dot
// texture — sitting behind the hero content only (not full-bleed across the whole page).
function WaveBackground() {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroWave" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#6d28d9" />
          <stop offset="0.5" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <pattern id="heroDots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#fff" opacity="0.1" />
        </pattern>
      </defs>
      <path fill="url(#heroWave)" d="M0,300 C260,200 520,420 760,380 C1010,338 1180,170 1440,250 L1440,700 L0,700 Z" />
      <path fill="url(#heroDots)" d="M0,300 C260,200 520,420 760,380 C1010,338 1180,170 1440,250 L1440,700 L0,700 Z" />
    </svg>
  )
}

// Illustrative dashboard mockup matching the design exactly — a stylized preview, not a literal
// screenshot, so the numbers on it are placeholder UI content rather than a real-data claim.
function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-[960px] animate-float-slow">
      <div className="overflow-hidden rounded-[18px] border border-white/60 bg-white shadow-[0_40px_90px_-30px_rgba(30,27,46,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-[#faf9fc] px-[18px] py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3.5 text-xs text-slate-400">app.roomanddine.com/dashboard</span>
        </div>
        <div className="flex h-[420px]">
          <div className="hidden w-[200px] flex-col gap-2 bg-[#1e1b2e] p-[22px] sm:flex">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-[26px] w-[26px] rounded-lg bg-gradient-to-br from-cta-to to-cta-from" />
              <span className="text-sm font-bold text-white">RoomAndDine</span>
            </div>
            <div className="rounded-[9px] bg-gradient-to-r from-cta-to to-cta-from px-3 py-2.5 text-[13px] font-semibold text-white">
              📊 Dashboard
            </div>
            <div className="rounded-[9px] px-3 py-2.5 text-[13px] text-[#c4c0d4]">🛏 Rooms</div>
            <div className="rounded-[9px] px-3 py-2.5 text-[13px] text-[#c4c0d4]">🎉 Banquets</div>
            <div className="rounded-[9px] px-3 py-2.5 text-[13px] text-[#c4c0d4]">🍽 Restaurant</div>
            <div className="rounded-[9px] px-3 py-2.5 text-[13px] text-[#c4c0d4]">📅 Calendar</div>
          </div>
          <div className="flex-1 bg-[#f8f7fb] p-6 text-left">
            <div className="mb-[18px] flex gap-3.5">
              <div className="flex-1 rounded-[13px] bg-white p-4 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.15)]">
                <div className="text-xs text-slate-400">Occupancy</div>
                <div className="text-2xl font-extrabold text-cta-from">86%</div>
              </div>
              <div className="flex-1 rounded-[13px] bg-white p-4 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.15)]">
                <div className="text-xs text-slate-400">Today's revenue</div>
                <div className="text-2xl font-extrabold text-highlight-500">₹1.24L</div>
              </div>
              <div className="hidden flex-1 rounded-[13px] bg-white p-4 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.15)] sm:block">
                <div className="text-xs text-slate-400">Live tables</div>
                <div className="text-2xl font-extrabold text-slate-900">18/24</div>
              </div>
            </div>
            <div className="flex h-[220px] items-end gap-3 rounded-[13px] bg-white p-[18px] shadow-[0_4px_14px_-8px_rgba(0,0,0,0.15)]">
              {[45, 70, 55, 88, 62, 78, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-[7px] ${i === 3 || i === 6 ? 'bg-gradient-to-t from-highlight-500 to-[#60a5fa]' : 'bg-gradient-to-t from-cta-from to-[#a78bfa]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-[120px] pt-[84px] md:pt-[100px]">
      <WaveBackground />

      <div className="relative z-[2] mx-auto max-w-[1120px] text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-50 px-4 py-[7px] text-[13px] font-semibold text-accent-700">
          ✨ One platform for your whole property
        </span>
        <h1 className="mx-auto max-w-[900px] text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-[60px] md:leading-[1.05] md:tracking-[-1.5px]">
          Rooms, banquets &amp; dining —{' '}
          <span className="bg-gradient-to-r from-cta-from to-highlight-500 bg-clip-text text-transparent">managed as one.</span>
        </h1>
        <p className="mx-auto mt-[22px] max-w-[640px] text-lg leading-relaxed text-slate-600">
          RoomAndDine brings room reservations, banquet events, and restaurant table orders into a single, elegant
          booking platform your team will actually love.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cta-from to-cta-to px-[30px] py-[15px] text-base font-bold text-white shadow-[0_14px_30px_-10px_rgba(124,58,237,0.6)] transition hover:-translate-y-0.5"
          >
            Start free trial <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
        <p className="mb-14 mt-4 text-[13.5px] text-slate-400">No credit card required · 3-day free trial</p>

        <DashboardMockup />
      </div>
    </section>
  )
}
