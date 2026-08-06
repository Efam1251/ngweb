/**
 * Shared Web3Forms submit helper for NovaGate public forms.
 * Rejects honeypot fills client-side; Web3Forms also provides spam filtering.
 */

type Web3FormsPayload = Record<string, string>;

type Web3FormsResult = {
  success?: boolean;
  message?: string;
};

export function getWeb3FormsAccessKey(): string | null {
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  return key || null;
}

export async function submitWeb3Form(fields: Web3FormsPayload): Promise<void> {
  const accessKey = getWeb3FormsAccessKey();
  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY (see README).",
    );
  }

  // Honeypot — bots often fill hidden fields; abort without calling the API.
  if (fields.botcheck || fields.company_website) {
    return;
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...fields,
    }),
  });

  const data = (await response.json().catch(() => null)) as Web3FormsResult | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Failed to send message.");
  }
}
