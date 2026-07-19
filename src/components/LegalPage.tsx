import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

export function LegalPage({ title, lastUpdated, children }: { title: string; lastUpdated: ReactNode; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Link to="/" className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700">
        <ChevronLeft className="h-4 w-4" /> Back to home
      </Link>

      <h1 className="text-3xl font-extrabold tracking-tight text-accent-700">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-slate-700">{children}</div>
    </div>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="!mt-10 text-lg font-bold text-slate-900">{children}</h2>
}
