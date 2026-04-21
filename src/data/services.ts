import {
  TrendingUp,
  Share2,
  Search,
  MousePointerClick,
  Code2,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug:
    | "performance-marketing"
    | "social-media-marketing"
    | "seo"
    | "google-ads"
    | "web-development"
    | "content-marketing";
  title: string;
  short: string;
  intro: string;
  icon: LucideIcon;
  process: { step: string; desc: string }[];
  benefits: string[];
  caseStudy: { name: string; metric: string; desc: string };
};

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Paid acquisition systems engineered for compounding ROI across every channel.",
    intro:
      "We design and operate full-funnel paid media programs across Meta, TikTok, YouTube and programmatic — built around incrementality, not vanity metrics.",
    icon: TrendingUp,
    process: [
      { step: "Audit & Forecast", desc: "Deep account audit, MMM-light forecast, north-star KPIs." },
      { step: "Creative System", desc: "Modular creative built to test angles, hooks and offers." },
      { step: "Launch & Scale", desc: "Disciplined experimentation, daily optimization, weekly readouts." },
      { step: "Compound", desc: "LTV-led bidding, retention loops, lifecycle integration." },
    ],
    benefits: [
      "Lower CAC, higher LTV",
      "Channel-agnostic media plans",
      "Creative built to test fast",
      "Transparent dashboards",
    ],
    caseStudy: {
      name: "Elevate Fashion",
      metric: "+85% revenue in 90 days",
      desc: "Restructured paid social, launched UGC creative system, scaled spend 4x at stable ROAS.",
    },
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Build an audience that actually converts — content systems with a point of view.",
    intro:
      "Editorial-grade social strategy and production for brands that want a real presence, not just a feed.",
    icon: Share2,
    process: [
      { step: "Brand Voice", desc: "Define tone, pillars and visual system." },
      { step: "Content System", desc: "Repeatable formats and a quarterly editorial calendar." },
      { step: "Production", desc: "Photo, motion and short-form video, weekly cadence." },
      { step: "Community", desc: "Engagement, DMs and conversion handoff." },
    ],
    benefits: ["Distinct brand voice", "Always-on production", "Measurable engagement", "Community-led growth"],
    caseStudy: {
      name: "PureGlow Skincare",
      metric: "+220% follower growth",
      desc: "Repositioned editorial voice and shipped weekly short-form to 2M monthly views.",
    },
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Programmatic and editorial SEO that compounds traffic — and pipeline.",
    intro:
      "Technical SEO, content design and link earning — engineered for organic compounding revenue.",
    icon: Search,
    process: [
      { step: "Tech Audit", desc: "Crawl, indexation, schema, Core Web Vitals." },
      { step: "Content Strategy", desc: "Topical maps, intent clusters, briefs that rank." },
      { step: "Production", desc: "Editorial pipeline + programmatic templates." },
      { step: "Authority", desc: "Digital PR and link earning at scale." },
    ],
    benefits: ["Compounding traffic", "Defensible moats", "Pipeline-grade keywords", "Editorial quality"],
    caseStudy: {
      name: "ChronoLux",
      metric: "+70% organic traffic",
      desc: "Rebuilt site architecture, shipped 60 cluster pages, ranked top-3 on commercial terms.",
    },
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    short: "High-intent paid search engineered to capture and convert demand.",
    intro:
      "Search, Performance Max and YouTube — structured for precision, profit and signal quality.",
    icon: MousePointerClick,
    process: [
      { step: "Account Architecture", desc: "Restructure for signal and control." },
      { step: "Conversion Tracking", desc: "Server-side, enhanced conversions, value-based bidding." },
      { step: "Creative & Copy", desc: "Responsive search and video at scale." },
      { step: "Profit Optimization", desc: "Margin-aware bidding and bid adjustments." },
    ],
    benefits: ["Higher quality leads", "Lower CPA", "Smart bidding fed real signal", "Weekly insights"],
    caseStudy: {
      name: "UrbanFit Gym",
      metric: "-38% CPA",
      desc: "Restructured campaigns, launched value-based bidding, doubled qualified sign-ups.",
    },
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Premium websites and product UI engineered to convert and scale.",
    intro:
      "Design-led, performance-obsessed sites and apps built on modern stacks — Next.js, TanStack, headless CMS.",
    icon: Code2,
    process: [
      { step: "Discovery", desc: "Goals, audiences, IA and conversion model." },
      { step: "Design System", desc: "Tokens, components, content model." },
      { step: "Build", desc: "Accessible, fast, SEO-ready, CMS-driven." },
      { step: "Iterate", desc: "Experimentation and continuous optimization." },
    ],
    benefits: ["Sub-1s LCP", "Accessible by default", "Scalable design system", "CRO from day one"],
    caseStudy: {
      name: "Northwind Co.",
      metric: "+42% conversion rate",
      desc: "Replatformed marketing site, shipped a design system, A/B tested every primary CTA.",
    },
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    short: "Editorial that earns attention and drives qualified pipeline.",
    intro:
      "Strategy, narrative design and production — long-form, short-form and everything in between.",
    icon: PenLine,
    process: [
      { step: "Narrative", desc: "Positioning, POV and editorial pillars." },
      { step: "Production", desc: "Senior writers, designers, motion." },
      { step: "Distribution", desc: "Owned, earned, paid amplification." },
      { step: "Measurement", desc: "Pipeline-attributed reporting." },
    ],
    benefits: ["Editorial-grade craft", "Pipeline attribution", "Repeatable production", "Brand authority"],
    caseStudy: {
      name: "Lumen Labs",
      metric: "3x inbound demos",
      desc: "Launched editorial site and weekly long-form, attributed to 38% of new pipeline.",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);