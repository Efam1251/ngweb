import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Seo } from "@/components/seo/Seo";
import { CtaBand } from "@/components/home/CtaBand";
import { ARTICLES, FAQS } from "@/data/content";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${m}/${d}/${y}`;
}

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Immigration Resources"
        description="Read immigration articles, FAQs, and helpful guides from NovaGate Immigration. Practical insights for visas, green cards, citizenship, and family petitions."
        path="/resources"
      />

      <PageHero
        eyebrow="Resources"
        title="Guidance, articles, and answers"
        description="Explore practical explanations from NovaGate Immigration designed to help you prepare thoughtfully—before and during your immigration process."
      />

      <section className="bg-surface-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Articles & guides"
              brand
              title="Insights you can return to"
              description="Practical reading for families and professionals preparing for the next step."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ARTICLES.map((article, index) => (
              <Reveal key={article.slug} delayMs={index * 70}>
                <article className="group flex h-full flex-col border border-line bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_45px_rgba(10,26,47,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {article.category}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-navy text-balance">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted">
                    <span>{formatDate(article.date)}</span>
                    <span>{article.readMinutes} min read</span>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
                  >
                    Ask us about this topic
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-pearl py-24 sm:py-28">
        <Container narrow>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Straight answers to the questions clients ask most often."
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.q} delayMs={index * 50}>
                <details className="group border border-line bg-white px-5 py-4 open:border-navy/20">
                  <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {faq.q}
                      <span className="text-gold transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need answers specific to your case?"
        description="Resources are a starting point. A consultation with NovaGate Immigration gives you recommendations based on your history and goals."
      />
    </>
  );
}
