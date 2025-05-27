const siteUrl = "https://eforte.io";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/dashboard/*", "/login_logo/*", "/login_web/*", "/order-confirmation/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/*",
          "/login_logo/*",
          "/login_web/*",
          "/order-confirmation/*",
        ],
      },
    ],
    additionalSitemaps: [
      "https://eforte.io/sitemap.xml",
      "https://eforte.io/server-sitemap.xml",
    ],
  },
};
