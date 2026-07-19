// Web3Forms (https://web3forms.com) — a free, backend-less form-submission service. Get an
// access key by entering your email at web3forms.com (no account/password needed), then set
// VITE_WEB3FORMS_KEY in this project's .env before deploying. Submissions land in that inbox.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export async function submitForm(data: Record<string, string>): Promise<{ ok: boolean; message: string }> {
  if (!ACCESS_KEY) {
    return {
      ok: false,
      message: 'Form isn\'t connected yet — set VITE_WEB3FORMS_KEY in marketing/.env (see README).',
    }
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: ACCESS_KEY, ...data }),
    })
    const json = await res.json()
    if (json.success) return { ok: true, message: 'Thanks — we\'ll be in touch shortly.' }
    return { ok: false, message: json.message || 'Something went wrong. Please try again.' }
  } catch {
    return { ok: false, message: 'Network error — please try again.' }
  }
}
