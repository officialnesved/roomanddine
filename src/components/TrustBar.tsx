// The approved design shows a "Trusted by hospitality teams everywhere" bar with fake company
// logos (Grandeur, OASIS, etc.) — RoomAndDine has no real customers yet, so fabricating that social
// proof would be dishonest. This keeps the same visual slot but with an accurate claim: the venue
// types the product actually supports, not invented brands.
const TYPES = ['Hotels', 'Resorts', 'Banquet Halls', 'Lawns & Farmhouses', 'Restaurants']

export function TrustBar() {
  return (
    <section className="border-b border-slate-100 py-11">
      <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[1.5px] text-slate-400">
        Built for every kind of hospitality property
      </p>
      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-11 opacity-70">
        {TYPES.map((t) => (
          <span key={t} className="text-lg font-extrabold text-slate-900">
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
