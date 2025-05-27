import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "antd";
import styled from "styled-components";
// import {
//   fetchFilteredCategoriesData,
//   fetchCategoriesPage,
//   getRecentPost,
//   getCategoriesData,
//   getBlogByCategoryAndPage,
//   getFilteredCategoriesData,
// } from "../../../api";
import { useRouter } from "next/router";
import { marked } from "marked";
import Link from "next/link";
// import Head from "next/head";
import moment from "moment";
// import BlogFooterWrapper from "../../../../src/components/footer/blogFooterWrapper";
// import { useQuery } from "react-query";
// import {
//   CategoriesLoading,
//   RecentPostsLoading,
//   FourBlogsLoading,
// } from "../../../../src/component/loading";
import HeroSection from "../../../../src/component/heroSection";
import { blogBanner, noBlogFound } from "../../../../images";
import Heading from "../../../../src/component/headings";
import { BsFillCaretRightFill } from "react-icons/bs";

const StyledDiv = styled.div`
  h1 {
    font-size: 38px;
    font-weight: 600;
    font-family: sans-serif;
    color: #222222;
  }

  h1:hover {
    color: #793b95;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  h2 {
    font-size: 22px;
    color: #4c4c4c;
    font-weight: 600;
    line-height: 32px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h2:hover {
    color: #793b95;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
    font-family: sans-serif;
    color: #222222;
  }

  // h3:hover {
  //   color: #793b95;
  //   cursor: pointer;
  //   transition: all 0.2s ease-out;
  // }

  .profile-img {
    height: 56px;
    width: 56px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #757575;
    padding: 6px;
  }

  .center {
    /* margin: 0;
    position: relative;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10% 17%;
    background-color: #f2f2f2;
    z-index: 99;  */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    h2 {
      font-size: 26px;
      line-height: 36px;
      font-weight: 600;
      font-family: sans-serif;
      color: #222222;
    }
  }

  p {
    color: #4c4c4c;
    font-weight: 400px;
    font-size: 19px;
    letter-spacing: 0.3px;
    line-height: 1.58;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 96px;
  }

  .recent-post {
    a {
      line-height: 1.5;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 11px;
      color: #757575;
      font-weight: 700;
    }
  }
  .recent-post-div {
    padding: 40px 60px 15px 32px;
  }

  .read-more {
    color: #4c4c4c;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      transition: 0.2s ease;
      padding: 0px 0px 0px 4px;
      color: #793b95;
    }
  }

  .categories {
    padding-left: 20px;
    line-height: 16px;
    a {
      color: #4c4c4c;
      font-weight: 500;
      font-size: 14px;
      margin-left: 15px;
      cursor: pointer;
      width: fit-content;
    }
    a:hover {
      color: #793b95;
    }
  }

  // ul {
  //   margin-bottom: 5px;
  //   color: #4c4c4c;
  //   font-weight: 500;
  //   font-size: 14px;
  //   margin-left: 15px;
  //   cursor: pointer;
  // }
  // ul:hover {
  //   color: #793b95;
  // }

  @media (max-width: 567px) {
    h1 {
      font-size: 33px;
      font-weight: 800;
      font-family: sans-serif;
      color: #000000;
    }

    h2 {
      top: 25%;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 991px) {
    h1 {
      font-size: 33px;
      font-weight: 800;
      font-family: sans-serif;
      color: #000000;
    }
    h2 {
      top: 25%;
      font-size: 22px;
      line-height: 24px;
    }
    .recent-post-div {
      padding: 4%;
    }
  }

  @media (max-width: 767px) {
    .center {
      top: 65%;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 33px;
      font-weight: 800;
      font-family: sans-serif;
      color: #000000;
    }

    h2 {
      top: 25%;
      font-size: 16px;
      line-height: 22px;
    }
    .center {
      top: 68%;
    }
  }
`;

const Category = (props) => {
  const [filteredCategoriesData, setFilteredCategoriesData] = useState(
    props.filteredCategoriesData
  );
  const [categoriesData, setCategoriesData] = useState(props.categoriesData);
  const [categoriesPageData, setCategoriesPageData] = useState(props.blogData);
  const [recentPost, setRecentPost] = useState(props.recentBlogsData);

  const router = useRouter();
  const categoryId = router.query.id;
  const pageNo = router.query.page;

  useEffect(() => {
    setCategoriesPageData(props.blogData);
    setCategoriesData(props.categoriesData);
    setRecentPost(props.recentBlogsData);
    setFilteredCategoriesData(props.filteredCategoriesData);
  }, [props.blogData]);

  //react-query for getting categories
  // const { refetch: getCategoriesDataQuery, isFetching: fetchingCategoriesData } =
  //   useQuery("getCategoriesData", getCategoriesData, {
  //     onSuccess: (categories) => setCategoriesData(categories),
  //     enabled: false,
  //   });

  //react-query for getting recent posts
  // const { refetch: getRecentPostQuery, isFetching: fetchingRecentPost } = useQuery(
  //   "getRecentPost",
  //   getRecentPost,
  //   {
  //     onSuccess: (recentPost) => setRecentPost(recentPost),
  //     enabled: false,
  //   }
  // );

  // //react-query for getting categories by id
  //  const { refetch: getFilteredCategoriesDataQuery, isFetching: fetchingCategoriesByIdData } =
  //  useQuery("getFilteredCategoriesData", getFilteredCategoriesData(categoryId), {
  //    onSuccess: (categoryIdData) => setFilteredCategoriesData(categoryIdData),
  //    enabled: false,
  //  });

  //react-query for getting blogs by categoryId and page
  // const { refetch: getBlogByCategoryAndPageQuery, isFetching: fetchingBlogData } =
  //   useQuery("blogData", () => getBlogByCategoryAndPage(categoryId, pageNo), {
  //     onError: () => {
  //       router.push("/blog/page/1");
  //     },
  //     onSuccess: (data) => {
  //       if (data.status == 404) {
  //         // router.push("/page-not-found");
  //       } else {
  //         setCategoriesPageData(data);
  //       }
  //     },
  //     enabled: false,
  //   });

  // useEffect(() => {
  //   getCategoriesDataQuery();
  //   getRecentPostQuery();
  // }, []);

  // useEffect(async () => {
  //   if (pageNo && categoryId !== undefined) {
  //     fetchFilteredCategoriesData(setFilteredCategoriesData, categoryId);
  //   }
  // }, [categoryId, pageNo]);

  return (
    <>
      <HeroSection
        height="70vh"
        companySliderHide={true}
        type="image"
        background={blogBanner}
      >
        <div>
          <Heading color="#fff" backgroundColor="#ed3c69">
            BLOGS
          </Heading>
          <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <a href={"/"} style={{ textDecoration: "none", color: "#fff", fontSize: 16 }}>
              Home
            </a>
            <BsFillCaretRightFill style={{ marginLeft: 4, marginRight: 4 }} />
            <a
              href={"/blog/page/1"}
              style={{ textDecoration: "none", color: "#fff", fontSize: 16 }}
            >
              Blogs
            </a>
            <BsFillCaretRightFill style={{ marginLeft: 4, marginRight: 4 }} />
            <p style={{ marginBottom: 3, color: "#fff", fontSize: 16 }}>
              {categoriesPageData[0]?.categoryTitle}
            </p>
          </div>
        </div>
      </HeroSection>
      <StyledDiv>
        <Row style={{ padding: "3% 3% 6% 3%" }}>
          <Col xl={17} lg={17} md={24} sm={24} xs={24}>
            <Row style={{ height: "100%" }}>
              {filteredCategoriesData?.blogs.length !== 0 ? (
                <>
                  {categoriesPageData?.map((data, index) => (
                    <Col
                      key={index}
                      xl={10}
                      lg={10}
                      md={22}
                      sm={22}
                      xs={22}
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 4,
                        margin: "4%",
                        boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
                      }}
                    >
                      <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                        <a>
                          <Col span={24}>
                            <img
                              src={data.images.map(
                                (img) => `${process.env.eforte_blog_url}` + img.url
                              )}
                              alt={data.slug}
                              style={{
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "4px 4px 0 0",
                                objectFit: "cover",
                                minHeight: 320,
                                maxHeight: 320,
                              }}
                            />
                          </Col>
                        </a>
                      </Link>
                      <Row style={{ padding: "5%" }}>
                        <Col span={24}>
                          <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                            <a style={{ textDecoration: "none" }}>
                              <h2 title={data?.title.toUpperCase()}>
                                {data?.title.toUpperCase()}
                              </h2>
                            </a>
                          </Link>

                          <span
                            style={{
                              fontSize: 16,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Category:
                            <p
                              style={{ color: "#793b95", fontWeight: 600, fontSize: 16 }}
                              className="mb-0 ml-1"
                            >
                              {categoriesPageData[0]?.categoryTitle}
                            </p>
                          </span>

                          <p
                            style={{ marginTop: 8, marginBottom: 0 }}
                            dangerouslySetInnerHTML={{
                              __html: marked(data?.description),
                            }}
                            className="dangerouslySetInnerHTML"
                          ></p>
                        </Col>
                        <Col span={24}>
                          <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                            <a style={{ textDecoration: "none" }}>
                              <div className="read-more">Read More &rarr;</div>
                            </a>
                          </Link>
                        </Col>

                        <Col span={24}>
                          <div className="mt-4 d-flex align-items-center">
                            <div className="profile-img">
                              <img
                                src="/images/eForte_logo.svg"
                                alt="eforte-logo"
                                className="img-fluid"
                              />
                            </div>
                            <div className="ml-3">
                              <p
                                style={{
                                  letterSpacing: "4px",
                                  marginBottom: 0,
                                  fontSize: 12,
                                }}
                              >
                                {data.writtenBy.toUpperCase()}
                              </p>

                              <p
                                style={{
                                  letterSpacing: "4px",
                                  marginBottom: 0,
                                  fontSize: 12,
                                }}
                              >
                                {moment(data.date).format("MMM, Do YYYY")}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      {/* <Row style={{ padding: "5%" }}>
                        <Col>
                          <h6 style={{ display: "flex" }}>
                            BY {data.writtenBy.toUpperCase()} /{" "}
                            {moment(data.date).format("MMM Do YYYY")} /{" "}
                          </h6>
                          <h3>{categoriesPageData[0]?.categoryTitle.toUpperCase()}</h3>
                        </Col>
                        <Col>
                          <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                            <a style={{ textDecoration: "none" }}>
                              <h2 title={data?.title.toUpperCase()}>
                                {data.title.toUpperCase()}
                              </h2>
                            </a>
                          </Link>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: marked(data?.description),
                            }}
                            className="dangerouslySetInnerHTML"
                          ></p>
                        </Col>
                        <Col>
                          <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                            <a>
                              <div className="read-more">Read More &rarr;</div>
                            </a>
                          </Link>
                        </Col>
                      </Row> */}
                    </Col>
                  ))}
                </>
              ) : (
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <div className="center">
                    <div style={{ textAlign: "center" }}>
                      <img
                        width={300}
                        src={"/images/no-blog-found.png"}
                        alt="no-blog-found-img"
                      />
                      <h4 className="mt-4">
                        No blogs found for{" "}
                        <span
                          style={{ fontWeight: 600 }}
                        >{`${filteredCategoriesData?.title}`}</span>{" "}
                        category
                      </h4>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
            {filteredCategoriesData?.blogs.length != 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "2% 0px 5% 0px",
                }}
              >
                <Pagination
                  onChange={(pageNo) => {
                    router.push(`/blog/category/${categoryId}/${pageNo}`);
                  }}
                  current={parseInt(pageNo)}
                  // onChange={onPageChange}
                  // defaultCurrent={1}
                  total={
                    categoriesPageData[0]?.totalPages * 6
                      ? categoriesPageData[0]?.totalPages * 6
                      : 1
                  }
                  showLessItems={true}
                  defaultPageSize={6}
                />
              </div>
            ) : null}
          </Col>

          <Col xl={7} lg={7} md={24} sm={24} xs={24} className="recent-post-div">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                padding: "9% 6% 9% 6%",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
              }}
            >
              <h5 style={{ fontWeight: 600, textAlign: "center", marginBottom: 20 }}>
                RECENT POSTS
              </h5>

              {recentPost.length ? (
                recentPost?.slice(0, 4).map((data, index) => (
                  <Row key={index}>
                    <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "10px 0px 10px 0px",
                        }}
                      >
                        <Col span={9} style={{ marginTop: 6 }}>
                          <img
                            src={data.images.map(
                              (img) => `${process.env.eforte_blog_url}` + img.url
                            )}
                            alt="blog-img"
                            style={{
                              width: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                        <Col offset={1} span={14} className="recent-post">
                          <Link href={`/blog/${data.slug ? data.slug : data._id}`}>
                            <a>{data.title.toUpperCase()}</a>
                          </Link>
                        </Col>
                      </a>
                    </Link>
                  </Row>
                ))
              ) : (
                <p>No blogs found</p>
              )}
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                marginTop: 60,
                borderRadius: 4,
                padding: "9% 6% 9% 6%",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
              }}
            >
              <h5 style={{ fontWeight: 600, textAlign: "center" }}>CATEGORIES</h5>

              {/* {categoriesData?.map((data) => (
                  <Col span={24}>
                    <ul className="categories">
                      <li>
                        <Link href={"/blog/category/" + data.id + "/" + page}>
                          <a>{data.title}</a>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                ))} */}

              {categoriesData.length ? (
                categoriesData?.map((data, index) => (
                  <Col key={index} span={24}>
                    <ul className="categories">
                      <li>
                        <Link href={"/blog/category/" + data._id + "/" + pageNo}>
                          <a>{data.title}</a>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                ))
              ) : (
                <p>No categories found</p>
              )}
            </div>
          </Col>
        </Row>
      </StyledDiv>
      {/* <BlogFooterWrapper /> */}
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const blogs = await fetch(
    `${process.env.eforte_blog_url}/categories/${context.query.id}/${context.query.page}`
  );
  const blogResponse = await blogs.json();

  const categories = await fetch(`${process.env.eforte_blog_url}/categories`);
  const categoriesResponse = await categories.json();

  const recentBlogs = await fetch(`${process.env.eforte_blog_url}/blogs/page/1`);
  const recentBlogsResponse = await recentBlogs.json();

  const categoriesURL = await fetch(
    `${process.env.eforte_blog_url}/categories/${context.query.id}`
  );
  const filteredCategoriesResponse = await categoriesURL.json();

  if (!blogResponse) {
    return {
      redirect: {
        destination: "/blog/page/1",
        permanent: false,
      },
    };
  }

  let keywords = [];
  categoriesResponse.map((data) => {
    keywords.push(data.title);
  });

  return {
    props: {
      blogData: blogResponse,
      categoriesData: categoriesResponse,
      recentBlogsData: recentBlogsResponse,
      filteredCategoriesData: filteredCategoriesResponse,

      metaData: {
        // title: "eForte Blogs",
        title: "Blogs of recent Information Technology trends | eForte",
        type: "blogs",
        description: keywords.toString().split(",").join(", "),
        keywords: keywords.toString().split(",").join(", "),
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
