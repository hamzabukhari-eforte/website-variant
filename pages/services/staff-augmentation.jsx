import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import CaseStudies from '../../src/component/carousel/CaseStudies'
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
const StaffAugmentation = dynamic(() => import("../../src/component/webDevelopment/StaffAugmentation"));
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
          <HeroSection typeWriterContent="Your Gateway To A Skilled Workforce" 
          subTitleContent={<div>Accelerate your software development at a significant saving<br/>Without compromising on quality.</div>} 
          height={"100vh"} 
          type="image" 
          background={"/images/staff_augmentation/banner.jpg"}  />
        </LazyLoad>
        <Benifits
          projectNumber="250+"
          projectName="App & Web Projects"
          projectName2="Custom Web Designs"
        />
        <StaffAugmentation />
        <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
          <Heading
            title={
              <>
                Empowering positive change, 
                <br />
                One client at a time.
                <br/>
                Experience the best, because you deserve the best.
              </>
            }
          />
          <p style={{ width: "80%", margin: "auto" }} className="text-md-center text-center">
          Explore our success stories: delivering elegant solutions to complex challenges.
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
        // title: "Staff Augmentation services | eForte",
        title: "Top Rated Software Outsourcing & Staff Augmentation services",
        description:
          // "Need top remote staff? eForte's remote staff deliver guaranteed success. Hire seamlessly, scale faster.",
          "Top-rated staff augmentation services for startups and SMEs. Seamlessly integrate technical resources or fully outsource projects with eForte.",
        keywords: "Staff Augmentation services | eForte",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
