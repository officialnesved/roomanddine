import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, AlertTriangle } from 'lucide-react'

// Shared shell for the legal pages. Renders a loud, impossible-to-miss banner since the source
// content (legal/*.md) is an explicitly-marked DRAFT with unfilled placeholders — this page must
// not read as a finished, lawyer-reviewed policy until someone actually fills those in.
export function LegalPage({ title, lastUpdated, children }: { title: string; lastUpdated: ReactNode; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Link to="/" className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700">
        <ChevronLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mb-8 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <strong>Draft — not legal advice.</strong> This page still has placeholders (highlighted below) and needs
          a lawyer's review with your real company/registration details before it's published for real customers.
        </div>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-accent-700">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-slate-700">{children}</div>
    </div>
  )
}

// Wraps a still-unfilled [BRACKET] placeholder so it's visually unmissable on the page, instead
// of quietly blending into normal text like the rest of the paragraph.
export function Placeholder({ children }: { children: ReactNode }) {
  return <mark className="rounded bg-amber-200 px-1 py-0.5 font-semibold text-amber-900">{children}</mark>
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="!mt-10 text-lg font-bold text-slate-900">{children}</h2>
}
