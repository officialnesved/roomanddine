import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-mark.png" alt="" className="h-8 w-auto" />
          <img src="/logo-wordmark.png" alt="RoomAndDine" className="h-6 w-auto" />
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
