/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.hymnsofweb.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/valensite",
      },
    ],
  },
};
