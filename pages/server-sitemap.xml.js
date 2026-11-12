const Site = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.write("Sitemap disabled");
  res.end();

  return {
    props: {},
  };
};

export default Site;
