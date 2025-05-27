import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "../headings";
import { Row, Col, message } from "antd";
import SwitchWrapper from "../inputs/switchWrapper";
import { useQuery } from "react-apollo";
import { Query } from "../../apollo/queries";
import { errorHandler } from "../../utils/errorHandler";
import { storeAllPackage } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { storeLogoDesignOrderData } from "../../redux/actions";
import { ModalConstant } from "../../redux/constants";
import Router from "next/router";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .styled-scrollbar {
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ed3c69;
      border-radius: 10px;
    }
  }

  p {
    text-align: center;
    padding: 0px 5%;
  }

  .solution-option h5 {
    transition: 0.3s;
    color: #808080;
    padding: 8px 24px;
    border-bottom: 2px solid #dcdcdc;
    position: relative;
    cursor: pointer;
    margin-left: 8px;
    margin-right: 8px;
  }

  .solution-option:last-child h5:after {
    display: none;
  }

  .main-row {
    padding: 48px 5%;
    .card-div {
      width: 100%;
      height: 550px;
      border: 2px solid gray;
      border-radius: 6px;
      text-align: center;
      // padding: 24px 6px 16px 6px;
      transition: 0.3s ease;

      .features-p-tag {
        margin: 0;
        padding: 6px 0px;
        margin-right: 16px;
        margin-left: 16px;
        // border-top: 1px solid gray;
        border-bottom: 1px solid gray;

        :last-child {
          border-bottom: 0px;
        }
      }

      .order-now-button {
        padding: 16px 34px;
        border: 1px solid gray;
        border-radius: 6px;
        transition: 0.3s ease;
        color: #4c4a4a;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }

      p {
        color: #4c4a4a;
        font-weight: 500;
        font-size: 14px;
      }
      a {
        text-decoration: none;
      }

      h2 {
        font-weight: 700;
      }
      h1 {
        font-weight: bold;
        font-size: 48px;
      }
      h6 {
        font-size: 20px;
        color: #4c4a4a;
      }

      &:hover {
        transform: scale(1.1);
        transition: 0.3s ease;
        border: 2px solid #ed3c69;
        .order-now-button {
          transition: 0.3s ease;
          background-color: #ed3c69;
          color: #fff;
          border: 1px solid #ed3c69;
        }
        h1 {
          color: #ed3c69;
        }
        h2 {
          color: #ed3c69;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .solution-option h5 {
      font-size: 14px;
    }
  }
`;

const Packages = (props) => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { type } = props;
  const [solution, setSolution] = useState("webPackage");

  useEffect(() => {
    if (type === "logo") {
      setSolution("logoPackage");
    }
    if (type == "web") {
      setSolution("webPackage");
    }
  }, []);

  useQuery(Query.GET_ALL_PACKAGE, {
    onCompleted: (data) => {
      props.storeAllPackage({ allPackages: data.getAllPackages });
    },
    onError: (err) => {
      message.error(errorHandler(err));
    },
  });

  const setOrderType = (data) => {
    // packageType: 1,  bronze = 1, gold = 2, platium = 3
    // orderType: 1,  logo = 1, web = 2
    let packageType;
    if (data.packageType == "BRONZE") {
      packageType = 1;
    }
    if (data.packageType == "PLATINUM") {
      packageType = 2;
    }
    if (data.packageType == "GOLD") {
      packageType = 3;
    }
    const orderType =
      data.orderType === "WEB PACKAGE"
        ? 2 // For WEB
        : data.orderType === "E-COMMERCE PACKAGE"
        ? 3 // For E-COMMERCE
        : 1; // For LOGO
    dispatch(
      storeLogoDesignOrderData({
        packageType,
        orderType,
        amount: data.price,
        packageName: data.packageType,
        orderName: data.orderType,
        packageId: data._id,
        slug: data.slug,
      })
    );
  };

  return (
    <>
      <StyledDiv>
        <Heading
          title={
            <>Our packages are cost-effective and suit every business size and needs</>
          }
        />
        <p style={{ marginBottom: 28 }}>
          It doesn’t matter if you’re running an SME or an enterprise, our service
          packages are certain to suit your budget and needs.
        </p>

        {type === "all" ? (
          <SwitchWrapper solution={solution} setSolution={setSolution} />
        ) : null}

        <Row className="main-row" gutter={[60, 40]}>
          {props[solution]?.map((data, index) => (
            <>
              <Col key={data._id} xxl={8} xl={8} lg={8} md={12} sm={24} xs={24} span={8}>
                <div
                  style={{
                    padding: index == 1 ? "0px 0px 16px 0px" : "24px 6px 16px 6px",
                  }}
                  className="card-div"
                >
                  {index == 1 ? (
                    <p
                      style={{
                        marginBottom: 6,
                        backgroundColor: "#005aff26",
                        color: "#ed3c69",
                        borderBottomRightRadius: 14,
                        borderBottomLeftRadius: 14,
                        marginLeft: "25%",
                        marginRight: "25%",
                      }}
                    >
                      Recommended
                    </p>
                  ) : (
                    <> </>
                  )}
                  <h2
                    style={{
                      color: index == 1 ? "#ed3c69" : "",
                      marginTop: index == 1 ? 8 : 0,
                    }}
                  >
                    {data.packageType}
                  </h2>
                  <h6>{data.orderType}</h6>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    <h1
                      style={{
                        borderRight: "1px solid gray",
                        marginRight: 16,
                        paddingRight: 16,
                        color: index == 1 ? "#ed3c69" : "",
                      }}
                    >
                      <span style={{ fontSize: 32, float: "left", marginTop: 6 }}>$</span>
                      {data.price}
                    </h1>
                    <h6>
                      <del>${data.originalPrice}</del>
                      <br />
                      {data.discount}% off!
                    </h6>
                  </div>
                  <div
                    className="styled-scrollbar"
                    style={{
                      minHeight: 220,
                      maxHeight: 220,
                      overflowY: "auto",
                    }}
                  >
                    {data.description?.map((feature, index) => (
                      <p key={index} className="features-p-tag">
                        {feature}
                      </p>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 16,
                    }}
                  >
                    {/* <Link
                  href={
                    solution == "webPackage"
                      ? "/login_web/custom-package"
                      : "/login_logo/custom-package"
                  }
                >
                  <a
                    onClick={() => {
                      setOrderType(data), setModal(true);
                    }}
                  > */}
                    <div
                      onClick={() => {
                        setOrderType(data);
                        if (isUserLoggedIn) {
                          solution == "logoPackage"
                            ? Router.push(`/login_logo/${data.slug}`)
                            : Router.push(`/login_web/${data.slug}`);
                        } else {
                          dispatch({
                            type: ModalConstant.OPEN_SIGN_UP_MODAL_ORDER_CREATE,
                          });
                        }
                      }}
                      className="order-now-button"
                    >
                      ORDER NOW
                    </div>
                    {/* </a>
                </Link> */}
                  </div>
                  <p style={{ marginTop: 12 }}>
                    *Rush Delivery = ${data.rushDeliveryCharges}
                  </p>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </StyledDiv>
    </>
  );
};

Packages.defaultProps = {
  type: "all",
};

const mapState = (state) => ({
  webPackage: state.packages.webPackage,
  logoPackage: state.packages.logoPackage,
  ecommercePackage: state.packages.ecommercePackage,
});

const mapDispatch = (dispatch) => ({
  storeAllPackage: (payload) => dispatch(storeAllPackage(payload)),
});

export default connect(mapState, mapDispatch)(Packages);
