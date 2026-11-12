const siteUrl = "https://eforte.io";

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ["/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    additionalSitemaps: [],
  },
};
