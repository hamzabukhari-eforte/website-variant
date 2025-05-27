import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import styled from "styled-components";
import {
  eforteBlackLogo,
  eforteLogo,
  eforteLogoFooter,
  sethGodinImage,
  landingPage1,
  landingPage2,
  landingPage3,
  landingPage4,
  landingPage5,
  landingPage6,
  landingPage7,
  landingPage8,
  astranaut1,
  astranaut2,
  astranaut3,
  astranaut4,
  astranaut5,
  astranaut6,
  astranaut7,
} from "../images";
import Link from "next/link";
import LandingPageTestimonial from "../src/component/testimonial/landingPageTestimony";
// import LandingPageFooter from "../src/components/footer/landingPageFooter";
import ReactPlayer from "react-player";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Calendly from "../src/component/calendly";
import { Fade, Zoom } from "react-awesome-reveal";
import { BotTypeWriter } from "../src/component/botTypeWriter";

const StyledDiv = styled.div`
  background-color: #fff;

  .ant-drawer {
    z-index: 200;
  }
  .ant-drawer-header {
    background: #00000050;
  }
  a:hover {
    text-decoration: none;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    color: rgb(29, 29, 29);
    font-size: 70px;
  }

  h2 {
    text-align: center;
    font-weight: 600;
    color: rgb(29, 29, 29);
    font-size: 65px;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    color: rgb(29, 29, 29);
    font-size: 34px;
  }

  h4 {
    font-weight: 400;
    color: rgb(29, 29, 29);
    font-size: 24px;
  }

  .full-page-div-padding {
    margin-top: 30px;
    padding: 0px 15%;
  }

  .ul {
    color: rgb(29, 29, 29);
    font-size: 22px;
    text-align: justify;

    li {
      margin: 50px 0;
    }
  }

  .landing-page-header {
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 499;
    transition: 0.6s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 40px 12px 40px;
    img {
      pointer-events: none;
      user-select: none;
      width: 150px;
    }
  }

  .landing-page-video {
    height: 495px !important;
    width: 880px !important;
  }

  .second-row {
    .inside-second-row {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
    }
    p {
      font-size: 18px;
      line-height: 1.9;
    }
    h4 {
      font-weight: 700;
      margin-top: 30px;
    }
  }

  .third-row {
    border-top: 1px dashed #000;
    margin-top: 30px;
    p {
      font-size: 18px;
      line-height: 1.9;
    }
    h4 {
      font-weight: 700;
      margin-top: 30px;
    }
  }

  .header-button {
    color: rgb(255, 255, 255);
    font-weight: 700;
    background-color: #ec3a68;
    font-size: 22px;
    cursor: pointer;
    padding: 6px 12px;
    transition: 0.2s ease;
    border-radius: 2px;
    &:hover {
      opacity: 0.8;
      transition: 0.2s ease;
      text-decoration: none;
    }
    // margin: 6px;
  }

  .form {
    background-color: rgb(29, 29, 29);
    border-radius: 3px;
    min-height: 770px;
  }

  .react-multi-carousel-list {
    position: initial !important;
  }

  .ant-picker-calendar-mini .ant-picker-calendar-header {
    display: none;
  }

  .styledArrow {
    border: 1px solid #ececec;
    width: 17px;
    padding: 9px 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: var(--primary-color-level3, rgba(0, 162, 255, 0.15));
    }
  }

  .anticon svg {
    margin-bottom: 9px;
  }

  .intro {
    padding: 50px 60px;
  }

  .top-right {
    position: absolute;
    top: 14px;
    left: 24px;

    .info-icon {
      font-size: 22px;
      color: #0025ff;
      cursor: pointer;
    }
  }

  .gutter-row {
    h6 {
      color: rgb(29, 29, 29);
      text-align: center;
      margin-top: 16px;
    }
  }

  .site-drawer-render-in-current-wrapper {
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
    color: rgb(29, 29, 29);
    background-color: rgb(29, 29, 29);
    height: 228px;

    .inside-card-div {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      color: #fff;
    }
    &:hover {
      box-shadow: 0 0 0 2pt grey;
    }
  }

  .ant-drawer-mask {
    background-color: hsl(0deg 0% 5% / 55%) !important;
  }

  .ant-drawer-close {
    top: 15px !important;
    padding: 0px !important;
    right: 20px !important;
    font-size: 22px !important;
  }

  .ant-drawer-body {
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #00000050;
    padding: 6px 24px 24px 24px;
  }

  .ant-drawer-content {
    position: absolute !important;
    background-color: transparent !important;
  }

  .ant-drawer-content-wrapper {
    width: 100% !important;
  }

  @media (max-width: 1200px) {
    .full-page-div-padding {
      padding: 0px 6%;
    }
  }

  @media (max-width: 991px) {
    .landing-page-video {
      height: 400px !important;
      width: 710px !important;
    }
    .form {
      min-height: 1100px;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 36px;
    }
    .second-row {
      p {
        line-height: 1.8;
      }
      h4 {
        font-size: 24px;
      }
    }

    .third-row {
      h4 {
        font-size: 24px;
      }
    }

    h3 {
      font-size: 26px;
    }
    h4 {
      font-size: 24px;
    }
    .ul {
      font-size: 16px;
    }
    .logo {
      width: 160px;
      padding: 10px;
    }
    .full-page-div-padding {
      padding: 0px 10%;
    }
    .landing-page-quote {
      img {
        width: 250px;
      }
      blockquote {
        font-size: 14px;
      }
    }
    .header-button {
      font-weight: 600;
      font-size: 14px;
      padding: 12px;
      margin: 6px;
    }
    .landing-page-header {
      background-color: rgb(29, 29, 29);
      opacity: 1;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transition: 0.6s;
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .landing-page-video {
      height: 300px !important;
      width: 530px !important;
    }
  }

  @media (max-width: 576px) {
    .second-row {
      flex-direction: column-reverse;
      .inside-second-row {
        display: block;
      }
    }
  }

  @media (max-width: 567px) {
    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 16px;
    }
    .landing-page-video {
      height: 200px !important;
      width: 340px !important;
    }
    .ul {
      font-size: 14px;
    }
    .landing-page-quote {
      display: block;
      img {
        width: 180px;
      }
      blockquote {
        font-size: 12px;
      }
    }
    .full-page-div-padding {
      padding: 0px 4%;
    }
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    .landing-page-video {
      height: 200px !important;
      width: 335px !important;
    }
    .ul {
      font-size: 12px;
    }
  }
  @media (max-width: 350px) {
    .landing-page-video {
      height: 165px !important;
      width: 270px !important;
    }
  }
`;

const cardData = [
  {
    _id: "1",
    img: landingPage1,
    name: "Level of Efforts estimate - LOEe",
    para: "Actual time frame and cost to complete your project. This will make you prepare accordingly for launching the app to the market. ",
  },
  {
    _id: "2",
    img: landingPage2,
    name: "Work-plan Milestones Delivery Schedule",
    para: "Developed software delivery broken down in milestones and their delivery schedule so you can keep tracking the progress of software development.",
  },
  {
    _id: "3",
    img: landingPage3,
    name: "DevOps and Technical Design",
    para: "Tech Stack and system diagrams made for the software development team to understand and translate your vision and idea clearly. And explained clearly so non-techie can understand as well. Including the management and type of hosting server your project will require.",
  },
  {
    _id: "4",
    img: landingPage4,
    name: "Software QA and Test Plan",
    para: "A robust step by step laid out Software app testing plan for you to only accept the fully functional, bug free, readable and cyber secured software code.",
  },
  {
    _id: "5",
    img: landingPage5,
    name: "Scope of Work",
    para: "Each and every feature of the app written in clear and concise manner for all the stack holders to understand.",
  },
  {
    _id: "6",
    img: landingPage6,
    name: "Brand Design Guidelines",
    para: "Logos, Icons, Colors, Type script, Font for web and for print, letter heads, visiting cards presentation templates etc. specially designed for your project so it represents a branded image online.",
  },
  {
    _id: "7",
    img: landingPage7,
    name: "User stories and Functional Specifications",
    para: "How each feature will work, what will be their dependencies and their User-Stories laid out with time to be taken for the development and acceptance of a feature. Finalizing if managing the project with Scrum or Waterfall will be easier.",
  },
  //   {
  //     _id: "8",
  //     img: landingPage8,
  //     name: "DevOps and Technical Design",
  //     para: "The kind of Hosting servers your project will require, their management and recommended tools to be utilized for optimum performance and the associated costs you will pay.",
  //   },
];

const SoftwarePrototypePage2 = () => {
  const [drawerVisibleIndex, setDrawerVisibleIndex] = useState(null);
  return (
    <>
      <StyledDiv>
        <Row className="landing-page-header">
          <Fade direction="left" triggerOnce>
            <img className="logo" src="/images/eForte_logo.svg" alt="eforte-logo" />
          </Fade>
          <Link href="/software-prototype-and-documentation2#form">
            <Fade direction="right" triggerOnce>
              <a>
                <div className="header-button">BOOK A CALL</div>
              </a>
            </Fade>
          </Link>
        </Row>
        <div className="full-page-div-padding">
          <Row>
            <Col span={24}>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <div style={{ marginTop: 70, marginBottom: 40 }}>
                  <h1 style={{ textAlign: "center" }}>
                    Taking The Guesswork Out Of Software Development
                  </h1>
                </div>
                <div>
                  <h3>
                    <BotTypeWriter content=" Welcome To eForte: Exceptional Software Prototyping And Documentation Services That Give Your Software App An Edge" />
                  </h3>
                </div>
              </Fade>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Fade triggerOnce delay={1000}>
                  <Link href="/software-prototype-and-documentation2#form">
                    <a>
                      <div
                        style={{
                          borderRadius: 50,
                          padding: "8px 30px",
                          marginTop: 30,
                        }}
                        className="header-button"
                      >
                        BOOK A CALL
                      </div>
                    </a>
                  </Link>
                </Fade>
              </div>
              {/* <div style={{ marginTop: 40 }} align="middle">
                <ReactPlayer
                  className="landing-page-video"
                  controls={true}
                  url="https://www.youtube.com/watch?v=AxnIFqEakag"
                />
              </div> */}
            </Col>
          </Row>

          <Row className="second-row">
            <div className="inside-second-row">
              <Col
                xxl={18}
                xl={18}
                lg={16}
                md={16}
                sm={16}
                xs={24}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <Fade triggerOnce direction="up" cascade damping={0.2}>
                    <h4>{`Software App Development That Doesn't Set You Back`}</h4>
                    <p>
                      {`Software development can be an expensive affair if planned badly. At
                      eForte Technologies, we follow the process of software prototyping
                      and documentation phase, wherein we will give you a clickable
                      prototype design for your app idea, along with eight custom-designed
                      documents for your product idea.`}
                    </p>
                  </Fade>
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={8}
                md={8}
                sm={8}
                xs={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zoom triggerOnce>
                  <img style={{ width: 250 }} src={astranaut1} alt="img" />
                </Zoom>
              </Col>
            </div>

            <Col
              xxl={6}
              xl={6}
              lg={8}
              md={8}
              sm={8}
              xs={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom triggerOnce>
                <img style={{ width: 250 }} src={astranaut2} alt="img" />
              </Zoom>
            </Col>

            <Col
              xxl={18}
              xl={18}
              lg={16}
              md={16}
              sm={16}
              xs={24}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <Fade triggerOnce direction="up" cascade damping={0.2}>
                  <h4>Simplify Your App Development Cycle</h4>
                  <p>
                    Every industry expert, regardless of their profession, always starts
                    with a prototype. Being the most logical phase of your product/app
                    development process, prototyping effectively aligns your final product
                    results, with your objectives. With mock designs, you can understand
                    the exact design flow of your app, before investing enormous sums of
                    money in it.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>

          <Row className="third-row" style={{ justifyContent: "center" }}>
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={12}
              sm={12}
              xs={24}
              style={{ textAlign: "center" }}
            >
              <Zoom triggerOnce>
                <img style={{ width: 250 }} src={astranaut3} alt="img" />
              </Zoom>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h4>Cost-Effective</h4>
                <p style={{ textAlign: "left", padding: "0px 24px" }}>
                  With a design prototype, you can understand budgeting before you start
                  the actual development of your app. This reduces hidden costs
                  drastically.
                </p>
              </Fade>
            </Col>

            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={12}
              sm={12}
              xs={24}
              style={{ textAlign: "center" }}
            >
              <Zoom triggerOnce>
                <img style={{ width: 250 }} src={astranaut4} alt="img" />
              </Zoom>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h4>Fast Turnaround</h4>
                <p style={{ textAlign: "left", padding: "0px 24px" }}>
                  Once you have your requirement analysis for the software app product in
                  place, there is no waste of time going back and forth.
                </p>
              </Fade>
            </Col>

            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={24}
              sm={24}
              xs={24}
              style={{ textAlign: "center" }}
            >
              <Zoom triggerOnce>
                <img style={{ width: 250 }} src={astranaut5} alt="img" />
              </Zoom>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h4>Simplified Process</h4>
                <p style={{ textAlign: "left", padding: "0px 24px" }}>
                  The SPDP process simplifies your software development phase
                  exponentially. It gives excellent clarity to everyone involved.
                </p>
              </Fade>
            </Col>
          </Row>

          <Row gutter={[40, 40]}>
            <Col span={24}>
              <Fade>
                <h4 style={{ marginTop: 40 }}>
                  By going through the SPDP phase, you will get:
                </h4>
              </Fade>
            </Col>

            {cardData.map((data, index) => (
              <Col
                key={index}
                xxl={8}
                xl={8}
                lg={8}
                md={12}
                sm={24}
                xs={24}
                className="gutter-row"
              >
                <Fade triggerOnce direction="up" cascade damping={0.2}>
                  <div className="site-drawer-render-in-current-wrapper">
                    <div
                      className="inside-card-div"
                      style={{
                        backgroundImage: `url(${data.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundColor: "#a8a8a5",
                      }}
                    ></div>
                    <div className="top-right">
                      <BsFillInfoCircleFill
                        onClick={() => {
                          // setDrawerVisible1(true);
                          setDrawerVisibleIndex(index);
                        }}
                        className="info-icon"
                      />
                    </div>
                    <Drawer
                      placement="right"
                      closable={true}
                      onClose={() => {
                        setDrawerVisibleIndex(null);
                      }}
                      closeIcon={<CloseCircleFilled style={{ color: "#fff" }} />}
                      visible={index == drawerVisibleIndex}
                      getContainer={false}
                      style={{ position: "absolute" }}
                    >
                      <p>{data.para}</p>
                    </Drawer>
                  </div>
                </Fade>
                <Fade triggerOnce delay={1000} direction="down" damping={0.2} cascade>
                  <h6>{data.name}</h6>
                </Fade>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: 30, textAlign: "center" }}>
            <Fade triggerOnce direction="up" cascade damping={0.2}>
              <img style={{ width: 250 }} src={astranaut6} alt="img" />
              {/* <ClientReviewAndAboutProject
              backgroundColor="#fff"
              marginTop="0%"
              color="rgb(29,29,29)"
              paraColor="rgb(29,29,29)"
            /> */}
              <h4>Client Reviews</h4>
            </Fade>
            <LandingPageTestimonial slidesToShow={3} slidesToScroll={1} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fade triggerOnce>
              <Link href="/software-prototype-and-documentation2#form">
                <a>
                  <div
                    style={{
                      borderRadius: 50,
                      padding: "8px 30px",
                      marginTop: 30,
                    }}
                    className="header-button"
                  >
                    BOOK A CALL
                  </div>
                </a>
              </Link>
            </Fade>
          </div>

          <div
            id="form"
            style={{
              padding: "5% 5%",
              userSelect: "none",
              textAlign: "right",
            }}
          >
            <Fade triggerOnce direction="up" cascade damping={0.2}>
              <h3>Gain The Trust Of Your Investors And Customers</h3>
              <p style={{ textAlign: "center" }}>
                Get the design flow prototype that will transform your business now!
              </p>
            </Fade>
            <Calendly />
            <Zoom triggerOnce>
              <img
                className="last-astranaut-picture"
                style={{ width: 250 }}
                src={astranaut7}
                alt="img"
              />
            </Zoom>
          </div>
        </div>
        {/* <LandingPageFooter /> */}
      </StyledDiv>
    </>
  );
};

export default SoftwarePrototypePage2;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Cost-Effective, Fast Turnaround, Simplified Process",
        description:
          "In software development the prototype is an important step in the development of a product.",
        keywords: "Cost-Effective, Fast Turnaround, Simplified Process",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
