import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Seo } from "@/components/seo/Seo";
import { SITE } from "@/data/site";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found on the NovaGate ImmiServices, Llc website."
        path="/404"
      />
      <section className="flex min-h-[75dvh] items-center bg-surface-soft py-28">
        <Container className="max-w-xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            404
          </p>
          <p className="mt-4 font-display text-2xl font-semibold text-navy">
            {SITE.name}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-muted">
            The page you are looking for may have moved or no longer exists.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/" variant="gold">
              Return home
            </Button>
            <Button to="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
