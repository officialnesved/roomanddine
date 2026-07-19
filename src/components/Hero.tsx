import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

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

// Chrome bar (three dots) around each real product screenshot — the standard "browser window"
// framing device that makes a raw screenshot read as a polished app preview rather than a flat
// image dropped on the page.
function ScreenshotFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-accent-500/20 ${className ?? ''}`}>
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <img src={src} alt={alt} className="block w-full" />
    </div>
  )
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* secondary screenshot peeking out behind, top-right */}
      <ScreenshotFrame
        src="/screenshots/restaurant-overview.png"
        alt="RoomAndDine restaurant overview — revenue, orders, and table status"
        className="animate-float-fast absolute -right-6 -top-10 hidden w-[78%] rotate-2 sm:block"
      />
      {/* primary screenshot in front */}
      <ScreenshotFrame
        src="/screenshots/dashboard.png"
        alt="RoomAndDine dashboard — bookings, revenue, and enquiries at a glance"
        className="animate-float-slow relative -rotate-1"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <DotField />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.15fr]">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-cta-from/30 transition hover:shadow-xl hover:shadow-cta-from/40"
            >
              Get Started <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up-delay relative">
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}
