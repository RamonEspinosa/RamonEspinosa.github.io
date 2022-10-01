const navigation = {
  home: {
    href: "/",
    children: "Home",
  },
  projects: {
    href: "/projects",
    children: "Projects",
  },
  bits: {
    href: "/snippets",
    children: "Snippets",
  },
  blog: {
    href: "/blog",
    children: "Blog",
  },
  contact: {
    href: "/contact",
    children: "Contact",
  },
} as const;

export default navigation;
