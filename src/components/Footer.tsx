import { Link } from 'react-router-dom'

// Direct-download links (not the /releases/latest page) so clicking starts
// the file downloading immediately. These filenames are version-free
// (KitoosAppe-win.exe / KitoosAppe-linux.deb), so they keep working across
// future releases without needing to update this file each time — as long
// as new releases also upload a copy under these exact stable names.
const POS_WINDOWS_URL = 'https://github.com/officialnesved/kittosappe-releases/releases/latest/download/KitoosAppe-win.exe'
const POS_LINUX_URL = 'https://github.com/officialnesved/kittosappe-releases/releases/latest/download/KitoosAppe-linux.deb'

function WindowsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.5 10.5 4.4V11.5H3V5.5ZM11.5 4.25 21 3V11.5H11.5V4.25ZM3 12.5H10.5V19.6L3 18.5V12.5ZM11.5 12.5H21V21L11.5 19.75V12.5Z" />
    </svg>
  )
}

function LinuxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-1.66 0-3 1.79-3 4 0 1.33.47 2.5 1.18 3.24-.6.4-1.18.98-1.68 1.76C7.13 12.5 6 14.5 6 16.5c0 2.5 2.69 4.5 6 4.5s6-2 6-4.5c0-2-1.13-4-2.5-5.5-.5-.78-1.08-1.36-1.68-1.76C14.53 8.5 15 7.33 15 6c0-2.21-1.34-4-3-4Zm-1.2 12.3c.36.28.78.45 1.2.45s.84-.17 1.2-.45c.24.32.5.83.5 1.2 0 .77-.76 1.5-1.7 1.5s-1.7-.73-1.7-1.5c0-.37.26-.88.5-1.2Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#1e1b2e] px-5 pb-8 pt-[60px] text-[#c4c0d4]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-10 sm:grid-cols-5">
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
          <div className="mb-3.5 text-[15px] font-bold text-white">POS</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={POS_WINDOWS_URL}
              className="flex items-center gap-2 text-[#9993ad] hover:text-white"
            >
              <WindowsIcon />
              Download for Windows
            </a>
            <a
              href={POS_LINUX_URL}
              className="flex items-center gap-2 text-[#9993ad] hover:text-white"
            >
              <LinuxIcon />
              Download for Linux
            </a>
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
