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
const ARVRSolution = dynamic(() =>
  import("../../src/component/webDevelopment/AR_VR_Solutions")
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
            typeWriterContent="Leading the Way in Customized AR/VR Solutions"
            subTitleContent={
              <div>
                Empowering businesses to unlock the full potential of AR/VR technology,
                <br />
                providing customized solutions that transform the way they <br />
                operate and drive long-term success.
              </div>
            }
            height={"100vh"}
            type="image"
            background={"/images/ar_vr/banner.jpg"}
          />
        </LazyLoad>
        <Benifits
          projectNumber="250+"
          projectName="App & Web Projects"
          projectName2="Custom Web Designs"
        />
        <ARVRSolution />
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
        // title: "End-to-end AR/VR Services | eForte",
        title: "Comprehensive AR/VR Solutions | Augmented & Virtual Reality Services | eForte",
        description:
          // "Our premium AR/VR services help you pioneer immersive experiences that set you apart.",
          "Comprehensive AR/VR solutions. Immersive development expertise for efficient transitions with eForte's AR/VR services",
        keywords: "End-to-end AR/VR Services | eForte",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
