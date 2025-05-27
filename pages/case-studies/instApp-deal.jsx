import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade } from "react-awesome-reveal";
import AboutUsProcess from "../../src/component/process/aboutUsProcess";
import TechnologySwitch from "../../src/component/technologySwitch";
import {
  instAppScreen1,
  instAppScreen2,
  instAppbg,
  instApplogo1,
  instApplogo2,
  instAppDeal,
  instAppDealMobile,
  instAppResponse,
  instApp1,
  android,
  ios,
  instAppDealLogo,
  node,
  iMac,
  InstappImg3,
  InstappImg4,
  InstappImg5,
} from "../../images";
import Heading from "../../src/component/headings";
import AppForm from "../../src/component/forms/AppForm";
import TestimonyWithRating from "../../src/component/testimonial/logoTestimonial";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background-color: #91001d;
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

const InstAppDeal = () => {
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
                    <p>Retail</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="instapp-deal" src={instAppDealLogo} width={"40%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>WebApp for Super Admin, iOS and Android Apps for Customers</p>
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
                  InstApp Deals is a mobile based application that relies on the
                  traditional Word of Mouth Marketing and allows users to search and
                  redeem coupons for discounts on products and services at participating
                  retailers. The app typically allows users to search for coupons by
                  store, category, or product, and also offers push notifications to alert
                  users to new deals and promotions. It also has a chat feature for
                  customers to connect with their family and frineds.
                </p>
              </Fade>
              <Fade direction="up" delay={1000} triggerOnce duration={1300} damping={0.2}>
                <img
                  alt="instapp-deal"
                  className="header-img"
                  src={instAppDealMobile}
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className="tech-section">
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center mb-4">Technologies Used</h1>
            {/* <h3 className="header-para text-center">
              {`We create mobile apps with scalable and tested technology stack to deliver apps par excellence.`}
            </h3> */}
          </Fade>
          <TechnologySwitch
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg, #771a17 0, #6a2a2d 91%)"}
          />
        </div>
        <div className="container welcome-section" style={{ marginTop: "5%" }}>
          <Fade cascade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">
              {`Welcome InstApp Deal - a revolution in the world of traditional
              advertisement`}
            </h1>
            <img alt="instapp-deal" src={instAppDeal} width={"100%"} />
          </Fade>
        </div>
        <div className="container-fluid" style={{ marginTop: "5%" }}>
          <div className="row">
            <Fade
              className="col-sm-12 col-lg-5 section-1"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">Features and Process flow of the App</h1>
                <ul className="paragraph">
                  <li>
                    InstApp allows consumers to make purchasing decisions based on word of
                    mouth recommendations of people they know and based on their personal
                    interests
                  </li>
                  <li>
                    Core features of the word of mouth App are users can:
                    <ol>
                      <li>
                        Share their purchase savings details and recommend promotional
                        products to their social contacts
                      </li>
                      <li>Follow store promotions based on their interest</li>
                      <li>
                        Purchase promotional products that have been endorsed by a friend
                        or followed by the user
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
            </Fade>
            <div className="col-lg-2"></div>
            <div className="col-sm-12 col-lg-5 p-0 d-flex justify-content-end">
              <Fade triggerOnce direction="right">
                <img
                  alt="instapp-deal"
                  className="instAppiMac"
                  src={iMac}
                  width={"100%"}
                />
              </Fade>
              <Fade
                className="firstSecImg1"
                direction="right"
                duration={800}
                delay={1000}
                damping={0.2}
                triggerOnce
              >
                <img alt="instapp-deal" src={InstappImg5} width={"100%"} />
              </Fade>
              <Fade
                className="firstSecImg2"
                direction="left"
                duration={800}
                delay={1000}
                damping={0.2}
                triggerOnce
              >
                <img alt="instapp-deal" src={InstappImg4} width={"100%"} />
              </Fade>
              <Fade
                className="firstSecImg3"
                direction="right"
                duration={700}
                delay={700}
                damping={0.2}
                triggerOnce
              >
                <img alt="instapp-deal" src={InstappImg3} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginTop: "5%", marginBottom: "5%" }}>
          <div className="row justify-content-center align-items-center">
            <Fade
              className="col-sm-12 col-lg-6 section-1"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">Collaboration with client</h1>
                <ul className="paragraph">
                  <li>
                    eForte gathered requirements and identified the key features of the
                    InstApp Deals project
                  </li>
                  <li>
                    Our Business analysts worked with the client to make requirement
                    analysis and to create Mockup of the design.
                  </li>
                  <li>
                    The software development team used PHP Cod-igniter for the Backend
                    admin panel and used Java and Swift for the Android and iOS apps
                    development respectively
                  </li>
                  <li>
                    The software was quality assured before being deployed to the end
                    users
                  </li>
                  <li>
                    Pre Dev documentation like SoW, Brand Design Guidelines, Level of
                    Efforts Estimates, Cyber Security and Quality Assurance document,
                    Project plan, Technical Design and DevOps details Document, all were
                    prepared before the development of the project.
                  </li>
                  <li>
                    Post Development and technical handover documents i.e. App
                    Architecture, Project and process dependencies, Modules/ Services,
                    Solution structure, Libraries and SDKs, Code metrics Test environments
                    and strategies, Standalone installation guide, infrastructure diagram,
                    API list etc. were handed over to the client.
                  </li>
                </ul>
              </div>
            </Fade>
            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <img
                alt="instapp-deal"
                className="instAppbgImg"
                src={instAppbg}
                width={"100%"}
              />
              <Fade
                triggerOnce
                className="instApplogo1"
                direction="right"
                duration={1300}
                delay={900}
                damping={0.2}
              >
                <img alt="instapp-deal" src={instApplogo2} width={"100%"} />
              </Fade>
              <Fade
                triggerOnce
                className="instApplogo2"
                direction="right"
                duration={1400}
                delay={1000}
                damping={0.2}
              >
                <img alt="instapp-deal" src={instApplogo1} width={"100%"} />
              </Fade>
              <Fade
                triggerOnce
                className="instAppImg1"
                direction="right"
                duration={1000}
                damping={0.2}
              >
                <img alt="instapp-deal" src={instAppScreen1} width={"100%"} />
              </Fade>
              <Fade
                triggerOnce
                className="instAppImg2"
                direction="right"
                duration={1200}
                damping={0.2}
              >
                <img alt="instapp-deal" src={instAppScreen2} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
      {/* <TechnologySwitch /> */}
    </>
  );
};

export default InstAppDeal;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Traditional advertisement application",
        description:
          "InstApp Deal - a revolution in the world of traditional advertisement",
        keywords: "Traditional advertisement application",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
