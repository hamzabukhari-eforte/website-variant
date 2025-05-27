import styled from "styled-components";
import { Row, Col, Timeline } from "antd";
import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { Bounce, Slide, Fade, Zoom } from "react-awesome-reveal";
import Heading from "../headings";

const solutions = [
  {
    title: "Dart",
    heading: "AI Screening and training tool",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `We believe that good talent remains with a company who cares about
    their professional and personal growth.`,
    list: [
      "We've developed a state-of-the-art AI tool that transforms the candidates screening process.",
      "Designed to ensure quality candidates for our clients.",
      "Functions as a Learning Management System (LMS), providing career and learning pathways, courses, and certiﬁcations tailored to each candidate's tech-stack and experience analyzed through their Resume.",
      "Users then can add these courses (mostly free but some paid) to their personal learning library, enhancing their skills and qualiﬁcations, over time.",
    ],
  },
  {
    title: "Exceptional Talent",
    heading: "Tailored Talent Solutions for Your Project Success",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `At eForte, we’re a software development company providing managed talent for your project needs– we handpick experienced IT professionals tailored for startups, SMEs, and public sector. Our lead software experts choose skilled professionals who go beyond meeting expectations. We're not just providing software engineers; we’re managing your dedicated team members for you, focused on delivering quality solutions and expertly solving problems for your success.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  {
    title: "Try Before You Commit",
    heading: "Explore eForte's Premium IT Staffing Solution Risk-Free",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `Try eForte's premium IT staffing solution risk-free for a week. Enhance your business operations confidently, knowing you've found the perfect IT match. You do not pay anything upfront till we find you the talent and you have tested their capabilities for a week.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  {
    title: "Cultural Fit",
    heading: "Strengthening Collaboration through eForte's Cultural Fit Approach",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `At eForte, we’re determined at making sure our team fits well with yours. Our engineers are not just tech experts; they make efforts in becoming part of your team's way of doing things, making sure everyone works together smoothly. It's not just about getting tasks done; it's about building a strong connection between cultures for successful results.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  {
    title: "Reliable Replacements",
    heading: "Swift Access to Pre-Screened Talent for Seamless Project Continuity",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `Count on our continuous support. In the unlikely event of a replacement requirement, tap into our pre-screened talent pool for swift access to alternative candidates. This ensures your project remains on track with zero downtime. We provide you with the replacement and they takeover from the previous resource with 3 days overlapping period at no cost to you.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
];

const StyledSection = styled.section`
  padding: 3% 10%;
  .arrow-icon {
    color: #ed3c69;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 22px;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .main-div-content {
    display: flex;
    padding: 0px 2% 24px 0px;
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
  }

  .solution-option p {
    transition: 0.3s;
    color: #808080;
    padding: 12px 30px;
    border-bottom: 2px solid #808080;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    :after {
      content: "";
      height: 28px;
      width: 2px;
      background-color: #808080;
      position: absolute;
      right: -18px;
    }
  }

  .solution-option:last-child p:after {
    display: none;
  }

  .solution-description {
    color: dimgray;
    line-height: 2;
    font-weight: 400;
  }

  .solution-sub-title {
    color: #050607;
    line-height: 1.8;
    font-weight: 600;
  }

  .twoLineList ul {
    color: dimgray;
    padding: 5px 18px;
    margin: 0;
    padding: 0px 20px;
  }

  .twoLineList li {
    width: 50%;
    float: left;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 6px;
    // white-space: nowrap;
  }

  .image-tag {
    max-width: 450px;
  }

  @media (max-width: 576px) {
    .arrow-icon {
      color: #ed3c69;
      font-size: 24px;
      cursor: pointer;
      margin-bottom: 8px;
    }
    .twoLineList li {
      width: 100%;
    }
    .image-tag {
      max-width: 300px;
    }
  }

  @media (max-width: 991px) {
    .main-div-content {
      display: contents;
    }
    .image-col {
      height: 100%;
    }
    h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 1200px) {
    .solution-option {
      p {
        font-size: 12px;
        padding: 12px 24px;
        :after {
          content: "";
          height: 28px;
          width: 2px;
          background-color: #808080;
          position: absolute;
          right: -6px;
        }
      }
    }
  }
`;

const Difference = () => {
  const [solution, setSolution] = useState(0);
  return (
    <StyledSection className="text-center">
      <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
        <Heading
          // title={
          //   <>
          //     What makes us different from other Staff Augmentation Firms
          //   </>
          // }
          title={<>Suiting Talent for Your Company</>}
        />
        {/* <p className="text-md-center text-left">
          Our experts know what it takes to offer you an all-inclusive Apps designing and
          development services. Working with a company like eForte with a decade of
          experience entitles you to a diverse team of experts who are the connoisseurs of
          the software designing and development industry.
        </p> */}
      </Fade>

      <div className="solutions-wrapper mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 1160 }} xs={0} sm={0} md={0} lg={24} xxl={24}>
            <div className="solutions-heading">
              {solutions.map((item, index) => (
                <div key={index} className="solution-option">
                  <Fade triggerOnce cascade damping={0.2}>
                    <p
                      onClick={() => setSolution(index)}
                      style={{
                        color: index == solution ? "#ED3C69" : "#000",
                        borderColor: index == solution ? "#ED3C69" : "#808080",
                      }}
                    >
                      {item.title.toUpperCase()}
                    </p>
                    <div style={{ display: "block" }}>
                      {index == solution && (
                        <Bounce>
                          {/* <HiOutlineChevronDown className="arrow-icon" /> */}
                          <HiChevronDoubleDown className="arrow-icon" />
                        </Bounce>
                      )}
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={0} xxl={0}>
            <div className="solutions-heading  align-items-center">
              <HiChevronDoubleLeft
                className="arrow-icon"
                onClick={() => setSolution((prev) => (prev > 0 ? prev - 1 : 0))}
              />
              <h3 style={{ color: "#ED3C69" }}>
                <b>{solutions[solution]?.title}</b>
              </h3>
              <HiChevronDoubleRight
                className="arrow-icon"
                onClick={() =>
                  setSolution((prev) =>
                    prev < solutions.length - 1 ? prev + 1 : solutions.length - 1
                  )
                }
              />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row className="text-left" justify="space-between">
          {solutions.map((item, index) => (
            <>
              {index == solution && (
                <div className="main-div-content">
                  <Fade cascade triggerOnce>
                    <Col xl={22}>
                      <h3 className="solution-title">
                        <b>{solutions[solution].heading}</b>
                      </h3>
                      <p className="solution-sub-title my-4">
                        {solutions[solution].subHeading}
                      </p>
                      <p className="solution-description">
                        {solutions[solution].description}
                      </p>
                      <div className="twoLineList">
                        <Timeline>
                          {solutions[solution].list.map((listItem) => (
                            <Timeline.Item>{`${listItem}`}</Timeline.Item>
                          ))}
                        </Timeline>
                      </div>
                    </Col>
                  </Fade>

                  <Zoom triggerOnce>
                    <Col xl={24} className="image-col text-center mx-auto">
                      <img
                        alt="difference"
                        src={`/images/difference/diff_image_${solution + 1}.png`}
                        style={{ borderRadius: 8 }}
                        className="image-tag"
                      />
                    </Col>
                  </Zoom>
                </div>
              )}
            </>
          ))}
        </Row>
      </div>
    </StyledSection>
  );
};

export default Difference;
