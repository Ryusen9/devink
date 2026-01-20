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
