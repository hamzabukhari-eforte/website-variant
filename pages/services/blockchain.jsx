import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import CaseStudies from "../../src/component/carousel/CaseStudies";
import { Fade } from "react-awesome-reveal";
import Heading from "../../src/component/headings";
const HeroSection = dynamic(() => import("../../src/component/heroSection"), {
  loading: () => (
    <div style={{ height: "100vh", background: "rgba(0, 0, 0, 0.55)" }}></div>
  ),
});
const Faq = dynamic(() => import("../../src/component/faq"));
const ContactInfo = dynamic(() => import("../../src/component/contactInfo"));
const Process = dynamic(() => import("../../src/component/process"));
const TopRatingProfessionals = dynamic(() => import("../../src/component/carousel"));
const BlockchainSolution = dynamic(() =>
  import("../../src/component/webDevelopment/blockchainSolution")
);
const Benifits = dynamic(() => import("../../src/component/offers/benifits"));
const TestimonyWithRating = dynamic(() =>
  import("../../src/component/testimonial/logoTestimonial")
);
const AppForm = dynamic(() => import("../../src/component/forms/AppForm"));

const Home = () => {
  return (
    <>
      <div>
        <LazyLoad height={"100vh"} once>
          <HeroSection
            typeWriterContent="Innovating The Web Age With Web 3.0"
            subTitleContent={
              <div>
                Revolutionizing the web age with web 3.0 technology: <br /> Our software
                firm is at the forefront of innovation!
              </div>
            }
            height={"100vh"}
            type="image"
            background={"/images/web_solutions/ws_image_7.jpg"}
          />
        </LazyLoad>
        <Benifits
          projectNumber="250+"
          projectName="App & Web Projects"
          projectName2="Custom Web Designs"
        />
        <BlockchainSolution />
        <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
          <Heading
            title={
              <>
                Empowering positive change,
                <br />
                One client at a time.
                <br />
                Experience the best, because you deserve the best.
              </>
            }
          />
          <p
            style={{ width: "80%", margin: "auto" }}
            className="text-md-center text-left"
          >
            Explore our success stories: delivering elegant solutions to complex
            challenges.
          </p>
        </Fade>
        <CaseStudies />
        <TopRatingProfessionals
          backgroundColor="#f3f6fa"
          slidesToShow={4}
          slidesToScroll={1}
        />
        <Process size={32} />
        <ContactInfo backgroundColor="#f3f6fa" />
        <TestimonyWithRating />
        <br />
        <Faq />
        <AppForm backgroundColor="#f3f6fa" />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        // title: "Blockchain Development Company &amp; Consulting Services",
        title: "Blockchain Development Company & Consulting Services | eForte",
        description:
          // "eForte | Your Trusted Partner in Blockchain Exploration Development & Consulting",
          "Your trusted partner in blockchain development and consulting services. Explore Web 3.0 with eForte",
        keywords: "Blockchain Development Company &amp; Consulting Services",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
