import { Link } from "react-router-dom";
import { LEGAL_VERSION } from "@/data/legal";
import { useI18n } from "@/i18n";

type LegalConsentFieldProps = {
  checked: boolean;
  onChange: (next: boolean) => void;
  error?: string;
};

export function LegalConsentField({
  checked,
  onChange,
  error,
}: LegalConsentFieldProps) {
  const { t, pathFor } = useI18n();

  return (
    <div className="mt-6">
      <label className="flex items-start gap-3 text-base leading-relaxed text-ink">
        <input
          type="checkbox"
          name="legalConsent"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded-sm border-line text-accent focus:ring-accent/30"
        />
        <span>
          {t("legal.consentLead")}{" "}
          <Link
            to={pathFor("privacy")}
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          >
            {t("legal.privacyPolicy")}
          </Link>{" "}
          {t("legal.consentAnd")}{" "}
          <Link
            to={pathFor("terms")}
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          >
            {t("legal.termsOfService")}
          </Link>{" "}
          {t("legal.consentVersion", { version: LEGAL_VERSION })}
        </span>
      </label>
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
