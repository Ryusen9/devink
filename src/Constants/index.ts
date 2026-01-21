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

export const topWriters = [
  {
    name: "Alicia Johnson",
    occupation: "Full-Stack Developer",
    posts: 34,
    image: "https://i.ibb.co/LXPqQ3J3/Professional-Portrait.png",
  },
  {
    name: "Bob Smith",
    occupation: "DevOps Engineer",
    posts: 28,
    image: "https://i.ibb.co/mC6HHLcr/Man-in-Blue-Shirt.png",
  },
  {
    name: "Catherine Lee",
    occupation: "Data Scientist",
    posts: 22,
    image: "https://i.ibb.co/4nM5Yfzt/Tennis-Court-Focus.png",
  },
  {
    name: "David Kim",
    occupation: "Mobile App Developer",
    posts: 19,
    image: "https://i.ibb.co/8g8BBqJ9/pexels-moshalex-32719900.jpg",
  },
  {
    name: "Emily Davis",
    occupation: "UI/UX Designer",
    posts: 25,
    image:
      "https://i.ibb.co/mF98nTdR/pexels-rao-qingwei-400570939-16569345.jpg",
  },
];

export const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/writers", label: "Writers" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
