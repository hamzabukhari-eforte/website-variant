import styled from "styled-components";
import { Row, Col, Slider } from "antd";
import Heading from "../headings";
import {
  process1,
  process2,
  process3,
  process4,
  process5,
  process6,
} from "../../../images";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .process-title {
    font-size: 32px;
    margin-bottom: 24px;
    font-weight: 600;
  }

  .process-description {
    color: #4e4e4e;
    line-height: 2.5;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .step-illustration {
    width: 400px;
    object-position: center;
  }

  @media only screen and (max-width: 1024px) {
    .step-illustration {
      width: 300px;
    }
  }

  // .my_line {
  //   position: relative;
  //   overflow: hidden;
  //   :before {
  //     content: "";
  //     position: absolute;
  //     width: 2px;
  //     height: 85%;
  //     background-color: #ed3c69;
  //     left: 47%;
  //     top: 50%;
  //     transform: translate(-50%, -50%);
  //   }
  //   :after {
  //     content: "";
  //     display: block;
  //     position: absolute;
  //     width: 48px;
  //     height: 48px;
  //     border-radius: 50%;
  //     border: 2px solid #ed3c69;
  //     background-color: #fff;
  //     left: 49%;
  //     top: 200px;
  //     transform: translateX(-50px);
  //   }
  // }
`;

const steps = [
  {
    title: "Client Brain Storming/Ideation",
    heading: "Client Brain Storming/Ideation",
    para: `This is the preliminary activity where we pick client’s brain for understanding their needs and wants separately. It is done to clarify the whole development process and establishes an agency/client stack holder expectation scenario. During the client brainstorming/Interview, a questionnaire is described and filled by the client for their idea in writing. NDA is also signed with the client for maintaining their idea confidentiality. `,
    image: process1,
  },
  {
    title: "Scope of Work Estimate ",
    heading: "Scope of Work Estimate ",
    para: `The SoW document is the basis of potential features that will be part of the actual application. The scope is defined in broader terms and then divided into main features with respect to the type of users i.e. Client app, Super Admin app etc. Each feature is defined in layman terms for its clarification at all levels. When Client is satisfied with the scope document, an agreement is signed for proceeding with the development of the App.`,
    image: process2,
  },
  {
    title: "Design, Prototype and Documentation",
    heading: "Design, Prototype and Documentation",
    para: (
      <>
        In this phase the designing of the prototype of the App is done along with
        supporting documentation:
        <ul style={{ lineHeight: 2, marginBottom: 0, paddingLeft: 20 }}>
          <li>Brand Design Guidelines</li>
          <li>Functional Specification </li>
          <li>Level of Efforts estimate in hours (LOEe) </li>
          <li>Technical Design Document</li>
          <li>Work-plan Milestones Delivery Schedule</li>
          <li>Software Test Plan document</li>
        </ul>
        With the outcome of this phase eForte and Client's expectations are matched for
        the outcome of the Development phase.
      </>
    ),
    image: process3,
  },
  {
    title: "Milestones- Scrum Development",
    heading: "Milestones- Scrum Development",
    para: `During the software development phase of the App, the development is done with respect to the Workplan Milestone Delivery schedule. We work according to the Agile- Scrum methodology, being in connection with Client's Product Owner via eForte Project Manager for weekly/Bi-weekly meetings along with the Dev and Design team. We make use of Git repos and DTAP (Dev, Testing, Acceptance, Production) DevOps pipelines.`,
    image: process4,
  },
  {
    title: "Launch and Support",
    heading: "Launch and Support",
    para: `After every milestone has been fully developed, tested and accepted by the client, the project goes into Production i.e. Live environment.`,
    image: process5,
  },
  {
    title: "Growth Continuation",
    heading: "Growth Continuation",
    para: `With the launch of the App, a support and maintenance agreement signed for keeping the App without any bugs and for the development of new features.`,
    image: process6,
  },
];

/**
 * Component Starts Here
 */
const Process = () => {
  return (
    <StyledDiv>
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        <Heading>
          We work with systematic project management approach that allows us to
          <br />
          deliver you quality – every single time!
        </Heading>
        <p style={{ textAlign: "center" }}>
          An intelligent App automates your business processes. That is why we have
          streamlined our processes to ensure <br />
          giving our crafted Apps that intelligence every time we work on a project.
        </p>
      </Fade>

      <div className="my_line">
        {steps.map((item, index) => (
          <Row
            key={index}
            className="row"
            gutter={[16, 16]}
            justify="space-between"
            align="middle"
            style={{
              flexDirection: index % 2 == 0 ? "row" : "row-reverse",
              padding: "40px 0",
            }}
          >
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Fade cascade triggerOnce direction="up">
                <div className="process-title">{item.heading}</div>
                <p className="process-description">{item.para}</p>
              </Fade>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="image-col">
              <div style={{ textAlign: "center", margin: "-24px 0 24px 0" }}>
                <Zoom triggerOnce>
                  <img alt="process-img" src={item.image} className="step-illustration" />
                </Zoom>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </StyledDiv>
  );
};

Process.defaultProps = {
  type: "horizontal",
};

export default Process;
