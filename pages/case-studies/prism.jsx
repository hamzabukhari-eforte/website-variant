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
  iMac,
  prismLogo,
  prism,
  prismBg,
  prism1,
  prism2,
} from "../../images";
import KeyHighlights from "../../src/component/keyHighlights";
import AppForm from "../../src/component/forms/AppForm";
import CollaborationWithClient from "../../src/component/collaborationWithClient";
import Process from "../../src/component/process";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${prismBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0px 0px 20% 0px;
    display: flex;
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
    bottom: -1%;
    width: 150px;
    right: 22%;
    z-index: 10;
  }
  .firstSecImg3 {
    position: absolute;
    width: 300px;
    right: 35%;
    bottom: -10px;
  }

  // ------------Second Section -----------
  .instAppbgImg {
    width: 600px;
  }
  .instApplogo1 {
    position: absolute;
    width: 180px;
    right: 50%;
    top: 10%;
  }
  .instApplogo2 {
    position: absolute;
    width: 150px;
    right: 50%;
    top: 20%;
  }
  .instAppImg1 {
    position: absolute;
    width: 250px;
    right: 20%;
    top: 10%;
  }
  .instAppImg2 {
    position: absolute;
    width: 250px;
    right: 60%;
    top: 40%;
  }

  @media (max-width: 1024px) {
    .hero-section {
      h1 {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
      }
      .hero-image {
        .header-img {
        }
      }
    }
    .header-para {
      width: 100%;
      font-size: 1.3rem;
    }
    .welcome-section {
      .heading-no1 {
        font-size: 1.5rem;
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
      right: 10%;
    }
    .firstSecImg2 {
      width: 80px !important;
      right: 0%;
      bottom: -25px;
    }
    .firstSecImg3 {
      width: 150px !important;
      right: 13%;
      bottom: -25px;
    }

    .instApplogo1 {
      width: 100px;
      right: 210px;
    }
    .instApplogo2 {
      width: 100px;
      right: 180px;
    }
    .instAppImg1 {
      width: 200px;
      right: 4%;
    }
    .instAppImg2 {
      width: 200px;
      right: 30%;
    }
  }
`;

const Prism = () => {
  const techDetailList = [
    {
      btnName: "WEB",
      detailList: [
        { detail: "R." },
        { detail: "React.js" },
        { detail: "HTML" },
        { detail: "PHP" },
      ],
      image: android,
    },

    {
      btnName: "Backend",
      detailList: [{ detail: "Node JS / Express Framework" }, { detail: "Firebase" }, { detail: "Temserflow" }, { detail: "MongoDB" }],
      image: node,
    },

  ];

  const collaborationData = {
    para1: `Team at eForte collaborated with the client closely on the PRISM project as the 
    forecasting methods used were relevantly new to us. However, with the use of R. 
    programming language and the use of the Prophet API by Facebook we were able 
    to develop the engine after consulting many online studies and techniques used 
    in the Forecasting engines available in the market.`,
    para2: `As with all of eForte client projects, the project was backed with extensive 
    documentation pre and post development. Following team was deployed on the 
    project:`,
    list: [
      // { text: "2 React Native Engineers" },
      // { text: "1 R. Programmer" },
      // { text: "1 Quality Assurance Engineer" },
      // { text: "1 Full stack MERN stack Engineer" },
      // { text: "1 DevOps" },
      // { text: "1 Project Manager/ Product Owner" },
    ],
  };

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
                    <p>Retail Forecasting</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img
                      alt="prism"
                      style={{ objectFit: "contain" }}
                      src={prismLogo}
                      width="70%"
                    />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>WebApp PWA</p>
                  </div>
                </Fade>
              </div>
            </div>
            <div>
              <Fade
                className="w-100 d-flex flex-column align-items-center"
                direction="up"
                triggerOnce
                delay={800}
                duration={1000}
                damping={0.2}
                cascade
              >
                <h1>Project Summary</h1>
                <p className="header-para">
                  {`A trends Forecasting Engine, Prism is a procedure for forecasting time series data
based on an additive model where non-linear trends are adjusted with yearly, 
weekly, and daily seasonality; this also takes case of the holiday effects. It works 
best with time series that have strong seasonal effects and several seasons of 
historical data. The Facebook’s Prophet API is robust to missing data and shifts in
the trend, and typically handles outliers well.`}
                </p>
              </Fade>
              <Fade direction="up" delay={1000} triggerOnce duration={1300} damping={0.2}>
                <img alt="prism" className="header-img" src={prism1} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>
        <div className="tech-section">
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center mt-5 mb-2">Technologies Used</h1>
            <h3 className="header-para text-center">
              {`We create mobile apps with scalable and tested technology stack to deliver apps par excellence.`}
            </h3>
          </Fade>
          <TechnologySwitch
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg, #AF2DD6  0, #420ECF 91%)"}
          />
        </div>
        <div className="welcome-section" style={{ marginTop: "5%" }}>
          <Fade cascade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">{`Problem and Solution`}</h1>
            <p style={{ width: "75%", margin: "auto" }} className="paragraph text-center">
              Problem that was most challenging was to smoothen the outliers
              Outliers in a forecasting engine can cause problems by skewing the
              forecasted values. Smoothing is a technique used to reduce the
              impact of outliers on the forecasted values by averaging them with
              neighboring data points. However, smoothing can also reduce the
              sensitivity of the forecast to changes in the underlying data, which
              can lead to a less accurate forecast overall.
            </p>
            <br/>
            <p style={{ width: "75%", margin: "auto" }} className="paragraph text-center">
              <span style={{fontWeight:"700"}}>Solution : </span>
              Problem that was most challenging was to smoothen the outliers
              Outliers in a forecasting engine can cause problems by skewing the
              forecasted values. Smoothing is a technique used to reduce the
              impact of outliers on the forecasted values by averaging them with
              neighboring data points. However, smoothing can also reduce the
              sensitivity of the forecast to changes in the underlying data, which
              can lead to a less accurate forecast overall.
            </p>
            {/* <p className="paragraph text-center">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              <br />
              {`Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.`}
            </p> */}
            <img alt="prism" src={prism2} width={"100%"} />
          </Fade>
        </div>

        <Process size={32} />
        {/* <KeyHighlights /> */}
        <CollaborationWithClient collaborationData={collaborationData} />
        {/* <p style={{ width: "75%", margin: "auto" }}>eForte deployed following team on the project:</p> */}
        <p style={{ width: "75%", margin: "auto" }}>2 React Native Engineers</p>
        <p style={{ width: "75%", margin: "auto" }}>1 R. Programmer</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Quality Assurance Engineer</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Full stack MERN stack Engineer</p>
        <p style={{ width: "75%", margin: "auto" }}>1 DevOps</p>
        <p style={{ width: "75%", margin: "auto" }}>Project Manager/ Product Owner</p>

        <AppForm backgroundColor="#f3f6fa"  />
      </StyledDiv>
      {/* <TechnologySwitch /> */}
    </>
  );
};

export default Prism;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Forecasting | prism",
        description:
          "Prism is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects.",
        keywords: "Forecasting | prism",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
