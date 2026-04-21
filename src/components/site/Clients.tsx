const clients = [
  "Northwind", "Lumen", "Vertex", "ChronoLux", "PureGlow", "UrbanFit", "Elevate", "Forge",
];

export function Clients() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by category-leading brands
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-16">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-2xl font-semibold tracking-tight text-muted-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}