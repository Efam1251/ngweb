import { SITE } from "@/data/site";
import { LEGAL_VERSION } from "./constants";
import type { LegalDocument } from "./types";

export const privacyEn: LegalDocument = {
  kind: "privacy",
  version: LEGAL_VERSION,
  lastUpdated: "September 21, 2026",
  intro: `This Privacy Policy explains how ${SITE.name} (“we,” “us”) collects, uses, shares, and deletes personal information. It covers this public website and the internal case-management system we use to serve clients. This website does not offer a public client login.`,
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        {
          type: "p",
          text: `${SITE.name} is an immigration consulting firm in Nashua, New Hampshire. We are not a law firm. We help people prepare immigration cases and understand their options.`,
        },
        {
          type: "p",
          text: `Our public website is ${SITE.url}. You can reach us at ${SITE.email} or ${SITE.phone}.`,
        },
      ],
    },
    {
      id: "what-this-covers",
      title: "What this policy covers",
      blocks: [
        {
          type: "p",
          text: "This policy covers three places where we handle personal information:",
        },
        {
          type: "ul",
          items: [
            "This public website, including the consultation form and the case-update form.",
            "Our internal office system, where we keep client case files.",
            "Official status checks we run with U.S. Citizenship and Immigration Services (USCIS) using a case receipt number.",
          ],
        },
        {
          type: "p",
          text: "There is no client portal on this website. You cannot create a public account here. If we add a client login later, we will update this policy and ask for your active consent before you use it.",
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "The types of data we collect",
      blocks: [
        {
          type: "p",
          text: "We collect only what we need for a consultation or a case. The exact items depend on your matter. They can include:",
        },
        {
          type: "ul",
          items: [
            "Identity data: name, date of birth, place of birth, nationality, gender, photos, and signatures.",
            "Government numbers: Social Security number, A-number, passport number, visa number, and USCIS receipt numbers.",
            "Contact data: email, phone, mailing address, and preferred language.",
            "Family and household data: spouse, children, parents, and other relatives named on a petition. This can include dates of birth and immigration status.",
            "Financial data: income, tax returns, bank records, and sponsor support forms such as Form I-864.",
            "Immigration history: prior filings, travel history, and notices from USCIS, the National Visa Center, or a U.S. consulate.",
            "Medical information when a filing requires it: medical exam dates and copies of forms such as Form I-693.",
            "Case documents: scans of civil records, photos, affidavits, and other evidence you give us.",
            "Website form data: the name, email, phone, service interest, case or receipt number, and message you type on this site.",
            "Technical data on this website: the language you choose (saved on your device) and basic server logs used to keep the site working. We do not collect precise GPS location from your phone. We do not read your contacts list.",
          ],
        },
        {
          type: "p",
          text: "We do not collect genetic test results. Family history we hold is the relationship information you give us for an immigration filing.",
        },
      ],
    },
    {
      id: "how-we-use-data",
      title: "How we use your data",
      blocks: [
        {
          type: "p",
          text: "We use personal information to:",
        },
        {
          type: "ul",
          items: [
            "Answer consultation and case-update requests.",
            "Evaluate eligibility and prepare filings.",
            "Keep an organized case file and calendar of next steps.",
            "Send you status emails and other case notices you ask for.",
            "Look up public USCIS case status with a receipt number.",
            "Bill for our services and keep required business records.",
            "Protect our systems, prevent spam, and handle security incidents.",
            "Comply with law and professional record-keeping duties.",
          ],
        },
        {
          type: "p",
          text: "We do not use your data for advertising networks. We do not sell or rent mailing lists.",
        },
        {
          type: "p",
          text: "We do not share de-identified, anonymized, or pseudonymized data with other companies for their own use. If we ever wanted to do that, we would ask for your active consent first.",
        },
      ],
    },
    {
      id: "who-we-share-with",
      title: "Who we share data with, and why",
      blocks: [
        {
          type: "p",
          text: "We share personal information only as needed to serve you or as required by law. Recipients include:",
        },
        {
          type: "ul",
          items: [
            "USCIS and other U.S. government agencies, when we file a case or check status. The USCIS Case Status system receives a receipt number so we can read the public status of that case. USCIS uses that data under federal law, not under this policy.",
            "The National Visa Center, U.S. consulates, and similar government offices when your case reaches that stage.",
            "Web3Forms, which delivers messages from this website to our inbox.",
            "Cloudflare, which hosts this public website.",
            "Our email, hosting, backup, and document-storage providers that help us run the office system.",
            "Translators, medical exam providers, or other specialists you approve when a filing needs their work.",
            "A licensed attorney or accredited representative if you ask us to involve one.",
          ],
        },
        {
          type: "p",
          text: "We do not share your case file with marketers or data brokers.",
        },
      ],
    },
    {
      id: "we-do-not-sell",
      title: "We do not sell your data",
      blocks: [
        {
          type: "p",
          text: "We do not sell personal information for money or other valuable consideration. We do not sell it for profit or any other monetary transaction. California’s “Do Not Sell or Share” right still applies. You may send that request to the email below. Because we do not sell or share data for advertising, we will confirm that status in our reply.",
        },
      ],
    },
    {
      id: "your-choices",
      title: "Your data-sharing choices, and the risks and limits",
      blocks: [
        {
          type: "p",
          text: "You choose what to send on this website. A consultation form is optional. If you do not want to use the form, email or call us instead.",
        },
        {
          type: "p",
          text: "If you become a client, some sharing is required for us to do the work. We cannot file with USCIS, check a receipt number, or prepare a family petition without the data those steps need.",
        },
        {
          type: "ul",
          items: [
            "Benefit: sharing lets us prepare a complete filing and give you a status update.",
            "Risk: government agencies and vendors that receive data can suffer a breach, as any organization can. Immigration files also contain sensitive facts about you and your family.",
            "Limit: we cannot control how a government agency uses data once we submit a lawful filing. You can ask us not to run an optional USCIS status lookup. You cannot usually withdraw a filing that is already with the government.",
          ],
        },
        {
          type: "p",
          text: "You may refuse optional items, such as a website form or a status-check that is not required to prepare a filing. We will tell you if a request means we cannot continue the work.",
        },
      ],
    },
    {
      id: "family-impact",
      title: "How sharing can affect family members",
      blocks: [
        {
          type: "p",
          text: "Immigration cases often include data about other people. A family petition, a sponsor form, or a household financial packet can include a spouse, child, parent, or household member.",
        },
        {
          type: "p",
          text: "If we share or keep that file, those relatives’ information is part of it. Deleting one person’s data can be limited if the same file is still needed for another person’s case. We will explain that limit if you ask us to delete.",
        },
        {
          type: "p",
          text: "We do not use family or household data to market to relatives. We do not collect genetic test data.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Third parties may not reuse your data without your consent",
      blocks: [
        {
          type: "p",
          text: "Vendors that process data for us may use it only to provide their service to our firm. They may not use or disclose your information — including de-identified, anonymized, or pseudonymized data — for their own purposes without your active consent.",
        },
        {
          type: "p",
          text: "We bind those vendors by contract to protect the data and to follow the limits in this policy.",
        },
        {
          type: "p",
          text: "Government agencies are different. USCIS and other government offices are not our vendors. They are not bound by this Privacy Policy. They follow their own laws. We share with them only what a filing or a status check requires, or what you ask us to send.",
        },
      ],
    },
    {
      id: "breach",
      title: "If there is a data breach",
      blocks: [
        {
          type: "p",
          text: "If a breach of your personal information happens, we will notify you. We will use the email we have on file. We will also call if we have a phone number and email is not enough.",
        },
        {
          type: "p",
          text: "We will do this without unreasonable delay, and sooner if the law requires a shorter time. The notice will say what we know about what happened, what information was involved, and what you can do next. That may include watching your accounts, requesting a government notice copy, or calling us with questions.",
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep data, including dormant files",
      blocks: [
        {
          type: "p",
          text: "Website form messages: if you do not become a client, we keep the message up to 24 months. After that we treat it as dormant and may delete it. You can ask us to delete it sooner.",
        },
        {
          type: "p",
          text: "Client case files: we keep them while we work with you. After the matter ends, we keep records for at least seven years, or longer if the law requires it. A quiet period on this website does not make an open case dormant.",
        },
        {
          type: "p",
          text: "If a client file has had no activity for 24 months and the matter is closed, we may move it to inactive storage until the retention period ends. Backups and audit copies can remain until those systems cycle, then they are overwritten.",
        },
        {
          type: "p",
          text: "Documents we move to internal trash are purged after 90 days, unless a deletion request or a required hold says otherwise.",
        },
      ],
    },
    {
      id: "delete-your-data",
      title: "How to request permanent deletion",
      blocks: [
        {
          type: "p",
          text: `Email ${SITE.email} with the subject line “Delete my data.” You may also call ${SITE.phone} or write to ${SITE.addressLines.join(", ")}. Tell us your full name and the email or phone you used with us.`,
        },
        {
          type: "p",
          text: "We will complete deletion or anonymization within 30 days of a verifiable request, unless the law requires us to keep a record. If we must keep something — for example a copy of a filing already sent to USCIS — we will tell you what we kept and why.",
        },
        {
          type: "p",
          text: "Deletion of a website form is usually straightforward. Deletion of a family case file can be limited if another person’s case still depends on the same documents.",
        },
      ],
    },
    {
      id: "close-account",
      title: "How to close your account or end the relationship",
      blocks: [
        {
          type: "p",
          text: "This website does not create a public user account. There is no login to close on this site.",
        },
        {
          type: "p",
          text: `To stop website messages, email ${SITE.email} and ask us not to contact you for marketing or follow-up. To end a client relationship, email the same address with the subject “Close my file.” We will confirm within 30 days. We may still keep records we are required to keep, as described above.`,
        },
      ],
    },
    {
      id: "sale-of-business",
      title: "If we sell the firm or transfer ownership",
      blocks: [
        {
          type: "p",
          text: "If we sell, merge, or close the business, or if ownership of client files transfers, we will notify you. We will use the email we have on file.",
        },
        {
          type: "p",
          text: "The new owner must follow this Privacy Policy, or a policy that is at least as protective. If that is not possible, you may choose one of these options for your health information, including medical exam dates and Form I-693 records:",
        },
        {
          type: "ul",
          items: [
            "Ask us to dispose of it securely.",
            "Ask us to transmit it to you or to a provider you name.",
            "Ask us to give you a copy you can download or receive by secure email.",
          ],
        },
      ],
    },
    {
      id: "ccpa",
      title: "California privacy rights (CCPA / CPRA)",
      blocks: [
        {
          type: "p",
          text: "If you are a California resident, you have the right to know what personal information we collect, use, and share; to delete it, except where we are required to keep it; to correct it; to opt out of sale or sharing for cross-context advertising (we do not sell or share in that way); to limit the use of sensitive personal information to what is needed for the services you requested; and not to receive discriminatory treatment for exercising these rights.",
        },
        {
          type: "p",
          text: `To use these rights, email ${SITE.email} with the subject “California privacy request.” We will verify your identity and respond within 45 days, or tell you if we need more time as the law allows. You may use an authorized agent. We will not require you to create an account.`,
        },
      ],
    },
    {
      id: "policy-changes",
      title: "Changes to this policy, and how we get your consent",
      blocks: [
        {
          type: "p",
          text: "When we change this Privacy Policy or our Terms of Service, we will not hide the change. We will post the new version on this website with a new date and version number. We will add a short, plain-language summary of what changed at the bottom of the page.",
        },
        {
          type: "p",
          text: "We will also email the address we have for you when the change is material. For website forms, you must check a new consent box that names the new version before you submit. That checkbox is active consent. We keep a record of the version and the time you accepted.",
        },
        {
          type: "p",
          text: "If we later add a client login, we will block use of that login until you accept the new version.",
        },
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        {
          type: "p",
          text: "This website is not directed at children under 13. We may hold a child’s information when a parent or guardian hires us for a family immigration case. In that event we use the data only for the case.",
        },
      ],
    },
    {
      id: "contact",
      title: "How to contact us about privacy",
      blocks: [
        {
          type: "p",
          text: `${SITE.name}, ${SITE.addressLines.join(", ")}. Email ${SITE.email}. Phone ${SITE.phone}.`,
        },
        {
          type: "p",
          text: "Please use this contact for deletion, account closure, California requests, and questions about this policy.",
        },
      ],
    },
    {
      id: "version-history",
      title: "Plain-language summary of changes",
      blocks: [
        {
          type: "p",
          text: `Version ${LEGAL_VERSION} (September 21, 2026): First published policy. It covers the public website, our internal case files, USCIS status lookups, the rule that we do not sell data, deletion within 30 days, family-file limits, breach notice, and what happens if the firm is sold.`,
        },
      ],
    },
  ],
};
