import React from "react";
import styled from "styled-components";
import { Row, Col, Timeline } from "antd";
import {
  webDevelopment1,
  webDevelopment2,
  webDevelopment3,
  webDevelopment4,
  webDevelopment5,
  webDevelopment6,
  additionalServices1,
  additionalServices2,
  additionalServices3,
  additionalServices4,
  additionalServices5,
  additionalServices6,
} from "../../../images";
import { Slide, Fade, Bounce, Zoom } from "react-awesome-reveal";
import Heading from "../headings";
import Link from "next/link";

const StyledDiv = styled.div`
  padding: 5% 5% 0px 5%;

  .main-div {
    padding: 0px 10%;
    .row {
      padding-top: 60px;
      padding-bottom: 60px;
      border-bottom: 1px solid darkgray;
      min-height: 400px;
      align-items: center;
      :last-child {
        border-bottom: 0px;
      }
    }

    .twoLineList li {
      width: 50%;
      float: left;
      font-weight: 400;
      margin-top: 6px;
      margin-bottom: 6px;
      // white-space: nowrap;
    }

    .request-a-quote {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      background-color: #ed3c69;
      color: #fff;
      width: 160px;
      border-radius: 4px;
      user-select: none;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
    .image-div {
      display: flex;
      justify-content: center;
      img {
        width: 450px;
        border-radius: 6px;
      }
    }
    .heading {
      display: flex;
      align-items: center;
    }
    .number-div {
      min-height: 40px;
      min-width: 40px;
      background-color: #ed3c69;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      user-select: none;
      margin-right: 12px;
    }
    .para {
      margin-top: 12px;
      line-height: 1.9;
      padding: 0px 4% 0px 0px;
    }
  }

  @media (max-width: 1300px) {
    .main-div {
      padding: 0px 5%;
      .para {
        padding: 0px 4% 0px 0px;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 100px 5% 0px;
    .main-div {
      .para {
        padding: 0px 0px 0px 0px;
      }
      .image-div {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 350px;
        }
      }
      .heading {
        margin-top: 24px;
      }
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 576px) {
    .twoLineList li {
      width: 100%;
    }
  }
`;

const webDevelopmentArray = [
  {
    image: webDevelopment1,
    title: "Content Management System",
    para: "We create websites using CMS so that you can update your website whenever you want to without running after a professional. Get our specialized and professional services as we master in incorporating CMS in all kinds of websites including Drupal and WordPress.",
  },
  {
    image: webDevelopment2,
    title: "Store Development",
    para: "Without a smooth and user-friendly online store, you cannot run a successful ecommerce website. Our web developers are well-aware of the pre-requisites of e-stores and embed plug-ins that makes online shopping easier and fun.",
  },
  {
    image: webDevelopment3,
    title: "Shopping Cart Integration",
    para: "Every e-business wishes to offer a seamless experience to its visitors. But to have such an online store you need professional web developers who are experienced in the field. At eForte, you can find highly skilled web developers who specialize in designing customized Magneto and Open-cart plug-in. we ensure that your online shop is smooth and easy-to-navigate.",
  },
  {
    image: webDevelopment4,
    title: "Payment API Integration",
    para: "eForte specializes in making online shopping a safer and easier choice for the customers. We are experienced in combining POS, CRM, Inventory Management and Financial Management to ensure safe online money transactions. We revolutionize e-business with our new and innovative technology.",
  },
  {
    image: webDevelopment5,
    title: "Javascript, Jquery & Ajax Development",
    para: "Ajax, Jquery and Javascript are the world's leading models used in developing and designing websites. Web developers at eForte have a vast expertise of creating these models to create innovative and exquisite websites for clients worldwide. We may use any one or the combination of these models to produce efficient and functional websites that will make you stand out from the competition.",
  },
  {
    image: webDevelopment6,
    title: "Custom Code",
    para: "Customized plug-ins and applications are one of the most important tools for creating your online brand identity. Web developers at eForte know what it takes to design custom codes for your website, plug-ins and/or applications. Our custom coded websites are not only compatible with all types of browsers but also with all mobile platforms.",
  },
];

const additionalServicesArray = [
  {
    image: "/images/web_solutions/ws_image_1.png",
    slug: "/services/mobile-app-development",
    title: "MOBILE APP DEVELOPMENT",
    subTitle: "360 App Development Package",
    heading:
      "Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.",
    para: (
      <>
        A complete solution for your Mobile App development needs, delivering Native and
        Hybrid optimized App-store designs which are attractive and intuitive to explore.
        Mobile Apps market being a competitive domain, it can be over whelming to
        understand every aspect of Mobile apps development. You need professionals who can
        help you scale from idea encapsulation to design and delivery on app store.
        <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item>Requirement Analysis through a questionnaire</Timeline.Item>
          <Timeline.Item>
            Detailed Level of Efforts Estimate (for transparent costing)
          </Timeline.Item>
          <Timeline.Item>
            Prototype of App Design with Admin panel for KPI measurement{" "}
          </Timeline.Item>
          <Timeline.Item>
            Testing, Technical and milestone deliveries documents
          </Timeline.Item>
          <Timeline.Item>World class customer support</Timeline.Item>
        </Timeline>
      </>
    ),
  },

  {
    image: "/images/web_solutions/ws_image_4.png",
    slug: "/services/startup-mvp-and-prototyping",
    title: "STARTUP MVP & PROTOTYPING",
    subTitle: "Startup MVP & Product Prototyping",
    heading: "Creating a 'Software as a Service' or SaaS product isn't an easy process.",
    para: (
      <>
        Some startups decide to go the MVP route directly, which means minimum viable
        product, to demonstrate the idea to potential customers and investors. But this is
        expensive, since it requires hiring an in-house team or software development
        company. The right solution is prototyping your product idea before an MVP the
        same way architects model a prototype before taking up a big construction project.
        <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item>SaaS Portals</Timeline.Item>
          <Timeline.Item>Business Process Automation</Timeline.Item>
          <Timeline.Item>B2B and B2C portals</Timeline.Item>
        </Timeline>
      </>
    ),
  },

  {
    image: "/images/web_solutions/ws_image_7.jpg",
    slug: "/services/blockchain",
    showBtn: true,
    title: "BLOCKCHAIN STRATEGY CONSULTING",
    subTitle: "A new era of web 3.0",
    heading:
      "Web only Apps with Business Dashboards give insights for KPIs and Users Management",
    para: (
      <>
        Our blockchain strategy consulting service helps clients understand the potential
        benefits of blockchain technology and how it can be used to solve their business
        problems. We work with clients to develop a clear roadmap for implementing
        blockchain solutions and provide guidance on choosing the right blockchain
        platform for their specific needs.
      </>
    ),
  },
  {
    image: "/images/web_solutions/ws_image_8.jpg",
    slug: "/services/artificial-intelligence",
    showBtn: true,
    title: "ARTIFICIAL INTELLIGENCE (AI)",
    subTitle: "Business to Business Web Apps",
    heading:
      "Business to Business Dashboard Web Apps that are reliable for commercial client engagement",
    para: (
      <>
        Our team of AI experts helps businesses innovate, gain deeper customer insights,
        automate processes, and become more cost-efficient. We provide customized AI
        solutions tailored to each business's needs, from developing predictive models to
        automating customer service and optimizing production processes.
      </>
    ),
  },

  {
    image: "/images/web_solutions/ws_image_9.jpg",
    slug: "/services/staff-augmentation",
    showBtn: true,
    title: "STAFF AUGMENTATION - Dedicated Resource Hiring",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    heading: "Creating a 'Software as a Service' or SaaS product isn't an easy process.",
    para: (
      <>
        we offer Staff Augmentation services to help businesses expand their IT teams with
        dedicated, skilled resources. Our Dedicated Resource Hiring model allows companies
        to hire talented professionals who work exclusively for them on a full-time basis,
        without the need for lengthy recruitment processes or lengthy onboarding.
      </>
    ),
  },

  {
    image: "/images/web_solutions/ws_image_10.jpg",
    slug: "/services/augmented-virtual-reality",
    showBtn: true,
    title: "AUGMENTED / VIRTUAL REALITY",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    heading: "Creating a 'Software as a Service' or SaaS product isn't an easy process.",
    para: (
      <>
        We specialize in creating state-of-the-art AR/VR solutions that transcend various
        industries, platforms, and application use cases. Our mission is to help
        businesses enhance engagement and simplify intricate processes through immersive
        and interactive digital experiences.
      </>
    ),
  },
];

const WebDevelopement = (props) => {
  return (
    <StyledDiv>
      <div className="main-div">
        {props.type == "webDevelopment" ? (
          <>
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <Heading title={"Our Expertise"} />
              <p style={{ textAlign: "center" }}>
                Our experts know what it takes to offer you an all-inclusive Apps
                designing and development services. Working with a company like eForte
                with a decade of experience entitles you to a diverse team of experts who
                are the connoisseurs of the software designing and development industry.
              </p>
            </Fade>
            {webDevelopmentArray.map((data, index) => {
              return (
                <Row
                  style={{ flexDirection: index % 2 == 0 ? "initial" : "row-reverse" }}
                  className="row"
                  id={data.slug}
                >
                  <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Zoom triggerOnce>
                      <div className="image-div">
                        <img src={data.image} alt="img" />
                      </div>
                    </Zoom>
                  </Col>
                  <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Fade triggerOnce direction="up" cascade>
                      <div className="heading">
                        {/* <div className="number-div">{index + 1}</div> */}
                        <h3 style={{ marginBottom: 0 }}>{data.title}</h3>
                      </div>
                      <p className="para">{data.para}</p>
                      {/* <div className="request-a-quote">GET A FREE QUOTE</div> */}
                    </Fade>
                  </Col>
                </Row>
              );
            })}
          </>
        ) : (
          <>
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <Heading title={"Our Expertise"} />
              <p style={{ textAlign: "center" }}>
                Our experts know what it takes to offer you an all-inclusive Apps
                designing and development services. Working with a company like eForte
                with a decade of experience entitles you to a diverse team of experts who
                are the connoisseurs of the software designing and development industry.
              </p>
            </Fade>
            {additionalServicesArray.map((data, index) => {
              return (
                <Row
                  style={{ flexDirection: index % 2 == 0 ? "initial" : "row-reverse" }}
                  className="row"
                  id={data.slug}
                >
                  <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Zoom triggerOnce>
                      <div className="image-div">
                        <img
                          src={data.image}
                          alt="img"
                          style={{ width: index == 3 ? 450 : 450 }}
                        />
                      </div>
                    </Zoom>
                  </Col>
                  <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Fade triggerOnce direction="up" cascade>
                      <div className="heading">
                        {/* <div className="number-div">{index + 1}</div> */}
                        <h3 style={{ marginBottom: 0 }}>{data.title}</h3>
                      </div>
                      <p className="para">{data.para}</p>
                      <Link href={data.slug}>
                        <a
                          style={{ display: data.showBtn ? "flex" : "none" }}
                          className="request-a-quote"
                        >
                          Explore More
                        </a>
                      </Link>
                    </Fade>
                  </Col>
                </Row>
              );
            })}
          </>
        )}
      </div>
    </StyledDiv>
  );
};

export default WebDevelopement;
