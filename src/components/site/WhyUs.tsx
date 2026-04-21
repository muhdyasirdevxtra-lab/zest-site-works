import processImg from "@/assets/process.jpg";
import { Check } from "lucide-react";

const stats = [
  { value: "98%", label: "Client Success Rate" },
  { value: "200+", label: "Campaigns Launched" },
  { value: "$250K+", label: "Revenue Generated" },
];

export function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={processImg}
              alt="Our team at work"
              width={1280}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Inside our process</p>
            <p className="mt-2 text-lg font-semibold text-foreground">Growth-Driven</p>
            <p className="text-sm text-muted-foreground">KPI-focused for real growth.</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">Why us</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Why we're the right choice
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            We create impactful strategies, refine brand positioning, and drive real results
            through smart content and scalable campaigns.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "10+ years of marketing expertise",
              "Data-backed creative campaigns",
              "Dedicated growth specialists",
              "Transparent reporting, real ROI",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold text-primary sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}