import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Upreach digital agency" },
      {
        name: "description",
        content:
          "Performance marketing, SEO, social, Google Ads, web development and content — premium services for ambitious brands.",
      },
      { property: "og:title", content: "Services — Upreach" },
      { property: "og:description", content: "Premium digital services for ambitious brands." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              Crafted services. <span className="italic text-muted-foreground">Real outcomes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Six disciplines, one senior team. Pick a starting point — we'll build the rest of the
              system around it.
            </p>
          </div>
        </section>

        <section className="pb-32">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, short }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group clay p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                  View service <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}