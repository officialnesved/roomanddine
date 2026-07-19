// PLACEHOLDER CONTENT — replace with real customer quotes once you have some. Deliberately
// role-labeled ("Restaurant Owner", not a fabricated named person) rather than inventing a named
// customer that doesn't exist.
const TESTIMONIALS = [
  {
    quote: "We stopped keeping a separate register for bookings and a separate app for the restaurant. Everything's in one place now.",
    role: 'Hotel Owner, placeholder — replace with a real quote',
  },
  {
    quote: 'GST invoicing that actually matches what we bill guests, without a second tool.',
    role: 'Restaurant Manager, placeholder — replace with a real quote',
  },
  {
    quote: 'Being able to charge a restaurant order straight to a room bill was the one thing our old system couldn\'t do.',
    role: 'Banquet Hall Manager, placeholder — replace with a real quote',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Trusted by hospitality teams
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-sm leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-slate-500">{t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
