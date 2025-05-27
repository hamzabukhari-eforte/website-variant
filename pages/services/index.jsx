import React from "react";
import WebDevelopmentComponent from "../../src/component/webDevelopment";
import ContactInfo from "../../src/component/contactInfo";
import HeroSection from "../../src/component/heroSection";
import AppForm from "../../src/component/forms/AppForm";
// import TestimonyWithRating from "../src/component/testimonial/logoTestimonial";
// import AwardsAndRecognition from "../src/component/carousel";
// import { SEOText } from "../src/component/footer/footerContent";
// import Packages from "../src/component/packages";
// import Head from "next/head";
import { servicesBanner } from "../../images";
import LazyLoad from "react-lazyload";
import Heading from "../../src/component/headings";

const WebDevelopment = () => {
  return (
    <div>
      <HeroSection
        height="70vh"
        companySliderHide={true}
        type="image"
        background={servicesBanner}
      >
        <div>
          <Heading color="#fff" backgroundColor="#ed3c69">
            Our Services
          </Heading>
        </div>
      </HeroSection>
      <WebDevelopmentComponent />
      {/* <Packages /> */}
      <ContactInfo
        heading1={`Get a custom quote tailored`}
        heading2={`for your web projects today!`}
      />
      {/* <TestimonyWithRating /> */}
      <br />
      {/* <AwardsAndRecognition
        backgroundColor="#f3f6fa"
        headingDisplay="none"
        slidesToShow={5}
        slidesToScroll={1}
        type="awardsAndRecognition"
      /> */}
      <AppForm />
      {/* <SEOText /> */}
    </div>
  );
};

export default WebDevelopment;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
          // "Mobile App Development, Startup MVP and prototyping, Blockchain Development",
          "Get Experts in Software Development and IT Staff Augmentation Services",
        description:
          // "Services offered of Mobile App Development, Startup MVP and prototyping, Blockchain Development.",
          "eForte offers expert IT staff augmentation, including team and resource augmentation, specializing in AI, mobile app, Web-App, and MVP development. Build high-performing teams with our skilled professionals.",
        keywords:
          "Mobile App Development, Startup MVP and prototyping, Blockchain Development",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
