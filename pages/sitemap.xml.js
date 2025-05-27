import React from "react";
import * as fs from "fs";

const Sitemap = () => {
  return null;
};

const BASE_URL = "https://eforte.io";

const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return ![
      "api",
      "_app.js",
      "_document.js",
      "404.js",
      "sitemap.xml.js",
      "server-sitemap.xml.js",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });

export const getServerSideProps = async ({ res }) => {
  const allPaths = [...staticPaths];

  allPaths.forEach((data, index) => {
    if (data.includes(".jsx")) {
      allPaths[index] = data.replace(".jsx", "");
    } else if (data.includes(".js")) {
      allPaths[index] = data.replace(".js", "");
    }
  });

  allPaths.forEach((data, index) => {
    if (data.includes("blog")) {
      allPaths.splice(index, 1);
    } else if (data.includes("index")) {
      allPaths.splice(index, 1);
    }
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://eforte.io</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
        <url><loc>https://eforte.io/case-studies/MSP</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/crowd-check</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/dost-pay</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/emerge-forward</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/food-cast</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/instApp-deal</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/investment-markets</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/komb</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/krank</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/oddysee</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/prism</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/scheduling-engine</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/sellsmart</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
        <url><loc>https://eforte.io/case-studies/validatr</loc><lastmod>2022-12-19T07:33:02.783Z</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
