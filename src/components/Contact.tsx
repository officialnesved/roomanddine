import { Mail, Phone } from 'lucide-react'
import { ContactForm } from './ContactForm'

const SUPPORT_EMAIL = 'contact@nesved.com'
const SUPPORT_PHONE = '+91 88060 12475'

export function Contact() {
  return (
    <section id="contact" className="bg-accent-50/60 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-700 md:text-4xl">
            Questions before you start?
          </h2>
          <p className="mt-3 max-w-md text-slate-600">
            Reach out and we'll help you figure out which plan fits your property — or just send a message and we'll get
            back to you.
          </p>
          <div className="mt-7 flex flex-col gap-4">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-accent-700">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <Mail className="h-4.5 w-4.5" />
              </span>
              {SUPPORT_EMAIL}
            </a>
            <a href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-accent-700">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <Phone className="h-4.5 w-4.5" />
              </span>
              {SUPPORT_PHONE}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
