import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import {
  howItWorks1,
  howItWorks2,
  howItWorks3,
  howItWorks4,
  webHowItWorks1,
  webHowItWorks2,
  webHowItWorks3,
  webHowItWorks4,
} from "../../../images";
import Heading from "../headings";

const StyledDiv = styled.div`
  padding: 5% 5% 0px 5%;

  .main-div {
    padding: 0px 200px;
    .row {
      margin-top: 60px;
      margin-bottom: 60px;
    }
    .image-div {
      //   width: 350px;
      display: flex;
      justify-content: center;
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
      // padding: 0px 10% 0px 0px;
    }
  }

  @media (max-width: 1300px) {
    .main-div {
      padding: 0px 150px;
      .para {
        padding: 0px 4% 0px 0px;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 100px 5% 0px;
    .main-div {
      padding: 0px 60px;
      .para {
        padding: 0px 0px 0px 0px;
      }
      .image-div {
        display: flex;
        align-items: center;
        justify-content: center;
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
`;

const howItWorksArray = [
  {
    image: howItWorks1,
    title: "PLACE YOUR ORDER",
    para: "Select any logo package that fulfills all your requirements. Place an order by filling up a short form and providing us with all the necessary information. This information will help us in making the best logo according to your business requirements.",
  },
  {
    image: howItWorks2,
    title: "GET DESIGN CONCEPTS",
    para: "Our creative team will start working on the design brief that you have sent. After accurately analyzing your requirements, multiple design concepts will be created and after quality assurance, the first set of designs will be sent to you. Now, what awaits is for you to review and choose the desired one.",
  },
  {
    image: howItWorks3,
    title: "REVISIONS",
    para: "We have a clear provision for revision. Our team will make amendments as per your revision guidelines. There can be unlimite rounds of revision depending on the logo package chosen by you.",
  },
  {
    image: howItWorks4,
    title: "RECEIVE FINAL DELIVERABLE",
    para: "We will ensure that you are satisfied with the design. Once we have the assurance, we will deliverable all teh final files to you via dedicated account area. This is where you can check your order status and download your files without hassle.",
  },
];

const WebHowItWorks = (props) => {
  return (
    <StyledDiv>
      <div className="main-div">
        {/* <Heading title={"How it Works"} />
          <p style={{ textAlign: "center" }}>
            Ordering our services is easy. Just 4 simple steps and you are good to go.
          </p> */}
        {howItWorksArray.map((data, index) => {
          return (
            <Row
              style={{ flexDirection: index % 2 == 0 ? "initial" : "row-reverse" }}
              className="row"
            >
              <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className="image-div">
                  <img
                    src={data.image}
                    alt="img"
                    style={{ width: index == 2 ? 250 : 350 }}
                  />
                </div>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className="heading">
                  <div className="number-div">{index + 1}</div>
                  <h3 style={{ marginBottom: 0 }}>{data.title}</h3>
                </div>
                <p className="para">{data.para}</p>
              </Col>
            </Row>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default WebHowItWorks;
