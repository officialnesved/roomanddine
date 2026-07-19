import { LegalPage, Placeholder, H2 } from '../components/LegalPage'

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={<Placeholder>[DATE]</Placeholder>}>
      <p>
        This Privacy Policy explains what personal data RoomAndDine ("the Service", operated by{' '}
        <Placeholder>[COMPANY LEGAL NAME]</Placeholder>) collects, why, and how it's handled, based on what the software
        actually stores today.
      </p>

      <H2>1. Data we store</H2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Staff/admin accounts:</strong> name, email, phone, role, hashed password (bcrypt — the plaintext password is
          never stored), which pages they can access, login timestamp.
        </li>
        <li>
          <strong>Guest/customer records:</strong> name, phone, email, address — entered by venue staff, typically collected
          directly from the guest at time of enquiry/booking.
        </li>
        <li><strong>Booking, quotation, and enquiry data:</strong> event details, room/hall assignments, dates, pricing, notes staff add about the booking.</li>
        <li>
          <strong>Payment records:</strong> amount, payment mode (cash/card/UPI/bank transfer — recorded as a label, not card/account
          numbers), receipt number, timestamp. Subscription payments are processed by Razorpay; we do not store your card,
          UPI, or bank account details ourselves.
        </li>
        <li><strong>Restaurant & inventory data:</strong> orders, menu items, table assignments, GST/tax settings, stock movements.</li>
        <li><strong>Activity log:</strong> a record of who did what (e.g. "staff X recorded a payment") for audit purposes.</li>
        <li>
          <strong>Email settings:</strong> if a venue configures "Email Invoice," the SMTP username and password are stored to
          send mail on the venue's behalf.{' '}
          <Placeholder>[Confirm current storage is encrypted, or fix before publishing this claim.]</Placeholder>
        </li>
      </ul>

      <H2>2. Why we process this data</H2>
      <p>
        To provide the booking/restaurant/billing management functionality the venue signed up for: creating and displaying
        bookings, generating invoices/receipts, managing staff permissions, sending invoice emails on the venue's request,
        and producing reports.
      </p>

      <H2>3. Who can see this data</H2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Venue staff, according to the Menu Access permissions an Admin configures for them.</li>
        <li><Placeholder>[COMPANY LEGAL NAME]</Placeholder> staff, only as needed for support/maintenance, or if legally compelled.</li>
        <li>We do not sell guest or customer data to third parties.</li>
      </ul>

      <H2>4. Where data is stored</H2>
      <p>
        <Placeholder>[Describe actual hosting: database provider, region, and application hosting location — this must match your real deployment.]</Placeholder>
      </p>

      <H2>5. Data retention</H2>
      <p>
        <Placeholder>[State how long guest data, activity logs, and backups are retained, and what happens to data on account closure.]</Placeholder>
      </p>

      <H2>6. Guest rights</H2>
      <p>
        Guests whose data is entered by a venue should direct requests to access, correct, or delete their personal data to
        that venue directly (the Customer, not us, is the data controller for guest data they collect).{' '}
        <Placeholder>[Confirm this processor/controller framing for DPDPA/GDPR purposes.]</Placeholder>
      </p>

      <H2>7. Security measures</H2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Passwords are hashed with bcrypt, never stored in plaintext.</li>
        <li>Session cookies are httpOnly and sameSite=lax, and secure (HTTPS-only) in production.</li>
        <li>Login and password-related endpoints are rate-limited against brute-force attempts.</li>
        <li>A CSRF token is required on every state-changing request.</li>
        <li>
          <Placeholder>[Add: backup encryption status and access control model — describe what's actually true in your deployment.]</Placeholder>
        </li>
      </ul>

      <H2>8. Children's data</H2>
      <p>
        The Service is not directed at children and is not intended to collect data about individuals under{' '}
        <Placeholder>[13/16/18, per applicable law]</Placeholder> except as incidentally provided by a venue about a guest.
      </p>

      <H2>9. Changes to this policy</H2>
      <p>
        We will notify registered Admin accounts of material changes via <Placeholder>[email / in-app notice]</Placeholder>{' '}
        before they take effect.
      </p>

      <H2>10. Contact / Grievance Officer</H2>
      <p>
        <Placeholder>[NAME]</Placeholder>, <Placeholder>[COMPANY LEGAL NAME]</Placeholder>
        <br />
        <Placeholder>[REGISTERED ADDRESS]</Placeholder>
        <br />
        contact@nesved.com · +91 88060 12475
      </p>
      <p className="text-sm text-slate-500">
        <Placeholder>[If subject to India's DPDPA, a named Grievance Officer is likely required — confirm and appoint one before publishing.]</Placeholder>
      </p>
    </LegalPage>
  )
}
