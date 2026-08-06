export type CaseUpdateFormState = {
  name: string;
  email: string;
  phone: string;
  /** Optional — helps staff locate the file faster when the client has it */
  caseNumber: string;
  message: string;
  /** Honeypot — must stay empty */
  company_website: string;
};
