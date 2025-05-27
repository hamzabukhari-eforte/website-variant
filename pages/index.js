import Head from "next/head";
import dynamic from "next/dynamic";

// import HeroSection from "../src/component/heroSection";
// import OurDesigns from "../src/component/ourDesign";
// import Faq from "../src/component/faq";
// import ContactInfo from "../src/component/contactInfo";
// import Process from "../src/component/process";
// import TopRatingProfessionals from "../src/component/carousel";
// import WebSolutions from "../src/component/webSolutions/webSolutions";
// import Benifits from "../src/component/offers/benifits";
// import TestimonyWithRating from "../src/component/testimonial/logoTestimonial";
// import AppForm from "../src/component/forms/AppForm";
import { homeBannerImage } from "../images";
import LazyLoad from "react-lazyload";
import CaseStudies from '../src/component/carousel/CaseStudies'
import { Fade } from "react-awesome-reveal";
import Heading from "../src/component/headings";
const HeroSection = dynamic(() => import("../src/component/heroSection"), {
  loading: () => (
    <div style={{ height: "100vh", background: "rgba(0, 0, 0, 0.55)" }}></div>
  ),
});
const OurDesigns = dynamic(() => import("../src/component/ourDesign"));
const Faq = dynamic(() => import("../src/component/faq"));
const ContactInfo = dynamic(() => import("../src/component/contactInfo"));
const Process = dynamic(() => import("../src/component/process"));
const TopRatingProfessionals = dynamic(() => import("../src/component/carousel"));
const CostAnalysis = dynamic(()=> import("../src/component/cost/costAnalysis"))
const WebSolutions = dynamic(() => import("../src/component/webSolutions/webSolutions"));
const Difference = dynamic(() => import("../src/component/difference/difference"));
const Benifits = dynamic(() => import("../src/component/offers/benifits"));
const TestimonyWithRating = dynamic(() =>
  import("../src/component/testimonial/logoTestimonial")
);
const AppForm = dynamic(() => import("../src/component/forms/AppForm"));

const Home = () => {
  return (
    <>
      <div>
        <LazyLoad height={"100vh"} once>
          <HeroSection height={"100vh"} type="image" background={homeBannerImage}  />
        </LazyLoad>
        <Benifits
          // projectNumber="250+"
          // projectName="App & Web Projects"
          // projectName = "Pre-screened Pool of 
          // 600+ Tech Engineers"
          // projectName2="Custom Web Designs"
        />
        <WebSolutions />
        {/* <OurDesigns type="web" /> */}
        <CostAnalysis/>
        <Difference/>
        <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
          <Heading
            title={
              <>
              
                Empowering positive change, 
                <br />
                One client at a time. 
                <br/>
                <p>
                Experience the best, because you deserve the best.
                </p>
              </>
            }
          />
          <p style={{ width: "80%", margin: "auto" }} className="text-md-center text-left">
          Explore our success stories: delivering elegant solutions to complex challenges.
          </p>
        </Fade>
        <CaseStudies />
        <TopRatingProfessionals
          backgroundColor="#f3f6fa"
          slidesToShow={4}
          slidesToScroll={1}
        />
        {/* <Testimonial /> */}
        {/* <Packages /> */}
        <Process size={32} />
        <ContactInfo backgroundColor="#f3f6fa" />
        <TestimonyWithRating />
        <br />
        {/* <h3>Awards & Recognitions</h3> */}
        {/* <h6>Our achievements have been recognized and honoured in the industry</h6> */}
        {/* <AwardsAndRecognition
          backgroundColor="#f3f6fa"
          headingDisplay="none"
          slidesToShow={5}
          slidesToScroll={1}
          type="awardsAndRecognition"
        /> */}

        <Faq />
        <AppForm backgroundColor="#f3f6fa" />
        {/* <SEOText /> */}
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
        "Software Development, IT Staff Augmentation and IT Consultancy Services",
        // "Cost effective IT Staff Augmentation Services - US, UK, UAE, AUS",
          // "Custom Mobile App Development Agency &amp; Mobile Application Design Services in USA | Mobile Application Development Company",
        description:
        "Software development services | Secure top talent with eForte's IT staff augmentation. From individual developers to full-scale development teams, we match talent to your project needs",
        // "Discover top tech talent & accelerate project success with eForte. Specializing in staff augmentation, software development, & IT consulting. Whether you need a single developer or an entire team, we're here for you.",  
        // "eForte is a mobile app and software development company elevating local businesses through top-notch strategy and design.",
        keywords:
        "IT Staff Augmentation, Software Engineering, IT Consulting Services, Agile Solutions, Tech Talent Placement",
          // "Custom Mobile App Development Agency &amp; Mobile Application Design Services in USA | Mobile Application Development Company",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
