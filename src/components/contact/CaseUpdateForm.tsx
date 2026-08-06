import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";
import {
  submitCaseUpdateForm,
  type CaseUpdateFormState,
} from "@/lib/submitCaseUpdateForm";
import { useI18n } from "@/i18n";

type FormErrors = Partial<Record<keyof CaseUpdateFormState, string>>;

const INITIAL: CaseUpdateFormState = {
  name: "",
  email: "",
  phone: "",
  caseNumber: "",
  message: "",
  company_website: "",
};

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-line bg-pearl px-3.5 py-3 text-sm text-ink outline-none transition focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15";

const honeypotClass =
  "absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0";

export function CaseUpdateForm() {
  const { t, locale } = useI18n();
  const [values, setValues] = useState<CaseUpdateFormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const configured = Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim());

  const validate = (form: CaseUpdateFormState): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t("caseUpdate.errName");
    if (!form.email.trim()) next.email = t("caseUpdate.errEmail");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = t("caseUpdate.errEmailInvalid");
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      next.message = t("caseUpdate.errMessage");
    }
    return next;
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    try {
      await submitCaseUpdateForm(values, { locale });
      setDone(true);
      setValues(INITIAL);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We could not send your request. Please email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-accent/20 bg-mist p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-navy">
          {t("caseUpdate.successTitle")}
        </h3>
        <p className="mt-3 text-muted">
          {t("caseUpdate.successBody")}{" "}
          <a className="font-semibold text-accent" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          .
        </p>
        <Button
          type="button"
          className="mt-6"
          variant="secondary"
          onClick={() => setDone(false)}
        >
          {t("caseUpdate.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {!configured ? (
        <p className="mb-5 rounded-sm border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {t("caseUpdate.notConfigured")}{" "}
          <a className="font-semibold underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      ) : null}

      <p className="mb-6 rounded-sm border border-line bg-pearl/80 px-3.5 py-3 text-sm leading-relaxed text-muted">
        {t("caseUpdate.accuracyNote")}
      </p>

      <label className={honeypotClass} aria-hidden="true">
        Company website
        <input
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={values.company_website}
          onChange={onChange}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          {t("caseUpdate.name")}
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            className={fieldClass}
          />
          {errors.name ? (
            <span className="mt-1 block text-xs text-red-600">{errors.name}</span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-navy">
          {t("caseUpdate.email")}
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            className={fieldClass}
          />
          {errors.email ? (
            <span className="mt-1 block text-xs text-red-600">{errors.email}</span>
          ) : null}
        </label>

        <label className="block text-sm font-semibold text-navy">
          {t("caseUpdate.phone")}
          <span className="ml-1 font-normal text-muted">({t("caseUpdate.optional")})</span>
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            autoComplete="tel"
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-semibold text-navy">
          {t("caseUpdate.caseNumber")}
          <span className="ml-1 font-normal text-muted">({t("caseUpdate.optional")})</span>
          <input
            name="caseNumber"
            value={values.caseNumber}
            onChange={onChange}
            autoComplete="off"
            className={fieldClass}
            placeholder={t("caseUpdate.caseNumberPlaceholder")}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-navy">
        {t("caseUpdate.message")}
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={fieldClass}
          placeholder={t("caseUpdate.messagePlaceholder")}
        />
        {errors.message ? (
          <span className="mt-1 block text-xs text-red-600">{errors.message}</span>
        ) : null}
      </label>

      {submitError ? (
        <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" className="mt-6 w-full sm:w-auto" variant="gold" disabled={submitting}>
        {submitting ? t("caseUpdate.sending") : t("caseUpdate.submit")}
      </Button>
      <p className="mt-3 text-xs text-muted">{t("caseUpdate.privacy")}</p>
    </form>
  );
}
