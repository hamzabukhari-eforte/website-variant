import Head from "next/head";
import ContactInfo from "../src/component/contactInfo";
import Process from "../src/component/process/process2";
import AwardsAndRecognition from "../src/component/carousel";
import AppForm from "../src/component/forms/AppForm";
import { processBanner } from "../images";
import { Row, Col } from "antd";
import LazyLoad from "react-lazyload";
import HeroSection from "../src/component/heroSection";
import Heading from "../src/component/headings";

const ProcessPage = () => {
  return (
    <div>
      <LazyLoad height={"100vh"} once>
        <HeroSection
          height="70vh"
          companySliderHide={true}
          type="image"
          background={processBanner}
        >
          <div>
            <Heading color="#fff" backgroundColor="#ed3c69"></Heading>
          </div>
        </HeroSection>
      </LazyLoad>
      <Process size={32} />
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
    </div>
  );
};

export default ProcessPage;

// const HeroSection = () => {
//   return (
//     <Row
//       className="main-row"
//       style={{
//         height: "100vh",
//         width: "-webkit-fill-available",
//         backgroundImage: `url(/images/process-banner.jpg)`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         padding: 24,
//       }}
//     >
//       {/* <Col xxl={8} xl={8} lg={8} md={10} sm={11} xs={21}>
//           <div className="text-div">
//             <p className="white-bold-text" style={{ margin: 0 }}>
//               Ordering our services is easy
//             </p>
//             <p className="yellow-text">How will it WORK for you?</p>
//             <p className="white-bold-text" style={{ fontWeight: 600 }}>
//               Just 4 simple steps and you are good to go
//             </p>
//             <div>
//               <p className="mb-2">Place Your Order</p>
//               <p className="mb-2">Get Design Concepts</p>
//               <p className="mb-2">Revisions</p>
//               <p className="mb-2">Receive Final Deliverable</p>
//             </div>
//           </div>
//         </Col>
//         <Col xxl={8} xl={8} lg={8} md={10} sm={11} xs={16} className="col-class">
//           <img
//             style={{ width: "100%" }}
//             alt="background"
//             src="/images/background/banner2.png"
//           />
//         </Col> */}
//     </Row>
//   );
// };

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        // title: "Mobile, web application process",
        title: "About Our Company | eForte Solutions Inc",
        description:
          // "Design, Prototype, and Documentation covering all the aspects of the project.",
          "As a leading Software and IT Staff Augmentation provider we are dedicated to building – and keeping – our customers’ trust. We keep innovation, intelligence and business value High.",
        keywords: "Mobile, web application process",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
