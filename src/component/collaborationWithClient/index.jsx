import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie";
// import CheckAnimation from "../../../public/images/case-study/checkAnimation.json";
import { Fade, Zoom } from "react-awesome-reveal";
const StyledSection = styled.div`
  padding: 5% 10%;
  h1 {
    font-weight: 700;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    padding: 5% 5%;

    h1 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    p {
      font-size: 16px;
    }
  }
`;

const CollaborationWithClient = (props) => {
  let lottieRef = useRef();
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    if (animationState) {
      lottieRef.current?.play();
    }
  }, [animationState]);

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: false,
  //   animationData: CheckAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      <StyledSection>
        <Fade
          direction="up"
          triggerOnce
          duration={1300}
          damping={0.2}
          cascade
          onVisibilityChange={(e) => setAnimationState(e)}
        >
          <h1 className="mb-4 text-center">Collaboration with client</h1>
          <div>
            <p className="text-center px-lg-5">{props.collaborationData?.para1}</p>
            <p className="pl-4 font-weight-bold">{props.collaborationData.paraheading}</p>
            <ul>
              {props.collaborationData.list.map((item) => {
                return <li>{item.text}</li>;
              })}
              {/* <li>eForte gathered requirements and identified the key features of the Scheduling Engine software.</li>
            <li>Our software development team worked with the client gather requirement analysis and to design and develop the scheduling engine software.</li>
            <li>The software development team used MERN Stack and Python, utilizing Facebook Prophet API to prepare schedules.</li>
            <li>The software was quality assured before being deployed to the end users</li>
            <li>Pre Dev documentation like SoW, Brand Design Guidelines, Level of Efforts Estimates, Cyber Security and Quality Assurance document, Project plan, Technical Design and DevOps details Document, all were prepared before the development of the project.</li>
          <li>Post Development and technical handover documents i.e. App Architecture, Project and process dependencies, Modules/ Services, Solution structure, Libraries and SDKs, Code metrics Test environments and strategies, Standalone installation guide, infrastructure diagram, API list etc. were handed over to the client.</li> */}
            </ul>
          <p className="text-center mt-3 px-lg-5">{props.collaborationData?.para2}</p>
          </div>
          {/* <p>
            Result: The scheduling engine software was successfully implemented in all StrateX’s clients’ 100 retail stores. The software helped to automate the scheduling process, reduce labor costs, and improve employee satisfaction. The time-off request system, attendance tracking system, and compliance monitoring system helped the company to remain compliant with labor laws and regulations. The company reported a significant reduction in labor costs and an increase in employee satisfaction after implementing the scheduling engine.
          </p> */}
        </Fade>

        {/* <div className="row mt-5 mb-5 "> */}
        {/* {props.collaborationData?.list.map((item, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 col-sm-6 mt-4 d-flex align-items-center justify-content-center"
              >
                <Fade triggerOnce>
                  <Lottie
                    ref={(ref) => (lottieRef = ref)}
                    options={defaultOptions}
                    height={40}
                    width={40}
                    style={{ margin: 0, cursor: "auto" }}
                  />
                  <h4 style={{ margin: 0 }} className="">
                    {item.text}
                  </h4>
                </Fade>
              </div>
            );
          })} */}
        {/* </div> */}
      </StyledSection>
    </>
  );
};

export default CollaborationWithClient;
