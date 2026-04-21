import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center sm:p-20">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.18 150 / 0.18), transparent 60%)" }}
          />
          <div className="relative">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">Let's talk</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Ready to make every<br />move count?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Book a free 30-minute strategy call. We'll map out the highest-leverage moves for
              your next quarter.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-secondary/50 px-7 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}