import React, { useState } from "react";
import Faq from "../src/component/faq";
// import HeroSection from "../src/component/heroSection";
// import Head from "next/head";
// import { faqBanner } from "../images";
// import LazyLoad from "react-lazyload";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { faqsBanner } from "../images";

const StyledDiv = styled.div`
  .main-div {
    height: 70vh;
    background-color: #2c3343;
    background-image: url(${faqsBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .center-div {
      margin: 0;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -75%);
      text-align: center;
      width: 80%;
      max-width: 700px;
      h1 {
        font-size: 36px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        // width: 600px;
      }
      h2 {
        font-weight: 500;
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin-bottom: 32px;
      }
      .search-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 50px;
        height: 52px;
        padding: 0px 4px 0px 16px;
        border: 2px solid #99a6c3;
        input {
          border: 0px !important;
          outline: none !important;
          width: 100%;
          font-size: 18px;
        }
        .search-icon {
          color: #99a6c3;
          font-size: 30px;
          margin-right: 8px;
          cursor: pointer;
        }
        .orange-search-btn {
          background-color: #0b4c8c;
          color: #fff;
          padding: 8px 24px;
          border-radius: 50px;
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
`;

const FAQs = () => {
  const [textbox, setTextbox] = useState("");
  return (
    <StyledDiv>
      {/* <LazyLoad height={"100vh"} once>
        <HeroSection type="image" background={faqBanner} />
      </LazyLoad> */}

      <div className="main-div">
        <div className="center-div">
          <h1>What can we help you with?</h1>
          <h2>Search from our commonly asked questions</h2>
          <div className="search-div">
            <div
              style={{
                width: "100%",
                height: 40,
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <input
                value={textbox}
                placeholder="Ask a question..."
                onChange={(e) => setTextbox(e.target.value)}
              />
              <BiSearchAlt2 className="search-icon" />
            </div>
            {/* <div className="orange-search-btn" onClick={() => setTextbox("")}>
              {textbox === "" ? "Search" : "Clear"}
            </div> */}
          </div>
        </div>
      </div>
      <Faq singleCol={true} />
    </StyledDiv>
  );
};

export default FAQs;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
          //  "Frequently asked Questions | eForte",
          "Frequently asked Questions IT consultancy | eForte",
        description:
          // "Get the answers to your questions about app development for mobile and web, UX, and UI design and implementation, and digital product strategy.",
          "Find answers to your questions on mobile and web app development, IT Staff Augmentation, UX/UI design, and digital product strategy at eForte",
        keywords: "Frequently asked Questions | eForte",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
