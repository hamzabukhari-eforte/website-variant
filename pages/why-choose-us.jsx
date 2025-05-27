import Head from "next/head";
import { Row, Col } from "antd";
import WhyChooseLogilogos from "../src/component/whyChooseUs/whyChooseLogilogos";
// import HeroSection from "../src/component/heroSection";
import Packages from "../src/component/packages";
import TestimonyWithRating from "../src/component/testimonial/logoTestimonial";
import AwardsAndRecognition from "../src/component/carousel";
import { SEOText } from "../src/component/footer/footerContent";
import ContactInfo from "../src/component/contactInfo";
import styled from "styled-components";
import AppForm from "../src/component/forms/AppForm";
import { homeBannerImage, whyChooseUsBanner } from "../images";
import LazyLoad from "react-lazyload";
import HeroSection from "../src/component/heroSection";
import Heading from "../src/component/headings";

const WhyChooseUs = () => {
  return (
    <>
      <section>
        <LazyLoad height={"100vh"} once>
          <HeroSection
            height="70vh"
            companySliderHide={true}
            type="image"
            background={whyChooseUsBanner}
          >
            <div>
              <Heading color="#fff" backgroundColor="#ed3c69"></Heading>
            </div>
          </HeroSection>
        </LazyLoad>
        <WhyChooseLogilogos />
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
      </section>
    </>
  );
};

export default WhyChooseUs;

const StyledDiv = styled.div`
  .yellow-text {
    color: #fee518;
    font-size: 48px;
    font-weight: 600;
  }
  .main-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-div {
    color: #fff;
    .white-bold-text {
      font-size: 24px;
      font-weight: 600;
    }
  }
  @media (max-width: 575px) {
    .col-class {
      position: absolute;
      right: 20px;
      bottom: 16px;
    }
    .text-div {
      margin-top: 100px;
      .white-bold-text {
        font-size: 20px;
      }
    }
    .main-row {
      align-items: start;
    }
    .yellow-text {
      font-size: 32px;
      font-weight: 600;
    }
  }
`;

// const HeroSection = () => {
//   return (
//     <StyledDiv>
//       <Row
//         className="main-row"
//         style={{
//           height: "100vh",
//           width: "-webkit-fill-available",
//           backgroundImage: `url(/images/why-choose-us-banner.jpg)`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           padding: 24,
//         }}
//       >
//         <Col xxl={8} xl={8} lg={8} md={10} sm={11} xs={21}>
//           <div className="text-div">
//             <p className="white-bold-text" style={{ margin: 0 }}>
//               More Than 10,000 Clients have
//             </p>
//             <p className="yellow-text">CHOSEN US Globally!</p>
//             <p className="white-bold-text" style={{ fontWeight: 600 }}>
//               You Should Too
//             </p>
//             <div>
//               <p className="mb-2">More than 8 Years Experience</p>
//               <p className="mb-2">Clients Across 45 Industries</p>
//               <p className="mb-2">100% Money-Back Guarantee</p>
//               <p className="mb-2">Industry Specific Designers</p>
//             </div>
//           </div>
//         </Col>
//         <Col xxl={8} xl={8} lg={8} md={10} sm={11} xs={16} className="col-class">
//           <img
//             style={{ width: "100%" }}
//             alt="background"
//             src="/images/background/banner2.png"
//           />
//         </Col>
//       </Row>
//     </StyledDiv>
//   );
// };

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
          // "Limitless Designs / Unlimited Revisions, Quickest Deliveries, 24/7 Support",
          "Reliable IT Staff Augmentation, Comprehensive Software Solutions, Client-Focused Services | eForte",
        // description: "Client satisfactory Web design and development services.",
        description: "Discover why eForte is your ideal IT staff augmentation partner. Innovative solutions, agile methodologies, and transparent services.",
        keywords:
          "Limitless Designs / Unlimited Revisions, Quickest Deliveries, 24/7 Support",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
