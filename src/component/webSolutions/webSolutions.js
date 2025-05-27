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
    title: "IT Staff Augmentation",
    // heading: "360 App Development Package",
    heading: "Revolutionizing Remote IT Staff Augmentation",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `At eForte Solutions Inc. we redefine the dynamics of remote IT staff augmentation, offering a transformative blend of excellence, efficiency, and cost-effectiveness. As your dedicated partner, we specialize in providing fully managed, pre-rated software engineers who seamlessly integrate with your culture, proficiently communicate in English, and rigorously follow agile methodologies.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  {
    title: "Software Development",
    // heading: "360 App Development Package",
    heading: "Custom Software Solutions for Global Enterprises",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `As a premier custom software development company, we cater to global enterprises and startups, offering top-notch services throughout the software development lifecycle. From ideation to delivery, security, and maintenance, our expert team delivers rapid and foolproof solutions. Whether customizing platforms, prototyping, or implementing complex tech solutions, we ensure excellence at every stage.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  {
    title: "IT Consulting",
    // heading: "360 App Development Package",
    heading: "Premium IT Consulting Services for Every Project Scale",
    // subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
    description: `With a decade of commitment to quality and excellence, we've become a trusted provider of premium IT consulting services for your startup to enterprise level projects. We focus on delivering forward-looking solutions to help businesses strategically surpass their objectives in today's evolving landscape.`,
    list: [
      // "Requirement Analysis through a questionnaire",
      // "Detailed Level of Efforts Estimate (for transparent costing)",
      // "Prototype of App Design with Admin panel for KPI measurement ",
      // "Testing, Technical and milestone deliveries documents",
      // "World class customer support",
    ],
  },
  // {
  //   title: "MOBILE APP DEVELOPMENT",
  //   heading: "360 App Development Package",
  //   subHeading: `Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.`,
  //   description: `A complete solution for your Mobile App development needs, delivering Native and Hybrid optimized App-store designs which are attractive and intuitive to explore. Mobile Apps market being a competitive domain, it can be over whelming to understand every aspect of Mobile apps development. You need professionals who can help you scale from idea encapsulation to design and delivery on app store.`,
  //   list: [
  //     "Requirement Analysis through a questionnaire",
  //     "Detailed Level of Efforts Estimate (for transparent costing)",
  //     "Prototype of App Design with Admin panel for KPI measurement ",
  //     "Testing, Technical and milestone deliveries documents",
  //     "World class customer support",
  //   ],
  // },
  // {
  //   title: "B2C DASHBOARDS",
  //   heading: "Web Apps & Business to Customer Dashboards",
  //   subHeading: `Web only Apps with Business Dashboards give insights for KPIs and Users Management`,
  //   description: `Your business may require customers to interact with Web only App with Admin dashboard for managing users and measuring KPIs. Our experience as solution provider has given us the edge in creating Web App dashboards for any business model with a clean practical interface. We create Business Dashboard apps that can generate clear visualizations of very complex data sets, empowering Manager to make better decisions faster.`,
  //   list: [
  //     "Automation of complex business processes",
  //     "Visual presentation of performance measures",
  //     "Ability to generate detailed reports",
  //     "Manage Users, Admins and process flows",
  //   ],
  // },
  // {
  //   title: "B2B DASHBOARDS",
  //   heading: "Business to Business Web Apps",
  //   subHeading: `Business to Business Dashboard Web Apps that are reliable for commercial client engagement`,
  //   description: `According to the needs of your business you might have to deal with other businesses, B2B portals allow you to manage your relationships with other businesses i.e. distributors, partners, vendors and also customers through use of a single platform. At eForte, we know what it takes to develop astounding B2B Web Portals that allows businesses to channel their services across the globe.`,
  //   list: [
  //     "Investment Portals",
  //     "Recruitment Portals",
  //     "Online food delivery",
  //     "Transport portals",
  //   ],
  // },
  // {
  //   title: "STARTUP MVP & PROTOTYPING",
  //   heading: "Startup MVP & Product Prototyping",
  //   subHeading: `Creating a 'Software as a Service' or SaaS product isn't an easy process.`,
  //   description: `Some startups decide to go the MVP route directly, which means minimum viable product, to demonstrate the idea to potential customers and investors. But this is expensive, since it requires hiring an in-house team or software development company. The right solution is prototyping your product idea before an MVP the same way architects model a prototype before taking up a big construction project.`,
  //   list: ["SaaS Portals", "Business Process Automation", "B2B and B2C portals"],
  // },
  // {
  //   title: "BLOCKCHAIN DEVELOPMENT",
  //   heading: "Blockchain Development",
  //   subHeading: `Intelligently automating business processes and intuitive user experience are the basis
  //   of our solutions`,
  //   description: `"Blockchain" has already established itself as status quo for creating a
  //   distributed consensus in the digital online world. Companies around the globe are
  //   pursuing to adopt Blockchain to create innovative business models to overtake the
  //   competition. We can help you adopt to the blockchain technology as we have
  //   resources and talent to provide support in open source Blockchain related tools.
  //   eForte was awarded Entrepreneur of the year for the years 2017 and 2018
  //   consecutively by IBM. Our proficiency and understanding of the technology pave the
  //   way for revolutionizing many industries:`,
  //   list: [
  //     "The Human Resources Industry",
  //     "The Legal Industry",
  //     "The Healthcare Industry",
  //     "The Real Estate Industry",
  //     "The Online Music Industry",
  //     "Crowdfunding",
  //     "Supply Chain Management",
  //     "Education and Academia",
  //     "Payments, Money transfers and Banking",
  //     "Car Leasing and Sales",
  //     "Cloud Storage",
  //     "Gift Cards and Loyalty Programs",
  //     "Gun Tracking",
  //     "Law Enforcement",
  //     "Business and Corporate Governance",
  //     "Credit Histories",
  //     "Pharmaceutical Industry",
  //   ],
  // },
];

const StyledSection = styled.section`
  padding: 3% 10%;
  .arrow-icon {
    color: #ed3c69;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  

  h2 {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    // width: max-content;
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

  .solution-option h5 {
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
      right: -19px;
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

  @media (max-width: 1024px) {
    h2 {
      text-align: center;
      font-size: 24px !important;
    }
  }

  @media (max-width: 1200px) {
    .solution-option {
      h5 {
        font-size: 12px;
        padding: 12px 24px;
      :after {
        content: "";
        height: 28px;
        width: 2px;
        background-color: #808080;
        position: absolute;
        right: -17px;
      }
    }
    }
  }
`;

const WebSolutions = () => {
  const [solution, setSolution] = useState(0);
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
            <h2
              style={{
                color: "#000",
                fontWeight: "-moz-initial",
                fontSize: 33,
              }}
            >
              Have a Look at what eForte has to Offer!
              <div
                style={{
                  margin: "8px 25%",
                  height: 3,
                  backgroundColor: "#2A2A2A",
                  borderRadius: 50,
                }}
              ></div>
            </h2>
          </Fade>
        </Col>
      </div>
        {/* <Heading
          title={
            <>
              {/* From Mobile Apps, Business Dashboards
              <br />
              and E-Commerce Stores to Remarkable Web Apps
              <br />
              We Do it All! */}
              {/* Have a Look at what eForte has to Offer!
            </>
          }
        /> */}
        {/* <p className="text-md-center text-left">
          Our experts know what it takes to offer you an all-inclusive Apps designing and
          development services. Working with a company like eForte with a decade of
          experience entitles you to a diverse team of experts who are the connoisseurs of
          the software designing and development industry.
        </p> */}
        <p className="text-md-center">
          Our expertise spans IT Staff Augmentation, Consulting, and Software Development.
          With a decade of experience, eForte offers a diverse team of industry experts.
          Whether you need top-tier talent, strategic consulting, or customized software
          solutions, we deliver excellence in every aspect of your project.
        </p>
      </Fade>

      <div className="solutions-wrapper mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 600 }} xs={0} sm={0} md={0} lg={24} xxl={24}>
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
                      {item.title.toUpperCase()}
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
                        alt="web-solution"
                        src={`/images/web_solutions/ws_image_${solution + 1}.png`}
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

export default WebSolutions;
