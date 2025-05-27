// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import {} from "react-query";

export const fetchCategoriesData = async (setCategoriesData) => {
  const categoriesURL = `${process.env.eforte_blog_url}/categories`;
  try {
    const res = await axios({
      url: categoriesURL,
    });
    setCategoriesData(res.data);
  } catch (err) {
    return err;
  }
};

export const fetchFilteredCategoriesData = async (setFilteredCategoriesData, id) => {
  const categoriesURL = `${process.env.eforte_blog_url}/categories/${id}`;
  await fetch(categoriesURL)
    .then((response) => response.json())
    .then((data) => setFilteredCategoriesData(data))
    .catch((e) => {
      console.log("e3", e);
    });
};

export const fetchFilteredBlogsData = async (id) => {
  const blogsURL = `${process.env.eforte_blog_url}/blogs/${id}`;
  try {
    const res = await axios({ url: blogsURL });
    return res.data;
  } catch (err) {
    console.log("err->", err);
    return { isError: true };
  }
};

//Get Blog by ID
export const getBlogById = async (blogId) => {
  const blogsURL = `${process.env.eforte_blog_url}/blogs/${blogId}`;
  const response = await axios({ url: blogsURL });
  return response.data;
};

//  Get Categories Data
export const getCategoriesData = async () => {
  const categoriesURL = `${process.env.eforte_blog_url}/categories`;
  const res = await axios({
    url: categoriesURL,
  });
  return res.data;
};

// Get Recent Post
export const getRecentPost = async () => {
  const recentPostURL = `${process.env.eforte_blog_url}/blogs/page/1`;
  const res = await axios({
    url: recentPostURL,
  });
  return res.data;
};

//Get Blogs by page
export const getBlogByPage = async (page) => {
  const blogByPageURL = `${process.env.eforte_blog_url}/blogs/page/${page}`;
  const res = await axios({
    url: blogByPageURL,
  });
  return res.data;
};

//Get blogs by category and page
export const getBlogByCategoryAndPage = async (categoryId, pageNo) => {
  const categoriesPageURL = `${process.env.eforte_blog_url}/categories/${categoryId}/${pageNo}`;
  const res = await axios({
    url: categoriesPageURL,
  });
  return res.data;
};

//Get blogs by category and page
export const getFilteredCategoriesData = async (categoryId) => {
  const categoriesURL = `${process.env.eforte_blog_url}/categories/${categoryId}`;
  const res = await axios({
    url: categoriesURL,
  });
  return res.data;
};

export const fetchPageBlog = async (setPageBlog, page) => {
  const filteredBlogsURL = `${process.env.eforte_blog_url}/blogs/page/${page}`;
  try {
    const res = await axios({
      url: filteredBlogsURL,
    });
    setPageBlog(res.data);
  } catch (err) {
    return err;
  }
};

export const fetchRecentPost = async (setPageBlog) => {
  const filteredBlogsURL = `${process.env.eforte_blog_url}/blogs/page/1`;
  try {
    const res = await axios({
      url: filteredBlogsURL,
    });
    setPageBlog(res.data);
  } catch (err) {
    return err;
  }
};

export const fetchCategoriesPage = async (setCategoriesPage, id, page) => {
  const categoriesPageURL = `${process.env.eforte_blog_url}/categories/${id}/${page}`;
  try {
    const res = await axios({
      url: categoriesPageURL,
    });
    setCategoriesPage(res.data);
  } catch (err) {
    console.log("err->", err);
    return { isError: true };
  }
};
