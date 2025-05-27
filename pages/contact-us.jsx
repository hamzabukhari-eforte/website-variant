import { useEffect, useState } from "react";
import HeroSection from "../src/component/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { Row, Col, Form, message } from "antd";
import { InputWrapper, TextAreaWrapper } from "../src/component/inputs";
import { SwipeButton, BlueButtonWrapper } from "../src/component/buttons";
import SelectWrapper from "../src/component/inputs/selectWrapper";
// import PhoneInputWrapper from "../src/component/inputs/phoneInputWrapper";
import Heading from "../src/component/headings";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdPhoneAndroid } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { useMutation } from "react-apollo";
import { Mutation } from "../src/apollo/mutations";
import { fullNameFormatter } from "../src/helper/formatters";
import { useSelector } from "react-redux";
import PhoneInputWrapper from "../src/component/inputs/phoneInputWrapper";
import { Fade } from "react-awesome-reveal";

const StyledSection = styled.div`
  .map-section {
    padding: 5% 5%;
  }

  label {
    position: relative;
    top: 10px;
    z-index: 2;
    font-size: 12px;
    background-color: rgb(255, 255, 255);
    left: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding-left: 7px;
    padding-right: 7px;
    user-select: none;
    margin: 0px;
  }

  .usa-pakistan-div {
    height: 430px;
    .pakistan-div {
      float: right;
    }
    h4 {
      color: #2a2a2a;
      font-weight: 700;
    }
    a {
      color: #2a2a2a;
      font-weight: 600;
    }
    p {
      color: #2a2a2a;
      font-weight: 600;
    }
  }

  .behind-u {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 0;
    line-height: 0.5;
    left: -80px;
  }
  .behind-p {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 50px;
    line-height: 0.5;
    left: -80px;
  }
  .usa-div {
    position: absolute;
    z-index: 2;
  }
  .pakistan-div {
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .img-section {
    padding: 5%;
    text-align: center;
    img {
      width: 500px;
    }
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    width: -moz-available;
    height: 70vh;
    background-color: #232a38;
    img {
      width: 1000px;
    }
  }
  .support-heading {
    text-align: center;
    font-weight: bold;
    margin: 24px 0px 24px;
    line-height: 1.6em;
    font-size: 36px;
  }
  .highlight {
    color: #ed3c69;
  }

  @media (max-width: 991px) {
    .hero-section {
      img {
        width: 600px;
      }
    }
  }

  @media (max-width: 767px) {
    .hero-section {
      img {
        width: 450px;
      }
    }
    .support-heading {
      font-size: 24px;
    }
    .usa-pakistan-div {
      margin-top: 6%;
      h4 {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 550px) {
    .hero-section {
      img {
        width: 100%;
      }
    }
    .img-section {
      img {
        width: 350px;
      }
    }
  }

  @media (max-width: 450px) {
    .img-section {
      img {
        width: 275px;
      }
    }
  }
`;

const Contact = () => {
  const [form] = Form.useForm();
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneChecked, setPhoneChecked] = useState(false);
  const [phoneErrorBorderColor, setPhoneErrorBorderColor] = useState("1px solid #d1d1d1");
  const user = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [state, setState] = useState({
    name: user.isLoggedIn ? `${user.data.firstName} ${user.data.lastName}` : "",
    email: user.data.email,
    phone: user.data.phoneNo,
    projectType: "",
    message: "",
    phoneError: null,
  });

  useEffect(() => {
    form.setFieldsValue({
      Name: user.isLoggedIn ? `${user.data.firstName} ${user.data.lastName}` : "",
      Email: user.data.email,
    });
    setState({ ...state, phone: user.data.phoneNo });
  }, [user.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  // const checkPhone = () => {
  //   setPhoneChecked(true);
  //   if (state.phone && isValidPhoneNumber(state.phone)) {
  //     setPhoneError("");
  //     setPhoneErrorBorderColor("1px solid #d1d1d1");
  //   } else {
  //     setPhoneErrorBorderColor("1px solid #d1d1d1");
  //     setPhoneError("valid 'Phone Number' is required");
  //   }
  // };

  const [runContactUsMutation, { loading }] = useMutation(Mutation.CONTACT_US);

  const handleContactUs = async () => {
    // checkPhone();
    try {
      if (isValidPhoneNumber(state.phone)) {
        await runContactUsMutation({
          variables: {
            name: state.name,
            email: state.email,
            phone: state.phone,
            projectType: state.projectType,
            description: state.message,
          },
        });
        form.resetFields();
        setState({ ...state, phone: "" });
        message.success("Your project detail has been received");
      }
    } catch (err) {
      message.warning(err);
    }
  };

  return (
    <>
      {/* <HeroSection /> */}
      <StyledSection>
        <section className="hero-section">
          <img
            style={{ marginTop: "8%" }}
            alt="support-staff"
            src="/images/contact-us-banner.png"
          />
          <h1 style={{ fontSize: 24, color: "#fff" }} className="support-heading">
            Have an inquiry or some <span className="highlight">feedback for us?</span>{" "}
            <br /> Fill out the form below to contact our team.
          </h1>
        </section>

        <section className="map-section">
          <h1 style={{ marginBottom: 0 }} className="support-heading text-center">
            {`We're always ready to discuss your project needs,`}
            <br />
            <span className="highlight">Get in touch with us.</span>
            <p style={{ fontSize: 16, fontWeight: 400, margin: 0, marginBottom: -50 }}>
              Our project consultant will call you in the next 24 hours to discuss your
              project scope in detail.
            </p>
          </h1>
          <Form
            onFinish={handleContactUs}
            form={form}
            autoComplete="new-password"
            validateTrigger="onFinish"
            className="text-left col-xl-6 col-sm-8 col-12 mx-auto"
          >
            <Row gutter={[24]} style={{ margin: "64px 0 0 0" }}>
              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Name</label>
                <Form.Item
                  name="Name"
                  rules={[{ required: true, type: "string", max: 30 }]}
                >
                  <InputWrapper
                    name="name"
                    placeholder="Name"
                    maxLength={30}
                    autoComplete="new-password"
                    value={state.name}
                    onChange={handleChange}
                    onInput={fullNameFormatter}
                  />
                </Form.Item>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Email</label>
                <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                  <InputWrapper
                    name="email"
                    placeholder="Email"
                    autoComplete="new-password"
                    value={state.email}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Phone</label>
                <PhoneInputWrapper
                  name="phone"
                  autoComplete="new-password"
                  value={state.phone}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  error={state.phoneError}
                />
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Project Type</label>
                <Form.Item
                  name="Project Type"
                  rules={[{ required: true, type: "string" }]}
                >
                  <SelectWrapper
                    placeholder="Select project type"
                    options={[
                      {
                        label: "Staff Augmentation",
                        value: "Staff Augmentation",
                      },
                      {
                        label: "Mobile App Development",
                        value: "Mobile App Development",
                      },
                      { label: "Business Dashboard", value: "Business Dashboard" },
                      {
                        label: "Product Designing & Strategy",
                        value: "Product Designing & Strategy",
                      },
                      {
                        label: "Startup MVP & Prototyping",
                        value: "Startup MVP & Prototyping",
                      },
                      {
                        label: "Blockchain Development",
                        value: "Blockchain Development",
                      },
                    ]}
                    value={state.projectType}
                    onChange={(val) =>
                      setState((prev) => ({ ...prev, projectType: val }))
                    }
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <label>Description</label>
                <Form.Item
                  name="Message"
                  rules={[{ required: true, type: "string", max: 500 }]}
                >
                  <TextAreaWrapper
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={6}
                    style={{ resize: "none" }}
                    placeholder="Briefly explain your project"
                  />
                </Form.Item>
              </Col>

              <Col
                span={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BlueButtonWrapper
                  style={{ marginTop: 25 }}
                  backgroundColor="#ed3c69"
                  htmlType="submit"
                  loading={loading}
                  color="#ed3c69"
                  onClick={() => {
                    if (!isValidPhoneNumber(state.phone)) {
                      setState({ ...state, phoneError: "Invalid phone number" });
                    }
                  }}
                >
                  Send Message
                </BlueButtonWrapper>
              </Col>
            </Row>
          </Form>
        </section>
      </StyledSection>
    </>
  );
};

export default Contact;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Get In Touch With eForte",
        description: "Are You Willing To Be Our Next Client? Get In Touch With eForte",
        keywords: "Get In Touch With eForte",
        publishTime: new Date().toISOString(),
        image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
