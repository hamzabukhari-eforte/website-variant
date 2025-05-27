import styled from "styled-components";
import Heading from "../headings";
import { Row, Col } from "antd";

const StyledSection = styled.section`
  padding: 42px 5%;
  .brand-images-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .brand-image {
    padding: 16px 24px;
  }

  .why-choose-us-card {
    text-align: center;
    p {
      line-height: 2;
    }
  }
`;

const cardData = [
  {
    image: "/images/why_choose_us_1.png",
    title: "Limitless Designs / Unlimited Revisions",
    description:
      "We believe in delivering you quality that is par excellence. With us, you’re entitled to unlimited designs and revisions.",
  },
  {
    image: "/images/why_choose_us_2.png",
    title: "Quickest Deliveries",
    description:
      "Our turnarounds are prompt, quality-driven, and exceptionally professional above all. Got feedbacks? We’ll fix it right away.",
  },
  {
    image: "/images/why_choose_us_3.png",
    title: "Transparent Charges",
    description:
      "Transparency is something that you’ll witness with us from start to finish. Whatever has been quoted to you is EXACTLY what you’ll pay.",
  },
  {
    image: "/images/why_choose_us_4.png",
    title: "24/7 Support",
    description:
      "When you get aboard, we assign a project manager that helps you overlook every aspect of your project, serving you round-the-clock.",
  },
  {
    image: "/images/why_choose_us_5.png",
    title: "Team Work",
    description: `We are the picturesque of “Team work makes the dream work”. Together with our designers, project managers, and you, we help you achieve excellence.`,
  },
  {
    image: "/images/why_choose_us_6.png",
    title: "Complete Authority",
    description:
      "The designs you’ll finalize are handed over to you in every possible format. Not only are YOU entitled to it, but you even complete authority over it.",
  },
];

const WhyChooseLogilogos = () => {
  return (
    <StyledSection className="">
      <Heading>Why Choose Us?</Heading>
      <Row
        className="container mx-auto text-center"
        gutter={[48, 24]}
        justify="space-between"
      >
        {cardData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            className="why-choose-us-card"
          >
            <img src={item.image} alt={item.image} className="mb-4" width={60} />
            <h5>
              <b>{item.title}</b>
            </h5>
            <p>{item.description}</p>
          </Col>
        ))}
      </Row>
    </StyledSection>
  );
};

export default WhyChooseLogilogos;
