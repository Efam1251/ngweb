import { SITE } from "@/data/site";
import { LEGAL_VERSION } from "./constants";
import type { LegalDocument } from "./types";

export const termsEn: LegalDocument = {
  kind: "terms",
  version: LEGAL_VERSION,
  lastUpdated: "September 21, 2026",
  intro: `These Terms of Service govern your use of ${SITE.url} and related consulting services from ${SITE.name}. By using this website or submitting a form, you agree to these terms. Our Privacy Policy is part of these terms.`,
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        {
          type: "p",
          text: `${SITE.name} provides immigration consulting and document-preparation support. We are not a law firm. We do not appear in immigration court. We do not create an attorney-client relationship by publishing this website or answering a first inquiry.`,
        },
        {
          type: "p",
          text: `You can reach us at ${SITE.email} or ${SITE.phone}. Our office is at ${SITE.addressLines.join(", ")}.`,
        },
      ],
    },
    {
      id: "using-the-website",
      title: "Using this website",
      blocks: [
        {
          type: "p",
          text: "You may read our pages, request a consultation, or (if you are already a client) request a case update. Use the site only for lawful purposes. Do not submit false information, probe the site for weaknesses, or send malware.",
        },
        {
          type: "p",
          text: "This website does not include a public client portal. You cannot open a self-service account here. Case files are kept in our internal office system.",
        },
      ],
    },
    {
      id: "forms-and-consent",
      title: "Forms and active consent",
      blocks: [
        {
          type: "p",
          text: "Before you send a consultation or case-update form, you must check the box that you have read this Terms of Service and our Privacy Policy. That check is your active consent to the version named on the form. We record the version and the time.",
        },
        {
          type: "p",
          text: "Submitting a form does not guarantee that we will take your case. We will reply using the contact details you provide.",
        },
      ],
    },
    {
      id: "accuracy",
      title: "Your responsibility for accurate information",
      blocks: [
        {
          type: "p",
          text: "Immigration filings depend on true and complete facts. You agree to give us information that is accurate to the best of your knowledge. If something changes, tell us promptly.",
        },
        {
          type: "p",
          text: "You are responsible for decisions you make, including whether to file and what evidence to include. Government agencies make their own decisions. We cannot promise an approval.",
        },
      ],
    },
    {
      id: "case-status",
      title: "USCIS case-status checks",
      blocks: [
        {
          type: "p",
          text: "If you give us a USCIS receipt number, we may look up the public status of that case on the official USCIS Case Status system. We do this to advise you. USCIS operates that system under its own rules.",
        },
        {
          type: "p",
          text: "You may ask us not to run an optional status check. We may still need the receipt number to identify your file.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      blocks: [
        {
          type: "p",
          text: "Our Privacy Policy describes the data we collect, how we use it, who we share it with, and how you can delete it or close your file. It also explains that we do not sell personal information.",
        },
      ],
    },
    {
      id: "delete-and-close",
      title: "Deleting data and closing the relationship",
      blocks: [
        {
          type: "p",
          text: `There is no website account to close. To delete personal information or to end a client relationship, email ${SITE.email} with “Delete my data” or “Close my file” in the subject line. We will complete a verifiable deletion request within 30 days, except records the law requires us to keep.`,
        },
      ],
    },
    {
      id: "ownership-change",
      title: "If the firm is sold or closed",
      blocks: [
        {
          type: "p",
          text: "If ownership of the firm or of client files transfers, we will notify you. The buyer must follow our Privacy Policy, or a policy that is at least as protective. If that is not possible, you may ask us to dispose of, transmit, or give you a copy of your health information, including medical exam records.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Our content",
      blocks: [
        {
          type: "p",
          text: "The text, branding, and layout on this website belong to us or to our licensors. You may not copy the site for a competing service. You may share a page link. Visa Bulletin tables we summarize come from public U.S. government sources. Always confirm dates on the official government site before you file.",
        },
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      blocks: [
        {
          type: "p",
          text: "The website is provided as is. Immigration rules change. Pages can contain errors or become out of date. We do not warrant that the site will always be available or free of defects.",
        },
      ],
    },
    {
      id: "liability",
      title: "Limit of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent allowed by law, we are not liable for indirect, incidental, or consequential damages that arise from your use of this website. For paid consulting work, any limit of liability will be stated in the engagement terms you sign with us. Those engagement terms control if they conflict with this page.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "When we change these terms, we will post the new version with a new date and version number. We will include a short, plain-language summary of what changed. We will email you if the change is material.",
        },
        {
          type: "p",
          text: "We will ask for active consent before you submit a new website form under the new version. If we add a client login later, we will ask you to accept the new terms before you use it.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      blocks: [
        {
          type: "p",
          text: "These terms are governed by the laws of the State of New Hampshire, without regard to conflict-of-law rules. If a court finds a part of these terms unenforceable, the rest remains in effect.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: `${SITE.name}. ${SITE.addressLines.join(", ")}. ${SITE.email}. ${SITE.phone}.`,
        },
      ],
    },
    {
      id: "version-history",
      title: "Plain-language summary of changes",
      blocks: [
        {
          type: "p",
          text: `Version ${LEGAL_VERSION} (September 21, 2026): First published terms. They cover website use, form consent, USCIS status checks, deletion and file closure, and notice if the firm is sold.`,
        },
      ],
    },
  ],
};
