import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Performance",
    title: "The 2025 paid social playbook for DTC brands",
    desc: "Why creative volume — not bidding — is the new growth lever, and how to operationalize it.",
    read: "6 min read",
  },
  {
    tag: "SEO",
    title: "Programmatic SEO without the spam",
    desc: "An editorial framework for shipping thousands of pages users actually want.",
    read: "8 min read",
  },
  {
    tag: "Brand",
    title: "Why your homepage is your most expensive ad",
    desc: "A deep look at converting cold traffic with positioning, not just CRO.",
    read: "5 min read",
  },
];

export function Insights() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Insights</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              From the studio.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Field notes, frameworks and teardowns from the work we ship every week.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group clay p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.tag}</p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.read}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-colors group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}