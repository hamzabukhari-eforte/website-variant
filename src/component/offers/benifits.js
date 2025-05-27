import styled from "styled-components";
import { Row, Col } from "antd";
import { Fade, Slide } from "react-awesome-reveal";

const StyledSection = styled.section`
  background-color: #f4f4f4;
  padding: 0px 5%;
  text-align: center;
  .number {
    font-size: 48px;
    margin: 0;
    font-weight: 800;
    color: #ed3c69;
  }

  .title {
    color: #ed3c69;
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .number {
      font-size: 28px;
    }
    .title {
      font-size: 15px;
    }
  }
`;

const Benifits = (props) => {
  return (
    <StyledSection className="container-fluid">
      {/* <div className="container"> */}
      {/* <Fade> */}
      <Row justify="space-between" gutter={[24, 24]}>
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xxl={6}
          style={{ backgroundColor: "#ED3C69", paddingTop: 18, paddingBottom: 18 }}
        >
          <Fade direction="up" cascade damping={0.2}>
            <p className="number" style={{ color: "#fff" }}>
              600+
            </p>
            <h1 className="title" style={{ color: "#fff" }}>
              Tech Engineers
            </h1>
            {/* <h1 className="title" style={{color: "#fff", paddingTop: 20}}>
            
          600+ Tech Engineers
            </h1> */}
          </Fade>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xxl={6}
          style={{ paddingTop: 18, paddingBottom: 18 }}
        >
          <Fade direction="up" cascade damping={0.2}>
            {/* <p className="number">100%</p> */}
            {/* <h1 className="title">Customer Satisfaction</h1> */}
            {/* <p className="number">100+</p> */}
            <p className="number">ALL</p>
            <h1 className="title">Core Stack Technologies</h1>

            {/* <h1 className="title" style={{paddingTop: 10}}>Risk Free <br/> 1-Week Trial</h1> */}
          </Fade>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xxl={6}
          style={{ paddingTop: 18, paddingBottom: 18 }}
        >
          <Fade direction="up" cascade damping={0.2}>
            {/* <p className="number">100%</p> */}
            {/* <h1 className="title">Documentation backed projects</h1> */}
            <p className="number">100%</p>
            <h1 className="title">Customer Satisfaction</h1>
            {/* <h1 className="title" style={{paddingTop: 10}}>5 days to find <br/> a perfect-match developer</h1> */}
          </Fade>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xxl={6}
          style={{ paddingTop: 18, paddingBottom: 18 }}
        >
          <Fade direction="up" cascade damping={0.2}>
            {/* <p className="number">24/7</p>
            <h1 className="title">Customer Support</h1> */}
            {/* <h1 className="title" style={{paddingTop: 15}}>12+ Years in IT</h1> */}
            <p className="number">12+</p>
            <h1 className="title">Years in IT</h1>
          </Fade>
        </Col>
      </Row>
      {/* </Fade> */}
      {/* </div> */}
    </StyledSection>
  );
};
export default Benifits;
