import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#1e1b2e] px-5 pb-8 pt-[60px] text-[#c4c0d4]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <div className="mb-4 flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="" className="h-7 w-auto" />
            <img src="/logo-wordmark-light.png" alt="RoomAndDine" className="h-5 w-auto" />
          </div>
          <p className="max-w-[300px] text-sm leading-relaxed text-[#9993ad]">
            The all-in-one booking platform for rooms, banquets, and restaurant tables.
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-[15px] font-bold text-white">Product</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="#features" className="text-[#9993ad] hover:text-white">Features</a>
            <a href="#solutions" className="text-[#9993ad] hover:text-white">Solutions</a>
            <a href="#pricing" className="text-[#9993ad] hover:text-white">Pricing</a>
            <a href="#faq" className="text-[#9993ad] hover:text-white">FAQ</a>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[15px] font-bold text-white">Company</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a href="#contact" className="text-[#9993ad] hover:text-white">Contact</a>
            <a href="mailto:contact@nesved.com" className="text-[#9993ad] hover:text-white">contact@nesved.com</a>
            <a href="tel:+918806012475" className="text-[#9993ad] hover:text-white">+91 88060 12475</a>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[15px] font-bold text-white">Legal</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link to="/terms" className="text-[#9993ad] hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="text-[#9993ad] hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1120px] flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13.5px] text-[#8681a0]">
        <span>© {new Date().getFullYear()} RoomAndDine, a Nesved product. All rights reserved.</span>
        <span>Made for hospitality teams.</span>
      </div>
    </footer>
  )
}
