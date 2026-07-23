import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { submitContactForm, type FormState } from "@/lib/submitContactForm";

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) errors.service = "Select a service.";
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Please share a brief message (at least 20 characters).";
  }
  return errors;
}

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-line bg-pearl px-3.5 py-3 text-sm text-ink outline-none transition focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const configured = Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim());

  const serviceOptions = useMemo(
    () => SERVICES.map((s) => ({ value: s.id, label: s.title })),
    [],
  );

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
      await submitContactForm(values);
      setDone(true);
      setValues(INITIAL);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We could not send your message. Please email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-accent/20 bg-mist p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-navy">
          Message received
        </h3>
        <p className="mt-3 text-muted">
          Thank you for contacting {SITE.name}. Our team will review your note and
          respond shortly. For urgent matters, call{" "}
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
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {!configured ? (
        <p className="mb-5 rounded-sm border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Contact email is not configured yet. Add{" "}
          <code className="rounded bg-amber-100 px-1">VITE_WEB3FORMS_ACCESS_KEY</code>{" "}
          (see README). Visitors can still reach you at{" "}
          <a className="font-semibold underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Full name
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            className={fieldClass}
          />
          {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
        </label>

        <label className="block text-sm font-semibold text-navy">
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            className={fieldClass}
          />
          {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
        </label>

        <label className="block text-sm font-semibold text-navy">
          Phone
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
          Immigration service needed
          <select
            name="service"
            value={values.service}
            onChange={onChange}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
          {errors.service ? (
            <span className="mt-1 block text-xs text-red-600">{errors.service}</span>
          ) : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-navy">
        Message
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={fieldClass}
          placeholder="Tell us briefly about your immigration goals or questions."
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
        {submitting ? "Sending…" : "Request a Consultation"}
      </Button>
      <p className="mt-3 text-xs text-muted">
        By submitting, you agree to be contacted about your inquiry. We never sell your information.
      </p>
    </form>
  );
}
