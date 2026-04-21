import heroPortrait from "@/assets/hero-portrait.jpg";
import { Trophy, TrendingUp, Zap, Smile } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Grow your business,
            <br />
            master every <span className="italic text-primary">move.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            Helping businesses thrive with innovative digital strategies, creative solutions, and
            measurable outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              Book a call
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-secondary/50 px-7 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Learn more
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
            <span className="uppercase tracking-widest text-xs">Trusted by</span>
            <div className="flex items-center gap-8 opacity-60">
              <span className="text-base font-semibold tracking-tight">◎ Northwind</span>
              <span className="text-base font-semibold tracking-tight">✦ Lumen</span>
              <span className="text-base font-semibold tracking-tight">◇ Vertex</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={heroPortrait}
              alt="Business consultant"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background/40 backdrop-blur">
              <Smile className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="animate-float absolute -left-4 top-24 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Trophy className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-foreground">2k+ Success Stories</span>
          </div>

          <div className="animate-float absolute -right-2 bottom-12 hidden rounded-2xl border border-border bg-card/90 p-4 backdrop-blur sm:block" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Your Growth, Our Mission</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  <span className="font-semibold text-primary">+65%</span> ROI Boost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}