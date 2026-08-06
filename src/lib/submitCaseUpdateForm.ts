import type { CaseUpdateFormState } from "@/lib/caseUpdateTypes";
import { SITE } from "@/data/site";
import { buildCaseUpdateEmailText } from "@/lib/emailTemplates";
import { submitWeb3Form } from "@/lib/web3forms";

export type { CaseUpdateFormState } from "@/lib/caseUpdateTypes";

type SubmitOptions = {
  locale: string;
};

function submissionSource(locale: string): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/${locale}/case-update`;
  }
  return `${SITE.url}/${locale}/case-update`;
}

/**
 * Sends case-update requests via Web3Forms.
 * Uses a single structured `message` body so the inbox email stays readable
 * (avoids Web3Forms dumping many raw custom fields as a messy list).
 */
export async function submitCaseUpdateForm(
  payload: CaseUpdateFormState,
  options: SubmitOptions,
): Promise<void> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const caseNumber = payload.caseNumber.trim();
  const message = payload.message.trim();
  const language = options.locale === "es" ? "Spanish" : "English";
  const source = submissionSource(options.locale);

  const subject = caseNumber
    ? `Case Update Request – ${caseNumber} – ${name}`
    : `Case Update Request – ${name}`;

  await submitWeb3Form({
    subject,
    from_name: `${SITE.shortName} Website`,
    replyto: email,
    email,
    name,
    message: buildCaseUpdateEmailText({
      name,
      email,
      phone,
      caseNumber,
      message,
      language,
      source,
    }),
    botcheck: "",
    company_website: payload.company_website?.trim() || "",
  });
}
