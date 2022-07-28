const routes = [
  { href: "/", name: "Home" },
  { href: "/playground", name: "Playground" },
  {
    name: "Modules",
    dropRoutes: [
      {
        href: "/modules",
        name: "Overview",
      },
      {
        href: "/modules/general",
        name: "General",
      },
      {
        href: "/modules/work",
        name: "Work",
      },
    ],
  },
  {
    name: "Other",
    dropRoutes: [
      { href: "https://oval.cs.stanford.edu/", name: "Stanford OVAL" },
      {
        href: "https://genie.stanford.edu/",
        name: "Genie",
      },
    ],
  },
];

export default routes;
