import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { APP_URL } from '../config'
import { useDemoModal } from '../context/DemoModalContext'

const NAV = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const openDemo = useDemoModal()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2" aria-label="RoomAndDine home">
          <img src="/logo-mark.png" alt="" className="h-9 w-auto" />
          <img src="/logo-wordmark.png" alt="RoomAndDine" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent-700 hover:text-accent-900"
          >
            Login
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="text-sm font-semibold text-accent-700 hover:text-accent-900"
          >
            Book a Demo
          </button>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent-700 px-5 py-2 text-sm font-bold text-accent-700 hover:bg-accent-50"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700"
              >
                Login
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openDemo()
                }}
                className="rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700"
              >
                Book a Demo
              </button>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent-700 px-4 py-2 text-center text-sm font-bold text-accent-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
