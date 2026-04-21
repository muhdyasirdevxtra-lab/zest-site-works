import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { getService, services } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Upreach` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — Upreach` },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [{ title: "Service — Upreach" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="text-4xl font-semibold text-foreground">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black">
          See all services
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-5xl px-6">
            <Link to="/services" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
              ← All services
            </Link>
            <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl glass text-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.intro}</p>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Our process</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              How we work.
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <div key={p.step} className="clay p-7">
                  <p className="text-xs text-muted-foreground">0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{p.step}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Benefits</p>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                What you get.
              </h2>
            </div>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="clay flex items-center gap-4 p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full glass text-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Case study */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="clay relative overflow-hidden p-10 sm:p-16">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Case study</p>
              <h3 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">{service.caseStudy.name}</h3>
              <p className="mt-3 text-2xl text-muted-foreground">{service.caseStudy.metric}</p>
              <p className="mt-6 max-w-2xl text-muted-foreground">{service.caseStudy.desc}</p>
              <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                See more work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTA title={`Ready to start with ${service.title.toLowerCase()}?`} />

        {/* Other services */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">More services</p>
            <div className="grid gap-5 md:grid-cols-3">
              {others.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group clay p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-foreground">
                      <SIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}