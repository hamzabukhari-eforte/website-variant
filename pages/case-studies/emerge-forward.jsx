import Head from "next/head";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import TechnologySwitch2 from "../../src/component/technologySwitch/technologySwitch2";

import {
  android,
  ios,
  node,
  emergeLogo,
  emerge1,
  emerge2,
  emerge3,
  emergeBg,
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
} from "../../images";
import Process from "../../src/component/process";
import AppForm from "../../src/component/forms/AppForm";
import KeyHighlights from "../../src/component/keyHighlights";
import CollaborationWithClient from "../../src/component/collaborationWithClient";

const StyledDiv = styled.div`
  overflow: hidden !important;
  .hero-section {
    background: url(${emergeBg});
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
    margin-top: 40vh;
    background-color: #f3f6fa;
    padding: 5% 0px;
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
    padding: 0px 5% 0 0;
  }

  .instApplogo1 {
    position: absolute;
    width: 300px;
    right: 30%;
    top: 10%;
    z-index: 10;
  }
  .instAppWhiteDiv {
    position: absolute;
    background-color: #fff;
    width: 330px;
    padding: 12px 30px;
    user-select: none;
    border-top-left-radius: 100px;
    right: 50%;
    top: 20%;
    border-bottom-left-radius: 100px;

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
      .paragraph {
        padding: 0px 0 0 0;
        font-size: 1.1rem;
      }
      p {
        font-size: 1rem;
      }
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
        font-size: 1.5rem;
      }
    }
    .heading-no1 {
      font-size: 2rem;
    }
    .tech-section {
      margin-top: 20vh;
    }
    .instAppiMac {
      width: 100%;
    }
    .instApplogo1 {
      // display: none;
      max-width: 180px;
      left: 5%;
      top: 40%;
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

  @media (max-width: 450px) {
    .instAppWhiteDiv {
      display: none;
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

const collaborationData = {
  para1: `The project was delivered smoothly on time and with in budget. 
  Since this was eForte team’s first project with the Ed Tech, 
  devising the flow with the client was quite fun and learning.`,
  para2: `Following Team was deployed to complete the project successfully:`,
  list: [
    // { text: "1 Product Owner/ Project Manager" },
    // { text: "2 QA" },
    // { text: "2 React Developers" },
    // { text: "1 DevOps" },
    // { text: "1 Full Stack MERN stack Developers" },
    // { text: "1 Business Analyst" },
  ],
};

const EmergeForward = () => {
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
                    <p>Online Education</p>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center">
                <Fade triggerOnce duration={1300} damping={0.2}>
                  <div className="logo-wrap">
                    <img src={emergeLogo} alt="emerge" width="100%" />
                  </div>
                </Fade>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end justify-content-center">
                <Fade direction="right" triggerOnce duration={1000} damping={0.2}>
                  <div className="">
                    <h3>Solution</h3>
                    <p>Web App for Students and Admin</p>
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
                style={{ padding: "0 10%" }}
              >
                <h1>Emerge Forward</h1>
                <p className="header-para">
                  {`Emerge as a client wanted to build a platform where they can train 
the Youth with the soft skills as needed for being successful in the 
real world. For that they had a plan to develop a platform where 
students/ participants can create their profiles, take the lectures 
either online or in person and then take tests for the same. There is 
an online library for the purpose of continuous update on the 
knowledge sets needed. Successful candidates were to create a 
Linkedin type work profiles to get ready for the professional world.`}
                </p>
              </Fade>
              <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
                <img alt="emerge" className="header-img" src={emerge1} width={"100%"} />
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
          <TechnologySwitch2 techDetailList={techDetailList} />
        </div>

        <div className="container welcome-section" style={{ marginTop: "5%" }}>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <h1 className="heading-no1 text-center">Feature Highlight: Online Tests and Grading 
System</h1>
            <p className="paragraph text-center">
              {`The aim of the platform was not only to embark the students on soft
skills learning journey but to gauge them for the receipt of the 
information. Teachers can create tests and the system would give 
grades to the students according to the correct answers given by 
them.`}
            </p>
          </Fade>
          <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
            <img alt="emerge" src={emerge2} width={"100%"} />
          </Fade>
        </div>

        <div className="container-fluid" style={{ marginTop: "5%" }}>
          <div className="row">
            <Fade
              className="col-sm-12 col-lg-5 section-1 d-flex align-items-center"
              direction="left"
              duration={1000}
              damping={0.2}
              triggerOnce
            >
              <div>
                <h1 className="heading-no1">
                Feature Highlight: Professional Profile
                </h1>
                <p className="paragraph">
                  {`The students were encouraged to make their work profile including the
Courses they have covered. The profiles are Linkedin like, however those
have their personality type mentioned along with the videos and articles
they have written. This was to support them in their professional careers in
future.`}
                </p>
              </div>
            </Fade>
            <div
              style={{ padding: "0 5% 5% 0" }}
              className="col-sm-12 col-lg-7 d-flex justify-content-end"
            >
              <Fade
                // className="firstSecImg1"
                direction="right"
                duration={800}
                delay={800}
                damping={0.2}
                triggerOnce
              >
                <img alt="emerge" className="instAppiMac" src={emerge3} width={"100%"} />
              </Fade>
            </div>
          </div>
        </div>
        {/* <KeyHighlights /> */}
        <CollaborationWithClient collaborationData={collaborationData} />
        <p style={{ width: "75%", margin: "auto" }}>
          Following Team was deployed to complete the project successfully:
        </p>
        <p style={{ width: "75%", margin: "auto" }}>1 Product Owner/ Project Manager</p>
        <p style={{ width: "75%", margin: "auto" }}>2 QA</p>
        <p style={{ width: "75%", margin: "auto" }}>3 React Developers</p>
        <p style={{ width: "75%", margin: "auto" }}>1 DevOps</p>
        <p style={{ width: "75%", margin: "auto" }}>2 Full stack MERN stack Developers</p>
        <p style={{ width: "75%", margin: "auto" }}>1 Business Analyst</p>

        <AppForm backgroundColor="#f3f6fa" />
      </StyledDiv>
    </>
  );
};

export default EmergeForward;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Project Management Software",
        description:
          "EmergeForward is the platform for individual thinkers, influencers and community leaders. Who look for meaning and purpose in life",
        keywords: "Project Management Software",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
