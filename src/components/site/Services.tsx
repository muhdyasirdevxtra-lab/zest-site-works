import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Services overview
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Crafted solutions for
              <br />
              modern brands.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From strategy to execution — every engagement is engineered to move the metrics that
            matter most to your business.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, short }) => (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              className="group relative clay p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{short}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}