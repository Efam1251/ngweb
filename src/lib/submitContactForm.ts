import type { FormState } from "@/lib/contactTypes";
import { SITE } from "@/data/site";

export type { FormState } from "@/lib/contactTypes";

type SubmitOptions = {
  serviceLabel: string;
  locale: string;
};

function submissionSource(locale: string): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/${locale}/contact`;
  }
  return `${SITE.url}/${locale}/contact`;
}

/**
 * Sends consultation requests via Web3Forms.
 * Keep payload to clean labeled fields only (no custom html body).
 */
export async function submitContactForm(
  payload: FormState,
  options: SubmitOptions,
): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY (see README).",
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim() || "Not provided";
  const service = options.serviceLabel;
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
      replyto: email,
      email,
      "Client Name": name,
      Phone: phone,
      "Service Interest": service,
      Message: message,
      Language: options.locale === "es" ? "Spanish" : "English",
      Source: submissionSource(options.locale),
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
