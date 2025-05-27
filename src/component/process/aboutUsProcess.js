import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Heading from "../headings";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import {
  brand,
  client,
  clientGray,
  dependable,
  dependableGray,
  inspirational,
  inspirationalGray,
  integrity,
  integrityGray,
  mission,
  quality,
  qualityGray,
  trust,
  trustGray,
  vision,
} from "../../../images";
import { Fade, Zoom, Slide, JackInTheBox } from "react-awesome-reveal";
import { Collapse, Row, Col, Timeline } from "antd";

const StyledDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 70px;

  .ant-timeline-item-head {
    top: 20px;
    height: 16px;
    width: 16px;
    left: -2px;
    border-color: #ed3c69;
    color: #ed3c69;
    background-color: #ed3c69;
  }

  .dots-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 75%;
    min-height: 900px;
    margin: 50px 10% 50px 10%;

    p {
      margin-bottom: 0;
      margin-left: -12px;
    }
  }

  .dot {
    border-radius: 50%;
    background-color: #cacaca;
    // border: 2px solid #ed3c69;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #ed3c69;
    }
  }

  .step-icon {
    width: 800px;
    height: 200px;
    display: flex;
    // justify-content: space-between;
    // align-items: center;
  }

  .moving-dot {
    position: absolute;
    border-radius: 50%;
    background-color: #ed3c69;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    box-shadow: 0px 0px 15px #ed3c69;
  }

  .dots-background {
    width: 50px;
    background-color: transparent;
    height: 38px;
    border-right: 9px solid #fff;
    border-left: 9px solid #fff;
    margin: 0px 0px 0px -11px;
  }

  .ant-collapse-item-active .ant-collapse-header {
    color: #ed3c69 !important;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    align-items: center;
    margin-right: 12px;
    font-size: 25px;
    background-color: #f3f6fa;
    font-weight: 600;
    padding-bottom: 0px;
    padding-top: 6px;
    div {
      img {
        height: 50px;
      }
    }
  }
  .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 0;
    background-color: #f3f6fa;
  }
  .image-col {
    img {
      width: 100%;
    }
  }

  .above-slider-div {
    padding: 0px 15% 0px 0px;
    h2 {
      margin-bottom: 24px;
      font-weight: 600;
    }
    p {
      color: #4e4e4e;
      line-height: 2.5;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    .step-icon {
      width: 300px;
    }
  }

  .solutions-heading {
    display: flex;
    margin-bottom: 80px;
    margin-top: 40px;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
  }

  .arrow-icon {
    color: #fe8819;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    .dots-container {
      p {
        margin-bottom: 0;
        margin-left: -12px;
        font-size: 14px;
      }
    }

    .above-slider-div {
      p {
        line-height: 2;
      }
    }
  }

  @media (max-width: 767px) {
    .row {
      text-align: center;
    }
    .above-slider-div {
      padding: 0px;
      h2 {
        font-size: 24px;
      }
      p {
        line-height: 1.8;
      }
    }

    .image-col {
      img {
        width: 250px;
      }
    }
  }

  @media (max-width: 554px) {
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      font-size: 20px;
      padding-left: 0px;
      div {
        img {
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 480px) {
  }
`;

const steps = [
  {
    title: "Dependable",
    heading: "Dependable",
    para: `We inculcate in our team members that they must have element of dependability towards our clients. As we drive a crucial part of our client’s business mechanism towards success i.e. the software of their business process automation.`,
    image: dependable,
    imageGray: dependableGray,
  },
  {
    title: "Trust worthy",
    heading: "Trust worthy",
    para: `Each and every member of our team must display what they believe in and what the actual state of the matter is. Keeping it transparent for our clients make us win their confidence. `,
    image: trust,
    imageGray: trustGray,
  },
  {
    title: "Integrity",
    heading: "Integrity",
    para: `We work for providing solutions to problems faced by businesses while keeping our selves upright and honest.`,
    image: integrity,
    imageGray: integrityGray,
  },
  {
    title: "Client first",
    heading: "Client first",
    para: `Our work flow moves around the client and their requirements. Keeping them first make us think from their perspective and let us do things that would matter to them.`,
    image: client,
    imageGray: clientGray,
  },
  {
    title: "Inspirational",
    heading: "Inspirational",
    para: `We inspire ourselves and others through our work and work ethics.`,
    image: inspirational,
    imageGray: inspirationalGray,
  },
  {
    title: "Quality and Improvement",
    heading: "Quality and Improvement",
    para: `Working for quality output and continually improving the out put make us be the better version of ourselves compared to yesterday.`,
    image: quality,
    imageGray: qualityGray,
  },
];

/**
 * Component Starts Here
 */
const AboutUsProcess = ({ type, size }) => {
  const [value, setValue] = useState(1);
  const { Panel } = Collapse;

  // const myref = useRef({ offsetWidth: 0, clientHeight: 0 });
  // const movingDotRef = useRef({ clientWidth: 0 });

  // let movingBreadth,
  //   horizontal = true;
  // if (type === "horizontal") {
  //   movingBreadth =
  //     (myref.current?.offsetWidth - movingDotRef.current?.clientWidth) /
  //     (steps.length - 1);
  //   horizontal = true;
  // }
  // if (type === "vertical") {
  //   movingBreadth =
  //     (myref.current?.clientHeight - movingDotRef.current.clientWidth) /
  //     (steps.length - 1);
  //   horizontal = false;
  // }

  return (
    <StyledDiv>
      {/* <div ref={myref} className="dots-container" style={{ flexDirection: "column" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              width: size || 20,
              height: size || 20,
            }}
            className="dot"
            onClick={() => {
              setValue(index);
            }}
            id={index}
          >
            <div className="ml-5 mt-n5 step-icon">
              <div className="d-flex flex-column">
                <Collapse
                  expandIcon={(panelProps) => {
                    if (value == index) {
                      return <img src={steps[index].image} width="50px" />;
                    } else {
                      return <img src={steps[index].imageGray} width="50px" />;
                    }
                  }}
                  accordion={true}
                  bordered={false}
                  activeKey={index}
                  expandIconPosition="left"
                >
                  <Panel header={step.title} key={value}>
                    <p style={{ marginLeft: "65px", fontSize: 18 }}>{step.para}</p>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        ))}

        <div
          ref={movingDotRef}
          className="moving-dot"
          style={{
            width: size || 20,
            height: size || 20,
            [horizontal ? "left" : "top"]: `${movingBreadth * value}px`,
          }}
        />
        <div
          style={{
            position: "absolute",
            height: horizontal ? "2px" : "100%",
            width: horizontal ? "100%" : "2px",
            backgroundColor: "#cacaca",
            zIndex: 0,
          }}
        />
      </div> */}

      <Timeline>
        {steps.map((data, index) => (
          <>
            <Fade triggerOnce direction="up" cascade>
              <Timeline.Item>
                <Collapse
                  expandIcon={({ isActive }) =>
                    isActive ? (
                      <img alt="process-img" src={steps[index].image} width="50px" />
                    ) : (
                      <img alt="process-img" src={steps[index].imageGray} width="50px" />
                    )
                  }
                  defaultActiveKey={1}
                  destroyInactivePanel={true}
                  accordion={true}
                  bordered={false}
                  expandIconPosition="left"
                >
                  <Panel header={data.title}>
                    <Fade direction="up" cascade>
                      <p style={{ marginLeft: "10%", fontSize: 18, marginBottom: 0 }}>
                        {data.para}
                      </p>
                    </Fade>
                  </Panel>
                </Collapse>
              </Timeline.Item>
            </Fade>
          </>
        ))}
      </Timeline>
    </StyledDiv>
  );
};

export default AboutUsProcess;
