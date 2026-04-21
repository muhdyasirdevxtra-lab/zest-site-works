import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Company", to: "/company" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-background/75 backdrop-blur-xl border-b border-[var(--glass-border)]"
            : "bg-transparent"
        }`}
      />
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-white text-black font-bold">
            U
          </span>
          <span className="text-lg font-semibold tracking-tight">Upreach</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-underline text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-all hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden relative mx-4 mt-2 rounded-2xl glass-strong p-4">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-white text-sm font-medium text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}