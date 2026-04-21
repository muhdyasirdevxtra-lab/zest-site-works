import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Upreach" },
      { name: "description", content: "Tell us about your project. We'll reply within one business day." },
      { property: "og:title", content: "Contact — Upreach" },
      { property: "og:description", content: "Start a project with Upreach." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-40 pb-12">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              Let's build something <span className="italic text-muted-foreground">unmissable.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Tell us about your business. We'll reply within one business day with next steps.
            </p>
          </div>
        </section>

        <section className="pb-32 pt-12">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
              <div className="clay p-6">
                <Mail className="h-5 w-5 text-foreground" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                <p className="mt-2 text-foreground">hello@upreach.co</p>
              </div>
              <div className="clay p-6">
                <Phone className="h-5 w-5 text-foreground" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                <p className="mt-2 text-foreground">+1 (415) 555-0199</p>
              </div>
              <div className="clay p-6">
                <MapPin className="h-5 w-5 text-foreground" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Studios</p>
                <p className="mt-2 text-foreground">San Francisco · New York · London</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="clay p-8 sm:p-10"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <h3 className="text-2xl font-semibold text-foreground">Thanks — we'll be in touch.</h3>
                  <p className="mt-3 text-muted-foreground">We typically reply within one business day.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field label="Email" name="email" type="email" placeholder="jane@brand.com" required />
                  </div>
                  <Field label="Company" name="company" placeholder="Brand Inc." />
                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Project</label>
                    <textarea
                      name="project"
                      rows={5}
                      required
                      placeholder="Tell us about goals, timing and budget…"
                      className="mt-2 w-full rounded-2xl border border-[var(--glass-border)] bg-white/[0.03] px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-full border border-[var(--glass-border)] bg-white/[0.03] px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
      />
    </div>
  );
}