import React, { useEffect } from "react";

const Blog = () => {
  return <div></div>;
};

export default Blog;

export async function getServerSideProps({ req }) {
  return {
    redirect: {
      destination: "/blog/page/1",
    },
  };
}
