/**
 * Structured plain-text email bodies for Web3Forms.
 * Keep submissions to reserved fields + a single `message` so the inbox
 * stays readable (Web3Forms otherwise dumps every custom field as a raw list).
 */

export function buildCaseUpdateEmailText(data: {
  name: string;
  email: string;
  phone: string;
  caseNumber: string;
  message: string;
  language: string;
  source: string;
}): string {
  const caseLabel = data.caseNumber.trim() || "Not provided";
  const phone = data.phone.trim() || "Not provided";

  return [
    "CASE UPDATE REQUEST",
    "===================",
    "",
    "CLIENT",
    "------",
    `Name:  ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${phone}`,
    "",
    "CASE IDENTIFICATION",
    "-------------------",
    `Case / receipt number: ${caseLabel}`,
    `Language:              ${data.language}`,
    "",
    "CLIENT REQUEST",
    "--------------",
    data.message,
    "",
    "NEXT STEP",
    "---------",
    "1. Look up this client in SystemImmi (email, phone, or case number).",
    "2. Reply to this email to respond directly to the client.",
    "",
    `Source: ${data.source}`,
  ].join("\n");
}

export function buildConsultationEmailText(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  language: string;
  source: string;
}): string {
  return [
    "CONSULTATION REQUEST",
    "====================",
    "",
    "CONTACT",
    "-------",
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone}`,
    `Service:  ${data.service}`,
    `Language: ${data.language}`,
    "",
    "MESSAGE",
    "-------",
    data.message,
    "",
    "NEXT STEP",
    "---------",
    "Reply to this email to follow up with the prospect.",
    "",
    `Source: ${data.source}`,
  ].join("\n");
}
