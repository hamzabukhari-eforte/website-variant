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
  foodCastBg,
  FoodCastLogo,
  foodCast,
  foodCast1,
  docker,
  mongodb,
  foodCast2,
} from "../../images";
import Process from "../../src/component/process";
import AppForm from "../../src/component/forms/AppForm";
import KeyHighlights from "../../src/component/keyHighlights";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${foodCastBg});
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
      margin-bottom: 60px;
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
    margin-top: 50vh;
  }
  .section-1 {
    padding: 5% 5%;
  }
  .heading-no1 {
    font-size: 3rem;
    color: #000;
    font-weight: 600;
  }
  .paragraph {
    font-size: 1.3rem;
  }

  @media (max-width: 1024px) {
    .hero-section {
      h1 {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
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
  }
`;

const FoodCast = () => {
  const techDetailList = [
    {
      btnName: "Android",
      detailList: [
        { detail: "React.js Native" },
        // { detail: "Android Architecture Components" },
        // { detail: "Android Jetpack components" },
        // { detail: "MVVM Design Pattern" },
      ],
      image: android,
    },
    {
      btnName: "IOS",
      detailList: [
        { detail: "React.js Native" },
        // { detail: "Objective C" },
        // { detail: "Swift" },
        // { detail: "MVVM Design Pattern" },
      ],
      image: ios,
    },
    {
      btnName: "Backend",
      detailList: [{ detail: "Node JS / Express Framework" }, { detail: "Firebase" }],
      image: node,
    },
    {
      btnName: "Database",
      detailList: [{ detail: "MongoDB" }],
      image: mongodb,
    },
    {
      btnName: "Others",
      detailList: [{ detail: "Docker" }, { detail: "Jenkins" }, { detail: "etc" }],
      image: docker,
    },
  ];

  return (
    <>
      <StyledDiv>
        <div className="container-fluid hero-section">
          <div className="hero-image">
            <div style={{ padding: "0 8%" }} className="row">
              <div className="col-lg-4 col-sm-12 align-items-start d-flex flex-column justify-content-center">
                <Fade direction="left" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Industry</h3>
                    <p>Consumer Utility</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="food-cast" src={FoodCastLogo} width={"60%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>Food Forecasting Mobile App</p>
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
                style={{ padding: "0 10%" }}
              >
                <h1>Project Summary</h1>
                <p className="paragraph text-center">
                  FoodCast Mobile App is designed to forecast ration requirements for an
                  individual or for a family for breakfast, Lunch, and Dinner for a number
                  of days. FoodCast is built to support forecast the food supply, so the
                  user knows when to do the next shopping ahead of time. Technologies
                  Used:
                </p>
                <h1>Technologies Used</h1>
                <ul className="paragraph text-center" style={{ listStyle: "none" }}>
                  <li className="text-white">Android: React.js Native</li>
                  <li className="text-white">iOS: React.js Native</li>
                  <li className="text-white">
                    Backend: Node JS / Express Framework, Firebase
                  </li>
                  <li className="text-white">Database: MongoDB</li>
                  <li className="text-white">Others: Docker, Jenkins, etc.</li>
                </ul>
              </Fade>
              <Fade delay={1000} direction="up" triggerOnce duration={1300} damping={0.2}>
                <img
                  alt="food-cast"
                  className="header-img"
                  src={foodCast1}
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
            btnColor={"linear-gradient(82deg,#ee9122 0,#ff8100 91%)"}
          />
        </div>

        <div className="container welcome-section" style={{ marginTop: "8%" }}>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">
              Welcome to FoodCast <br /> Only buy what you need FoodCast your ration
            </h1>
            <p className="text-center" style={{ fontSize: 28, paddingBottom: 20 }}>
              FoodCast accurately forecasts food supply for a number of persons for a
              period of time.
            </p>
            <h3 style={{ fontWeight: "bold" }}>Hate uncertainty?</h3>
            <p className="text-center" style={{ fontSize: 26 }}>
              With FoodCast, forget worrying about not having enough food at home, or how
              long it will last the family. Accurately forecast your food supply with
              FoodCast! .
            </p>
          </Fade>
          {/* <img alt="food-cast" src={foodCast} width={"100%"} /> */}
        </div>

        <div className="container-fluid" style={{ marginTop: "8%" }}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 section-1">
              <h1 className="heading-no1">
                Make an informed decision about your panry buying!
              </h1>
              <ul style={{ fontSize: 18 }}>
                <li>Forecast food supplies for family and members of the society </li>
                <li>Using past data and algorithms to produce accurate results. </li>
              </ul>
            </div>

            <div className="col-sm-12 col-lg-7 p-0 d-flex justify-content-end">
              <img
                alt="food-cast"
                className="instAppiMac"
                src={foodCast2}
                width={"100%"}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginTop: "5%" }}>
          <div className="row align-items-center">
            <Fade
              className="col-sm-12 col-lg-5 section-1"
              direction="left"
              duration={800}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">
                  Want to have forcast of rations into following meal times?
                </h1>
                <p style={{ fontSize: "32", fontWeight: "bold" }}>
                  You can, with FoodCast.
                </p>
                {/* <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p> */}
              </div>
            </Fade>
            <div className="col-sm-12 col-lg-7 p-0 d-flex justify-content-end">
              <Fade direction="right" duration={800} damping={0.2} triggerOnce>
                <img
                  alt="food-cast"
                  className="instAppiMac"
                  src={foodCast}
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
        </div>
        <KeyHighlights />
        <Process size={32} />
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default FoodCast;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Food ration application",
        description:
          "FoodCast will help you to only buy what you need to FoodCast your ration.",
        keywords: "Food ration application",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
