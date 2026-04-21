import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/Mission";
import { Clients } from "@/components/site/Clients";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Insights } from "@/components/site/Insights";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upreach — Grow your business, master every move" },
      {
        name: "description",
        content:
          "Upreach helps businesses thrive with high-converting digital strategies, brand building, and measurable growth campaigns.",
      },
      { property: "og:title", content: "Upreach — Marketing & growth agency" },
      {
        property: "og:description",
        content: "High-converting marketing strategies designed to scale your business.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <CTA
          eyebrow="Start a project"
          title="Move faster with a senior team."
          subtitle="Book a 30-minute intro call. We'll map out the highest-leverage moves for your next quarter."
        />
        <Services />
        <Testimonials />
        <CTA />
        <FAQ />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}
