import type { FormState } from "@/lib/contactTypes";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export type { FormState } from "@/lib/contactTypes";

function serviceLabel(serviceId: string): string {
  if (serviceId === "other") return "Other / Not sure";
  const match = SERVICES.find((s) => s.id === serviceId);
  return match?.title ?? serviceId.replace(/-/g, " ");
}

function submissionSource(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/contact`;
  }
  return `${SITE.url}/contact`;
}

/**
 * Sends consultation requests via Web3Forms (works with Cloudflare Pages free).
 *
 * Important: Web3Forms free notifications list each JSON field as-is.
 * Do NOT send a custom `html` body — it appears as a raw "Html" field in Gmail.
 * Keep the payload to clean labeled fields only.
 *
 * Set VITE_WEB3FORMS_ACCESS_KEY in `.env` / Cloudflare Pages env vars.
 */
export async function submitContactForm(payload: FormState): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY (see README).",
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim() || "Not provided";
  const service = serviceLabel(payload.service);
  const message = payload.message.trim();

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New consultation request — ${name} (${service})`,
      from_name: `${SITE.shortName} Website`,
      // Reply in Gmail goes to the client
      replyto: email,
      email,
      "Client Name": name,
      Phone: phone,
      "Service Interest": service,
      Message: message,
      Source: submissionSource(),
    }),
  });

  const data = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Failed to send message.");
  }
}
