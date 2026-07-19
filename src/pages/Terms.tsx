import { LegalPage, Placeholder, H2 } from '../components/LegalPage'

export function Terms() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="20 July 2026">
      <p>
        These Terms of Service ("Terms") govern access to and use of RoomAndDine (the "Service"), available at{' '}
        <a href="https://roomanddine.com" className="text-accent-600 underline">roomanddine.com</a> and{' '}
        <a href="https://app.roomanddine.com" className="text-accent-600 underline">app.roomanddine.com</a>, a
        hospitality/restaurant management platform provided by <strong>Nesved</strong>, with its registered office at
        Pimple Saudagar, Pune, Maharashtra 411017, India ("we", "us", "our"). By creating an account or using the Service,
        the venue and its authorized staff ("you", "Customer") agree to these Terms.
      </p>

      <H2>1. The Service</H2>
      <p>
        The Service lets a venue manage bookings, quotations, enquiries, rooms/halls/lawns, restaurant orders and billing,
        inventory, staff accounts and permissions, expenses, and related reports. We may add, change, or remove features at
        any time.
      </p>

      <H2>2. Accounts and staff access</H2>
      <ul className="list-disc space-y-2 pl-5">
        <li>The person who signs up becomes the venue's first Admin. Admins may create additional Staff accounts and control what each account can see and do (Menu Access).</li>
        <li>
          You are responsible for all activity under your venue's accounts, including staff you invite. Keep credentials
          confidential; notify us at contact@nesved.com if you suspect unauthorized access.
        </li>
        <li>We may suspend an account that we reasonably believe is compromised or being used to violate these Terms.</li>
      </ul>

      <H2>3. Your data</H2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          You retain ownership of all guest, booking, financial, and staff data you enter ("Customer Data"). We process it
          only to provide the Service, per our <a href="/privacy" className="text-accent-600 underline">Privacy Policy</a>.
        </li>
        <li>
          You are responsible for having a lawful basis to collect and store guest personal data (name, phone, email,
          address) that you enter into the Service, and for complying with applicable data protection law in your
          jurisdiction.
        </li>
        <li>
          You can request an export of your Customer Data at any time by writing to contact@nesved.com; we aim to provide it
          within 15 days.
        </li>
      </ul>

      <H2>4. Payments and subscriptions</H2>
      <p>
        Plans are billed annually through Razorpay, our payment processor — RoomAndDine does not itself store your card,
        UPI, or bank account details. New signups receive a 3-day free trial on the plan selected; no charge is made until
        the trial ends. Fees already paid for the current billing period are non-refundable except where required by law,
        and you may cancel auto-renewal at any time from Plans & Billing to stop future charges.
      </p>

      <H2>5. Acceptable use</H2>
      <p>
        You agree not to: (a) use the Service for any unlawful purpose; (b) attempt to access another venue's data or bypass
        access controls; (c) reverse-engineer, resell, or sublicense the Service without our written consent; (d) upload
        malicious content.
      </p>

      <H2>6. Termination</H2>
      <p>
        Either party may terminate on 30 days' written notice (email to contact@nesved.com is sufficient from your side). On
        termination, we will make your Customer Data available for export for 30 days before deletion, except where a
        longer retention period is legally required (for example, GST/financial records under Indian law).
      </p>

      <H2>7. Warranty disclaimer & limitation of liability</H2>
      <p>
        THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, NESVED'S
        TOTAL LIABILITY ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE FEES YOU PAID FOR THE SERVICE IN THE 12 MONTHS
        PRECEDING THE CLAIM. <Placeholder>This clause should still get a jurisdiction-specific legal review before relying on it in a dispute.</Placeholder>
      </p>

      <H2>8. Governing law</H2>
      <p>
        These Terms are governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of the
        courts at Pune, Maharashtra.
      </p>

      <H2>9. Changes to these Terms</H2>
      <p>
        We may update these Terms; material changes will be notified via email to registered Admin accounts and an in-app
        notice at least 15 days before taking effect.
      </p>

      <H2>10. Contact</H2>
      <p>
        Nesved
        <br />
        Pimple Saudagar, Pune, Maharashtra 411017, India
        <br />
        contact@nesved.com · +91 88060 12475
      </p>
    </LegalPage>
  )
}
