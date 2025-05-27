import Faq from "../../src/component/faq";
import HeroSection from "../../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { BotTypeWriter } from "../../src/component/botTypeWriter";
import { Fade } from "react-awesome-reveal";
import AboutUsProcess from "../../src/component/process/aboutUsProcess";
import TechnologySwitch from "../../src/component/technologySwitch";
import {
  imHomePage,
  webAppIM,
  webIMBg,
  imBg,
  html5,
  nginx,
  nodejs,
  react,
  redux,
  npm,
  mongodb,
  nextjs,
  sass,
  bootstrap,
  antd,
  apolloGraphql,
  cloudinary,
  graphql,
  stripe,
  jenkins,
  reduxSaga,
  eventbrite,
  aws,
  elasticsearch,
  docker,
  strapi,
  tinymce,
  firebase,
  pwa,
  android,
  ios,
  node,
  validatrLogo,
  validatrBg,
  validatr1,
  validatr2,
  validatr3,
} from "../../images";
import AppForm from "../../src/component/forms/AppForm";
import CollaborationWithClient from "../../src/component/collaborationWithClient";
import TechnologySwitch2 from "../../src/component/technologySwitch/technologySwitch2";

const StyledDiv = styled.div`
  overflow: hidden;
  .hero-section {
    background: url(${validatrBg});
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

  @media (max-width: 1024px) {
    .hero-section {
      h1 {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
      }
    }
    .header-para {
      font-size: 1.3rem;
    }
    .paragraph {
      font-size: 1.1rem;
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
  }
`;

// const techDetailList = [
//   {
//     btnName: "Android",
//     detailList: [
//       { detail: "Kotlin" },
//       { detail: "Android Architecture Components" },
//       { detail: "Android Jetpack components" },
//       { detail: "MVVM Design Pattern" },
//     ],
//     image: android,
//   },
//   {
//     btnName: "IOS",
//     detailList: [
//       { detail: "Objective C" },
//       { detail: "Swift" },
//       { detail: "MVVM Design Pattern" },
//     ],
//     image: ios,
//   },
//   {
//     btnName: "Backend",
//     detailList: [{ detail: "Node JS / Express Framework" }, { detail: "Firebase" }],
//     image: node,
//   },
// ];

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
        langName: "Next JS",
        img: nextjs,
        langDescription: `Next JS is used for server-side rendering and static web applications using React. 
        It's a great tool to build your next website. It has many great features and advantages, 
        which can make Nextjs eForte first option for building your large scale web application.`,
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
        langName: "Bootstrap",
        img: bootstrap,
        langDescription: `Bootstrap is a potent front-end framework used to create modern websites and web apps. It's open-source and free to use, yet features 
        numerous HTML and CSS templates for UI interface elements such as buttons and forms.`,
      },
      {
        id: 16,
        langName: "Redux Saga",
        img: reduxSaga,
        langDescription: `Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. 
        This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations.`,
      },
      {
        id: 17,
        langName: "Tiny MCE",
        img: tinymce,
        langDescription: `TinyMCE gives you total control over your rich text editing. Either create a fully customized experience via the APIs or 
        take advantage of the out-of-the-box enterprise-grade editor to build your next generation web app.`,
      },
      // {
      //   id: 18,
      //   langName: "Apollo GraphQL",
      //   img: apolloGraphql,
      //   langDescription: `Apollo Client is a customizable, open-source JavaScript GraphQL
      //   client with powerful caching and state management features. It enables developers
      //   to define queries directly within the UI components that use them, and automatically update
      //   those components as query results arrive or change.`,
      // },
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
        langName: "Elastic Search",
        img: elasticsearch,
        langDescription: `Elasticsearch is a distributed, free and open search and analytics engine for all types of data, 
        including textual, numerical, geospatial, structured, and unstructured. eForte has used elastic search for data ingestion, 
        enrichment, storage, analysis, and visualization of data.`,
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
        id: 25,
        langName: "Strapi",
        img: strapi,
        langDescription: `Strapi is an open-source, Node js based, Headless CMS that saves our developers a lot of development time while 
        giving them the freedom to use their favorite tools and frameworks. Strapi also enables content editors to streamline content 
        delivery (text, images, video, etc) across any devices.`,
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
      {
        id: 44,
        langName: "Eventbrite",
        img: eventbrite,
        langDescription: `Eventbrite is a global self-service ticketing platform for live experiences that allows anyone to create, share, 
        find and attend events that fuel their passions and enrich their lives.`,
      },
      {
        id: 45,
        langName: "AWS",
        img: aws,
        langDescription: `Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions. 
        AWS is a broadly adopted cloud platform that offers several on-demand operations`,
      },
      {
        id: 46,
        langName: "Docker",
        img: docker,
        langDescription: `Docker is an open platform for developing, shipping, and running applications. Docker images are typically 
        very small, which facilitates rapid delivery and reduces the time to deploy new application containers. Simplified 
        maintenance – Docker reduces effort and risk of problems with application dependencies.`,
      },
      {
        id: 47,
        langName: "Firebase",
        img: firebase,
        langDescription: `We have used Firebase Cloud Messaging (FCM) that provides a reliable and battery-efficient connection between our server 
        and devices that allows us to deliver and receive messages and notifications on iOS, Android`,
      },
      {
        id: 48,
        langName: "PWA",
        img: pwa,
        langDescription: `A PWA is a website with all the benefits of an app. PWAs can do most things that native apps can do, such as operate offline, 
        access your camera and microphone if necessary, GPS, and more. We have created Investment Markets mobile application in PWA.`,
      },
    ],
  },
];
const Validatr = () => {
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
                    <p>Startup/ Business Management </p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade direction="" triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img alt="validatr" src={validatrLogo} width={"80%"} />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>Web and Mobile Apps with Web based Admin panel</p>
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
                <p className="header-para">
                Validatr.io is a tool for the startups and businesses to do the market validation of the new business ideas and further do Market Research for the same. Both the market validation and market research is done through answering selection of questions which produces detailed report style documents. These documents can be used in business plans and for investor rounds.
                </p>
              </Fade>
              <Fade delay={1000} direction="up" triggerOnce duration={1300} damping={0.2}>
                <img
                  alt="validatr"
                  className="header-img"
                  src={validatr1}
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
          <TechnologySwitch2
            techDetailList={techDetailList}
            btnColor={"linear-gradient(82deg,#0909a9 0,#3737CE 91%)"}
          />
        </div>

        <div
          className="container-fluid"
          style={{ marginTop: "5%", backgroundColor: "#f3f6fa" }}
        >
          <div className="row align-items-center">
            <Fade
              className="col-sm-12 col-lg-6 section-1"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">Intuitive User Experience </h1>
                <p className="paragraph">
                Multiple Projects can be created through intuitively designed dashboard where team members can be added for collaboration. The Guide Bot is always there to help the user with each section of the application.
                </p>
              </div>
            </Fade>
            <div className="col-sm-12 col-lg-6 p-0 d-flex justify-content-end">
              <Fade triggerOnce direction="right" duration={800} damping={0.2}>
                <img
                  alt="validatr"
                  className="instAppiMac"
                  src={validatr2}
                  width={"100%"}
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row align-items-center">
            <Fade
              className="col-12 section-1"
              direction="up"
              duration={800}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 style={{ textAlign: "center" }} className="heading-no1">
                Ready to use Reports
                </h1>
                <p style={{ textAlign: "center" }} className="paragraph">
                The output of the platform is beautiful and rich with details report documents that are ready to be used for presentation purposes. Students and Startups both can benefit from this platform.
                </p>
              </div>
            </Fade>
            <Fade direction="up" duration={800} damping={0.2} triggerOnce>
              <div
                style={{ width: "100%" }}
                className="col-12 p-0 d-flex justify-content-center align-items-center"
              >
                <img
                  alt="validatr"
                  className="instAppiMac"
                  src={validatr3}
                  width={"70%"}
                />
              </div>
            </Fade>
          </div>
        </div>
        <CollaborationWithClient collaborationData={collaborationData} />
        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default Validatr;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Idea Evaluation | Validation ",
        description:
          "Conducting surveys on your business ideas and making them legitimate.",
        keywords: "Idea Evaluation | Validation ",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
