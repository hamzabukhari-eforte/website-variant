import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col } from "antd";
import { GoQuote, GoStar, GoStarFill } from "react-icons/go";
import { CgQuote } from "react-icons/cg";
import { blueQuotes } from "../../../images";
import Heading from "../headings";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import {
  comma,
  anonymousClientReviewImage,
  clientReviewImage1,
  clientReviewImage2,
  clientReviewImage3,
  clientReviewImage4,
  clientReviewImage5,
  clientReviewImage6,
} from "../../../images";

const StyledSection = styled.section`
  .background-shadow {
    width: 100%;
    height: 345px;
    position: absolute;
  }

  h4 {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 10px;
    line-height: 1.1em;
    font-size: 30px;
    // width: max-content;
  }

  .testimony-project-image {
    width: 100%;
    height: 360px;
    position: relative;
    top: 20px;
    left: 20px;
    box-shadow: -6px -6px 14px -6px #888888;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quote {
    font-size: 32px;
    color: #ed3c69;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }

  .reviewer-name {
    font-weight: 600;
    font-style: italic;
  }
  .reviewer-image {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid #808080;
    border-radius: 50%;
    margin-right: 12px;
  }
  .start svg {
    color: #eba82f;
    font-size: 26px;
  }

  .dots-container {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: auto;
    position: relative;
    top: 32px;
    list-style: none;

    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #a5a5a5;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    h4 {
      text-align: center;
      font-size: 18px !important;
    }
  }

  @media only screen and (max-width: 576px) {
    .background-shadow {
      top: -10px;
      left: -10px;
    }
    .testimony-project-image {
      top: 10px;
      left: 10px;
    }
  }
`;

const logoTestimoniData = [
  {
    image: "/images/Krank-logo.svg",
    name: "Mark Turner",
    // para: "From the outset I found eForte to be very professional in their approach from estimate stage through delivery. The Krank project was very complex and eForte team handled it with gusto and enthusiasm throughout.",
    para: "The IT professionals provided by eForte showcased professionalism from project estimation to delivery, enhancing the Krank project experience. Their enthusiastic approach and expertise injected fresh energy into the complex endeavor, making them invaluable partners in navigating challenges.",
    personImage: clientReviewImage1,
  },
  {
    image: "/images/InstApp-logo.svg",
    name: "Kamran Chaudary",
    para: "Our idea of the product matured over time and eForte worked with us tirelessly for that purpose. They truly proved to be a tremendous support for our venture in terms of technology, business ethics and domain knowledge.",
    personImage: clientReviewImage2,
  },
  {
    image: "/images/Investment-markets-logo.svg",
    name: "Chris Morton",
    // para: "Underpinning our dealings has always been a strong customer service attitude exhibited by eForte team including an undoubted commitment by them to solve any problems or issues raised by us with the delivered product.",

    para: "As an active participant in the investment market, I've witnessed firsthand the invaluable contributions of eForte's staff augmentation services. Moreover, their integrity and ethical conduct have cemented our trust in their services",
    personImage: clientReviewImage3,
  },
  {
    image: "/images/Oddysee-logo.svg",
    para: "It was a difficult idea that needed in-depth understanding of project management, business planning, and finance. This software didn't previously exist, making it even more difficult to develop. eForte handled it very professionally and intelligently. They took the project in their care and with little input from our side they were able to amaze us with the solutions, modules and feature sets they developed.",
    name: "Zeta Ceti",
    personImage: clientReviewImage4,
  },
  {
    image: "/images/Stratex-logo.svg",
    // para: "eForte team has been an important part of our translation from math to end-user and ensuring that we make our products as intuitive as possible. At the same time their experience and professionalism have contributed to improving our own development and time-to-market.",
    para: "During our project, eForte's IT Engineers consistently displayed a strong customer service attitude, promptly addressing any issues raised with the delivered product. Their integrity and ethical conduct were evident throughout, ensuring a positive and professional collaboration experience.",
    name: "Raymond Rienks",
    personImage: clientReviewImage5,
  },
  {
    image: "/images/MSP-logo.svg",
    para: "eForte worked through the delivery of the project with utmost professionalism, transparency and great technical knowledge. Their effective documentation processes and client communications kept us abreast of our project during the life cycle of the development.",
    name: "Sabur Man",
    personImage: clientReviewImage6,
  },
];

const TestimonyWithRating = (props) => {
  const [state, setState] = useState(1);
  let settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    accessibility: false,
    arrows: false,
    fade: true,
    autoplaySpeed: 5000,
  };
  return (
    <StyledSection className="container my-5">
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        {/* <Heading
          color={props.headingColor}
          fontWeight={props.fontWeight}
          backgroundColor={props.headingLineColor}
          headingFontSize={props.headingFontSize}
        >
          Our customers can help you know us better!
        </Heading> */}
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
            <h4
              style={{
                color: "#000",
                fontWeight: "-moz-initial",
                fontSize: 30,
              }}
            >
              Our customers can help you know us better!
              <div
                style={{
                  margin: "8px 25%",
                  height: 3,
                  backgroundColor: "#2A2A2A",
                  borderRadius: 50,
                }}
              ></div>
            </h4>
          </Fade>
        </Col>
      </div>
      </Fade>
      <Slider autoplay={true} {...settings}>
        {logoTestimoniData.map((item, index) => (
          <div key={index}>
            <Row
              className="container mx-auto"
              justify="center"
              align="middle"
              gutter={[24, 24]}
            >
              <Col xs={24} sm={12} md={12} lg={10} xl={8}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      backgroundColor: props.imageBgColor
                        ? props.imageBgColor
                        : "#eff1f2",
                    }}
                    className="background-shadow"
                  ></div>
                  <div className="testimony-project-image">
                    <img
                      alt="img"
                      src={item.image}
                      style={{ width: "60%" }}
                      // style={{ boxShadow: "-6px -6px 14px 4px #888888" }}
                    />
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={12} md={12} lg={10} xl={10}>
                <div className="ml-md-5 ml-0">
                  <div>
                    <img style={{ height: 30, width: 30 }} src={comma} alt="quotes" />
                    <p
                      style={{
                        color: props.paraColor ? props.paraColor : "#212529",
                        fontStyle: "italic",
                      }}
                    >
                      {item.para}
                    </p>
                    <img
                      style={{
                        height: 30,
                        width: 30,
                        float: "right",
                        transform: "rotate(180deg)",
                      }}
                      src={comma}
                      alt="quotes"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="d-flex">
                    <img
                      src={item.personImage}
                      alt="test-image"
                      className="reviewer-image"
                    />
                    <div>
                      <h6
                        className="reviewer-name"
                        style={{
                          color: props.personNameColor ? props.personNameColor : "#000",
                        }}
                      >
                        {item.name}
                      </h6>
                      {/* <h6 className="m-0 mb-1">— The Good Liquid Brewing Co. —</h6> */}
                      <span className="start">
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                      </span>
                    </div>
                  </div>

                  {/* <ul className="d-flex dots-container">
                    {[1, 2, 3, 4].map((item) => (
                      <li
                        key={item}
                        className="dot"
                        style={{
                          background:
                            item === state
                              ? "linear-gradient(to right, #5e2ced, #a485fd)"
                              : "#fff",
                        }}
                        onClick={() => setState(item)}
                      />
                    ))}
                  </ul> */}
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>

      <div style={{ marginTop: 25, textAlign: "center" }}>
        <Link href="/reviews">
          <a>See all Reviews</a>
        </Link>
      </div>
    </StyledSection>
  );
};

export default TestimonyWithRating;
