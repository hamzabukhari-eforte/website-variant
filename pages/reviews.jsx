import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Slider } from "antd";
import Heading from "../src/component/headings";
import HeroSection from "../src/component/heroSection";
import Head from "next/head";
import ReferenceWrapper from "../src/component/referenceWrapper";
import LazyLoad from "react-lazyload";

import {
  clientReviewImage1,
  clientReviewImage2,
  clientReviewImage3,
  clientReviewImage4,
  clientReviewImage5,
  clientReviewImage6,
  clientReviewImage7,
  clientReviewImage8,
  homeBannerImage,
  reviewBanner,
} from "../images";

const referrenceData1 = {
  name: "Krank",
  description:
    "Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how market buys and sells heavy equipment. eForte delivered Timed and Day Auctions, Auto Bidding, Network privacy and detailed subscription module.",
  catgegory: "Web Apps Development",
  duration: "14 Months",
  // size: "USD 75,000 plus",
  serviceOfferings: "Staff Augmentation Solutions",
  comment: "Extremely competent firm, presents an unrivalled value proposition.",
  commentDate: "",
  rating: "4.5",
  feedback:
    "The IT professionals provided by eForte showcased professionalism from project estimation to delivery, enhancing the Krank project experience. Their enthusiastic approach and expertise injected fresh energy into the complex endeavor, making them invaluable partners in navigating challenges.",
  // "From the outset I found eForte to be very professional in their approach from estimate stage through delivery. The Krank project was very complex and eForte team handled it with gusto and enthusiasm throughout.",
  reviewerImg: clientReviewImage1,
  reviewerName: "Mark Turner",
  reviewerDesignation: "CEO & Founder - krank.com",
};

const referrenceData2 = {
  name: "InstApp",
  description:
    "InstappDeals is a discount coupon/promotion platform for the retail industry. eForte delivered Promotions by Store owners, Dealbook feature, Custom Chat one to one and one to many.",
  catgegory: "iOS and Android Mobile Apps Development",
  duration: "22 Months",
  size: "USD 90,000 plus",
  comment: "eForte truly proved to be a tremendous support for our Tech venture",
  commentDate: "",
  rating: "5.0",
  feedback:
    "Our idea of the product matured over time and eForte worked with us tirelessly for that purpose. They truly proved to be a tremendous support for our venture in terms of technology, business ethics and domain knowledge.",
  reviewerImg: clientReviewImage2,
  reviewerName: "Kamran Chaudary",
  reviewerDesignation: "CEO - Instappdeals",
};

const referrenceData3 = {
  name: "Investment Markets",
  description:
    "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both. eForte delivered customized user and admin dashboards, feature to list comprehensive investment listings with back and forth communication and real time online Track Changes feature in documents.",
  catgegory: "Web Apps and Mobile Apps Development",
  // duration: "33 Months and continuing",
  duration: "14 Months",
  serviceOfferings: "Staff Augmentation Solutions",
  // size: "USD 200,000 plus",
  comment:
    "Undoubted commitment by eForte to solve any problems or issues raised by us with the delivered product.",
  commentDate: "September 9, 2020",
  rating: "5.0",
  // feedback:
  //   "Underpinning our dealings has always been a strong customer service attitude exhibited by eForte team including an undoubted commitment by them to solve any problems or issues raised by us with the delivered product. Of particular importance, we have found eForte to have conducted themselves with integrity and sound ethics in all of their dealings with us.",
  feedback:
    "As an active participant in the investment market, I've witnessed firsthand the invaluable contributions of eForte's staff augmentation services. Moreover, their integrity and ethical conduct have cemented our trust in their services",
  reviewerImg: clientReviewImage3,

  reviewerName: "Chris Morton",
  reviewerDesignation: "Owner - investmentmarkets.com.au",
};

const referrenceData4 = {
  name: "Green Rush Consulting",
  description:
    "GRC Oddysee is the platform to automate the govt. licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written templates of documents to choose from. eForte delivered customized user and admin dashboards, features to automate civic license documentation requirements by answering questions with intuitive UI and Forecasting tool to create P&L statements, Cash Flow and Financial forecastings for businesses.",
  catgegory: "Web Apps for User, Admin and Consultants Development",
  duration: "21 Months and continuing",
  size: "USD 160,000 plus",
  comment: "eForte handled our project very professionally and intelligently.",
  commentDate: "",
  rating: "5.0",
  feedback:
    "It was a difficult idea that needed in-depth understanding of project management, business planning, and finance. This software didn't previously exist, making it even more difficult to develop. eForte handled it very professionally and intelligently. They took the project in their care and with little input from our side they were able to amaze us with the solutions, modules and feature sets they developed.",
  reviewerImg: clientReviewImage4,
  reviewerName: "Zeta Ceti",
  reviewerDesignation: "CEO GRC - greenrushconsulting.com",
};

const referrenceData5 = {
  name: "Prism",
  description:
    "Prism is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. eForte delivered integration of 3rd party APIs, User and Admin dashboards and interactive UI for charts and graphs.",
  catgegory: "Web Apps for User, Admin and Consultants",
  // duration: "30 Months and continuing",
  duration: "Ongoing for 21 Months",
  serviceOfferings: "Staff Augmentation Solutions",
  // size: "USD 200,000 plus",
  comment: "I am happy to say that the engineers at eForte feel as part of our team.",
  commentDate: "",
  rating: "5.0",
  // feedback:
  //   "eForte team has been an important part of our translation from math to end-user and ensuring that we make our products as intuitive as possible. At the same time their experience and professionalism have contributed to improving our own development and time-to-market.",
  feedback:
    "During our project, eForte's IT Engineers consistently displayed a strong customer service attitude, promptly addressing any issues raised with the delivered product. Their integrity and ethical conduct were evident throughout, ensuring a positive and professional collaboration experience.",
  reviewerImg: clientReviewImage5,
  reviewerName: "Raymond Rienks",
  reviewerDesignation: "Product Owner @ stratex.nl",
};

const referrenceData6 = {
  name: "STN Inc.",
  description:
    "STN Site Data Protection Services (SDP) is a leading partner with Cohesity. Their unique Backup as a Service makes worrying about backups a thing of the past. STN Inc. partnered with eForte to deliver a Managed Services Portal where clients can choose and activate services and components that they require for their backup and disaster recovery procedures.",
  catgegory: "Web and Mobile Apps for User, Admin and Clients",
  duration: "6 Months",
  size: "USD 65,000",
  comment:
    "eForte solutions delivery was impeccable that matched and exceeded our expectations.",
  commentDate: "",
  rating: "5.0",
  feedback:
    "eForte worked through the delivery of the project with utmost professionalism, transparency and great technical knowledge. Their effective documentation processes and client communications kept us abreast of our project during the life cycle of the development.",
  reviewerImg: clientReviewImage6,
  reviewerName: "Sabur Man",
  reviewerDesignation: "Founder - stninc.com",
};
const referrenceData7 = {
  name: "Ce-trainer",
  description:
    "STN Site Data Protection Services (SDP) is a leading partner with Cohesity. Their unique Backup as a Service makes worrying about backups a thing of the past. STN Inc. partnered with eForte to deliver a Managed Services Portal where clients can choose and activate services and components that they require for their backup and disaster recovery procedures.",
  catgegory: "Learning Management System (LMS)",
  duration: "3 months and Counting",
  serviceOfferings: "Staff Augmentation Solutions",
  // size: "USD 65,000",
  comment:
    "We're delighted to say that the engineers from eForte are an integral part of our team.",
  commentDate: "",
  rating: "5.0",
  feedback:
    "Ce-trainer's LMS underwent significant enhancements, improving student navigation with Google Drive uploaders and a comprehensive Student Dashboard. The Admin Dashboard now includes a robust filter process, streamlining administrative tasks for better efficiency and promising continued success.",
  reviewerImg: clientReviewImage7,
  reviewerName: "Huzefa Ammiwala",
  reviewerDesignation: "CTO - cetrainer.nl",
};
const referrenceData8 = {
  name: "Insurance Market",
  description:
    "STN Site Data Protection Services (SDP) is a leading partner with Cohesity. Their unique Backup as a Service makes worrying about backups a thing of the past. STN Inc. partnered with eForte to deliver a Managed Services Portal where clients can choose and activate services and components that they require for their backup and disaster recovery procedures.",
  catgegory: "Customer Relationship Management (CRM)",
  duration: "10 months and Counting",
  serviceOfferings: "Staff Augmentation Solutions",
  // size: "USD 65,000",
  comment:
    "We're happy to have eForte's engineers working alongside us.",
  commentDate: "",
  rating: "5.0",
  feedback:
    "Insurance Market is a platform for comparing and purchasing insurance products from various providers. eForte's staff enhanced the platform by developing an advanced CRM system with modules targeting money laundering concerns, integrating third-party APIs, and creating a proactive Anti-Money Laundering module to improve financial integrity.",
  reviewerImg: clientReviewImage8,
  reviewerName: "Hussain Fakhruddin",
  reviewerDesignation: "CTO - Insurance Market.ae",
};

const StyledDiv = styled.div`
  background-color: #fff;
  // padding: 3% 10%;
`;

const References = () => {
  return (
    <>
      <HeroSection
        height="70vh"
        companySliderHide={true}
        type="image"
        background={reviewBanner}
      >
        <div>
          <Heading color="#fff" backgroundColor="#ed3c69">
            We work with a holistic approach that allows us <br /> to deliver you quality
            – every single time!
          </Heading>
        </div>
      </HeroSection>
      <StyledDiv>
        <ReferenceWrapper {...referrenceData1} />
        <ReferenceWrapper {...referrenceData2} />
        <ReferenceWrapper {...referrenceData3} />
        <ReferenceWrapper {...referrenceData4} />
        <ReferenceWrapper {...referrenceData5} />
        <ReferenceWrapper {...referrenceData6} />
        <ReferenceWrapper {...referrenceData7} />
        <ReferenceWrapper {...referrenceData8} />

      </StyledDiv>
    </>
  );
};

export default References;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Satisfactory reviews of clients",
        description: "Adequate development services rendered.",
        keywords: "Satisfactory reviews of clients",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
