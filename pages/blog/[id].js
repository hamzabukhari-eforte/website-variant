import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getBlogById, getRecentPost, getCategoriesData } from "../api";
import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import moment from "moment";
// import BlogFooterWrapper from "../../src/components/footer/blogFooterWrapper";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { marked } from "marked";
import {
  CategoriesLoading,
  BlogLoading,
  ImageLoading,
  RecentPostsLoading,
} from "../../src/component/loading";
import { useQuery } from "react-query";
import HeroSection from "../../src/component/heroSection";
import Heading from "../../src/component/headings";
import { BsFillCaretRightFill } from "react-icons/bs";
import { blogBanner } from "../../images";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";

const StyledDiv = styled.div`
  h1 {
    font-size: 38px;
    font-weight: 600;
    font-family: sans-serif;
    color: #222222;
    text-transform: uppercase;
  }

  h1:hover {
    color: #793b95;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  h2 {
    font-size: 26px;
    line-height: 36px;
    font-weight: 600;
    font-family: sans-serif;
    color: #222222;
    text-transform: uppercase;
  }

  h3 {
    font-size: 26px;
    font-weight: 600;
    font-family: sans-serif;
    color: #222222;
    text-transform: uppercase;
  }

  p {
    color: #4c4c4c;
    font-weight: 400px;
    font-size: 19px;
    letter-spacing: 0.3px;
    line-height: 1.58;
  }

  .share-article-link {
    p {
      font-size: 16px;
      font-weight: 700;
    }
    a {
      color: #4c4c4c;
    }
    a:hover {
      opacity: 0.8;
    }
  }

  .tags {
    ul {
      line-height: 13px;
      font-weight: 700;
      overflow: hidden;
      margin: 0 0 20px;
      padding: 0px;
    }
    li {
      display: inline;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1.75;
    }
    a {
      font-weight: 700;
      color: inherit;
      &:hover {
        color: #000;
      }
    }
  }

  .dangerouslySetInnerHTML img {
    width: 70%;
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
    padding: 2.3% 24px 24px 0px;
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
      text-decoration: none;
    }
    a:hover {
      color: #793b95;
      text-decoration: none;
    }
  }
  ul {
    line-height: 32px;
    padding-left: 24px;
    color: #4c4c4c;
  }

  @media (max-width: 991px) {
    .recent-post-div {
      padding: 3%;
    }
  }

  @media (max-width: 767px) {
    .dangerouslySetInnerHTML img {
      width: 100%;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      font-family: sans-serif;
      color: #000000;
    }
    h3 {
      font-size: 18px;
      font-weight: 600;
      font-family: sans-serif;
      color: #000000;
    }
  }

  @media (max-width: 567px) {
  }
`;

const Details = (props) => {
  const router = useRouter();
  const blogId = router.query.id;

  const [blogData, setBlogData] = useState(props.blogData);
  const [recentPost, setRecentPost] = useState(props.recentBlogsData);
  const [categoriesData, setCategoriesData] = useState(props.categoriesData);

  useEffect(() => {
    setBlogData(props.blogData);
    setRecentPost(props.recentBlogsData);
    setCategoriesData(props.categoriesData);
  }, [props.blogData]);

  // const { refetch: getBlogByIdQuery, isFetching: fetchingBlogData } = useQuery(
  //   "blogData",
  //   () => getBlogById(blogId),
  //   {
  //     onError: () => router.push("/blog/page/1"),
  //     onSuccess: (data) => setBlogData(data),
  //     enabled: false,
  //   }
  // );

  // const { refetch: getCategoriesDataQuery, isFetching: fetchingCategoriesData } =
  //   useQuery("getCategoriesData", getCategoriesData, {
  //     onSuccess: (data) => setCategoriesData(data),
  //     enabled: false,
  //   });

  // const { refetch: getRecentPostQuery, isFetching: fetchingRecentPost } = useQuery(
  //   "getRecentPost",
  //   getRecentPost,
  //   {
  //     onSuccess: (data) => setRecentPost(data),
  //     enabled: false,
  //   }
  // );

  // useEffect(() => {
  //   getCategoriesDataQuery();
  //   getRecentPostQuery();
  // }, []);

  // useEffect(() => {
  //   if (blogId !== undefined) {
  //     getBlogByIdQuery();
  //   }
  // }, [blogId]);

  let stringDescription;
  if (blogData?.description) {
    stringDescription = blogData?.description.replaceAll(
      "(/uploads/",
      `(${process.env.eforte_blog_url}/uploads/`
    );
  }

  return (
    <>
      <StyledDiv>
        <HeroSection
          height="60vh"
          companySliderHide={true}
          type="image"
          alt={blogData?.slug}
          background={`${process.env.eforte_blog_url}` + blogData?.images[0]?.url}
        >
          <div>
            <Heading color="#fff" backgroundColor="#ed3c69">
              {blogData?.title}
            </Heading>
            <Row>
              <Col span={24} className="tags">
                <ul>
                  <li style={{ color: "#fff" }}>
                    {moment(blogData?.date).format("MMM DD, YYYY")}
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                  </li>
                  <li style={{ color: "#fff" }}>{blogData?.writtenBy.toUpperCase()}</li>
                </ul>
              </Col>
            </Row>
          </div>
        </HeroSection>
        <Row style={{ backgroundColor: "#fff", padding: "3%" }}>
          <Col xl={18} lg={18} md={24} sm={24} xs={24}>
            <Row>
              <Col
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <Row style={{ padding: "3%" }}>
                  <Col span={24} className="tags">
                    <ul>
                      <li>
                        {moment(blogData?.date).format("MMM DD, YYYY")}
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </li>
                      <li>{blogData?.writtenBy.toUpperCase()} &nbsp; | &nbsp;</li>
                      <li>
                        {blogData?.categories[0]?._id ? (
                          <Link
                            href={"/blog/category/" + blogData?.categories[0]?._id + "/1"}
                          >
                            <a>
                              <li>{blogData?.categories[0]?.title.toUpperCase()}</li>
                            </a>
                          </Link>
                        ) : (
                          <Link href={"/blog/category/60b4b6f251387725ac3dcc1c/1"}>
                            <a>
                              <li>UNCATEGORIZED</li>
                            </a>
                          </Link>
                        )}
                      </li>
                      <li>&nbsp;&nbsp;|&nbsp;&nbsp;{blogData?.tag.toUpperCase()}</li>
                    </ul>
                  </Col>
                  <Col>
                    <h1>{blogData?.title}</h1>
                    {/* <p className="mt-3">{blogData?.description} </p> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(blogData ? stringDescription : ""),
                      }}
                      className="dangerouslySetInnerHTML"
                    />
                    <div
                      style={{
                        borderTop: "1px solid rgb(29, 29, 29)",
                        marginTop: 20,
                      }}
                    >
                      <div
                        className="share-article-link"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 20,
                        }}
                      >
                        <p style={{ margin: 0, marginRight: 8 }}>Share this article:</p>
                        <FacebookShareButton
                          style={{ marginRight: 6 }}
                          url={`https://eforte.io/blog/${blogData?.slug}`}
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <TwitterShareButton
                          style={{ marginRight: 6 }}
                          url={`https://eforte.io/blog/${blogData?.slug}`}
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <LinkedinShareButton
                          style={{ marginRight: 6 }}
                          url={`https://eforte.io/blog/${blogData?.slug}`}
                        >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>

                        <EmailShareButton
                          style={{ marginRight: 6 }}
                          url={`https://eforte.io/blog/${blogData?.slug}`}
                        >
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xl={6} lg={6} md={24} sm={24} xs={24} className="recent-post-div">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                padding: "9% 6% 9% 6%",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
              }}
            >
              <h5>RECENT POSTS</h5>

              {recentPost?.slice(0, 4).map((data, index) => (
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
              ))}
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                marginTop: 30,
                borderRadius: 4,
                padding: "9% 6% 9% 6%",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 25px",
              }}
            >
              <h5>CATEGORIES</h5>

              {categoriesData.length ? (
                categoriesData?.map((data, index) => (
                  <Col key={index} span={24}>
                    <ul className="categories">
                      <li>
                        <Link href={"/blog/category/" + data._id + "/1"}>
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
    </>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const blogs = await fetch(`${process.env.eforte_blog_url}/blogs/${context.query.id}`);
  const blogsResponse = await blogs.json();

  const categories = await fetch(`${process.env.eforte_blog_url}/categories`);
  const categoriesResponse = await categories.json();

  const recentBlogs = await fetch(`${process.env.eforte_blog_url}/blogs/page/1`);
  const recentBlogsResponse = await recentBlogs.json();

  if (!blogsResponse) {
    return {
      redirect: {
        destination: "/blog/page/1",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blogData: blogsResponse,
      categoriesData: categoriesResponse,
      recentBlogsData: recentBlogsResponse,
      metaData: {
        // title: "eForte | Blogs | " + blogsResponse.title,
        title: "Blogs of recent Information Technology trends | eForte" + blogsResponse.title,
        type: "article",
        description: blogsResponse.metaData,
        keywords: blogsResponse.tag,
        publishTime: blogsResponse.createdAt,
        image: `${process.env.eforte_blog_url}${blogsResponse.images[0].url}`,
      },

      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blogsResponse.title,
        description: blogsResponse.description,
        author: [
          {
            "@type": "Person",
            name: blogsResponse.writtenBy,
          },
        ],
        image: `${process.env.eforte_blog_url}${blogsResponse.images[0].url}`,
        datePublished: blogsResponse.createdAt,
      },
    },
  };
}
