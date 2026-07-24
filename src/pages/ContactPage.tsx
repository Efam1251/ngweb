import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n";

export function ContactPage() {
  const { t } = useI18n();

  const hours = [
    { day: t("hours.weekday"), time: t("hours.weekdayTime") },
    { day: t("hours.saturday"), time: t("hours.saturdayTime") },
    { day: t("hours.sunday"), time: t("hours.sundayTime") },
  ];

  return (
    <>
      <Seo
        title={t("meta.contactTitle")}
        description={t("meta.contactDescription")}
        path="/contact"
      />

      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="bg-surface-soft py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-white p-6 shadow-[0_20px_50px_rgba(10,26,47,0.06)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-navy">
                {t("contact.formTitle")}
              </h2>
              <p className="mt-2 text-sm text-muted">{t("contact.formSubtitle")}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={100}>
            <aside className="h-fit border border-line bg-navy p-7 text-white sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {SITE.name}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                {t("common.officeInfo")}
              </h2>
              <dl className="mt-8 space-y-6 text-sm">
                <div className="flex gap-3">
                  <Icon name="message" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {t("common.email")}
                    </dt>
                    <dd className="mt-1">
                      <a className="font-medium text-gold-soft hover:text-white" href={`mailto:${SITE.email}`}>
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="globe" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {t("common.phone")}
                    </dt>
                    <dd className="mt-1">
                      <a className="font-medium text-white" href={SITE.phoneHref}>
                        {SITE.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="compass" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {t("common.address")}
                    </dt>
                    <dd className="mt-1 space-y-0.5 text-white/85">
                      {SITE.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="w-full">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {t("common.hours")}
                    </dt>
                    <dd className="mt-2 space-y-2 text-white/85">
                      {hours.map((row) => (
                        <div key={row.day} className="flex justify-between gap-4">
                          <span>{row.day}</span>
                          <span className="text-white/55">{row.time}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
