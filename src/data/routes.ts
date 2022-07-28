const routes = [
  { href: "/", name: "Home" },
  {
    name: "Modules",
    href: "/modules",
    dropRoutes: [
      {
        href: "/modules",
        name: "Overview",
      },
      {
        href: "/modules/noora?modules=all",
        name: "Noora",
      },
    ],
  },
  {
    name: "Links",
    dropRoutes: [
      { href: "https://oval.cs.stanford.edu/", name: "Stanford OVAL" },
      {
        href: "https://genie.stanford.edu/",
        name: "Genie",
      },
      {
        href: "https://profiles.stanford.edu/lynn-koegel",
        name: "Dr. Koegel",
      },
    ],
  },
  { href: "/playground?page=practice", name: "Playground" },
];

export default routes;
