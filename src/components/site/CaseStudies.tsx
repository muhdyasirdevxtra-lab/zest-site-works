import fashion from "@/assets/case-fashion.jpg";
import skincare from "@/assets/case-skincare.jpg";
import gym from "@/assets/case-gym.jpg";
import watch from "@/assets/case-watch.jpg";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    img: fashion,
    name: "Elevate Fashion",
    desc: "Increased sales through influencer marketing and social media ads.",
    traffic: "70%",
    revenue: "85%",
  },
  {
    img: skincare,
    name: "PureGlow Skincare",
    desc: "Boosted brand trust with content marketing and targeted ads.",
    traffic: "65%",
    revenue: "75%",
  },
  {
    img: gym,
    name: "UrbanFit Gym",
    desc: "Increased sign-ups through engaging digital campaigns and promotions.",
    traffic: "75%",
    revenue: "88%",
  },
  {
    img: watch,
    name: "ChronoLux",
    desc: "Implemented a data-driven SEO and PPC strategy, boosting visibility.",
    traffic: "70%",
    revenue: "75%",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="border-y border-border bg-secondary/20 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">Case studies</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Success you can see
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A glimpse into our most impactful projects and the measurable outcomes we delivered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 flex gap-2">
                  <span className="rounded-full bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                    ↑ {c.traffic} Organic Traffic
                  </span>
                  <span className="rounded-full bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground">
                    ↑ {c.revenue} Revenue
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}