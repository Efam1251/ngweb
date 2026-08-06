export type CaseUpdateFormState = {
  name: string;
  email: string;
  phone: string;
  caseNumber: string;
  service: string;
  dateOfBirth: string;
  message: string;
  /** Honeypot — must stay empty */
  company_website: string;
};
