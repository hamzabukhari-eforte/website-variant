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
    title: "IDEATION & CREATIVE DIRECTION",
    heading: "Ideation and Creative Direction",
    subHeading: ``,
    description: `Our internal creative team is highly skilled in leveraging AR/VR
    technology to optimize existing brand functionalities or to develop entirely new concepts from scratch. We take a full-cycle approach to every project, from the initial stages of strategizing to
    the final stages of design, ensuring that we deliver fully immersive experiences that captivate and engage users. With our expertise in AR/VR design and development, we help our clients
    create impactful and memorable experiences that leave a lasting
    impression on their audience.`,
    list: [],
  },
  {
    title: "IMMERSIVE VIRTUAL WORLDS",
    heading: "Crafting Immersive Virtual Worlds",
    subHeading: ``,
    description: `Our visual artists provide complete modeling and environment
    creation services, whether it's expansive virtual worlds or smartphone-friendly low-poly 3D models. We prioritize cost-effectiveness while maintaining the highest standards of quality.`,
    list: [],
  },
  {
    title: "ELEVATING USER EXPERIENCES",
    heading: "Elevating User Experiences",
    subHeading: ``,
    description: `Our in-house AR/VR development team has proven expertise in
    producing cross-platform experiences. We have delivered a wide
    range of services, including immersive filters, interactive portals
    and lenses, and elaborate brand-oriented games.`,
    list: [],
  },
  {
    title: "PHYSICAL & VIRTUAL WORLDS",
    heading: "Bridging the Physical and Virtual Worlds",
    subHeading: ``,
    description: `Extend your virtual world beyond screens with our AR activations at live events and physical BTL activities. We help brands
    create memorable and immersive experiences that leave a lasting impact on their audiences.`,
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
      right: -12px;
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

const AugmentedVirtualReality = () => {
  const [solution, setSolution] = useState(0);
  return (
    <StyledSection className="text-center">
      <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
        <Heading title={<>Services We Provide</>} />
        <p className="text-md-center text-left">
          We specialize in creating state-of-the-art AR/VR solutions that transcend
          various industries, platforms, and application use cases. Our mission is to help
          businesses enhance engagement and simplify intricate processes through immersive
          and interactive digital experiences
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
                        src={`/images/ar_vr/ar-vr-${solution + 1}.jpg`}
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

export default AugmentedVirtualReality;
