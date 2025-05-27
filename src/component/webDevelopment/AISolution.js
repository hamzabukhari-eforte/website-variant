import styled from "styled-components";
import { Row, Col, Timeline } from "antd";
import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { Bounce, Slide, Fade, Zoom } from "react-awesome-reveal";
import Heading from "../headings";

const solutions = [
  {
    title: "DATA PROCESSING",
    heading: "Our Expert Data Preprocessing Services",
    subHeading: ``,
    description: `Data preprocessing is a crucial step in data analysis. At eForte,
    we use advanced tools and techniques to ensure that your raw
    data is transformed into a format that is consistent, accurate, and
    error-free, making it ready for analysis. Our expert team guarantees the accuracy 
    and consistency of your data to provide actionable insights that optimize your 
    business outcomes. Trust eForte for high-quality data preprocessing services that deliver results.`,
    list: [],
  },
  {
    title: "DATA CLEANING",
    heading: "Spotless Data for Accurate Insights",
    subHeading: ``,
    description: `Data cleaning is a vital process that involves identifying and
    correcting errors, inconsistencies, and inaccuracies in data. It
    ensures that the data used for analysis is reliable and accurate.
    At eForte, we use a variety of data cleaning techniques, such as
    data profiling, data deduplication, and data normalization, to
    ensure that your data is clean and ready for analysis.`,
    list: [],
  },
  {
    title: "MACHINE LEARNING TRAINING",
    heading: "Machine Learning Model Training",
    subHeading: ``,
    description: `Our model training services at eForte help you build precise
    machine-learning models that predict outcomes accurately. Our
    experienced team uses advanced tools and techniques to train
    your models on large datasets, ensuring optimal performance.
    We work closely with you to understand your unique business
    needs and tailor our services accordingly. With eForte's model
    training services, you can expect accurate predictions and
    growth-driving solutions for your business. `,
    list: [],
  },
  {
    title: "PERFORMANCE ANALYSIS",
    heading: "Model Performance Analysis",
    subHeading: ``,
    description: `Our team of experts uses advanced techniques to evaluate
    performance, identify issues, and optimize accuracy and
    reliability. We customize our solutions to meet your unique
    business needs, providing accurate and reliable model testing
    that drives growth and success. Trust us to deliver the finest
    model testing in the industry.`,
    list: [],
  },
];

const StyledSection = styled.section`
  padding: 5% 10%;
  .arrow-icon {
    color: #ed3c69;
    font-size: 24px;
    cursor: pointer;
  }

  h3 {
    font-size: 22px;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-evenly;
  }

  .main-div-content {
    display: flex;
    padding: 0px 2% 24px 8%;
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
  }

  .solution-option h5 {
    transition: 0.3s;
    color: #808080;
    padding: 12px 21px;
    border-bottom: 2px solid #808080;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    :after {
      content: "";
      height: 28px;
      width: 2px;
      background-color: #808080;
      position: absolute;
      right: -36px;
    }
  }

  .solution-option:last-child h5:after {
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
      h5 {
        font-size: 12px;
        padding: 12px 24px;
      }
    }
  }
`;

const ArtificialIntelligenceSolution = () => {
  const [solution, setSolution] = useState(0);
  return (
    <StyledSection className="text-center">
      <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
        <Heading title={<>Our Services</>} />
        <p className="text-md-center text-left">
          eForte's AI as a Service is highly scalable, customizable, and easy to use,
          providing businesses with a flexible and cost-effective solution for
          implementing AI.
        </p>
      </Fade>

      <div className="solutions-wrapper mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 1114 }} xs={0} sm={0} md={0} lg={24} xxl={24}>
            <div className="solutions-heading">
              {solutions.map((item, index) => (
                <div key={index} className="solution-option">
                  <Fade triggerOnce cascade damping={0.2}>
                    <h5
                      onClick={() => setSolution(index)}
                      style={{
                        color: index == solution ? "#ED3C69" : "#000",
                        borderColor: index == solution ? "#ED3C69" : "#808080",
                      }}
                    >
                      {item.title}
                    </h5>
                    <div style={{ display: "block" }}>
                      {index == solution && (
                        <Bounce>
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
                      <h5 className="solution-sub-title my-4">
                        {solutions[solution].subHeading}
                      </h5>
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
                        alt="ai-solution"
                        src={`/images/artificial_intelligence/ai-${solution + 1}.jpg`}
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

export default ArtificialIntelligenceSolution;
