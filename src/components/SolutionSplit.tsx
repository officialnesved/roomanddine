const POINTS = [
  { strong: 'Unified calendar', rest: 'across rooms, halls & tables' },
  { strong: 'Automated invoices', rest: '& payment tracking' },
  { strong: 'Role-based access', rest: 'for every team member' },
]

export function SolutionSplit() {
  return (
    <section id="solutions" className="bg-gradient-to-b from-[#faf9fc] to-white py-24">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-sm font-bold tracking-[1px] text-accent-700">ONE DASHBOARD</span>
          <h2 className="mb-[18px] mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-[38px]">
            See your entire property at a glance
          </h2>
          <p className="mb-7 text-[16.5px] leading-[1.7] text-slate-600">
            Occupancy, upcoming events, and live table turnover in a single command center. Make faster decisions
            with numbers that update in real time.
          </p>
          <div className="flex flex-col gap-4">
            {POINTS.map((p) => (
              <div key={p.strong} className="flex items-start gap-3.5">
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-extrabold text-accent-700">
                  ✓
                </span>
                <span className="text-[15.5px] text-slate-700">
                  <strong className="font-bold text-slate-900">{p.strong}</strong> {p.rest}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-100 bg-white p-[22px] shadow-[0_30px_70px_-28px_rgba(76,29,149,0.4)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-base font-bold text-slate-900">Weekly overview</span>
            <span className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-bold text-accent-700">+12.4%</span>
          </div>
          <div className="mb-[18px] flex h-[170px] items-end gap-2.5">
            {[50, 72, 60, 90, 68, 82, 95].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-md ${i === 3 || i === 6 ? 'bg-gradient-to-t from-[#2563eb] to-highlight-500' : i % 2 === 0 ? 'bg-[#ddd6fe]' : 'bg-[#c4b5fd]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#f8f7fb] p-3.5">
              <div className="text-xs text-slate-400">Bookings</div>
              <div className="text-xl font-extrabold text-slate-900">1,284</div>
            </div>
            <div className="rounded-xl bg-[#f8f7fb] p-3.5">
              <div className="text-xs text-slate-400">Avg. rating</div>
              <div className="text-xl font-extrabold text-slate-900">4.9 ★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
