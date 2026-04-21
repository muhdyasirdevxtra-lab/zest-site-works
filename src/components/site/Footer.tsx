import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">
              U
            </span>
            <span className="text-lg font-semibold text-foreground">Upreach</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A premium digital agency crafting strategy, brand and growth for ambitious teams.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/company" className="text-muted-foreground hover:text-foreground">Company</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services/$slug" params={{ slug: "performance-marketing" }} className="text-muted-foreground hover:text-foreground">Performance</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "social-media-marketing" }} className="text-muted-foreground hover:text-foreground">Social Media</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "seo" }} className="text-muted-foreground hover:text-foreground">SEO</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "google-ads" }} className="text-muted-foreground hover:text-foreground">Google Ads</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "web-development" }} className="text-muted-foreground hover:text-foreground">Web Development</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>hello@upreach.co</li>
            <li>+1 (415) 555-0199</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[var(--glass-border)] px-6 pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Upreach. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}