import { Layers3, PenTool, Rocket, Shield, Sparkles, Zap } from "lucide-react";

export const navLinks = [
  { name: "about", href: "/about" },
  {
    name: "blog",
    href: "/blog",
    dropdown: true,
    items: [
      { name: "all posts", href: "/blog" },
      { name: "categories", href: "/blog/categories" },
    ],
  },
  { name: "contact", href: "/contact" },
];

export const highlights = [
  {
    title: "Curated Writing",
    description:
      "Editorial-grade stories with code snippets, case studies, and deep dives crafted for builders.",
    badge: "Quality",
    stat: "4.9/5 avg. reads",
    icon: PenTool,
  },
  {
    title: "Lightning Delivery",
    description:
      "Fast page loads, clean typography, and frictionless reading on every device.",
    badge: "Performance",
    stat: "<1.2s LCP",
    icon: Zap,
  },
  {
    title: "Launch-Ready",
    description:
      "From drafts to publish with smart scheduling, previews, and SEO-ready meta defaults.",
    badge: "Workflow",
    stat: "500+ posts shipped",
    icon: Rocket,
  },
  {
    title: "Trusted & Secure",
    description:
      "Secure authoring, role-based access, and content integrity baked in by design.",
    badge: "Security",
    stat: "99.99% uptime",
    icon: Shield,
  },
  {
    title: "Rich Components",
    description:
      "Drop in interactive embeds, rich media, and reusable blocks to keep stories lively.",
    badge: "Components",
    stat: "60+ blocks",
    icon: Layers3,
  },
  {
    title: "Community Spark",
    description:
      "Topics, tags, and recommendations help readers find the next story worth reading.",
    badge: "Engagement",
    stat: "10K+ readers",
    icon: Sparkles,
  },
];
