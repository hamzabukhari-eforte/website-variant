import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade, Zoom } from "react-awesome-reveal";
import { Timeline } from "antd";
import TechnologySwitch from "../../src/component/technologySwitch";
import TechnologySwitch2 from "../../src/component/technologySwitch/technologySwitch2";

import {
  android,
  ios,
  node,
  kombLogo,
  kombBg,
  komb1,
  komb2,
  komb3,
  komb31,
  komb32,
  komb33,
  komb4,
  komb5,
  html5,
  nginx,
  nodejs,
  react,
  redux,
  npm,
  mongodb,
  reactNative,
  sass,
  expo,
  antd,
  apolloGraphql,
  cloudinary,
  graphql,
  stripe,
  jenkins,
} from "../../images";
import Process from "../../src/component/process";
import AppForm from "../../src/component/forms/AppForm";
import CollaborationWithClient from "../../src/component/collaborationWithClient";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${kombBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0px 0px 25% 0px;
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
      font-size: 1.3rem !important;
    }
    .welcome-section {
      .heading-no1 {
        font-size: 1.5rem;
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
      margin-top: 20vh;
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
        id: 11,
        langName: "React JS",
        img: react,
        langDescription: `React is a free and open-source 
        front-end JavaScript library for building user interfaces based on UI components. 
        It is maintained by Meta (formerly Facebook) and a community of individual developers 
        and companies. React can be used as a base in the development of single-page, mobile, 
        or server-rendered applications`,
      },
      {
        id: 12,
        langName: "React Native",
        img: reactNative,
        langDescription: `React Native is an open-source UI software framework created by Meta Platforms, Inc. 
        It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by 
        enabling developers to use the React framework along with native platform capabilities.`,
      },
      {
        id: 13,
        langName: "HTML-5",
        img: html5,
        langDescription: `HTML is the language for describing the structure of Web pages. eForte give clients the means to: Publish online 
        documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.`,
      },
      {
        id: 14,
        langName: "SCSS",
        img: sass,
        langDescription: `SCSS is a special type of file for SASS , which can be written in React that assembles CSS style sheets for a browser, and for information, 
        SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster.`,
      },
      {
        id: 15,
        langName: "Expo",
        img: expo,
        langDescription: `Expo is a framework to build React Native apps. It is a set with tools and services built for React Native. It will help you begin with building 
        React Native apps with ease. It provides you with a list of tools that simplify the creation and testing of React Native app.`,
      },
      {
        id: 16,
        langName: "Redux",
        img: redux,
        langDescription: `Redux is a predictable state container designed to help you write JavaScript apps that behave consistently 
        across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with 
        React, you can use it with any other JavaScript framework or library.`,
      },
      {
        id: 17,
        langName: "Ant Design",
        img: antd,
        langDescription: `Ant Design is a React UI library that contains a set of high 
        quality components and demos for building rich, interactive user interfaces. 
        It is dedicated to providing a good development experience for programmers`,
      },
      {
        id: 18,
        langName: "Apollo GraphQL",
        img: apolloGraphql,
        langDescription: `Apollo Client is a customizable, open-source JavaScript GraphQL 
        client with powerful caching and state management features. It enables developers 
        to define queries directly within the UI components that use them, and automatically update 
        those components as query results arrive or change.`,
      },
    ],
  },
  {
    techName: "Backend",
    languageList: [
      {
        id: 21,
        langName: "Node JS",
        img: nodejs,
        langDescription: `The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the 
        face of data-intensive real-time applications that run across distributed devices. we have web applications with real-time, 
        two-way connections, where both the client and server can initiate communication, allowing them to exchange data freely.`,
      },
      {
        id: 22,
        langName: "GraphQL",
        img: graphql,
        langDescription: `GraphQL is designed to make APIs fast, flexible, and developer-friendly. It can even be deployed within an 
        integrated development environment (IDE) known as GraphiQL. As an alternative to REST, developers at eForte have construct 
        requests that pull data from multiple data sources in a single API call.`,
      },
      {
        id: 23,
        langName: "NPM",
        img: npm,
        langDescription: `npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can 
        find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. 
        Most commonly, it is used to publish, discover, install, and develop node programs.`,
      },
      {
        id: 24,
        langName: "Stripe",
        img: stripe,
        langDescription: `Stripe is an online payment processing and credit card processing platform for businesses. When a customer 
        buys a product online, the funds need to be delivered to the seller; Insert Stripe. Stripe allows safe and efficient processing 
        of funds via credit card or bank and transfers those funds to the sellers account.`,
      },
    ],
  },
  {
    techName: "Database",
    languageList: [
      {
        id: 31,
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
        id: 41,
        langName: "Nginx",
        img: nginx,
        langDescription: `NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. 
        It started out as a web server designed for maximum performance and stability.`,
      },
      {
        id: 42,
        langName: "Cloudinary",
        img: cloudinary,
        langDescription: `Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from 
        image and video uploads, storage, manipulations, optimizations to delivery.`,
      },
      {
        id: 43,
        langName: "Jenkins",
        img: jenkins,
        langDescription: `Pipelines automate testing and reporting on isolated changes in a larger code base in real time and facilitates the integration 
        of disparate branches of the code into a main branch. We used Jenkins to implement CI/CD`,
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
  para1: `The Komb app is a UK based startup, they realized the gap in the market and collaborated 
  with eForte for their mobile and Web App development needs. This collaboration produced 
  an effective tool for automating the day-to-day operations of a salon. With its user-friendly 
  interface, powerful features, and mobile apps, the software makes it easy for salon owners 
  and staff to manage appointments, client information, and inventory. The software also 
  provides detailed reporting that allows salon owners to monitor their salon's performance 
  and make informed business decisions. That was all made possible because of the diligent
  work done by the Client’s team and the team at eForte:`,
  list: [
    {
      text: "eForte gathered requirements and identified the key features of the Komb project",
    },
    {
      text: "Our Business analysts worked with the client to make requirement analysis     and to create Mockup of the design.",
    },
    {
      text: "The software development team used Node.js for the Backend admin panel  and used React Native for the Android and iOS apps development",
    },
    { text: "The software was quality assured before being deployed to the end users" },
    {
      text: `Pre Dev documentation like SoW, Brand Design Guidelines, Level of Efforts 
    Estimates, Cyber Security and Quality Assurance document, Project plan, 
    Technical Design and DevOps details Document, all were prepared before the
    development of the project.`,
    },
    {
      text: `Pre Dev documentation like SoW, Brand Design Guidelines, Level of Efforts 
    Estimates, Cyber Security and Quality Assurance document, Project plan, 
    Technical Design and DevOps details Document, all were prepared before the
    development of the project.`,
    },
  ],
};

const Komb = () => {
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
                    <p>Services</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="komb" src={kombLogo} width={"100%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>
                      WebApp for Super Admin, iOS and Android Apps for Clients and Salon
                      Owners
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
                <h1>Komb</h1>
                <p className="header-para">
                  {`The salon management software ‘Komb’ is designed to automate the day-to-day 
operations of a salon, including scheduling appointments, managing client 
information, and inventory management. The software is designed to be user-
friendly, with a simple and intuitive interface that makes it easy for salon owners 
and staff to use.`}
                </p>
              </Fade>
              <Fade
                className="d-flex justify-content-center"
                direction="up"
                triggerOnce
                duration={1300}
                damping={0.2}
              >
                <img alt="komb" className="header-img" src={komb1} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>
        <div>
          <div className="tech-section">
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <h1 className="heading-no1 text-center mb-4">Technologies Used</h1>
              <h3 className="header-para text-center">
                {`We created mobile apps with scalable and tested technology stack
                to deliver Komb apps par excellence.`}
              </h3>
            </Fade>
            <TechnologySwitch2 techDetailList={techDetailList} />
          </div>

          <div
            className=""
            style={{
              paddingTop: "5%",
            }}
          >
            <div className="welcome-section">
              <Fade direction="up" cascade triggerOnce duration={1300} damping={0.2}>
                <h1 className="heading-no1 text-center">
                  A User App to interact with the <br />
                  Salon services that you need
                </h1>
                <p
                  className="paragraph text-center "
                  style={{ width: "80%", margin: "auto" }}
                >
                  {`The Client Mobile App is designed for use by the salon's clients. It allows clients to 
book, reschedule or cancel appointments, for them and for someone else. The app 
also includes a feature that allows clients to tip their service provider. Through their 
mobile app, they can get discount coupons from all the salons available on the 
Komb platform. One pretty neat feature is that the client can take their selfie before
the treatment and after and share with their friends and family.`}
                  {/* <br />
                  {`Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.`} */}
                </p>
              </Fade>
            </div>
            <div className="d-flex justify-content-center">
              <Fade direction="bottom-right" duration={1300} damping={0.2} triggerOnce>
                <img alt="komb" className="instAppiMac" src={komb2} width={"100%"} />
              </Fade>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "0 5%",
                  margin: "8rem 0 8rem 0",
                }}
              >
                <Fade
                  style={{ zIndex: 1 }}
                  cascade
                  duration={1300}
                  triggerOnce
                  damping={0.2}
                >
                  <img
                    alt="komb"
                    style={{ position: "relative", bottom: 75 }}
                    src={komb31}
                    width={"100%"}
                  />

                  <img alt="komb" src={komb32} width={"100%"} />

                  <img
                    alt="komb"
                    style={{ position: "relative", top: 100 }}
                    src={komb33}
                    width={"100%"}
                  />
                </Fade>
              </div>
              {/* <Fade
                style={{
                  position: "relative",
                  left: "43%",
                  transform: "translate(-50%, -50%)",
                  bottom: 1014,
                }}
                direction="up"
                delay={800}
              >
                <img alt="komb" width={300} src={komb4} />
              </Fade> */}
            </div>
          </div>
        </div>

        <div
          className="welcome-section"
          style={{ paddingTop: "2rem", backgroundColor: "#f3f6fa" }}
        >
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">Super admin dashboard</h1>
            <p className="paragraph text-center" style={{ width: "80%", margin: "auto" }}>
              {`The Super Admin Panel is a webapp that allows the salon owners to manage their
              employees, view sales, create discount coupons and special offers. The Salon Admin
              panel has the ability to add, edit, and delete appointments, manage client
              information, and access inventory management tools. The Super Salon Admin panel
              includes a reporting feature that provides detailed information about the salons
              performance, including revenue, client numbers, and appointment statistics. The
              super Admin Panel on the other hand manages all the Salon Admins, their earnings
              towards the Komb platform etc.
`}
            </p>
          </Fade>
          <Zoom triggerOnce duration={1300} damping={0.2}>
            <img alt="komb" src={komb5} width={"100%"} />
          </Zoom>
        </div>

        <CollaborationWithClient collaborationData={collaborationData} />
        <p style={{ width: "75%", margin: "auto" }}>
          eForte deployed following team on the project:
        </p>
        <p style={{ width: "75%", margin: "auto" }}>1 Business Analyst</p>
        <p style={{ width: "75%", margin: "auto" }}>2 x React Native Dev</p>
        <p style={{ width: "75%", margin: "auto" }}>1 MERN stack Dev (team Lead)</p>
        <p style={{ width: "75%", margin: "auto" }}>1 DevOps Engineer</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Quality Assurance Engineer</p>
        <p style={{ width: "75%", margin: "auto" }}>Product Owner</p>
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default Komb;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Mobile Application, App development",
        description: "A User App to interact with the Salon services that you need.",
        keywords: "Mobile Application, App development",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
