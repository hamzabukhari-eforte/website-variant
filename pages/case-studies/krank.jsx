import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade } from "react-awesome-reveal";
import AboutUsProcess from "../../src/component/process/aboutUsProcess";
import TechnologySwitch2 from "../../src/component/technologySwitch/technologySwitch2";
import {
  android,
  ios,
  node,
  iMac,
  krankLogo,
  krankBg,
  krank1,
  krank2,
  krank3,
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
import Heading from "../../src/component/headings";
import AppForm from "../../src/component/forms/AppForm";
import TestimonyWithRating from "../../src/component/testimonial/logoTestimonial";
import CollaborationWithClient from "../../src/component/collaborationWithClient";
import Process from "../../src/component/process";
import KeyHighlights from "../../src/component/keyHighlights";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${krankBg});
    background-color: #343b45;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0px 0px 15% 0px;
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
    margin-top: 50vh;
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
    .row {
      flex-direction: column-reverse;
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
const collaborationData = {
  para1: `eForte's strategic collaboration with Krank was pivotal in propelling their platform to new heights, revolutionizing the buying and selling process for heavy equipment.`,
  paraheading: `Staff Outsourced:`,
  list: [
    { text: "1 Product Manager" },
    { text: "2 Quality Assurance Engineers" },
    { text: "3 React Developers" },
    { text: "2 MERN Stack Developers" },
    { text: "1 DevOps Engineer" },
    { text: "1 Business Analyst" },
    { text: "1 Cyber Security Analyst" },
  ],
};

const Krank = () => {
  return (
    <>
      <StyledDiv>
        <div className="container-fluid hero-section">
          <div className="hero-image">
            <div style={{ flexDirection: "row", padding: "0px 10%" }} className="row">
              <div className="col-lg-4 col-sm-12 align-items-start d-flex flex-column justify-content-center">
                <Fade direction="left" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Industry</h3>
                    <p>Heavy Machinery </p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="krank" src={krankLogo} width="50%" />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>WebApps for Super Admin and Clients with Mobile Apps</p>
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
                style={{ padding: "0px 5%" }}
              >
                <h1>Krank</h1>
                <p className="header-para">
                  {`Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how market
                    buys and sells heavy equipment. For that reason Krank offers to make a sales network for your
                    own company where you can list your machinery for sell/rent/auction. The privacy of the platform
                    ensures that the integrity of a network remains intact while others on the platform interact with
                    the company's news, posts, sell/rent/auction listings and most of all the contacts book.`}
                </p>
              </Fade>
              <Fade direction="up" delay={1000} triggerOnce duration={1300} damping={0.2}>
                <img alt="krank" className="header-img" src={krank1} width={"100%"} />
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
          <TechnologySwitch2
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg, #153552  0, #032841 91%)"}
          />
        </div>
        {/* <div className="welcome-section" style={{ marginTop: "5%", padding: "0 5%" }}>
          <Fade
            className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end"
            direction="right"
          >
            <img alt="krank" src={krank2} width={"100%"} />
          </Fade>

          <Fade
            className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end"
            cascade
            direction="left"
            triggerOnce
            duration={1300}
            damping={0.2}
          >
            <h1 className="heading-no1">{`Lorem ipsum`}</h1>
            <p className="paragraph text-center">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              <br />
              {`Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.`}
            </p>
          </Fade>
        </div> */}

        <div className="container-fluid" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <Fade direction="left" duration={800} damping={0.2} triggerOnce>
                <img alt="krank" className="instAppiMac" src={krank2} width={"100%"} />
              </Fade>
            </div>
            <Fade
              className="col-sm-12 col-lg-6 section-1 d-flex align-items-center"
              direction="right"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">Features Highlights- Communication</h1>
                <p className="paragraph">
                  {`The disruptive features of the Krank Platform is that it provides the 
Social Contact linkages between the Buyers and Sellers of the Heavy
Machinery Industry which was primarily was working with the old 
age methods. By cutting the Agent from the equation, Krank 
provided clear communication through social media type 
engagement.`}
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="container-fluid">
          <div style={{ flexDirection: "row" }} className="row">
            <Fade
              className="col-sm-12 col-lg-6 section-1 d-flex align-items-center"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">Features Highlights- Online Auction </h1>
                <p className="paragraph">
                  {`eForte team was ecstatic while working on the Online Auction 
module for the Krank platform as this was not only challenging but 
was a learning experience for handling live Auction bids was no 
easy task. There are two types of Auction on Krank Platform, Day 
Auction and Time Auction.`}
                </p>
              </div>
            </Fade>

            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <Fade direction="right" duration={800} damping={0.2} triggerOnce>
                <img alt="krank" className="instAppiMac" src={krank3} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>

        {/* <KeyHighlights /> */}
        <CollaborationWithClient collaborationData={collaborationData} />
        {/* <p style={{ width: "75%", margin: "auto" }}>
          eForte deployed following team on the project:
        </p>
        <p style={{ width: "75%", margin: "auto" }}>1 Product Manager</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Product Owner/ Project Manager</p>
        <p style={{ width: "75%", margin: "auto" }}>3 QA</p>
        <p style={{ width: "75%", margin: "auto" }}>3 React Developers</p>
        <p style={{ width: "75%", margin: "auto" }}>1 DevOps</p>
        <p style={{ width: "75%", margin: "auto" }}>2 Full stack MERN stack Developers</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Business Analyst</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Cyber Security Analyst</p> */}
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default Krank;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Equipment marketplace",
        description: "Buying and selling new and used construction equipment | eForte",
        keywords: "Equipment marketplace",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
