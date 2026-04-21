import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute left-1/2 top-1/3 -z-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-12 text-center animate-fade-up">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" /> Premium digital agency
        </div>

        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[88px]">
          Grow your business,
          <br />
          master every <span className="italic text-muted-foreground">move.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          A premium digital studio crafting performance-driven strategy, brand systems and
          campaigns that move the metrics that matter.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center rounded-full glass px-7 text-sm font-medium text-foreground hover:bg-white/[0.08]"
          >
            Explore services
          </Link>
        </div>

        {/* Floating glass stat cards */}
        <div className="relative mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "+65%", l: "ROI boost" },
            { v: "200+", l: "Campaigns" },
            { v: "98%", l: "Retention" },
            { v: "$25M", l: "Revenue driven" },
          ].map((s) => (
            <div key={s.l} className="clay p-5 text-left">
              <p className="text-2xl font-semibold text-foreground sm:text-3xl">{s.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}