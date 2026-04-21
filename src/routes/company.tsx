import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — About Upreach" },
      { name: "description", content: "About Upreach: our mission, vision and the senior team behind every engagement." },
      { property: "og:title", content: "Company — Upreach" },
      { property: "og:description", content: "Mission, vision and team behind Upreach." },
    ],
  }),
  component: CompanyPage,
});

const team = [
  { name: "Ava Mendes", role: "Founder & Strategy" },
  { name: "Jordan Kim", role: "Creative Director" },
  { name: "Priya Anand", role: "Head of Growth" },
  { name: "Marcus Reyes", role: "Engineering Lead" },
];

function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-20">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Company</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              A senior studio for serious brands.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Founded in 2018. Distributed across SF, NY and London. Built to do the best work of
              our careers — together with our clients.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            <div className="clay p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mission</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                Help ambitious brands compound — every quarter.
              </h2>
              <p className="mt-6 text-muted-foreground">
                We exist to translate strategy into measurable, defensible growth — without the
                bloat of legacy agencies.
              </p>
            </div>
            <div className="clay p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Vision</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                The most respected studio for premium brands.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Senior-only. Craft-obsessed. Outcomes-led. We want the work to outlive the
                engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Team</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Senior, end-to-end.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="clay p-6 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
                  <p className="mt-4 font-semibold text-foreground">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}