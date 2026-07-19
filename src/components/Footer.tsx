import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-accent-500">
            <Building2 className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
          </div>
          <span className="text-sm font-extrabold tracking-tight text-slate-900">
            Room<span className="font-medium text-slate-500">AndDine</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <a href="#features" className="hover:text-slate-800">
            Features
          </a>
          <a href="#pricing" className="hover:text-slate-800">
            Pricing
          </a>
          <Link to="/terms" className="hover:text-slate-800">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-slate-800">
            Privacy Policy
          </Link>
        </nav>

        <p className="text-xs text-slate-400">© {new Date().getFullYear()} RoomAndDine. All rights reserved.</p>
      </div>
    </footer>
  )
}
