import { Megaphone, Briefcase, Target, Sparkles, PenLine, Compass } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Optimize advanced funnels, automate processes, and boost customer conversions to generate qualified leads.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    desc: "Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    desc: "Crafting compelling, SEO-optimized content that boosts engagement, authority, and conversions.",
  },
  {
    icon: Compass,
    title: "Strategic Planning",
    desc: "Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">What we offer</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Comprehensive solutions
              <br />
              for business success.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From strategy to execution, every service is engineered to move the metrics that matter
            most to your business.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}