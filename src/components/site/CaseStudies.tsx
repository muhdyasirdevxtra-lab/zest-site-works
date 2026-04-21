import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/portfolio";

export function CaseStudies() {
  return (
    <section id="work" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected work</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Success you can see.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A glimpse into our most impactful projects and the measurable outcomes we delivered.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
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
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-x-4 bottom-4 flex gap-2">
                  <span className="rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground">
                    ↑ {c.traffic} Organic Traffic
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black">
                    ↑ {c.revenue} Revenue
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass text-foreground transition-colors group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}