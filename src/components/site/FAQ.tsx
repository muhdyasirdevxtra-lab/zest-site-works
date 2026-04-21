import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do engagements typically start?",
    a: "Every engagement starts with a 30-minute discovery call followed by a tailored proposal. Most clients begin with a 60-day strategy + activation sprint.",
  },
  {
    q: "Do you work on retainer or per-project?",
    a: "Both. Performance and content programs are usually monthly retainers; web builds and rebrands are scoped per project.",
  },
  {
    q: "What size companies do you work with?",
    a: "Mostly Series A–C SaaS and 7-to-9-figure DTC brands. We're senior-only — no juniors on accounts.",
  },
  {
    q: "How do you measure success?",
    a: "We agree on north-star KPIs upfront — pipeline, revenue, CAC payback, organic sessions — and report against them weekly.",
  },
  {
    q: "Where is the team based?",
    a: "Distributed across San Francisco, New York and London. We work async with weekly syncs.",
  },
];

export function FAQ() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Can't find what you need? <a href="mailto:hello@upreach.co" className="text-foreground underline underline-offset-4">Email us</a>.
          </p>
        </div>
        <div className="clay p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[var(--glass-border)]">
                <AccordionTrigger className="px-4 text-left text-base font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}