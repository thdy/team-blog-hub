export const config = {
  siteMeta: {
    title: "Thdy Blog Hub",
    teamName: "Thdy",
    description: "Here is a site that curates articles from Thdy.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.thdy.vercel.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    // {
    //   title: "Company",
    //   href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    // },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/catnose99/team-blog-hub",
    // },
  ],
};
