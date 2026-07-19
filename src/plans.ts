// Mirrors the real plan catalog from the app (src/lib/planCatalog.ts) — keep prices in sync
// manually if they ever change, since this is a separate deploy with no shared import.
export const PLANS = [
  {
    key: 'RESTAURANT',
    name: 'Restaurant Only',
    tag: 'Dine-in POS, tables, menu & sales history.',
    price: 10000,
    recommended: false,
    features: [
      'Table & guest orders',
      'Food menu & KOT',
      'Thermal GST bills',
      'Sales history & reports',
      'Inventory management',
    ],
  },
  {
    key: 'ROOMS',
    name: 'Rooms & Operations',
    tag: 'Bookings, rooms, quotations, enquiries & payments.',
    price: 12000,
    recommended: false,
    features: [
      'Room, banquet & lawn bookings',
      'Calendar & availability',
      'Quotations & GST invoices',
      'Guest CRM & payments',
      'Staff & role management',
    ],
  },
  {
    key: 'ALL',
    name: 'All Inclusive',
    tag: 'Every module — restaurant & room operations together.',
    price: 15000,
    recommended: true,
    features: [
      'Everything in Rooms',
      'Everything in Restaurant',
      'Charge dining to room folio',
      'Unified reports & profitability',
      'Priority support',
    ],
  },
] as const
