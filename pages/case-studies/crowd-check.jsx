import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade } from "react-awesome-reveal";
import AboutUsProcess from "../../src/component/process/aboutUsProcess";
import TechnologySwitch from "../../src/component/technologySwitch";
import {
  android,
  ios,
  node,
  crowdCheckLogo,
  crowd_check1,
  crowd_check2,
  crowd_check3,
} from "../../images";
import Process from "../../src/component/process";
import AppForm from "../../src/component/forms/AppForm";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background-color: #049604;
    display: flex;
    padding: 0px 0px 20% 0px;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    h1 {
      color: #fff;
      text-align: center;
      font-weight: 600;
      font-size: 3rem;
      margin-top: 5rem;
      margin-bottom: 3rem;
    }
    h3 {
      color: #fff;
      font-weight: 600;
    }
    p {
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
    }
    .header-para {
      text-align: center;
      padding: 0px 10%;
    }
    .header-para1 {
      text-align: left;
      padding: 0px 10%;
    }
    .hero-image {
      margin-top: 8rem;
      .header-img {
        position: absolute;
      }
    }
  }
  .logo-wrap {
    width: 150px;
    height: 150px;
    background: #fff;
    margin: 20px 0px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    img {
    }
  }
  .tech-section {
    margin-top: 40vh;
  }
  .section-1 {
    padding: 5% 10%;
  }
  .heading-no1 {
    font-size: 3rem;
    color: #000;
    font-weight: 600;
  }
  .paragraph {
    font-size: 1.3rem;
  }

  // ------------First Section -----------

  .firstSecImg1 {
    position: absolute;
    width: 800px;
    right: 30%;
    bottom: 0;
  }
  .firstSecImg2 {
    position: absolute;
    bottom: -5px;
  }
  .firstSecImg3 {
    position: absolute;
    width: 400px;
    right: 35%;
    bottom: -10px;
  }

  @media (max-width: 1024px) {
    .hero-section {
      h1 {
        font-size: 2rem;
        margin-top: 3%;
        margin-bottom: 3%;
      }
    }
    .header-para {
      width: 100%;
      font-size: 1.3rem;
    }
    .paragraph {
      font-size: 1.1rem;
    }
    .welcome-section {
      .heading-no1 {
        font-size: 1.7rem;
      }
    }
    .heading-no1 {
      font-size: 2rem;
    }

    .tech-section {
      margin-top: 20vh;
    }

    .firstSecImg1 {
      width: 400px !important;
    }
    .firstSecImg2 {
      width: 150px !important;
    }
    .firstSecImg3 {
      width: 150px !important;
    }
  }
`;

const CrowdCheck = () => {
  const techDetailList = [
    {
      btnName: "Android",
      detailList: [
        { detail: "Kotlin" },
        { detail: "Android Architecture Components" },
        { detail: "Android Jetpack components" },
        { detail: "MVVM Design Pattern" },
      ],
      image: android,
    },
    {
      btnName: "IOS",
      detailList: [
        { detail: "Objective C" },
        { detail: "Swift" },
        { detail: "MVVM Design Pattern" },
      ],
      image: ios,
    },
    {
      btnName: "Backend",
      detailList: [{ detail: "Node JS / Express Framework" }, { detail: "Firebase" }],
      image: node,
    },
  ];

  return (
    <>
      <StyledDiv>
        <div className="container-fluid hero-section">
          <div className="container hero-image">
            <div className="row">
              <div className="col-lg-4 col-sm-12 align-items-start d-flex flex-column justify-content-center">
                <Fade direction="left" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Industry</h3>
                    <p>Consumer utility</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="crowd-check-logo" src={crowdCheckLogo} width={"70%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center text-right">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>
                      Android and iOS Apps
                      <br />
                      with Google APIs
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div>
              <Fade
                className="w-100 d-flex flex-column align-items-center"
                direction="up"
                triggerOnce
                duration={1000}
                damping={0.2}
                delay={800}
                cascade
              >
                <h1>Project Summary</h1>
                <p className="header-para1">
                Crowdcheck is Android and iOS mobile application developed to let individual users know the state of crowd at a given place listed in Google Maps so that users are able to maintain Social Distancing in an informed manner.
                </p>
                <p className="header-para1">
                -	We are making use of Google APIs data for displaying an aggregated view of the percentage of crowd present in real time at a searched place.
                <br/>
-	User can also perform a search to check out single or multiple destination based on different categories. There is an option to see complete details of a selected destination with crowdedness graph.
                </p>
              </Fade>
              <Fade direction="up" delay={1000} triggerOnce duration={1300} damping={0.2}>
                <img
                  className="header-img"
                  src={crowd_check1}
                  alt="crowd-check"
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className="tech-section">
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center mb-4">Technologies Used</h1>
            <h3 className="header-para text-center">
              {`We create mobile apps with scalable and tested technology stack to deliver apps par excellence.`}
            </h3>
          </Fade>
          <TechnologySwitch
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg, #249603 0, #3bd922 91%)"}
          />
        </div>
        <div className="container welcome-section" style={{ marginTop: "5%" }}>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">
              Welcome to Chrowd Check <br /> Plan your trip with care
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <img alt="crowd-check" src={crowd_check2} width={"100%"} />
          </Fade>
        </div>
        <div
          className="container-fluid"
          style={{ marginTop: "5%", background: "#f3f6fa" }}
        >
          <div className="row">
            <Fade
              className="col-sm-12 col-lg-6 section-1 d-flex align-items-center"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">INSIGHTS</h1>
                <p className="paragraph">
                  {`We are making use of Google APIs data for displaying an aggregated view of the percentage of crowd present in real time at a searched place.`}
                </p>
                <p className="paragraph">
                  {`User can also perform a search to check out single or multiple destination based on different categories. There is an option to see complete details of a selected destination with crowdedness graph.`}
                </p>
              </div>
            </Fade>
            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <Fade
                // className="firstSecImg1"
                direction="right"
                duration={800}
                delay={800}
                damping={0.2}
                triggerOnce
              >
                <img
                  alt="crowd-check"
                  className="instAppiMac"
                  src={crowd_check3}
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
        </div>
        <Process size={32} />
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default CrowdCheck;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Android and iOS mobile application developed for covid-19 purpose",
        description:
          "Crowdcheck is Android and iOS mobile application developed to let individual users know the state of crowd at a given place listed in Google Maps",
        keywords: "Android and iOS mobile application developed for covid-19 purpose",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
