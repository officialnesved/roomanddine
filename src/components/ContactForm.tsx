import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { submitForm } from '../lib/web3forms'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const res = await submitForm({
      form_type: 'Contact',
      subject: `Contact form message from ${name}`,
      name,
      email,
      message,
    })
    setResult(res)
    setSubmitting(false)
    if (res.ok) {
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 rounded-2xl bg-white p-6 shadow-sm">
      <input
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      />
      <input
        required
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      />
      <textarea
        required
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
      />
      {result && <p className={`text-xs font-medium ${result.ok ? 'text-emerald-600' : 'text-red-600'}`}>{result.message}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-cta-from/30 hover:shadow-lg disabled:opacity-60"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : result?.ok ? <CheckCircle2 className="h-4 w-4" /> : null}
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
