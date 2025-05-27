import styled from "styled-components";
import { Row, Col, Timeline } from "antd";
import React, { useState, useEffect, useRef } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import Chart from "chart.js/auto";

const data = [
  {
    category: "Senior Software Engineer",
    budgets: [
      { country: "USA", budget: 15000 },
      { country: "Australia", budget: 12000 },
      { country: "Europe", budget: 10000 },
      { country: "South Asia", budget: 3000 },
    ],
  },
  {
    category: "Senior QA Engineer",
    budgets: [
      { country: "USA", budget: 12000 },
      { country: "Australia", budget: 11000 },
      { country: "Europe", budget: 9000 },
      { country: "South Asia", budget: 2500 },
    ],
  },
  {
    category: "Senior DevOps Engineer",
    budgets: [
      { country: "USA", budget: 11000 },
      { country: "Australia", budget: 10000 },
      { country: "Europe", budget: 8000 },
      { country: "South Asia", budget: 2000 },
    ],
  },
];
const solutions = [
  {
    title: "Software Engineer",
    heading: "The Cost-Quality Advantage of Engineers from South Asia",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `When staffing for software development, choosing Senior Software Engineers from South Asia brings a compelling proposition significant cost advantage coupled with top-notch skill and proficiency. It's the ideal choice for businesses aiming to maximize budget efficiency without compromising software development quality.`,
    list: [
    ],
  },
  {
    title: "QA Engineer",
    heading: "Attaining High-Quality Assurance on a Budget",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `Opting for Senior QA Engineers from South Asia provides organizations with a budget-friendly solution. This allows businesses to implement thorough quality assurance measures while still being mindful of budget constraints.`,
    list: [
    ],
  },
  {
    title: "DevOps Engineer",
    heading: "Streamlining Development Pipelines without Overspending",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `Businesses often face high costs when optimizing development pipelines with DevOps. Leveraging Senior DevOps Engineers from South Asia addresses this. It offers significant cost savings without compromising quality, enabling streamlined pipelines within budget.`,
    list: [
    ],
  },
];

const StyledSection = styled.section`
  padding: 3% 10%;
  .arrow-icon {
    color: #ed3c69;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .h3-heading {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    // width: max-content;
  }

  .h3-tag {
    font-size: 22px;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .main-div-content {
    display: flex;
    padding: 0px 2% 24px 0px;
    align-items: center;
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
    padding: 12px 0px;
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
      right: -45px;
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
    max-height: 300px;
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
      max-height: 250px;
    }
  }

  @media (max-width: 991px) {
    .main-div-content {
      display: contents;
    }
    .image-col {
      height: 100%;
    }
    .h3-tag {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    .h3-heading {
      text-align: center;
      font-size: 24px !important;
    }
  }

  @media (max-width: 1200px) {
    .solution-option {
      p {
        font-size: 14px;
        padding: 12px 16px;
        :after {
          content: "";
          height: 28px;
          width: 2px;
          background-color: #808080;
          position: absolute;
          right: -35px;
        }
      }
    }
  }
`;

const CostAnalysis = () => {
  const [solution, setSolution] = useState(0);
  const chartRefs = useRef([]);

  // Filter data based on selected solution index
  // const filteredData = data.filter((item, index) => index === solution);
  // const barColors = ["#ed3c69", "#232a38", "#FFFFFF"];
  const initializeCharts = () => {
    data.forEach((engineerData, i) => {
        if (i === solution) {
            const budgets = engineerData.budgets.map((b) => b.budget);
            const countries = engineerData.budgets.map((b) => b.country);
            const canvas = document.getElementById(`bar-chart-${i}`);
            if (canvas) {
                // Destroy existing chart if it exists
                if (chartRefs.current[i]) {
                    chartRefs.current[i].destroy();
                }
                const ctx = canvas.getContext("2d");
                chartRefs.current[i] = new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: countries,
                        datasets: [
                            {
                                label: "Cost",
                                data: budgets,
                                backgroundColor: "#ed3c69",
                                borderColor: "#ed3c69",
                                borderWidth: 1,
                                barThickness: getWindowWidth() <= 557 ? 20 : 30,
                                borderRadius: 5, // Set border radius to make the top of the bars curved
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: true,
                                    color: "#f4f3f7",
                                },
                                ticks: {
                                    color: "#232a38",
                                },
                            },
                            x: {
                                grid: {
                                    display: true,
                                    color: "#f4f3f7",
                                },
                                ticks: {
                                    color: "#232a38",
                                },
                            },
                        },
                        plugins: {
                            tooltip: {
                                backgroundColor: "#525252",
                                borderColor: "#ed3c69",
                                borderWidth: 1,
                            },
                            legend: {
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'rect',
                                    pointStyleWidth: 12,
                                    color: '#232a38',
                       
                                },
                            },
                        },
                        responsive: true,
                    },
                });
            }
        }
    });
};

  useEffect(() => {
    initializeCharts();
}, [solution]);

  // Function to get the window width
  const getWindowWidth = () => {
    return window.innerWidth;
  };
  return (
    <StyledSection className="text-center">
      <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "24px 0px",
          }}
        >
          <Col
            span={24}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Fade direction="up" triggerOnce cascade damping={0.2}>
              <h3
                style={{
                  color: "#000",
                  fontWeight: "-moz-initial",
                  fontSize: 33,
                }}
                className="h3-heading"
              >
                Cost Comparison for <br /> Dedicated Senior Software/QA/DevOps Engineers
                <div
                  style={{
                    margin: "8px 25%",
                    height: 3,
                    backgroundColor: "#2A2A2A",
                    borderRadius: 50,
                  }}
                ></div>
              </h3>
            </Fade>
          </Col>
        </div>
      </Fade>

      <div className="solutions-wrapper mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 600 }} xs={0} sm={0} md={0} lg={24} xxl={24}>
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
              <h3 className="h3-tag" style={{ color: "#ED3C69" }}>
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
                      <h3 className="solution-title h3-tag">
                        <b>{solutions[solution].heading}</b>
                      </h3>
                      {/* <p className="solution-sub-title my-4">
                        {solutions[solution].subHeading}
                      </p> */}
                      <p className="solution-description">
                        {solutions[solution].description}
                      </p>
                      <div className="twoLineList">
                        <Timeline>
                          {solutions[solution].list.map((listItem) => (
                            <Timeline.Item key={index}>{`${listItem}`}</Timeline.Item>
                          ))}
                        </Timeline>
                      </div>
                    </Col>
                  </Fade>

                  <Zoom triggerOnce>
                    <Col xl={24} className="image-col text-center mx-auto">
                      <canvas
                        id={`bar-chart-${index}`}
                        width="450"
                        height="300"
                        className="image-tag"
                      ></canvas>
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

export default CostAnalysis;
