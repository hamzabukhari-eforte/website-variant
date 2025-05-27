import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";

const StyledDiv = styled.div`
  padding: 5% 10%;
  background-color: #f3f6fa;

  .first-row {
    margin-bottom: 5%;

    h1 {
      font-weight: 700;
      margin: 0px;
    }
    h4 {
      font-weight: 600;
      margin: 0px;
    }
    p {
      letter-spacing: 1.5px;
      font-size: 16px;
      font-weight: 600;
      margin: 0px;
    }
  }

  .second-row {
    .boxes {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 130px;
      width: 100%;
      max-width: 300px;
      border-radius: 6px;
      text-align: center;
      box-shadow: 0 25px 70px rgb(0 0 0 / 7%);

      h2 {
        font-weight: 800;
        color: #171b31;
        margin: 0;
      }
      p {
        color: #171b31;
        margin: 0;
      }
    }
  }

  @media (max-width: 991px) {
    .first-row {
      p {
        margin-top: 24px;
      }
    }
    .second-row {
      margin-top: 36px;
    }
  }
`;

const KeyHighlights = () => {
  return (
    <StyledDiv>
      <Row className="first-row">
        <Col lg={24} md={24} sm={24}>
          <h1 className="text-center">Key Hightlights</h1>
          <h4 className="text-center">our work in numbers.</h4>
        </Col>

        {/* <Col lg={15} md={24} sm={24}>
          <p>
            Built your web presence to thrive just like many others have, and let
            experienced technicians and digital creators develop functionalities that
            rivet your target audience.
          </p>
        </Col> */}
      </Row>
      <Row
        className="second-row"
        gutter={[
          { xs: 8, sm: 12, md: 20, lg: 30, xl: 40, xxl: 50 },
          { xs: 8, sm: 12, md: 20, lg: 30, xl: 40, xxl: 50 },
        ]}
      >
        {/* <Col lg={6} md={6} sm={12} xs={12}>
          <div className="boxes">
            <div>
              <Slide direction="down" triggerOnce>
                <h2>12+</h2>
                <p>Years</p>
              </Slide>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="boxes">
            <div>
              <Slide direction="down" triggerOnce>
                <h2 className="numbers">200+</h2>
                <p>Employees</p>
              </Slide>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="boxes">
            <div>
              <Slide direction="down" triggerOnce>
                <h2 className="numbers">600+</h2>
                <p>Projects</p>
              </Slide>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="boxes">
            <div>
              <Slide direction="down" triggerOnce>
                <h2 className="numbers">550+</h2>
                <p>Clients</p>
              </Slide>
            </div>
          </div>
        </Col> */}
        <Col>
        <h1 className="text-center">
        Client Engagement with eForte
        </h1>
        <p className="text-center" >
          StrateX.nl contacted eForte for their goal of getting a mobile app developed for the purpose of supporting people during times of COVID-19 pandemic. It was their CSR project to pitch in their bit in bringing down the levels of chaos. eForte fully supported their idea with own efforts and worked with them to craft the Apps for Android and IOS.
        </p>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default KeyHighlights;
