import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { caseStudies } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Upreach selected work" },
      { name: "description", content: "Selected case studies from Upreach — measurable outcomes for ambitious brands." },
      { property: "og:title", content: "Portfolio — Upreach" },
      { property: "og:description", content: "Selected case studies and outcomes." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              Work we're proud of.
            </h1>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/portfolio/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden clay transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass text-foreground transition-colors group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
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