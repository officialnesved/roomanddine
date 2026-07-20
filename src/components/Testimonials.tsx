// The approved design shows one large quote attributed to a named person ("Aditi Rao, GM,
// Grandeur Hotels") — RoomAndDine has no real customers yet, so a named quote would be fabricated.
// Kept the same big single-quote visual treatment, but role-labeled and explicitly marked as a
// placeholder instead of inventing a person.
export function Testimonials() {
  return (
    <section className="mx-auto max-w-[820px] px-5 pb-24 pt-14 text-center">
      <div className="font-serif text-[54px] leading-none text-[#c4b5fd]">&ldquo;</div>
      <p className="mx-auto mb-7 mt-2 max-w-[680px] text-2xl font-semibold leading-[1.5] tracking-tight text-slate-800">
        RoomAndDine brings rooms, banquets, and dining into one system — so your team stops juggling separate tools
        and spreadsheets for every part of the property.
      </p>
      <div className="flex items-center justify-center gap-3.5">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-cta-from to-highlight-500 text-sm font-extrabold text-white">
          ?
        </div>
        <div className="text-left">
          <div className="font-bold text-slate-900">Placeholder quote</div>
          <div className="text-sm text-slate-400">Replace with a real customer once you have one</div>
        </div>
      </div>
    </section>
  )
}
