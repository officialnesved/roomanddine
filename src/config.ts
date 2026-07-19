// Where "Login"/"Sign Up" send visitors — the actual product app, a separate deploy from this
// marketing site. Override via VITE_APP_URL in dev if the app isn't running on the real subdomain.
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.roomanddine.com'
