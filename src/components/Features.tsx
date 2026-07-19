import { CalendarRange, UtensilsCrossed, Boxes, Receipt, Users, BarChart3 } from 'lucide-react'

const FEATURES = [
  {
    icon: CalendarRange,
    title: 'Rooms & Bookings',
    desc: 'Enquiries, quotations, and bookings across rooms, banquet halls, and lawns — with double-booking prevention built in.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Dine-in',
    desc: 'Table management, KOT, food menu, and guest orders — including charging a meal straight to a guest\'s room bill.',
  },
  {
    icon: Boxes,
    title: 'Inventory Management',
    desc: 'Track vendor & local purchases, usage, and wastage per ingredient, with low-stock alerts and consumption forecasts.',
  },
  {
    icon: Receipt,
    title: 'GST Invoicing & Billing',
    desc: 'GST-compliant invoices, receipts, and quotations, with CGST/SGST split and customizable numbering formats.',
  },
  {
    icon: Users,
    title: 'Staff & Role Access',
    desc: 'Role-based permissions plus per-staff menu access, so each teammate sees only what their job needs.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Profitability',
    desc: 'Revenue, occupancy, and expense reports — split cleanly between your Rooms and Restaurant business lines.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Everything one property needs
        </h2>
        <p className="mt-3 text-lg text-slate-600">No more juggling a booking register, a POS, and a spreadsheet for expenses.</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <f.icon className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
