import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Collapse } from "antd";
import {
  whiteLogiLogo,
  paymentPicture,
  seoTextImage,
  footerAward1,
  footerAward2,
  footerAward3,
} from "../../../images";
import { GoLocation } from "react-icons/go";
import { MdPhoneAndroid } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { Fade } from "react-awesome-reveal";

const FooterContent1Div = styled.div`
  background-color: #2c3444;
  padding: 48px 8%;

  .ant-collapse-borderless {
    background-color: #2c3444;
  }
  .custom-collapse-panel {
    border: 0px;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    background-color: #232a38;
    color: #fff;
    border-radius: 4px;
    padding: 6px 20px;
    margin: 14px 0px 14px 0px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0px;
  }

  .first-col {
    img {
      width: 160px;
    }
    p {
      color: #9da4b1;
      margin: 0px;
    }
    a {
      color: #9da4b1;
      margin: 0px;
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
    .first-col-div {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }
  }

  .second-col {
    h4 {
      font-size: 20px;
      color: rgb(226, 226, 226);
      padding-bottom: 10px;
      font-weight: 400;
      margin-bottom: 13px;
      display: inline-block;
    }
    a {
      color: #9da4b1;
    }
    a:hover {
      color: #fff;
    }
    ul {
      padding: 0px;
      li {
        list-style-type: none;
        margin-bottom: 10px;
        width: fit-content;
        &:hover {
          color: #fff;
        }
        a {
          cursor: pointer;
          color: #9da4b1;
          text-decoration: none;
          ::before {
            position: absolute;
            top: 25px;
            content: "";
            height: 2px;
            width: 0;
            background-color: #fff;
            -webkit-transition: 0.4s ease;
            transition: 0.4s ease;
          }
          &:hover {
            color: #fff;
            ::before {
              width: 60%;
            }
          }
        }
      }
    }
  }

  .third-col {
    h4 {
      font-size: 20px;
      color: rgb(226, 226, 226);
      padding-bottom: 10px;
      font-weight: 400;
      margin-bottom: 13px;
      display: inline-block;
    }
    a {
      color: #9da4b1;
    }
    a:hover {
      color: #fff;
    }
    ul {
      padding: 0px;
      li {
        list-style-type: none;
        margin-bottom: 10px;
        width: fit-content;
        &:hover {
          color: #fff;
        }
        a {
          cursor: pointer;
          color: #9da4b1;
          text-decoration: none;
          ::before {
            position: absolute;
            top: 25px;
            content: "";
            height: 2px;
            width: 0;
            background-color: #fff;
            -webkit-transition: 0.4s ease;
            transition: 0.4s ease;
          }
          &:hover {
            color: #fff;
            ::before {
              width: 60%;
            }
          }
        }
      }
    }
  }

  .fourth-col {
    h4 {
      font-size: 20px;
      color: rgb(226, 226, 226);
      padding-bottom: 10px;
      font-weight: 400;
      margin-bottom: 13px;
      display: inline-block;
    }
    a {
      color: #9da4b1;
    }
    a:hover {
      color: #fff;
    }
    ul {
      padding: 0px;
      li {
        list-style-type: none;
        margin-bottom: 10px;
        width: fit-content;
        &:hover {
          color: #fff;
        }
        a {
          cursor: pointer;
          color: #9da4b1;
          text-decoration: none;
          ::before {
            position: absolute;
            top: 25px;
            content: "";
            height: 2px;
            width: 0;
            background-color: #fff;
            -webkit-transition: 0.4s ease;
            transition: 0.4s ease;
          }
          &:hover {
            color: #fff;
            ::before {
              width: 60%;
            }
          }
        }
      }
    }
  }

  .fifth-col {
  }

  @media (max-width: 991px) {
    .main-row {
      text-align: center;
    }
    .first-col {
      margin-bottom: 32px;
      .first-col-div {
        justify-content: center;
        p {
          text-align: left;
          width: 200px;
        }
        a {
          text-align: left;
          width: 200px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .fifth-col {
      margin-top: 32px;
    }
  }
  @media (max-width: 480px) {
  }
`;

const FooterContent2Div = styled.div`
  background-color: #232a38;
  padding: 16px 8%;

  a {
    color: #9da4b1;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  .first-col {
    display: flex;
    align-items: center;
    p {
      color: #9da4b1;
      margin: 0px;
    }
  }

  .second-col {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 200px;
      margin-right: 16px;
    }
    h4 {
      font-size: 20px;
      color: rgb(226, 226, 226);
      font-weight: 400;
      display: inline-block;
    }
  }

  @media (max-width: 767px) {
    .main-row {
      text-align: center;
    }
    .first-col {
      p {
        font-size: 14px;
      }
    }

    .second-col {
      margin-top: 32px;
      justify-content: center;
      img {
        width: 150px;
        margin-right: 16px;
      }
      h4 {
        font-size: 16px;
      }
    }
  }
`;

const FooterContent3Div = styled.div`
  background-color: #2c3444;
  padding: 0px 5%;

  p {
    color: #9da4b1;
    text-align: center;
  }

  .ant-collapse-header {
    span {
      position: absolute;
      left: 53%;
      top: 17px;
    }
    @media (max-width: 1250px) {
      span {
        left: 54%;
      }
    }
    @media (max-width: 991px) {
      span {
        left: 56%;
      }
    }
    @media (max-width: 650px) {
      span {
        left: 58%;
      }
    }
    @media (max-width: 480px) {
      span {
        left: 60%;
      }
    }
    @media (max-width: 380px) {
      span {
        left: 62%;
      }
    }
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: #9da4b1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SEOTextDiv = styled.div`
  background-color: #e9e9e9;
  padding: 12px 10% 44px 10%;
  p {
    font-size: 13px;
  }
  .read-more-button {
    float: right;
    background-color: dimgray;
    color: #fff;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 2px;
    user-select: none;
    font-size: 14px;
  }

  .main-div {
    display: flex;
    img {
      width: 80px;
      height: 80px;
      margin-right: 15px;
    }
  }
`;

export const FooterContent1 = () => {
  const { Panel } = Collapse;
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 767) {
          setMobileView(true);
        }
        if (window.innerWidth > 767) {
          setMobileView(false);
        }
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
  }, []);
  return (
    <FooterContent1Div>
      <Row className="main-row">
        <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24} className="first-col">
          <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
            <Link href="/">
              <a>
                <img alt="logo" src={whiteLogiLogo} />
              </a>
            </Link>
            <div className="first-col-div">
              <div
                style={{
                  border: "1px solid #9DA4B1",
                  borderRadius: "50%",
                  height: 16,
                  width: 16,
                  position: "relative",
                  marginRight: 18,
                }}
              >
                <GoLocation
                  style={{
                    position: "absolute",
                    top: 3,
                    left: 3,
                    fontSize: 8,
                    color: "#9DA4B1",
                  }}
                />
              </div>
              <p>
                1207 Delaware Ave,
                <br />
                Suite 2858
                <br />
                Wilmington DE 19806
              </p>
            </div>

            <div className="first-col-div">
              <div
                style={{
                  border: "1px solid #9DA4B1",
                  borderRadius: "50%",
                  height: 16,
                  width: 16,
                  position: "relative",
                  marginRight: 18,
                }}
              >
                <MdPhoneAndroid
                  style={{
                    position: "absolute",
                    top: 3,
                    left: 3,
                    fontSize: 8,
                    color: "#9DA4B1",
                  }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <a href="tel:+14086220105">+1-408-622-0105</a>
                <p style={{ fontSize: 12, fontStyle: "italic", color: "#9da4b1" }}>
                  (9:00 am to 6:00 pm Pacific Time)
                </p>
              </div>
            </div>

            <div className="first-col-div">
              <div
                style={{
                  border: "1px solid #9DA4B1",
                  borderRadius: "50%",
                  height: 16,
                  width: 16,
                  position: "relative",
                  marginRight: 18,
                }}
              >
                <GoMail
                  style={{
                    position: "absolute",
                    top: 3,
                    left: 3,
                    fontSize: 8,
                    color: "#9DA4B1",
                  }}
                />
              </div>
              <a href="mailto:inquiry@eforte.io">inquiry@eforte.io</a>
            </div>
            <div className="mt-4 ml-lg-4 ml-sm-0">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/eForteSolutions/"
                target="_blank"
              >
                <FaFacebookF style={{ fontSize: 24, marginRight: 20 }} />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/eforte_net"
                target="_blank"
              >
                <FaTwitter style={{ fontSize: 24, marginRight: 20 }} />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://pk.linkedin.com/company/eforte-solutions?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
              >
                <FaLinkedinIn style={{ fontSize: 24 }} />
              </a>
            </div>
          </Fade>
        </Col>

        <Col xxl={4} xl={4} lg={4} md={8} sm={24} xs={24} className="second-col">
          {mobileView ? (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <Collapse
                bordered={false}
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                  <PlusOutlined rotate={isActive ? 135 : 0} />
                )}
                className="custom-collapse"
              >
                <Panel header="Menu" key="1" className="custom-collapse-panel">
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/guarantee">
                        <a>Our Guarantees</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/reviews">
                        <a>Reviews</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/pricing">
                        <a>Pricing</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/contact-us">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </Fade>
          ) : (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/guarantee">
                    <a>Our Guarantees</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/reviews">
                    <a>Reviews</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/portfolio">
                    <a>Portfolio</a>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          )}
        </Col>

        <Col xxl={6} xl={6} lg={6} md={8} sm={24} xs={24} className="third-col">
          {mobileView ? (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <Collapse
                bordered={false}
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                  <PlusOutlined rotate={isActive ? 135 : 0} />
                )}
                className="custom-collapse"
              >
                <Panel header="Services" key="2" className="custom-collapse-panel">
                  <ul>
                    <li>
                      <Link href="/software-prototype-and-documentation">
                        <a>Prototyping & Documentation</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#mobile-app-development">
                        <a>Mobile App Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services#startup-mvp-and-prototyping">
                        <a>Startup MVP & Prototyping</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/blockchain">
                        <a>Blockchain Development (Web 3.0)</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/artificial-intelligence">
                        <a>Artificial Intelligence (AI)</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/staff-augmentation">
                        <a>Staff Augmentation</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/augmented-virtual-reality">
                        <a>Augmented/Virtual Reality</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/generative-ai-business-applications">
                        <a>Generative AI Business Applications</a>
                      </Link>
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </Fade>
          ) : (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/software-prototype-and-documentation">
                    <a>Prototyping & Documentation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services#mobile-app-development">
                    <a>Mobile App Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services#startup-mvp-and-prototyping">
                    <a>Startup MVP & Prototyping</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/blockchain">
                    <a>Blockchain Development (Web 3.0)</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/artificial-intelligence">
                    <a>Artificial Intelligence (AI)</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/staff-augmentation">
                    <a>Staff Augmentation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/augmented-virtual-reality">
                    <a>Augmented/Virtual Reality</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/generative-ai-business-applications">
                    <a>Generative AI Business Applications</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          )}
        </Col>

        <Col xxl={4} xl={4} lg={4} md={8} sm={24} xs={24} className="fourth-col">
          {mobileView ? (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <Collapse
                bordered={false}
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                  <PlusOutlined rotate={isActive ? 135 : 0} />
                )}
                className="custom-collapse"
              >
                <Panel header="Links" key="3" className="custom-collapse-panel">
                  <ul>
                    {/* <li>
                      <Link href="/how-it-works">
                        <a>How It Works</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/why-choose-us">
                        <a>Why Choose Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs">
                        <a>{"FAQ's"}</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog/page/1">
                        <a>{"Blog"}</a>
                      </Link>
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </Fade>
          ) : (
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <h4>Links</h4>
              <ul>
                {/* <li>
                  <Link href="/how-it-works">
                    <a>How It Works</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/why-choose-us">
                    <a>Why Choose Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a>{"FAQ's"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/page/1">
                    <a>{"Blog"}</a>
                  </Link>
                </li>
              </ul>
            </Fade>
          )}
          {/* <div>
            <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
              <h4 style={{ marginTop: mobileView ? 40 : 0 }}>Social Links</h4>
              <div>
                <a href="https://www.facebook.com/eForteSolutions/" target="_blank">
                  <FaFacebookF style={{ fontSize: 24, marginRight: 20 }} />
                </a>
                <a href="https://twitter.com/eforte_net" target="_blank">
                  <FaTwitter style={{ fontSize: 24, marginRight: 20 }} />
                </a>
                <a
                  href="https://pk.linkedin.com/company/eforte-solutions?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                >
                  <FaLinkedinIn style={{ fontSize: 24 }} />
                </a>
              </div>
            </Fade>
          </div> */}
        </Col>
        <Col xxl={4} xl={4} lg={4} md={8} sm={24} xs={24} className="fifth-col">
          <a
            href="https://www.expertise.com/ca/san-jose/software-development?id=344j80y"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div style={{ textAlign: "center" }}>
              <Fade triggerOnce direction="up" cascade duration={1300} damping={0.2}>
                <img
                  alt="footer-img"
                  style={{ width: 150, marginRight: 0 }}
                  src={footerAward3}
                />
                <p
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 12,
                    marginBottom: 0,
                  }}
                >
                  We have been ranked amongst the top software Development companies in
                  Silicon valley San Jose, CA. USA.
                </p>
              </Fade>
            </div>
          </a>
        </Col>
      </Row>
    </FooterContent1Div>
  );
};

export const FooterContent2 = () => {
  return (
    <FooterContent2Div>
      <Row className="main-row">
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className="first-col">
          <p>
            Copyright © {moment().format("YYYY")}
            <span style={{ fontWeight: 600 }}>
              <Link href="/">
                <a> eForte </a>
              </Link>
            </span>
            | All rights reserved.
            <span style={{ fontWeight: 600 }}>
              <Link href="/term-of-use">
                <a> Terms and Conditions </a>
              </Link>{" "}
              |{" "}
              <Link href="/privacy-policy">
                <a> Privacy Policy </a>
              </Link>
            </span>
          </p>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24} className="second-col">
          <div style={{ textAlign: "center", maxWidth: 152, margin: "0px 16px" }}>
            <img
              alt="footer-img"
              style={{ width: 75, marginRight: 0 }}
              src={footerAward1}
            />
            <p
              style={{
                color: "#fff",
                fontSize: 9,
                textAlign: "center",
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              We have been awarded the prestigious 'Global Entrepreneur' title by IBM for
              the year 2018 and 2019 consecutively.
            </p>
          </div>
          <div style={{ textAlign: "center", maxWidth: 152, margin: "0px 16px" }}>
            <img
              alt="footer-img"
              style={{ width: 75, marginRight: 0 }}
              src={footerAward2}
            />
            <p
              style={{
                color: "#fff",
                fontSize: 9,
                textAlign: "center",
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              Accredited Business Analyst "Australian Computer Society"
            </p>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={12} sm={24} xs={24} className="second-col">
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=6244df18-9499-4810-aca9-fad933a24c48"
            title="DMCA.com Protection Status"
            class="dmca-badge"
            target="_blank"
          >
            {" "}
            <img
              style={{ width: 115 }}
              src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=d4ee90ff-deaf-47d3-a628-7291ed33ec8f"
              alt="DMCA.com Protection Status"
            />
          </a>{" "}
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </Col>
      </Row>
    </FooterContent2Div>
  );
};

export const FooterContent3 = () => {
  const { Panel } = Collapse;
  const disclaimerRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let element = document.querySelector(".footer-disclaimer");
    if (element) {
      let arr = element.className.split(" ");
      if (arr.includes("ant-collapse-item-active")) {
        setTimeout(() => {
          messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [toggle]);

  return (
    <FooterContent3Div
      onClick={() => {
        setToggle(!toggle);
      }}
      ref={messagesEndRef}
    >
      <Col span={24}>
        <Collapse
          bordered={false}
          ghost={true}
          expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 135 : 0} />}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="Disclaimer"
            key="1"
            className="site-collapse-custom-panel footer-disclaimer"
          >
            <p ref={disclaimerRef}>
              {`The logo, name and Graphics of eForte and its products and services are the
              trademarks of eForte. All other company names, brand names, trademarks and
              logos mentioned on this website are the property of their respective owners
              and do not constitute or imply endorsement, sponsorship or recommendation
              thereof by eForte and do not constitute or imply endorsement, sponsorship or
              recommendation of eForte by the respective trademark owner.`}
            </p>
          </Panel>
        </Collapse>
      </Col>
    </FooterContent3Div>
  );
};

export const SEOText = () => {
  const [readMore, setReadMore] = useState(false);
  const [readMoreText, setReadMoreText] = useState("Read More +");

  useEffect(() => {
    // console.log("readMore", readMore);
    // console.log("readMoreText", readMoreText);
  });
  // const { Panel } = Collapse;
  // const disclaimerRef = useRef(null);
  // const [toggle,setToggle] = useState(true)
  // const messagesEndRef = useRef(null)

  // useEffect(()=>{
  //   let element = document.querySelector(".footer-disclaimer")
  //   if(element){
  //     let arr = element.className.split(" ")
  //     if(arr.includes("ant-collapse-item-active")){
  //       setTimeout(()=>{
  //         messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });

  //       },200)
  //     }
  //   }
  // },[toggle])

  return (
    <SEOTextDiv>
      <div className="main-div">
        <img alt="footer-img" src={seoTextImage} />
        <div>
          <h5>The World of Creativity - Logo Design, Website Design & Web Development</h5>
          <p>
            {`eForte is a unique website design and development company, serving the
            client's needs as per their requirements. We offer an assortment of services
            that not only includes custom logo designing, but also caters to an
            all-inclusive website designing and development services that speak volume
            about your business. We offer the best services that you need in order to help
            you boost your business's identity – helping you develop an image that speaks
            heavily of the services you provide.`}
          </p>
        </div>
      </div>
      <p
        style={{
          height: readMore ? "100%" : 0,
          overflow: "hidden",
          margin: 0,
        }}
      >
        {`Custom logo design is one of our best services that we offer. As logo design is a
        hallmark of every business; so, we provide logos that not only impacts your
        targeted audience but also leaves an everlasting image of your organization on the
        minds of the consumers plus, it also represents your business objectives and
        values. We create custom logos considering your business objectives. We have
        professional logo designers who have complete market knowledge and are experienced
        to produce custom logo designs that not only represent your company but also
        provide your business a unique place among your competitors. We believe that logo
        designs leave an impact on consumer's minds, so we offer services that ensure
        designs that can affect the consumer's minds. So, we study every aspect of your
        business before designing the logo.`}
        <br />
        <br />
        {`Other than custom logo design we also offer professional website design and
        development services, brochure designs and social media optimization, apps and
        games development solutions. Logi Logo has become one of the top most web design
        company. We make sure that through our creative and unique website designs, your
        business prospers and the image of your business improves among your customers. We
        offer 7 different packages with amazing features for our professional website
        design and custom logo design services. You can select any of the packages that
        suit your business and fulfill your requirements. Our custom logo design packages
        starts from $75, which includes a free stationery design set and 3 concepts of
        custom logos. Design concepts provide you unique and versatile logos for your
        business.`}
        <br />
        <br />
        {`Being one of the most dynamic web design company, we also provide services for
        custom professional website design and development solutions. We offer reasonable
        web design packages for our customers starting from $195; offering 5 page custom
        website with 1 year domain name web hosting that saves you from the trouble of
        going through the registration process. Our professional web designers thoroughly
        evaluate your business and create a professional web design that effectively
        fulfils your business requirements. Likewise, our brochure design services are
        considered very reliable by our clients as we provide top quality brochure design
        services that represent your business. You can also get a custom quote for your
        apps and games development project, as we have professionals for your project.`}
        <br />
        <br />
        {`Whether you are starting a small or a medium business and need a brand identity
        for your business, we are best choice. For any doubts on the design cost, and
        delivery process, you can always call us or chat with our representatives. We
        provide services for logo design, portfolio, label design, web design, packaging
        design, flyers and whatever you need to improve your image among the targeted
        audience.`}
        <br />
      </p>
      <div
        onClick={() => {
          readMore ? setReadMore(false) : setReadMore(true);
          readMore ? setReadMoreText("Read More +") : setReadMoreText("Read Less -");
        }}
        className="read-more-button"
      >
        {readMoreText}
      </div>
    </SEOTextDiv>
  );
};
