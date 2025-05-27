import React from "react";
import styled from "styled-components";
import Heading from "../headings";
import Slider from "react-slick";
import {
  awardsAndRecognition1,
  awardsAndRecognition2,
  awardsAndRecognition3,
  awardsAndRecognition4,
  awardsAndRecognition5,
  awardsAndRecognition6,
  awardsAndRecognition7,
  awardsAndRecognition8,
  topRated1,
  topRated2,
  topRated3,
  topRated4,
  topRated5,
  topRated6,
  topRated7,
  topRated8,
  topRated9,
} from "../../../images";
import { Fade } from "react-awesome-reveal";

const StyledDiv = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  padding: 3% 10%;
  text-align: center;
  .col {
    height: 200px;
    padding: 0px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 150px;
      width: 150px;
    }
  }

  .slider-div {
    min-height: 200px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    img {
      margin: auto;
      max-height: 180px;
      max-width: 175px;
    }
    .text-height {
      height: 220px;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 991px) {
    .col {
      height: 150px;
      img {
        height: 100px;
      }
    }
  }

  @media (max-width: 767px) {
    .col {
      height: 100px;
      img {
        height: 50px;
      }
    }
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`;

const Carousel = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    pauseOnHover: false,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const awardsAndRecognitionArray = [
    {
      image: awardsAndRecognition1,
      para: `eForte was amongst the few companies to be awarded with the Best Logo Design Award 2019-2020 in the category of mascot logos. Our excellent designers proved their excellence in design industry.`,
    },
    {
      image: awardsAndRecognition2,
      para: `In 2019-2020, Jonathan Carson was awarded the best designer award in the category of illustrative logos; a complex category of logos where nothing but creativity survives.`,
    },
    {
      image: awardsAndRecognition3,
      para: `Designers society awards recognizes eForte for successfully completing 8 years in this industry with 80% customer satisfaction.`,
    },
    {
      image: awardsAndRecognition4,
      para: `eForte was awarded by International Logo Branding Awards for consistently delivery value to customers with 80% satisfaction ratio.`,
    },
    {
      image: awardsAndRecognition5,
      para: `Our certified developers are equipped with the best skills to launch your busines online with on of its kind ecommerce store for you.`,
    },
    {
      image: awardsAndRecognition6,
      para: `eForte was awarded for best and one of its kind HTML 5 web design for the year 2018-2019. Our designers depicted creativity in the work created by them.`,
    },
    {
      image: awardsAndRecognition7,
      para: `The association of software awarded eForte for in the category of web development and software integration in the year 2019-2020 for outstanding work.`,
    },
    {
      image: awardsAndRecognition8,
      para: `Honoured an recongized in the industry, our designers have the best industry experience, skills and technical competencies to overwhelm our clients with their work.`,
    },
  ];

  const topRatedProfessionalArray = [
    {
      image: topRated1,
    },
    {
      image: topRated2,
    },
    {
      image: topRated3,
    },
    {
      image: topRated4,
    },
    {
      image: topRated5,
    },
    {
      image: topRated6,
    },
    {
      image: topRated7,
    },
    {
      image: topRated8,
    },
    {
      image: topRated9,
    },
  ];

  return (
    <StyledDiv backgroundColor={props.backgroundColor}>
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        <Heading> 
          <p>Get top-rated and Industry recognized <br /> professionals for your project!</p>
        </Heading>
      </Fade>
      <Slider autoplay={true} {...settings}>
        {props.type == "awardsAndRecognition"
          ? awardsAndRecognitionArray.map((data, index) => {
              return (
                <div className="slider-div">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 4,
                      padding: 16,
                      margin: "0px 4px 0px 4px",
                      minHeight: 350,
                    }}
                  >
                    <img src={data.image} alt="img" />
                    <div style={{ display: "flex" }} className="text-height">
                      <p>{data.para}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : topRatedProfessionalArray.map((data, index) => {
              return (
                <div className="slider-div">
                  <img src={data.image} alt="img" />
                </div>
              );
            })}
      </Slider>
    </StyledDiv>
  );
};

export default Carousel;
