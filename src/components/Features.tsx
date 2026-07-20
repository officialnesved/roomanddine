const FEATURES = [
  {
    emoji: '🛏',
    bg: 'from-[#ede9fe] to-[#ddd6fe]',
    title: 'Room bookings',
    desc: 'Real-time availability, double-booking prevention, check-in/out and quotations — all from one calendar.',
  },
  {
    emoji: '🎉',
    bg: 'from-[#e0e7ff] to-[#c7d2fe]',
    title: 'Banquet & events',
    desc: 'Manage halls, lawns, quotations and catering packages without a single spreadsheet.',
  },
  {
    emoji: '🍽',
    bg: 'from-[#dbeafe] to-[#bfdbfe]',
    title: 'Restaurant & tables',
    desc: 'Table management, KOT, food menu and guest orders that flow straight into one revenue view.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1160px] px-5 py-24">
      <div className="mx-auto mb-14 max-w-[640px] text-center">
        <span className="text-sm font-bold tracking-[1px] text-accent-700">EVERYTHING IN ONE PLACE</span>
        <h2 className="mb-3.5 mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-[42px]">
          Built for every corner of your property
        </h2>
        <p className="text-lg leading-relaxed text-slate-600">
          Three powerful modules, one unified system — so your front desk, events team, and restaurant floor stay
          perfectly in sync.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-[20px] border border-slate-100 bg-white p-[30px] transition duration-200 hover:-translate-y-1.5 hover:border-accent-500/30 hover:shadow-[0_28px_60px_-22px_rgba(76,29,149,0.35)]"
          >
            <div className={`mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-2xl bg-gradient-to-br ${f.bg} text-2xl`}>
              {f.emoji}
            </div>
            <h3 className="mb-2.5 text-xl font-bold text-slate-900">{f.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
