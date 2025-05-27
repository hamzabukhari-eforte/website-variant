import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col, Drawer } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import styled from "styled-components";
import {
  sethGodinImage,
  landingPage1,
  landingPage2,
  landingPage3,
  landingPage4,
  landingPage5,
  landingPage6,
  landingPage7,
} from "../images";
import Link from "next/link";
// import { ClientReviewAndAboutProject } from "../src/components/footer/footerContent";
import TestimonyWithRating from "../src/component/testimonial/logoTestimonial";
import ReactPlayer from "react-player";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Calendly from "../src/component/calendly";
import { Fade, Zoom } from "react-awesome-reveal";
import { BotTypeWriter } from "../src/component/botTypeWriter";

const StyledDiv = styled.div`
  background-color: rgb(0, 0, 0);

  .ant-drawer {
    z-index: 200;
  }
  .ant-drawer-header {
    background: transparent;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 70px;
  }
  a:hover {
    text-decoration: none;
  }

  h2 {
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 65px;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 34px;
  }

  h4 {
    font-weight: 400;
    color: #fff;
    font-size: 24px;
  }

  .full-page-div-padding {
    padding: 0px 15%;
  }

  .ul {
    color: #fff;
    font-size: 22px;
    text-align: justify;

    li {
      margin: 50px 0;
    }
  }

  .landing-page-header {
    background-color: rgb(0, 0, 0);
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

  .landing-page-quote {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10%;
    blockquote {
      font-style: italic;
      color: #ec3a68;
      font-size: 18px;
    }

    img {
      width: 400px;
      pointer-events: none;
      user-select: none;
      float: right;
    }
  }

  .landing-page-video {
    height: 495px !important;
    width: 880px !important;
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
    background-color: #fff;
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
      color: #fff;
      text-align: center;
      margin-top: 16px;
    }
  }

  .site-drawer-render-in-current-wrapper {
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    background-color: #fff;
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

const SoftwarePrototypePage = () => {
  const [drawerVisibleIndex, setDrawerVisibleIndex] = useState(null);

  return (
    <>
      <StyledDiv>
        <Row className="landing-page-header">
          <Fade triggerOnce direction="left">
            <img
              className="logo"
              src="/images/eForte_logo_inverted.svg"
              alt="eforte-logo"
            />
          </Fade>
          <Fade triggerOnce direction="right">
            <Link href="/software-prototype-and-documentation#form">
              <a>
                <div className="header-button">BOOK A CALL</div>
              </a>
            </Link>
          </Fade>
        </Row>
        <div className="full-page-div-padding">
          <Row>
            <Col span={24}>
              <div style={{ marginTop: 80, marginBottom: 40 }}>
                <Fade triggerOnce direction="up" damping={0.2} cascade>
                  <h3 style={{ textAlign: "center", color: "white" }}>
                    Save thousands of dollars in Software App development, present your
                    software app idea to potential investors and gauge Product Market Fit
                    before you start the Development phase!!
                  </h3>
                </Fade>
              </div>
              <div>
                <Zoom triggerOnce>
                  <ReactPlayer
                    className="landing-page-video"
                    controls={true}
                    url="https://www.youtube.com/watch?v=AxnIFqEakag"
                  />
                </Zoom>
              </div>
            </Col>
          </Row>

          <Row align="middle">
            <ul style={{ padding: "0px 20px" }} className="ul">
              <Fade triggerOnce cascade direction="up">
                <li>
                  Ever thought how do the successful SaaS apps on the internet develop
                  their software? You say they have large budgets to do that, not really.
                  They all have one thing common that they go through the SPDP (Software
                  Product Documentation and Prototyping) process before a single line of
                  code is written.
                </li>
                <li>
                  The method of SPDP (Software Product Documentation and Prototyping) is
                  the most logical and crucial phase for the success of your MVP (Minimum
                  Viable Product) or any kind of Software Product Development cycle.
                </li>
                <li>
                  This method is in lines with how architects model a prototype and do
                  detailed documentation before developing a construction project.
                </li>
                <li>
                  You will be asked few simple questions about the App you want to build
                  and we will take it from there.
                </li>
                <li>
                  During the process of Software Product Documentation and Prototyping
                  (SPDP), our expert business analysts will to be able to clearly outline
                  your idea on paper in shape of 8 specifically drafted documents for your
                  product idea.
                </li>
                <li>
                  For the prototype of actual looking App, industry experienced Design
                  team will work to make mock designs. As you approve them, our design
                  team will make the clickable design flow of your customer journey. You
                  can show and get praised on the same from your potential investors and
                  customers.
                </li>
              </Fade>
            </ul>

            <div className="landing-page-quote">
              <blockquote>
                <Fade triggerOnce cascade direction="up" damping={0.2}>
                  <p>
                    {`"There is no shortage of remarkable ideas… what's missing is the will and
                knowledge to execute them."`}
                  </p>
                  <br />
                  <br />
                  <br />

                  <span style={{ fontSize: 14 }}>~ Seth Godin ~</span>
                </Fade>
              </blockquote>
              <img alt="Seth-Godin" src={sethGodinImage} />
            </div>

            <Row gutter={[40, 40]}>
              <Col span={24}>
                <Fade triggerOnce direction="up" cascade damping={0.2}>
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
                  <Fade triggerOnce direction="up" damping={0.2} cascade>
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
          </Row>
          <div>
            <TestimonyWithRating
              headingColor={"#fff"}
              headingFontSize={32}
              fontWeight={600}
              paraColor={"#fff"}
              personNameColor={"#fff"}
              headingLineColor={"#000"}
              imageBgColor={"#363636"}
            />
            {/* <ClientReviewAndAboutProject
              backgroundColor="rgb(0,0,0)"
              marginTop="0%"
              color="#fff"
              paraColor="#fff"
            /> */}
          </div>

          <div id="form" style={{ padding: "5% 5%", userSelect: "none" }}>
            <Fade triggerOnce direction="up">
              <h3>Schedule Your Call ASAP By Using The Form Below</h3>
            </Fade>
            <Calendly />
          </div>
        </div>
        {/* <LandingPageFooter /> */}
      </StyledDiv>
    </>
  );
};

export default SoftwarePrototypePage;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        // title: "Requirement analysis, Design, Development, QA, Deployment",
        title: "Comprehensive Prototyping and Documentation Solutions | eForte",
        description:
          // " Exceptional Software Prototyping And Documentation Services That Give Your Software App An Edge",
          "Delivering exceptional product development through expert prototyping and documentation services.",
        keywords: "Requirement analysis, Design, Development, QA, Deployment",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
