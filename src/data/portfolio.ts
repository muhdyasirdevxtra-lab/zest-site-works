import fashion from "@/assets/case-fashion.jpg";
import skincare from "@/assets/case-skincare.jpg";
import gym from "@/assets/case-gym.jpg";
import watch from "@/assets/case-watch.jpg";

export type CaseStudy = {
  slug: "elevate-fashion" | "pureglow-skincare" | "urbanfit-gym" | "chronolux";
  name: string;
  category: string;
  desc: string;
  img: string;
  traffic: string;
  revenue: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "elevate-fashion",
    name: "Elevate Fashion",
    category: "DTC Apparel",
    desc: "Increased sales through influencer marketing and social media ads.",
    img: fashion,
    traffic: "70%",
    revenue: "85%",
    challenge: "Scaling paid social past a stubborn ROAS plateau without burning brand equity.",
    approach: "Rebuilt creative system with UGC + studio, restructured Meta account, launched TikTok Spark Ads.",
    outcome: "4x media spend at +85% revenue, payback under 30 days.",
  },
  {
    slug: "pureglow-skincare",
    name: "PureGlow Skincare",
    category: "Beauty & Skincare",
    desc: "Boosted brand trust with content marketing and targeted ads.",
    img: skincare,
    traffic: "65%",
    revenue: "75%",
    challenge: "Crowded category, weak organic story, low repeat rate.",
    approach: "Editorial repositioning, weekly short-form content engine, lifecycle email overhaul.",
    outcome: "+220% followers, +65% organic traffic, +75% revenue YoY.",
  },
  {
    slug: "urbanfit-gym",
    name: "UrbanFit Gym",
    category: "Fitness",
    desc: "Increased sign-ups through engaging digital campaigns and promotions.",
    img: gym,
    traffic: "75%",
    revenue: "88%",
    challenge: "High CPA on Google Ads, soft monthly membership pipeline.",
    approach: "Restructured search + PMax, value-based bidding, geo-targeted creative refresh.",
    outcome: "-38% CPA, 2x qualified sign-ups in 60 days.",
  },
  {
    slug: "chronolux",
    name: "ChronoLux",
    category: "Luxury Watches",
    desc: "Implemented a data-driven SEO and PPC strategy, boosting visibility.",
    img: watch,
    traffic: "70%",
    revenue: "75%",
    challenge: "Invisible on commercial keywords against legacy retailers.",
    approach: "Site rearchitecture, 60 cluster pages, digital PR campaign for authority.",
    outcome: "Top-3 rankings on 40 commercial terms, +70% organic traffic.",
  },
];

export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);