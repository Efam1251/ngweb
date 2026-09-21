import type { FormState } from "@/lib/contactTypes";
import { SITE } from "@/data/site";
import { LEGAL_VERSION } from "@/data/legal";
import { buildConsultationEmailText } from "@/lib/emailTemplates";
import { submitWeb3Form } from "@/lib/web3forms";

export type { FormState } from "@/lib/contactTypes";

type SubmitOptions = {
  serviceLabel: string;
  locale: string;
  acceptedLegal: boolean;
};

function submissionSource(locale: string): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/${locale}/contact`;
  }
  return `${SITE.url}/${locale}/contact`;
}

/**
 * Sends consultation requests via Web3Forms with a structured message body.
 */
export async function submitContactForm(
  payload: FormState,
  options: SubmitOptions,
): Promise<void> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim() || "Not provided";
  const service = options.serviceLabel;
  const message = payload.message.trim();
  const language = options.locale === "es" ? "Spanish" : "English";
  const source = submissionSource(options.locale);

  await submitWeb3Form({
    subject: `Consultation Request – ${name} – ${service}`,
    from_name: `${SITE.shortName} Website`,
    replyto: email,
    email,
    name,
    message: buildConsultationEmailText({
      name,
      email,
      phone,
      service,
      message,
      language,
      source,
      legalConsent: options.acceptedLegal
        ? `Privacy Policy and Terms of Service v${LEGAL_VERSION} accepted at ${new Date().toISOString()}`
        : "Not recorded",
    }),
    botcheck: "",
    company_website: payload.company_website?.trim() || "",
  });
}
