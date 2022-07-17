const routes = [
  { href: "/", name: "Home" },
  { href: "/playground", name: "Playground" },
  {
    name: "Other",
    dropRoutes: [
      { href: "/", name: "Home" },
      { href: "https://oval.cs.stanford.edu/", name: "Stanford OVAL" },
      {
        href: "https://genie.stanford.edu/",
        name: "Genie",
      },
    ],
  },
];

export default routes;
