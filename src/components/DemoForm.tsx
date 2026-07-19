import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { submitForm } from '../lib/web3forms'

const VENUE_TYPES = ['Hotel / Rooms only', 'Restaurant only', 'Both (Rooms & Restaurant)']

export function DemoForm({ onDone }: { onDone?: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [venueType, setVenueType] = useState(VENUE_TYPES[2])
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const res = await submitForm({
      form_type: 'Demo Request',
      subject: `Demo request from ${name}`,
      name,
      email,
      phone,
      venue_type: venueType,
      message,
    })
    setResult(res)
    setSubmitting(false)
    if (res.ok) onDone?.()
  }

  if (result?.ok) {
    return (
      <div className="flex flex-col items-center py-4 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-500" />
        <p className="mt-3 text-sm font-medium text-slate-700">{result.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid grid-cols-2 gap-3">
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      />
      <select
        value={venueType}
        onChange={(e) => setVenueType(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      >
        {VENUE_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Anything specific you'd like us to cover? (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      />
      {result && !result.ok && <p className="text-xs font-medium text-red-600">{result.message}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-cta-from/30 hover:shadow-lg disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? 'Sending…' : 'Request a Demo'}
      </button>
    </form>
  )
}
