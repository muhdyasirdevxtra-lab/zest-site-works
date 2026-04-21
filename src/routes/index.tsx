import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
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
        <Mission />
        <Services />
        <WhyUs />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
