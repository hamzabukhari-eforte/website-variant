import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const request = await fetch(`${process.env.eforte_blog_url}/blogs/allSlugs`);
  const posts = await request.json();

  const newsSitemaps = posts.map((item) => ({
    loc: `https://eforte.io/blog/${item.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: "1.0",
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
