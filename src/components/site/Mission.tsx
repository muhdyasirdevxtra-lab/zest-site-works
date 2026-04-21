export function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About Upreach
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            A studio built for ambitious brands.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            We are a small, senior team of strategists, designers and growth engineers — partnering
            with founders and marketing leaders to ship work that compounds.
          </p>
          <p className="text-foreground">
            Strategy first. Crafted execution. Measurable outcomes — every quarter.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { k: "10+", v: "Years experience" },
              { k: "120+", v: "Brands shipped" },
              { k: "4.9★", v: "Client rating" },
            ].map((s) => (
              <div key={s.v} className="clay p-5">
                <p className="text-2xl font-semibold text-foreground">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}