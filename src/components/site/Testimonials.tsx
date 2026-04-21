const items = [
  {
    quote:
      "Upreach transformed our funnel. Within three months we saw a 70% lift in qualified leads — and the team feels like an extension of ours.",
    name: "Sarah Chen",
    role: "CMO, Northwind Co.",
  },
  {
    quote:
      "Sharp strategy, beautiful execution. The campaigns paid for themselves in the first quarter and kept compounding.",
    name: "Marcus Reyes",
    role: "Founder, Lumen Labs",
  },
  {
    quote:
      "From brand identity to paid media, every deliverable was on point. Easily the best agency partner we've worked with.",
    name: "Priya Anand",
    role: "Head of Growth, Vertex",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">Testimonials</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Loved by ambitious teams
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="mb-6 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}