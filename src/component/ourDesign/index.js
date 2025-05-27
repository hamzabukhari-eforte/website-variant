import { useEffect, useState } from "react";
import styled from "styled-components";
import DesignPreviewCards from "../cards/designPreviewCard";
import PreviewCard from "../cards/previewCard";
import { Row, Col, Modal } from "antd";
import { PrimaryButton } from "../buttons";
import Heading from "../headings";
import MultiSwitchWrapper from "../inputs/multiSwitchWrapper";
import Router from "next/router";
import { JackInTheBox, Bounce, Slide, Fade, Zoom } from "react-awesome-reveal";
import { SwipeButton } from "../buttons";
import LazyLoad from "react-lazyload";

const options = [
  { label: "All", value: "all" },
  { label: "Mobile apps", value: "ecommerce" },
  { label: "Web apps", value: "web" },
  { label: "Ecommerce", value: "ecommerce" },
  // { label: "Logo", value: "logo" },
  // { label: "Brochure", value: "brochure" },
  // { label: "Stationery", value: "stationery" },
  // { label: "Promo Items", value: "promo" },
];

const designItems = [
  { label: "All", value: "/images/logo_design/all.jpg" },
  { label: "Recent Logos", value: "/images/logo_design/all.jpg" },
  { label: "Animal", value: "/images/logo_design/Animal.jpg" },
  { label: "Automotive", value: "/images/logo_design/Automotive.jpg" },
  {
    label: "Business and Consulting",
    value: "/images/logo_design/Business_and_Consulting.jpg",
  },
  {
    label: "Charity and Non-Profit",
    value: "/images/logo_design/Charity_and_Non-Profit.jpg",
  },
  { label: "Church", value: "/images/logo_design/Church.jpg" },
  { label: "Cleaning Services", value: "/images/logo_design/Cleaning_Services.jpg" },
  {
    label: "Computer and Networking",
    value: "/images/logo_design/Computer_and_Networking.jpg",
  },
  { label: "Construction", value: "/images/logo_design/Construction.jpg" },
  { label: "Cosmetics & Jewelry", value: "/images/logo_design/Cosmetics_&_Jewelry.jpg" },
  {
    label: "Decoration & Photography",
    value: "/images/logo_design/Decoration_&_Photography.jpg",
  },
  { label: "Doctor & Physician", value: "/images/logo_design/Doctor_&_Physician.jpg" },
  {
    label: "Education and Training",
    value: "/images/logo_design/Education_and_Training.jpg",
  },
  { label: "Engineering", value: "/images/logo_design/Engineering.jpg" },
  {
    label: "Entertainment and Media",
    value: "/images/logo_design/Entertainment_and_Media.jpg",
  },
  { label: "Events", value: "/images/logo_design/Events.jpg" },
  { label: "Fashion and Apparel", value: "/images/logo_design/Fashion_and_Apparel.jpg" },
  { label: "Finance", value: "/images/logo_design/Finance.png" },
  { label: "Food and Beverages", value: "/images/logo_design/Food_and_Beverages.jpg" },
  { label: "Furniture", value: "/images/logo_design/Furniture.jpg" },
  { label: "Games and Toys", value: "/images/logo_design/Games_and_Toys.jpg" },
  {
    label: "Government and Military",
    value: "/images/logo_design/Government_and_Military.jpg",
  },
  { label: "HealthCare", value: "/images/logo_design/HealthCare.jpg" },
  { label: "Health and Fitness", value: "/images/logo_design/Health_and_Fitness.jpg" },
  { label: "Industrial", value: "/images/logo_design/Industrial.jpg" },
  {
    label: "Information Technology",
    value: "/images/logo_design/Information_Technology.jpg",
  },
  { label: "Insurance", value: "/images/logo_design/Insurance.jpg" },
  { label: "Landscape", value: "/images/logo_design/Landscape.jpg" },
  { label: "Legal", value: "/images/logo_design/Legal.jpg" },
  { label: "Marketing and PR", value: "/images/logo_design/Marketing_and_PR.jpg" },
  { label: "Matrimonial", value: "/images/logo_design/Matrimonial.jpg" },
  { label: "Physical Training", value: "/images/logo_design/Physical_Training.jpg" },
  { label: "Real Estate", value: "/images/logo_design/Real_Estate.jpg" },
  { label: "Recruitment", value: "/images/logo_design/Recruitment.jpg" },
  {
    label: "Restaurants and Cafes",
    value: "/images/logo_design/Restaurants_and_cafes.jpg",
  },
  { label: "Retail and Wholesale", value: "/images/logo_design/Retail_&_Wholesale.jpg" },
  { label: "Services", value: "/images/logo_design/Services.jpg" },
  { label: "SkinCare", value: "/images/logo_design/SkinCare.jpg" },
  { label: "Spa and Saloon", value: "/images/logo_design/Spa_and_Saloon.jpg" },
  {
    label: "Sports and Recreation",
    value: "/images/logo_design/Sports_&_Recreation.jpg",
  },
  { label: "Technology", value: "/images/logo_design/Technology.jpg" },
  { label: "Tools and Equipment", value: "/images/logo_design/Tools_and_Equipment.jpg" },
  { label: "Transportation", value: "/images/logo_design/Transportation.jpg" },
];

const StyledSection = styled.section`
  text-align: center;
  margin-top: 64px;

  .section-heading {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 24px;
    line-height: 1.1em;
    font-size: 36px;
  }

  .sub-heading {
    font-size: 16px;
  }

  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-seprator {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    border-right: 1px solid grey;
    margin: 8px 0px;
    :last-child {
      display: none !important;
    }
  }

  .product-names {
    transition: all 0.4s;
    line-height: 38px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 2px 8px;
    margin: 2px 8px;

    :hover {
      color: #050607 !important;
      background-color: #f3f3f4 !important;
    }
  }

  .load-more-btn {
    font-size: 16px;
    // padding: 14px 60px;
  }

  .sprite-image {
    background-repeat: no-repeat;
    display: block;
    width: 298px;
    height: 233px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.08);
    margin: 4px;
    transition: 0.2s;
    &:hover {
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
    }
  }

  @media only screen and (max-width: 992px) {
    .load-more-btn {
      font-size: 12px;
      // padding: 8px 32px;
    }
  }

  @media (max-width: 767px) {
    .section-heading {
      text-align: left;
      font-size: 18px;
    }
  }
`;

const OurDesigns = (props) => {
  const { type, setPortfolioType } = props;
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState([0, 1, 2, 3, 4, 5]);
  const [logoItemsIndex, setLogoItemsIndex] = useState(0);
  const [modalState, setModalState] = useState({ visible: false, imgSrc: "" });

  const loadMore = () => {
    let loadArray = page;
    for (let i = 1; i <= 3; i++) {
      loadArray.push(loadArray[loadArray.length - 1] + 1);
    }
    setPage([...loadArray]);
  };

  useEffect(() => {
    setPage([0, 1, 2, 3, 4, 5]);
  }, [type]);

  const closeModal = () => {
    setModalState({ ...modalState, visible: false });
  };

  const showModal = (imgSrc) => {
    setModalState({ visible: true, imgSrc });
  };

  const portfolioTypeChange = (type) => {
    setPortfolioType(type);
  };

  return (
    <>
      <Modal
        visible={modalState.visible}
        onCancel={closeModal}
        width="max-content"
        footer={null}
      >
        <img alt="img" src={modalState.imgSrc} className="img-fluid" />
      </Modal>

      <StyledSection className="container-fluid">
        <Fade direction="up" duration={1300} triggerOnce cascade damping={0.2}>
          <Heading
            title={
              <span>
                We take every client as an opportunity to change the world for the better.
                <br /> You are the best and you get the BEST !
              </span>
            }
          />

          <h2 className="sub-heading my-4">
            Have a look at some of our works which are testament of our happy clientele.
          </h2>
        </Fade>

        {Router.pathname === "/portfolio" ? (
          <div className="container mt-5 mb-3">
            <MultiSwitchWrapper options={options} onChange={portfolioTypeChange} />
          </div>
        ) : null}

        <div className="products-wrapper col-xl-10 col-lg-10 col-md-10 col-sm-11 col-12 col-12 p-0 mx-auto">
          {/**
           * Options for logo items
           */}
          {type === "logo" &&
            designItems.map((item, index) => (
              <>
                <h5
                  key={index}
                  className="product-names"
                  style={{
                    color: category === item.label ? "#ed3c69" : "#898989",
                    backgroundColor: category === item.label ? "#F3F3F4" : "#fff",
                    borderRadius: category === item.label ? 6 : 6,
                    fontWeight: category === item.label ? 700 : 500,
                  }}
                  onClick={() => {
                    setCategory(item.label);
                    setLogoItemsIndex(index);
                    setPage([0, 1, 2, 3, 4, 5]);
                  }}
                >
                  {item.label}
                </h5>
                <div className="right-seprator" />
              </>
            ))}
        </div>

        <div className="design-cards-wrapper col-xl-10 col-lg-10 col-md-10 col-sm-11 col-12 col-12 p-0 mx-auto my-5">
          {
            /**
             * Portfolio items for web
             */
            type === "web" && (
              <Row align="middle" justify="start" gutter={[24, 24]}>
                {page.map((item) => (
                  <Col key={item} xl={8} lg={8} md={8} sm={12} xs={24}>
                    <Zoom cascade duration={200}>
                      <LazyLoad>
                        <PreviewCard image={`/images/web_design/${item + 1}.jpg`} />
                      </LazyLoad>
                    </Zoom>
                  </Col>
                ))}
              </Row>
            )
          }

          {
            /**
             * Portfolio items for E-COMMERCE
             */
            type === "ecommerce" && (
              <Row align="middle" justify="start" gutter={[24, 24]}>
                {page.map((item) => {
                  return (
                    <Col key={item} xl={8} lg={8} md={8} sm={12} xs={24}>
                      <Zoom cascade duration={200}>
                        <LazyLoad>
                          <PreviewCard
                            image={`/images/ecomerce_website_development/ecommerce_website_development_${
                              item + 1
                            }.png`}
                          />
                        </LazyLoad>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            /**
             * Portfolio items for logo
             */
            type === "logo" && (
              <Row justify="center" align="middle" gutter={[32, 32]}>
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 298 + "px";
                  const left = (item % 4) * 233 + "px";
                  return (
                    <Col>
                      <Zoom cascade duration={200}>
                        <LazyLoad>
                          <div
                            className="sprite-image"
                            style={{
                              backgroundImage: `url(${designItems[logoItemsIndex].value})`,
                              backgroundPosition: `-${top} -${left}`,
                            }}
                          />
                        </LazyLoad>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            /**
             * Portfolio items for brouchure
             */
            type === "brochure" && (
              <Row justify="center" align="middle" gutter={[32, 32]}>
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 234 + "px";
                  const left = (item % 4) * 298.5 + "px";
                  return (
                    <Col key={item}>
                      <Zoom cascade duration={200}>
                        <LazyLoad>
                          <div
                            className="sprite-image"
                            style={{
                              backgroundImage: `url(/images/brochuer/spritesheet.jpg)`,
                              backgroundPosition: `-${left} -${top}`,
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              showModal(`/images/brochuer/popups/popup_${item + 1}.jpg`)
                            }
                          />
                        </LazyLoad>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            /**
             * Portfolio items for stationery
             */
            type === "stationery" && (
              <Row justify="center" align="middle" gutter={[32, 32]}>
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 234 + "px";
                  const left = (item % 4) * 299.2 + "px";
                  return (
                    <Col key={item}>
                      <Zoom cascade duration={200}>
                        <LazyLoad>
                          <div
                            className="sprite-image"
                            style={{
                              backgroundImage: `url(/images/stationery_mockups/spritesheet.jpg)`,
                              // backgroundImage: `url(/images/stationery/spritesheet.jpg)`,
                              backgroundPosition: `-${left} -${top}`,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              showModal(
                                `/images/stationery_mockups/popups/stationery_mockups_${
                                  item + 1
                                }.jpg`
                              );
                            }}
                          />
                        </LazyLoad>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            /**
             * Portfolio items for promo items
             */
            type === "promo" && (
              <Row justify="center" align="middle" gutter={[32, 32]}>
                {page.map((item) => {
                  const num = Math.floor(item / 3);
                  const top = num * 298 + "px";
                  const left = (item % 3) * 233 + "px";
                  return (
                    <Col>
                      <Zoom cascade duration={200}>
                        <LazyLoad>
                          <div
                            className="sprite-image"
                            style={{
                              backgroundImage: `url(/images/promo_items/spritesheet.jpg)`,
                              backgroundPosition: `-${top} -${left}`,
                            }}
                          />
                        </LazyLoad>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            /**
             * All Items
             */
            type === "all" && (
              <Row justify="center" align="middle" gutter={[32, 32]}>
                {page.map((item) => {
                  const { left, top, type, imageSrc, modalSrc } = allItems[item];

                  if (type === 1 || type === 3) {
                    return (
                      <Col>
                        <Zoom cascade duration={200}>
                          <LazyLoad>
                            <div
                              className="sprite-image"
                              style={{
                                backgroundImage: `url(${imageSrc})`,
                                backgroundPosition: `-${top} -${left}`,
                                cursor: type === 3 ? "pointer" : "auto",
                              }}
                              onClick={() => {
                                if (type === 3) {
                                  showModal(modalSrc);
                                }
                              }}
                            />
                          </LazyLoad>
                        </Zoom>
                      </Col>
                    );
                  }

                  if (type === 2) {
                    return (
                      <Col key={item} xl={8} lg={8} md={8} sm={12} xs={24}>
                        <Zoom cascade duration={200}>
                          <LazyLoad>
                            <PreviewCard image={imageSrc} />
                          </LazyLoad>
                        </Zoom>
                      </Col>
                    );
                  }
                })}
              </Row>
            )
          }

          {page.length <
          (type == "stationery" || type == "promo" || type == "ecommerce"
            ? 12
            : type === "all"
            ? 13
            : 15) ? (
            <SwipeButton className="load-more-btn mt-5" onClick={loadMore}>
              Load More &nbsp; ↓
            </SwipeButton>
          ) : null}
        </div>
      </StyledSection>
    </>
  );
};

OurDesigns.defaultProps = {
  type: "all",
  setPortfolioType: () => {},
};

export default OurDesigns;

const allItems = [
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Animal.jpg",
  //   left: "0px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "0px",
  //   top: "0px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_1.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/1.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_1.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "0px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "0px",
  //   top: "0px",
  //   modalSrc: "/images/brochuer/popups/popup_1.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Business_and_Consulting.jpg",
  //   left: "233px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "234px",
  //   top: "0px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_2.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/2.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_2.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "233px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "234px",
  //   top: "0px",
  //   modalSrc: "/images/brochuer/popups/popup_2.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Computer_and_Networking.jpg",
  //   left: "466px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "468px",
  //   top: "0px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_3.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/3.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_3.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "466px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "468px",
  //   top: "0px",
  //   modalSrc: "/images/brochuer/popups/popup_3.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Education_and_Training.jpg",
  //   left: "699px",
  //   top: "0px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "0px",
  //   top: "299.1px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_4.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/4.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_4.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "0px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "702px",
  //   top: "0px",
  //   modalSrc: "/images/brochuer/popups/popup_4.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Animal.jpg",
  //   left: "0px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "234px",
  //   top: "299.1px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_5.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/5.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_5.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "233px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "0px",
  //   top: "298.5px",
  //   modalSrc: "/images/brochuer/popups/popup_5.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Business_and_Consulting.jpg",
  //   left: "233px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "468px",
  //   top: "299.1px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_6.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/6.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_6.png",
  },
  // {
  //   type: 1,
  //   imageSrc: "/images/promo_items/spritesheet.jpg",
  //   left: "466px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/brochuer/spritesheet.jpg",
  //   left: "234px",
  //   top: "298.5px",
  //   modalSrc: "/images/brochuer/popups/popup_6.jpg",
  // },
  // {
  //   type: 1,
  //   imageSrc: "/images/logo_design/Computer_and_Networking.jpg",
  //   left: "466px",
  //   top: "298px",
  // },
  // {
  //   type: 3,
  //   imageSrc: "/images/stationery_mockups/spritesheet.jpg",
  //   left: "0px",
  //   top: "598.2px",
  //   modalSrc: "/images/stationery_mockups/popups/stationery_mockups_7.jpg",
  // },
  {
    type: 2,
    imageSrc: "/images/web_design/7.jpg",
  },
  {
    type: 2,
    imageSrc: "/images/ecomerce_website_development/ecommerce_website_development_7.png",
  },
  {
    type: 2,
    imageSrc: "/images/web_design/8.jpg",
  },
];
