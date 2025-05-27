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
import Link from "next/link";

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

const StyledSection2 = styled.div`
  .card-div {
    display: grid;
    // margin-bottom: 2%;
    // margin-right: 3%;
    // margin-left: 3%;
    transition: transform 0.5s ease;
    &:hover {
      transition: transform 0.5s ease;
      transform: scale(1.1);
    }
  }

  .head2 {
    font-weight: bold;
    font-size: 16px;
    color: rgb(69, 80, 98);
  }

  .sub-heading {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #7c7c7c;
  }

  .para {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 0;
    font-size: 13px;
    color: #7c7c7c;
  }

  .readmore {
    color: #4c4c4c;
    margin-bottom: 0px;
    margin-top: 5px;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      transition: 0.2s ease;
      padding: 0px 0px 0px 4px;
      color: #793b95;
    }
  }

  .card-div {
    background-color: #fff;
  }

  @media (max-width: 4000px) {
    padding: 0 18% 5% 18%;
  }

  @media (max-width: 1500px) {
    padding: 0 15% 5% 15%;

    .card-div {
      display: grid;
      // margin-bottom: 2%;
      // margin-right: 2%;
      // margin-left: 2%;
    }
  }

  @media (max-width: 1100px) {
    padding: 0 9%;
  }

  @media (max-width: 900px) {
    padding: 0 3% 1% 3%;
  }

  @media (max-width: 767px) {
    padding: 0 9% 4% 9%;

    .head2 {
      font-weight: 700;
      font-size: 14px;
    }
    .sub-heading {
      font-size: 12px;
    }
    .para {
      font-size: 12px;
    }
    .readmore {
      font-size: 12px;
      font-weight: 400;
    }
    .card-div {
      // margin: 4%;
    }
  }
  @media (max-width: 600px) {
    padding: 0 3%;
  }

  @media (max-width: 575px) {
    padding: 0 25%;
    .card-div {
      // margin: 8%;
    }
  }

  @media (max-width: 500px) {
    padding: 0 20%;
  }

  @media (max-width: 400px) {
    padding: 0 15%;
  }

  @media (max-width: 350px) {
    padding: 0 12%;
  }

  @media (max-width: 300px) {
    padding: 0 8%;
  }
`;

const StyledSection3 = styled.div`
  padding: 5%;
`;

const StaffAugmentation = () => {
  const projects = [
    {
      img: `/images/staff_augmentation/staff-1.jpg`,
      subImg: ``,
      heading: "Quality IT Professionals",
      subhead: "",
      para: `With over a decade of experience in the
      development industry, we have a track record
      of attracting top talent. Our team of software
      engineers, most of whom hold a 4-year
      degree, is a testament to our commitment to
      hiring the best in the field.`,
      //   link: "/case-study/krank",
    },
    {
      img: `/images/staff_augmentation/staff-2.jpg`,
      subImg: ``,
      heading: "Risk-Free 2-Week Trial",
      subhead: "",
      para: `We are pleased to offer our outsourced team
      a two-week risk-free trial (subject to terms
      and conditions). Our confidence in the team's
      quality and expertise is the driving force
      behind this offer.`,
      //   link: "/case-study/instaApp",
    },
    {
      img: `/images/staff_augmentation/staff-3.jpg`,
      subImg: ``,
      heading: "Quality Assurance & Audit",
      subhead: "",
      para: `Our organization follows a playbook that
      outlines all our processes, and we have
      implemented robust quality assurance
      systems to ensure optimal performance.`,
      //   link: "/case-study/oddysee",
    },
    {
      img: `/images/staff_augmentation/staff-4.png`,
      subImg: ``,
      heading: "Healthcare IT Consulting Services",
      subhead: "",
      para: `We offer healthcare IT consulting services to help our clients navigate
      complex healthcare IT challenges and regulatory compliance requirements.
      Our team has extensive experience and expertise in healthcare IT and can
      guide us to ensure our clients meet all necessary regulations.`,
      //   link: "/case-study/oddysee",
    },
    {
      img: `/images/staff_augmentation/staff-6.png`,
      subImg: ``,
      heading: "SOC2 Audit Requirements",
      subhead: "",
      para: `eForte is fully equipped to meet SOC2 audit requirements. Our team
      follows strict guidelines and protocols to ensure data privacy,
      security, and availability. We take pride in maintaining compliance with
      industry standards to provide our cl ents with the highest level of
      service and protection.`,
      //   link: "/case-study/oddysee",
    },
    {
      img: `/images/staff_augmentation/staff-7.png`,
      subImg: ``,
      heading: "Benefits of Working with eForte",
      subhead: "",
      para: `Working with eForte comes with numerous benefits, including cost
      savings, faster time-to-market, and access to top talent. Our team has
      completed numerous projects for clients across various industries,
      helping them achieve their business goals and objectives.`,
      //   link: "/case-study/oddysee",
    },
  ];
  return (
    <>
      <StyledSection className="text-center">
        <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
          <Heading
            title={
              <>
                Find out how {`eForte's`} staff augmentation services can help you
                accelerate your
                <br />
                software development and achieve your business goals.
              </>
            }
          />
          <p className="text-md-center text-left"></p>
        </Fade>
      </StyledSection>

      <StyledSection2>
        <Row gutter={[80, 40]}>
          {projects?.map((data, index) => (
            <Col
              className="card-div"
              key={index}
              xxl={8}
              xl={8}
              lg={8}
              md={12}
              sm={12}
              xs={24}
            >
              <Row>
                <Col span={24} style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                  <div
                    style={{
                      minHeight: "16vh",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${data.img})`,
                    }}
                    alt="img.png"
                  >
                    {/* <img
                      src={data.subImg}
                      style={{
                        width: 100,
                        height: 52,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        margin: 0,
                        transform: "translate(-50%, -50%)",
                      }}
                      alt="img.png"
                    /> */}
                  </div>
                </Col>
              </Row>
              <Row style={{ padding: "16px 20px", backgroundColor: "#f6f6f6" }}>
                <div style={{ display: "grid" }}>
                  <h2 className="head2">{data.heading}</h2>
                  <p className="sub-heading">{data.subhead}</p>
                </div>
                <p className="para">{data.para}</p>
                {/* <Link href={data.link}>
                  <a href={data.link}>
                    <p className="readmore">Readmore →</p>
                  </a>
                </Link> */}
              </Row>
            </Col>
          ))}
        </Row>
      </StyledSection2>

      {/* <StyledSection3>
        <Row>
          <Col span={12}></Col>
          <Col span={10}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="/images/staff_augmentation/staff-4.png"
                style={{ width: 125, margin: "0px 16px" }}
              />

              <div>
                <h3 style={{ fontWeight: 700 }}>Healthcare IT Consulting Services</h3>
                <p>
                  We offer healthcare IT consulting services to help our clients navigate
                  complex healthcare IT challenges and regulatory compliance requirements.
                  Our team has extensive experience and expertise in healthcare IT and can
                  guide us to ensure our clients meet all necessary regulations
                </p>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>

          <Col span={2}></Col>
          <Col span={10}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="/images/staff_augmentation/staff-5.png"
                style={{ width: 125, margin: "0px 16px" }}
              />

              <div>
                <h3 style={{ fontWeight: 700 }}>HIPAA Compliance</h3>
                <p>
                  eForte is committed to maintaining compliance with HIPAA regulations to
                  ensure the protection of our clients' protected health information
                  (PHI). We have implemented robust risk management processes and security
                  measures to safeguard PHI and maintain regulatory compliance.
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}></Col>

          <Col span={12}></Col>
          <Col span={10}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="/images/staff_augmentation/staff-6.png"
                style={{ width: 125, margin: "0px 16px" }}
              />

              <div>
                <h3 style={{ fontWeight: 700 }}>SOC2 Audit Requirements</h3>
                <p>
                  eForte is fully equipped to meet SOC2 audit requirements. Our team
                  follows strict guidelines and protocols to ensure data privacy,
                  security, and availability. We take pride in maintaining compliance with
                  industry standards to provide our cl ents with the highest level of
                  service and protection.
                </p>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>

          <Col span={2}></Col>
          <Col span={10}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="/images/staff_augmentation/staff-7.png"
                style={{ width: 125, margin: "0px 16px" }}
              />

              <div>
                <h3 style={{ fontWeight: 700 }}>Benefits of Working with eForte</h3>
                <p>
                  Working with eForte comes with numerous benefits, including cost
                  savings, faster time-to-market, and access to top talent. Our team has
                  completed numerous projects for clients across various industries,
                  helping them achieve their business goals and objectives.
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}></Col>
        </Row>
      </StyledSection3> */}
    </>
  );
};

export default StaffAugmentation;
