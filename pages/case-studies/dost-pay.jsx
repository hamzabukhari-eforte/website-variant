import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade, Zoom } from "react-awesome-reveal";
import { Timeline } from "antd";
import TechnologySwitch from "../../src/component/technologySwitch";
import {
  android,
  ios,
  node,
  DostpayLogo,
  Dostpaybg,
  Dostpay1,
  Dostpay2,
  Dostpay3,
  Dostpay4,
  js,
  html5,
  css,
  nginx,
  nodejs,
  react,
  redux,
  sqlite,
  npm,
  bootstrap,
  php,
  mongodb,
} from "../../images";
import Process from "../../src/component/process";
import AppForm from "../../src/component/forms/AppForm";
import CollaborationWithClient from "../../src/component/collaborationWithClient";
import TechnologySwitch2 from "../../src/component/technologySwitch/technologySwitch2";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${Dostpaybg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0px 0px 20% 0px;
    display: flex;
    h1 {
      color: #fff;
      text-align: center;
      font-weight: 600;
      font-size: 3rem;
      margin-top: 3%;
      margin-bottom: 3%;
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
    padding: 30px;
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
    background-color: #f3f6fa;
    padding: 5% 0px;
  }
  .section-1 {
    padding: 5% 10%;
  }
  .heading-no1 {
    font-size: 3rem;
    color: #000;
    font-weight: 600;
  }
  .heading-no3 {
    font-size: 2.5rem;
  }
  .paragraph {
    font-size: 1.3rem;
  }

  .instApplogo1 {
    position: absolute;
    width: 300px;
    right: 30%;
    top: 10%;
  }
  .instAppWhiteDiv {
    position: absolute;
    // z-index: 999;
    background-color: #fff;
    width: 300px;
    padding: 20px;
    border-radius: 50px;
    right: 50%;
    top: 20%;
    p {
      text-align: left;
      font-weight: bold;
      width: 60%;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
  .instAppImg2 {
    position: absolute;
    width: 250px;
    right: 80%;
    top: 40%;
    box-shadow: 0px 0px 5px 0px black;
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
    .welcome-section {
      .heading-no1 {
        font-size: 1.7rem;
      }
    }
    .paragraph {
      font-size: 1.1rem;
    }
    .heading-no1 {
      font-size: 2rem;
    }
    .heading-no3 {
      font-size: 1.5rem;
    }
    .tech-section {
      margin-top: 30vh;
    }
    .instApplogo1 {
      display: none;
    }
    .instAppWhiteDiv {
      position: absolute;
      background-color: #fff;
      padding: 20px;
      border-radius: 50px;
      right: 25%;
      top: 20%;
      p {
        text-align: left;
        font-weight: bold;
        width: 60%;
        font-size: 1rem;
        margin-bottom: 0;
      }
    }
    .instAppImg2 {
      position: absolute;
      width: 200px;
      right: 10%;
      top: 10%;
      box-shadow: 0px 0px 5px 0px black;
    }
  }
`;
const techDetailList = [
  {
    techName: "Frontend",
    languageList: [
      {
        id: 1,
        langName: "React JS",
        img: react,
        langDescription: `React is a free and open-source 
        front-end JavaScript library for building user interfaces based on UI components. 
        It is maintained by Meta (formerly Facebook) and a community of individual developers 
        and companies. React can be used as a base in the development of single-page, mobile, 
        or server-rendered applications`,
      },
      {
        id: 2,
        langName: "HTML-5",
        img: html5,
        langDescription: `HTML is the language for describing the structure of Web pages. eForte give clients the means to: Publish online 
        documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.`,
      },
      {
        id: 3,
        langName: "CSS",
        img: css,
        langDescription: `CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. 
        It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. 
        CSS is independent of HTML and can be used with any XML-based markup language.`,
      },
      {
        id: 3,
        langName: "Bootstrap",
        img: bootstrap,
        langDescription: `Bootstrap is a potent front-end framework used to create modern websites and web apps. It's open-source 
        and free to use, yet features numerous HTML and CSS templates for UI interface elements such as buttons and forms. 
        Bootstrap also supports JavaScript extensions.`,
      },
      {
        id: 4,
        langName: "Redux",
        img: redux,
        langDescription: `Redux is a predictable state container designed to help you write JavaScript apps that behave consistently 
        across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with 
        React, you can use it with any other JavaScript framework or library.`,
      },
    ],
  },
  {
    techName: "Backend",
    languageList: [
      {
        id: 5,
        langName: "Node JS",
        img: nodejs,
        langDescription: `The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the 
        face of data-intensive real-time applications that run across distributed devices. we have web applications with real-time, 
        two-way connections, where both the client and server can initiate communication, allowing them to exchange data freely.`,
      },
      {
        id: 6,
        langName: "PHP",
        img: php,
        langDescription: `PHP is an open-source server-side scripting language that many devs use for web development. It is also a 
        general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).`,
      },
      // {
      //   id: 7,
      //   langName: "JavaScript",
      //   img: js,
      //   langDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
      {
        id: 8,
        langName: "NPM",
        img: npm,
        langDescription: `npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can 
        find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. 
        Most commonly, it is used to publish, discover, install, and develop node programs.`,
      },
    ],
  },
  {
    techName: "Database",
    languageList: [
      {
        id: 9,
        langName: "SQLite",
        img: sqlite,
        langDescription: `SQLite is used to develop embedded software for devices like televisions, cell phones, cameras, etc. It can 
        manage low to medium-traffic HTTP requests. SQLite can change files into smaller size archives with lesser metadata. SQLite is 
        used as a temporary dataset to get processed with some data within an application.`,
      },
      {
        id: 9,
        langName: "MongoDB",
        img: mongodb,
        langDescription: `MongoDB is an open source NoSQL database management program. we use NoSQL as an alternative to traditional 
        relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that 
        can manage document-oriented information, store or retrieve information`,
      },
    ],
  },

  {
    techName: "Others",
    languageList: [
      {
        id: 10,
        langName: "Nginx",
        img: nginx,
        langDescription: `NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. 
        It started out as a web server designed for maximum performance and stability.`,
      },
    ],
  },
];

const timeLineData = [
  { text: "Under a minute online bank account opening " },
  { text: "Manage Funds " },
  { text: "Pay Merchants " },
  { text: "Transfer funds to friends " },
  { text: "School fee " },
  { text: "Pocket money " },
  { text: "Buy Online" },
  { text: "Charity " },
  { text: "Committee between friends" },
  { text: "DealBook for Coupons and Vouchers " },
  { text: "My Stores (Followed and only get updates from them) " },
  { text: "Ease of payment through QR based  " },
  { text: "Point of sale, online and Human memorable Hash " },
];

const collaborationData = {
  para1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
  unknown printer took a galley of type and scrambled it to make a type specimen
  book`,
  para2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
  unknown printer took a galley of type and scrambled it to make a type specimen
  book`,
  list: [
    { text: "2 React Native Engineers" },
    { text: "2 React Native Engineers" },
    { text: "2 React Native Engineers" },
    { text: "2 React Native Engineers" },
    { text: "2 React Native Engineers" },
    { text: "2 React Native Engineers" },
  ],
};

const DostPay = () => {
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
                    <p>Fintech</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="dostpay" src={DostpayLogo} width={"100%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>
                      Retailer and Client Apps Android and iOS with WebApp for Admin panel
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
              >
                <h1>Dostpay</h1>
                <p className="paragraph text-center">
                  {`Dostpay is a 21st century mobile based ‘Digital Banking Payments
                    platform’ which gets easily integrated with the core banking platform and
                    gives the end user power of Digital banking.
                    Dostpay digital`}
                </p>
                <p className="paragraph text-center" style={{ fontStyle: "italic" }}>
                  {`Flexible, Branded, Bespoke, Elegantly Simple and Empowering.`}
                </p>
              </Fade>
              <Fade
                className="d-flex justify-content-center"
                direction="up"
                triggerOnce
                duration={1300}
                damping={0.2}
              >
                <img alt="dostpay" className="header-img" src={Dostpay1} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>
        <div className="tech-section">
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center mb-4">Technologies Used</h1>
            {/* <h3 className="paragraph text-center">
              {`We create mobile apps with scalable and tested technology stack to deliver apps par excellence.`}
            </h3> */}
            <h3 className="paragraph text-center">
              We created Dostpay mobile and Web apps with scalable and tested technology
              stack to deliver soultion par excellence
            </h3>
          </Fade>
          <TechnologySwitch2
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg,#2a303f 0,#295388 91%)"}
          />
        </div>

        <div
          className="container-fluid"
          style={{
            marginTop: "8%",
          }}
        >
          <div className="container welcome-section">
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <h1 className="heading-no1 text-center">
                {`A User App to interact with their daily financial needs`}
              </h1>
            </Fade>
          </div>
          <div className="row align-items-center">
            <Fade
              className="col-sm-12 col-lg-6 section-1"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
              fraction={0.5}
            >
              <div>
                <Timeline>
                  {timeLineData.map((item, index) => {
                    return (
                      <Timeline.Item key={index} style={{ fontSize: 18 }}>
                        {item.text}
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </div>
            </Fade>
            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <Fade
                direction="right"
                duration={800}
                delay={800}
                damping={0.2}
                triggerOnce
              >
                <img
                  alt="dostpay"
                  className="instAppiMac"
                  src={Dostpay2}
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
          <Zoom triggerOnce duration={1300} damping={0.2}>
            <img alt="dostpay" src={Dostpay3} width={"100%"} />
          </Zoom>
        </div>

        <div className="welcome-section" style={{ marginTop: "10%" }}>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">Collaboration with client</h1>
            <p style={{ padding: "0px 10%" }} className="paragraph text-center">
              Dostpay provides Lowest sales fee for Merchants with state of the art
              customer engagement system and a patent pending DPR (Digital Payment
              Receipt) machine which is a low cost environment friendly paperless invoice
              and transaction confirmation device compared to traditional card processing
              POS machine. For users Dostpay is enabling them with digital banking mobile
              app that does everything for them related to banking (without going to a
              bank branch) and retail payment, be it online, in-store or payments at
              delivery. That was all made possible because of the diligent work done by
              the team at eForte:
            </p>
            <div className="container-md">

            <ul >
              <li>
              eForte gathered requirements and identified the key features of the Dostpay project
              </li>
              <li>
              Our Business analysts worked with the client to make requirement analysis and to create Mockup of the design.
              </li>
              <li>
              The software development team used Node.js for the Backend admin panel and used React Native for the Android and iOS apps development 
              </li>
              <li>
              The software was quality assured before being deployed to the end users
              </li>
              <li>
              Pre Dev documentation like SoW, Brand Design Guidelines, Level of Efforts Estimates, Cyber Security and Quality Assurance document, Project plan, Technical Design and DevOps details Document, all were prepared before the development of the project.              </li>
              <li>
              Post Development and technical handover documents i.e. App Architecture, Project and process dependencies, Modules/ Services, Solution structure, Libraries and SDKs, Code metrics Test environments and strategies, Standalone installation guide, infrastructure diagram, API list etc. were handed over to the client.           </li>
            </ul>
            </div>
          </Fade>
          <Zoom triggerOnce duration={1300} damping={0.2}>
            <img alt="dostpay" src={Dostpay4} width={"100%"} />
          </Zoom>
        </div>

        <Process size={32} />
        <AppForm backgroundColor="#f3f6fa" />
        <CollaborationWithClient collaborationData={collaborationData} />
      </StyledDiv>
    </>
  );
};

export default DostPay;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Digital banking payment Platform | eForte",
        description: `Dost-pay is a 'Digital Banking Payment Platform' developed by Premier App developers at | eForte`,
        keywords: "Digital banking payment Platform | eForte",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
