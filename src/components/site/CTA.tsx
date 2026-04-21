import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function CTA({
  eyebrow = "Let's talk",
  title = "Ready to make every move count?",
  subtitle = "Book a free 30-minute strategy call. We'll map out the highest-leverage moves for your next quarter.",
}: CTAProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] clay p-12 text-center sm:p-20">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, oklch(1 0 0 / 0.08), transparent 60%)" }}
          />
          <div className="relative">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-full glass px-7 text-sm font-medium text-foreground hover:bg-white/[0.08]"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}