import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { getCase } from "../data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const study = getCase(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.study.name} — Upreach case study` },
          { name: "description", content: loaderData.study.desc },
          { property: "og:title", content: `${loaderData.study.name} — Upreach` },
          { property: "og:description", content: loaderData.study.desc },
          { property: "og:image", content: loaderData.study.img },
          { name: "twitter:image", content: loaderData.study.img },
        ]
      : [{ title: "Case study — Upreach" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="text-4xl font-semibold text-foreground">Case study not found</h1>
        <Link to="/portfolio" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black">
          See all work
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
  component: CasePage,
});

function CasePage() {
  const { study } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-12">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative mx-auto max-w-5xl px-6">
            <Link to="/portfolio" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
              ← All work
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">{study.category}</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              {study.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{study.desc}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-3xl">
              <img src={study.img} alt={study.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-3">
            <div className="clay p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Organic Traffic</p>
              <p className="mt-3 text-4xl font-semibold text-foreground">↑ {study.traffic}</p>
            </div>
            <div className="clay p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Revenue</p>
              <p className="mt-3 text-4xl font-semibold text-foreground">↑ {study.revenue}</p>
            </div>
            <div className="clay p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Category</p>
              <p className="mt-3 text-2xl font-semibold text-foreground">{study.category}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-3">
            {[
              { t: "Challenge", b: study.challenge },
              { t: "Approach", b: study.approach },
              { t: "Outcome", b: study.outcome },
            ].map((s) => (
              <div key={s.t}>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.t}</p>
                <p className="mt-4 text-lg text-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}