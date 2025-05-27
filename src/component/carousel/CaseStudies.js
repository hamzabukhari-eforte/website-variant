import React from "react";
import Slider from "react-slick";
// import { techDetailList } from "../../../pages/case-studies/crowd-check.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import {
  crowdCheck,
  webAppIM,
  webIMBg,
  sellSmart,
  SellsMartbg,
  foodCast,
  foodCastBg,
  scheduling,
  schedulingBg,
  validatr,
  validatrBg,
  dostpay,
  Dostpaybg,
  instAppDeal,
  komb,
  kombBg,
  prism,
  prismBg,
  oddysee,
  oddyseeBg,
  krank,
  krankBg,
  emerge2,
  emergeBg,
  MSP,
  MSPBg,
  homeBannerImage,
} from "../../../images";
import { crowd_check1 } from "../../../images";
const StyledDiv = styled.div`
  .case-study-btn {
    border-radius: 4px;
    background-color: #232a38;
    border: none;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    padding: 14px 4px;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    width: 250px;
    box-shadow: rgb(0 0 0 / 70%) 0px 10px 20px -8px;
    display: inline-block;
    position: relative;

    &:after {
      content: "→";
      position: absolute;
      opacity: 0;
      top: 2px;
      font-size: 24px;
      right: 0px;
      transition: all 0.5s ease 0s;
    }

    &:hover {
      padding-right: 40px;
      padding-left: 15px;
      &:after {
        opacity: 1;
        right: 10px;
      }
    }
  }

  .main-div {
    height: 90vh;
    display: flex;
    align-items: center;
  }

  overflow: hidden;
  .image-section {
    z-index: 1;
  }
  .container-fluid {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .content-section {
    padding: 10% 15%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    h2 {
      color: #fff;
      margin-bottom: 1rem;
      font-size: 30px;
      font-weight: 600;
    }
    h4 {
      font-size: 24px;
      font-weight: 500;
      color: #fff;
    }
    p {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #fff;
      font-weight: 300;
      letter-spacing: 2px;
    }
  }

  .main-row {
    padding: 8% 0%;
    .main-col {
      .div-inside-col {
        display: flex;
        align-items: center;
        img {
          width: 750px;
          z-index: 1;
        }
        .text-portion {
          color: #fff;
          padding: 3% 10% 2% 10%;
          width: 60%;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          h2 {
            color: #fff;
            margin-bottom: 18px;
          }
          h4 {
            color: #fff;
          }
          p {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #fff;
            max-width: 80%;
          }
        }
      }
    }
  }

  @media (max-width: 1366px) {
    .main-row {
      .main-col {
        .div-inside-col {
          img {
            width: 600px;
            z-index: 1;
          }
          .text-portion {
            p {
              max-width: 80%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .main-div {
      height: auto;
    }
    .container-fluid {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .content-section {
      height: 800px;
      justify-content: flex-start;
    }

    @media (max-width: 554px) {
      .content-section {
        height: 600px;
        padding: 10%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
      }

      @media (max-width: 991px) {
        .main-row {
          padding: 8% 0%;
          .main-col {
            .div-inside-col {
              img {
                width: 500px;
                z-index: 1;
              }
              .text-portion {
                width: 58%;
                p {
                  max-width: 80%;
                  font-size: 13px;
                }
                h2 {
                  font-size: 20px;
                }
                h4 {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }

      @media (max-width: 768px) {
        .main-row {
          padding: 8% 0%;
          .main-col {
            .div-inside-col {
              img {
                width: 400px;
                z-index: 1;
              }
              .text-portion {
                width: 100%;
                p {
                  max-width: 80%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Sections = styled.section`
  .case-study-btn {
    border-radius: 4px;
    background-color: #232a38;
    border: none;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    padding: 14px 0px;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    width: 250px;
    box-shadow: rgb(0 0 0 / 70%) 0px 10px 20px -8px;
    display: inline-block;
    position: relative;

    &:after {
      content: "→";
      position: absolute;
      opacity: 0;
      top: 2px;
      font-size: 24px;
      right: 0px;
      transition: all 0.5s ease 0s;
    }

    &:hover {
      padding-right: 40px;
      padding-left: 15px;
      &:after {
        opacity: 1;
        right: 10px;
      }
    }
  }
  .slick-prev {
    color: black !important;
    left: 190px !important;
    z-index: 999;
    width: 2rem;
    height: 2rem;
  }
  .slick-next {
    color: black !important;
    right: 190px !important;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 554px) {
    .slick-arrow {
      display: none !important;
    }
  }
  @media (max-width: 1587px) {
    .slick-prev {
      left: 60px !important;
    }
    .slick-next {
      right: 60px !important;
    }
  }
`;
const CaseStudies = () => {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineArrowRight size={20} />,
    prevArrow: <AiOutlineArrowLeft size={50} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Sections>
      <Slider {...settings}>
        {/* investment markets*/}
        <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${webIMBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Investment Markets</h2>
                  <h4>Investments | Finance</h4>
                  <p className="paragraph">
                    {`InvestmentMarkets is a platform for the potential investors that brings them high net worth investment
                    opportunities, primarily aiming for growth, income or both. The platform offers investors a wide range
                    of investment listings and be directly connected with the listee's. In addition to establishing business
                    networking, InvestmentMarkets provides potential investors with and investment seekers latest news
                    and events to stay informed and gain the market insights to inspire their investment journey.
                    There are wide range of features that investors and Listees can interact with and make the best of the
                    carefully engineered platform.
                  `}
                  </p>
                  <Link href="/case-studies/investment-markets">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="investment-markets"
                    className="d-lg-none d-sm-block"
                    src={webAppIM}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="investment-markets"
                    src={webAppIM}
                    width={"100%"}
                    style={{ position: "relative", right: 163, bottom: 20 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv>

        {/* krank */}
        <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ backgroundImage: `url(${krankBg})`, backgroundColor: "#343B45" }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Krank</h2>
                  <h4>Heavy Machinery</h4>
                  <p className="paragraph">
                    {`Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how market
                    buys and sells heavy equipment. For that reason Krank offers to make a sales network for your
                    own company where you can list your machinery for sell/rent/auction. The privacy of the platform
                    ensures that the integrity of a network remains intact while others on the platform interact with
                    the company's news, posts, sell/rent/auction listings and most of all the contacts book.`}
                  </p>
                  <Link href="/case-studies/krank">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="krank"
                    className="d-lg-none d-sm-block"
                    src={krank}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="krank"
                    src={krank}
                    width={"100%"}
                    style={{ position: "relative", right: 250 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv>

        {/* prism */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${prismBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Prism</h2>
                  <h4>Retail Forecasting</h4>
                  <p className="paragraph">
                    {`A trends Forecasting Engine, Prism is a procedure for forecasting time series data
based on an additive model where non-linear trends are adjusted with yearly, 
weekly, and daily seasonality; this also takes case of the holiday effects. It works 
best with time series that have strong seasonal effects and several seasons of 
historical data. The Facebook’s Prophet API is robust to missing data and shifts in
the trend, and typically handles outliers well.`}
                  </p>
                  <Link href="/case-studies/prism">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="prism"
                    className="d-lg-none d-sm-block"
                    src={prism}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="prism"
                    src={prism}
                    width={"100%"}
                    style={{ position: "relative", right: 250 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* scheduling engine */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${schedulingBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Scheduling Engine</h2>
                  <h4>Work Force Management | Support Center </h4>
                  <p className="paragraph">
                    {`The scheduling engine software developed for Stratex was successful in automating
the scheduling process and reducing labor costs for their clients in the Call center 
and Retail chain industry. The software's additional features such as time-off 
request system, attendance tracking system, and compliance monitoring system 
helped the company to remain compliant with labor laws and regulations. The 
company reported a significant reduction in labor costs and an increase in 
employee satisfaction after implementing the scheduling engine software.`}
                  </p>
                  <Link href="/case-studies/scheduling-engine">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="scheduling-engine"
                    className="d-lg-none d-sm-block"
                    src={scheduling}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="scheduling-engine"
                    src={scheduling}
                    width={"100%"}
                    style={{ position: "relative", right: 270 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* oddysee */}
        <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block  p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="oddysee"
                    src={oddysee}
                    width={"100%"}
                    style={{ position: "relative", left: 200 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${oddyseeBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Oddysee</h2>
                  <h4>Project Management | Civic-Municipal</h4>
                  <p className="paragraph">
                    {`Oddysee is the platform to automate the licensing process for domains that require a lot of
                    documentation/plans. It has a documentation module with pre written templates of documents to choose from.
                    A business plan module to automate business plans writing according to the industry and a financial forecast
                    module. All supported with project management tools so to meet deadlines and evaluate team performances.`}
                  </p>
                  <Link href="/case-studies/oddysee">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="oddysee"
                    className="d-lg-none d-sm-block"
                    src={oddysee}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv>

        {/* sellsmart */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${SellsMartbg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Sellsmart</h2>
                  <h4>Retail/ Finance/ Accounting/ Supply-chain</h4>
                  <p className="paragraph">
                    {`Sellsmart.biz is an online Point of Sale System. Aimed to be a SaaS based platform and equipped with all the right features of an online POS system.`}
                  </p>
                  <Link href="/case-studies/sellsmart">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="sell-smart"
                    className="d-lg-none d-sm-block"
                    src={sellSmart}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>

              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="sell-smart"
                    src={sellSmart}
                    width={"100%"}
                    style={{ position: "relative", right: 200 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* validatr */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="validatr"
                    src={validatr}
                    width={"100%"}
                    style={{ position: "relative", left: 195 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${validatrBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Validatr</h2>
                  <h4>Startup/ Business Management </h4>
                  <p className="paragraph">
                    {`Validatr.io is a tool for the startups and businesses to do 
the market validation of the new business ideas and further do Market 
Research for the same. Both the market validation and market research is 
done through answering selection of questions which produces detailed 
report style documents. These documents can be used in business plans and
for investor rounds.`}
                  </p>
                  <Link href="/case-studies/validatr">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>
                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="validatr"
                    className="d-lg-none d-sm-block"
                    src={validatr}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* instapp */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block  p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="instapp-deal"
                    src={instAppDeal}
                    width={"100%"}
                    style={{ position: "relative", left: 120 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: "#91011D" }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>InstApp Deal</h2>
                  <h4>Retail</h4>
                  <p className="paragraph">
                    {`InstApp Deals is a mobile based application that relies on the traditional Word of 
Mouth Marketing and  allows users to search and redeem coupons for discounts on 
products and services at participating retailers. The app typically allows users to 
search for coupons by store, category, or product, and also offers push notifications 
to alert users to new deals and promotions. It also has a chat feature for customers 
to connect with their family and frineds.`}
                  </p>
                  <Link href="/case-studies/instApp-deal">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="instapp-deal"
                    className="d-lg-none d-sm-block"
                    src={instAppDeal}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* dostpay */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${Dostpaybg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Dostpay</h2>
                  <h4>Fintech</h4>
                  <p className="paragraph">
                    {`Dostpay is a 21st century mobile based 'Digital Banking Payments platform' which gets easily integrated with the core banking platform and gives the end user power of Digital banking.`}
                    <br />
                    {`Dostpay digital banking solution is:`}
                    <br />
                    {`Flexible, Branded, Bespoke, Elegantly Simple and Empowering.`}
                  </p>
                  <Link href="/case-studies/dost-pay">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="dostpay"
                    className="d-lg-none d-sm-block"
                    src={dostpay}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="dostpay"
                    src={dostpay}
                    width={"100%"}
                    style={{ position: "relative", right: 220 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* emerge forward */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block  p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="emerge"
                    src={emerge2}
                    width={"100%"}
                    style={{ position: "relative", left: 222 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${emergeBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Emerge Forward</h2>
                  <h4>Online Education</h4>
                  <p className="paragraph">
                    {`Emerge as a client wanted to build a platform where they can train 
the Youth with the soft skills as needed for being successful in the 
real world. For that they had a plan to develop a platform where 
students/ participants can create their profiles, take the lectures 
either online or in person and then take tests for the same. There is 
an online library for the purpose of continuous update on the 
knowledge sets needed. Successful candidates were to create a 
Linkedin type work profiles to get ready for the professional world.`}
                  </p>
                  <Link href="/case-studies/emerge-forward">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="emerge"
                    className="d-lg-none d-sm-block"
                    src={emerge2}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* komb */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block  p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="komb"
                    src={komb}
                    width={"100%"}
                    style={{ position: "relative", left: 200 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${kombBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Komb</h2>
                  <h4>Personal Care Services</h4>
                  <p className="paragraph">
                    {`The salon management software ‘Komb’ is designed to automate the day-to-day 
operations of a salon, including scheduling appointments, managing client 
information, and inventory management. The software is designed to be user-
friendly, with a simple and intuitive interface that makes it easy for salon owners 
and staff to use.`}
                  </p>
                  <Link href="/case-studies/komb">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="komb"
                    className="d-lg-none d-sm-block"
                    src={komb}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* food cast */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="food-cast"
                    src={foodCast}
                    width={"100%"}
                    style={{ position: "relative", left: 153, bottom: 20 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ background: `url(${foodCastBg})` }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Food Cast</h2>
                  <h4>Consumer Utility</h4>
                  <p className="paragraph">
                    {`FoodCast Mobile App is designed to forecast ration requirements for an individual or for a 
family for breakfast, Lunch, and Dinner for a number of days. FoodCast is built to support 
forecast the food supply, so the user knows when to do the next shopping ahead of time.`}
                  </p>
                  <Link href="/case-studies/food-cast">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>
                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="food-cast"
                    className="d-lg-none d-sm-block"
                    src={foodCast}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* crowd check */}
        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-lg-5 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="left">
                  <img
                    alt="crowd-check"
                    src={crowdCheck}
                    width={"100%"}
                    style={{ position: "relative", left: 153 }}
                  />
                </Fade>
              </div>
              <div
                className="col-sm-12 col-lg-7 content-section"
                style={{ background: "#049604" }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>Crowdcheck</h2>
                  <h4>Consumer utility</h4>
                  <p className="paragraph">
                    {`Crowdcheck is Android and iOS mobile application developed to let individual users know the state of crowd at a given place listed in Google Maps so that users are able to maintain Social Distancing in an informed manner.`}
                  </p>

                  <Link href="/case-studies/crowd-check">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    className="d-lg-none d-xs-block"
                    alt="crowd-check"
                    src={crowdCheck}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

        {/* <StyledDiv>
          <div className="main-div container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-sm-12 col-lg-6 content-section"
                style={{ backgroundImage: `url(${MSPBg})`, backgroundColor: "#343B45" }}
              >
                <Fade triggerOnce cascade direction="up" delay={600}>
                  <h2>MSP</h2>
                  <h4>Lorem Ipsum</h4>
                  <p className="paragraph">
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets.`}
                  </p>
                  <Link href="/case-studies/MSP">
                    <a>
                      <div className="case-study-btn">VIEW MORE</div>
                    </a>
                  </Link>
                </Fade>

                <Fade
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  triggerOnce
                  direction="up"
                >
                  <img
                    alt="MSP"
                    className="d-lg-none d-sm-block"
                    src={MSP}
                    width={"100%"}
                    style={{ maxWidth: 450 }}
                  />
                </Fade>
              </div>
              <div className="col-sm-12 col-lg-6 d-none d-lg-block p-0 image-section">
                <Fade triggerOnce direction="right">
                  <img
                    alt="MSP"
                    src={MSP}
                    width={"100%"}
                    style={{ position: "relative", right: 250 }}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </StyledDiv> */}

      </Slider>
      <div className="d-flex justify-content-center" style={{ marginBottom: 40 }}>
        <Link href="/case-studies">
          <a>
            <div className="case-study-btn" style={{ fontWeight: "bold" }}>
              VIEW ALL CASE STUDIES
            </div>
          </a>
        </Link>
      </div>
    </Sections>
  );
};

export default CaseStudies;
