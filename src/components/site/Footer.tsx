import { Plus } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="text-xl font-semibold text-foreground">Upreach</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Helping ambitious businesses scale with strategy, creative, and measurable performance.
          </p>
        </div>
        {[
          { title: "Company", links: ["About", "Work", "Careers", "Blog"] },
          { title: "Services", links: ["Marketing", "Consulting", "Branding", "Content"] },
          { title: "Contact", links: ["hello@upreach.co", "+1 (415) 555-0199", "San Francisco, CA"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-foreground">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border px-6 pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Upreach. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}