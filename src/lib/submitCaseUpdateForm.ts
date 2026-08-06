import type { CaseUpdateFormState } from "@/lib/caseUpdateTypes";
import { SITE } from "@/data/site";
import { submitWeb3Form } from "@/lib/web3forms";

export type { CaseUpdateFormState } from "@/lib/caseUpdateTypes";

type SubmitOptions = {
  serviceLabel: string;
  locale: string;
};

function submissionSource(locale: string): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/${locale}/case-update`;
  }
  return `${SITE.url}/${locale}/case-update`;
}

/**
 * Sends case-update requests via Web3Forms (same channel as consultation form).
 */
export async function submitCaseUpdateForm(
  payload: CaseUpdateFormState,
  options: SubmitOptions,
): Promise<void> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const caseNumber = payload.caseNumber.trim();
  const service = options.serviceLabel;
  const dateOfBirth = payload.dateOfBirth.trim();
  const message = payload.message.trim();

  await submitWeb3Form({
    subject: `Case Update Request – ${caseNumber} – ${name}`,
    from_name: `${SITE.shortName} Website`,
    replyto: email,
    email,
    "Request Type": "Case Update Request",
    "Client Name": name,
    "Email Address": email,
    Phone: phone,
    "Case Number": caseNumber,
    "Case / Service Type": service,
    "Date of Birth": dateOfBirth,
    "Request Details": message,
    Language: options.locale === "es" ? "Spanish" : "English",
    Source: submissionSource(options.locale),
    botcheck: "",
    company_website: payload.company_website?.trim() || "",
  });
}
