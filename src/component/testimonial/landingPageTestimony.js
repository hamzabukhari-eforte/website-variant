import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import {
  comma,
  anonymousClientReviewImage,
  clientReviewImage1,
  clientReviewImage2,
  clientReviewImage3,
  clientReviewImage4,
  clientReviewImage5,
  clientReviewImage6,
} from "../../../images";
import { Fade, Zoom } from "react-awesome-reveal";

const StyledClientReviewDiv = styled.div`
.testimonials{
	margin:10px auto 10px;
	display:grid;
	grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
	grid-gap:20px;
}
.testimonials .card{
	position: relative;
	width: 350px;
  min-height: 450px;
	margin: 0 auto;
	background: #fff;
	padding: 20px;
	box-sizing: border-box;
	text-align: center;
	box-shadow: 0 10px 40px rgba(0,0,0,.5);
	overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: context-menu;

    .comma{
      background-image: url(${comma});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      height: 60px;
      width: 60px;
      position: absolute;
      top: 20px;
      left: 20px;
      opacity: 0.6;
    }

    .intverted-comma{
      background-image: url(${comma});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      height: 60px;
      width: 60px;
      position: absolute;
      transform: rotate(180deg);
      right: 20px;
      opacity: 0.6;
    }
}
.testimonials .card .layer{
	position: absolute;
	top: calc(100% - 3px);
	width:100%;
	height:100%;
	left:0;
	// background:linear-gradient(#03a9f4, #e81dd3);
  background-color: #ec3a68;
	z-index:1;
	transition:0.5s;
}
.testimonials .card:hover .layer{
	top:0;
}
.testimonials .card .content{
	position:relative;
	z-index:2;
}
.testimonials .card .content p{
	font-size:16px;
  font-style: italic;
	color: rgb(69, 80, 98);
  transition: 0.3s ease;
}
.testimonials .card .content .image{
	width:100px;
	height:100px;
	margin: 40px auto 0 auto;
	border-radius:50%;
	overflow:hidden;
	box-shadow: 0 10px 20px rgba{0,0,0, .2};
  img{
    width: 100%;
  }
}
.testimonials .card .content .details h2{
	font-size:15px;
	color: rgb(69, 80, 98);
  margin-top: 20px;
}

.testimonials .card:hover .content .details h2{
	color: #fff;
}

.testimonials .card:hover .content p{
	color: #fff;
  transition: 0.3s ease;
}

.testimonials .card .content .details h2 span{
	color:#03a9f4;
	font-size:12px;
	transtion:0.5s;
}
.testimonials .card:hover .content .details h2 span{
	color:#fff;
}
`;

const landingPage2TestimonialData = [
  {
    _id: "dsfhsjfhjksdhf234234",
    img: `${clientReviewImage1}`,
    para: "From the outset I found eForte to be very professional in their approach from estimate stage through delivery. The Krank project was very complex and eForte team handled it with gusto and enthusiasm throughout.",
    name: "Mark Turner",
    company: "CEO & Founder - krank.com",
  },
  {
    _id: "dsfhsjfhjksdhf2342433",
    img: `${clientReviewImage2}`,
    para: "Our idea of the product matured over time and eForte worked with us tirelessly for that purpose. They truly proved to be a tremendous support for our venture in terms of technology, business ethics and domain knowledge.",
    name: "Kamran Chaudary",
    company: "CEO - Instappdeals",
  },
  {
    _id: "dsfhsjfhjksdhf234233",
    img: `${clientReviewImage3}`,
    para: "Underpinning our dealings has always been a strong customer service attitude exhibited by eForte team including an undoubted commitment by them to solve any problems or issues raised by us with the delivered product.",
    name: "Chris Morton",
    company: "Owner - investmentmarkets.com.au",
  },
  {
    _id: "dsfhsjfhjksdhf234233",
    img: `${clientReviewImage4}`,
    para: "It was a difficult idea that needed in-depth understanding of project management, business planning, and finance. This software didn't previously exist, making it even more difficult to develop. eForte handled it very professionally and intelligently. They took the project in their care and with little input from our side they were able to amaze us with the solutions, modules and feature sets they developed.",
    name: "Zeta Ceti",
    company: "CEO GRC - greenrushconsulting.com",
  },
  {
    _id: "dsfhsjfhjksdhf234234",
    img: `${clientReviewImage5}`,
    para: "eForte team has been an important part of our translation from math to end-user and ensuring that we make our products as intuitive as possible. At the same time their experience and professionalism have contributed to improving our own development and time-to-market.",
    name: "Raymond Rienks",
    company: "Product Owner @ stratex.nl",
  },
  {
    _id: "dsfhsjfhjksdhf2342433",
    img: `${clientReviewImage6}`,
    para: "eForte worked through the delivery of the project with utmost professionalism, transparency and great technical knowledge. Their effective documentation processes and client communications kept us abreast of our project during the life cycle of the development.",
    name: "Sabur Man",
    company: "Founder - stninc.com",
  },
];

const LandingPageTestimonial = (props) => {
  return (
    <StyledClientReviewDiv>
      <Row>
        {landingPage2TestimonialData.map((data) => (
          <div class="testimonials">
            <div className="card">
              <div className="comma"></div>
              <div className="intverted-comma"></div>
              <div className="layer"></div>
              <div className="content">
                <Fade triggerOnce direction="up" cascade damping={0.2}>
                  <p>{data.para}</p>
                  <div className="image">
                    <img src={data.img} alt="img" />
                  </div>
                  <div className="details">
                    <h2>
                      {data.name} <br />
                      <span>{data.company}</span>
                    </h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </StyledClientReviewDiv>
  );
};

export default LandingPageTestimonial;
