import { useState } from "react";
import styled from "styled-components";
import { Row, Col, Form, Radio, Space, message } from "antd";
// import SelectWrapper from "../inputs/selectWrapper";
import { InputWrapper, TextAreaWrapper } from "../inputs";
import { BlueButtonWrapper } from "../buttons";
import PhoneInputWrapper from "../inputs/phoneInputWrapper";
import { isValidPhoneNumber } from "react-phone-number-input";
import { fullNameFormatter } from "../../helper/formatters";
import { Fade, Zoom } from "react-awesome-reveal";
import Heading from "../headings";
import { Mutation } from "../../apollo";
import { useMutation } from "react-apollo";
import { errorHandler } from "../../utils/errorHandler";

const StyledForm = styled.div`
  width: -webkit-fill-available;
  padding: 5% 10%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  width: -moz-available;
  .label {
    margin-bottom: 4px;
  }
  .ant-form label {
    margin-bottom: 2px;
    font-weight: 600;
  }

  @media (max-width: 991px) {
    padding: 5% 10%;
  }
`;

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  businessName: "",
  howDidYouHear: "",
  lookingFor: "",
  projectType: "",
  budget: "",
  idea: "",
  phoneError: "",
};

const AppForm = (props) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const [getQuote, { loading }] = useMutation(Mutation.GET_A_QUOTE);

  const handleSubmit = async () => {
    console.log("Phone Numner", state.phoneNumber);
    if (isValidPhoneNumber(state.phoneNumber)) {
      try {
        await getQuote({
          variables: {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            email: state.email,
            businessName: state.businessName,
            howDidYouHear: state.howDidYouHear,
            lookingFor: state.lookingFor,
            budget: state.budget,
            projectType: state.projectType,
            idea: state.idea,
          },
        });

        setState({ ...initialState }); // set state to initial state
        form.resetFields(); // Reset from fields
        message.success(
          "Thanks for your intrest. One of our representatives will contact you shortly."
        );
      } catch (err) {
        message.error(errorHandler(err));
      }
    } else {
      setState({ ...state, phoneError: "Invalid phone number" });
    }
  };

  return (
    <StyledForm backgroundColor={props.backgroundColor}>
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        {/* <Heading>
          Curious how much your app will cost? <br />
          Get a free quote!
        </Heading> */}
        <Heading>
          How much our services cost? <br />
          Get a quote in 24 Hours
        </Heading>
      </Fade>
      <Form
        onFinish={handleSubmit}
        form={form}
        autoComplete="new-password"
        validateTrigger="onFinish"
        // className="text-left col-xl-14 col-sm-8 col-14 mx-auto"
      >
        <Row gutter={[24]} style={{ margin: "0 0 0 0" }}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label>Business name</label>
              <Form.Item
                name="Business Name"
                rules={[{ required: true, type: "string", max: 50 }]}
              >
                <InputWrapper
                  name="businessName"
                  placeholder="Business name"
                  maxLength={50}
                  autoComplete="new-password"
                  value={state.businessName}
                  onChange={handleChange}
                  onInput={fullNameFormatter}
                />
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label>First Name</label>
              <Form.Item
                name="First Name"
                rules={[{ required: true, type: "string", max: 50 }]}
              >
                <InputWrapper
                  name="firstName"
                  placeholder="First name"
                  maxLength={50}
                  autoComplete="new-password"
                  value={state.firstName}
                  onChange={handleChange}
                  onInput={fullNameFormatter}
                />
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label>Last Name</label>
              <Form.Item
                name="Last Name"
                rules={[{ required: true, type: "string", max: 50 }]}
              >
                <InputWrapper
                  name="lastName"
                  placeholder="Last name"
                  maxLength={50}
                  autoComplete="new-password"
                  value={state.lastName}
                  onChange={handleChange}
                  onInput={fullNameFormatter}
                />
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ minHeight: 90 }}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label>Phone</label>
              <PhoneInputWrapper
                name="phoneNumber"
                autoComplete="new-password"
                value={state.phoneNumber}
                placeholder="Phone Number"
                onChange={handleChange}
                error={state.phoneError}
              />
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
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
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label>How did you hear about us?</label>
              <Form.Item
                name="hearAboutUs"
                rules={[
                  { required: true, type: "string", message: "This field is required" },
                ]}
              >
                <InputWrapper
                  name="howDidYouHear"
                  placeholder="Google, Facebook, Linkedin"
                  autoComplete="new-password"
                  value={state.howDidYouHear}
                  onChange={handleChange}
                />
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label style={{ marginBottom: 8 }}>What are you looking for?</label>
              <Form.Item
                name="Looking for"
                rules={[
                  { required: true, type: "string", message: "This field is required" },
                ]}
              >
                <Radio.Group
                  onChange={(e) => {
                    setState({ ...state, lookingFor: e.target.value });
                  }}
                  value={state.lookingFor}
                >
                  <Space direction="vertical">
                    <Radio value={"Dedicated IT Staff hiring"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Dedicated IT Staff hiring
                      </p>
                    </Radio>
                    <Radio value={"Create a mobile or web app"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Create a mobile or web app
                      </p>
                    </Radio>
                    <Radio value={"Fix my current application"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Fix my current application
                      </p>
                    </Radio>
                    <Radio value={"Improve my application"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Improve my application
                      </p>
                    </Radio>
                    <Radio value={"Something else"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>Something else</p>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label style={{ marginBottom: 8 }}>Project type</label>
              <Form.Item name="Project" rules={[{ required: true, type: "string" }]}>
                <Radio.Group
                  onChange={(e) => {
                    setState({ ...state, projectType: e.target.value });
                  }}
                  value={state.projectType}
                >
                  <Space direction="vertical">
                    <Radio value={"Dedicated IT Staff hiring"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Dedicated IT Staff hiring
                      </p>
                    </Radio>
                    <Radio value={"Mobile App Development"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Mobile App Development
                      </p>
                    </Radio>
                    <Radio value={"Business Dashboard"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Business Dashboard
                      </p>
                    </Radio>
                    <Radio value={"Product Designing & Strategy"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Product Designing & Strategy
                      </p>
                    </Radio>
                    <Radio value={"Startup MVP & Prototyping"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Startup MVP & Prototyping
                      </p>
                    </Radio>
                    <Radio value={"Blockchain Development"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        Blockchain Development
                      </p>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Fade>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              <label style={{ marginBottom: 8 }}>What's your budget?</label>
              <Form.Item name="Budget" rules={[{ required: true, type: "string" }]}>
                <Radio.Group
                  onChange={(e) => {
                    setState({ ...state, budget: e.target.value });
                  }}
                  value={state.budget}
                >
                  <Space direction="vertical">
                    <Radio value={"Not specified"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>Not specified</p>
                    </Radio>
                    <Radio value={"less than $15,000"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        less than $15,000
                      </p>
                    </Radio>
                    <Radio value={"$15,000 - $50,000"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        $15,000 - $50,000
                      </p>
                    </Radio>
                    <Radio value={"$50,000 - $100,000"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        $50,000 - $100,000
                      </p>
                    </Radio>
                    <Radio value={"$100,000 - $500,000"}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>
                        $100,000 - $500,000
                      </p>
                    </Radio>
                    <Radio value={""}>
                      <p style={{ marginBottom: 0, fontWeight: 400 }}>$500,000 or more</p>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Fade>
          </Col>

          <Col span={24}>
            <Fade triggerOnce direction="up" damping={0.2} cascade>
              {/* <label>Tell us more about your idea</label> */}
              <label>Tell us more about your requirements</label>
              <Form.Item
                name="Description"
                rules={[{ required: true, type: "string", max: 500 }]}
              >
                <TextAreaWrapper
                  name="idea"
                  value={state.idea}
                  onChange={handleChange}
                  maxLength={500}
                  rows={6}
                  style={{ resize: "none" }}
                  placeholder="Briefly explain your project"
                />
              </Form.Item>
            </Fade>
          </Col>

          <Col
            span={24}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div style={{ width: 340 }}>
              <Zoom triggerOnce>
                <BlueButtonWrapper
                  style={{ marginTop: 25, marginBottom: 25 }}
                  backgroundColor="#2c3444"
                  background="#2c3444"
                  border="2px solid #2c3444"
                  hoverColor="#2c3444"
                  borderRadius="8px"
                  padding="24px 36px"
                  htmlType="submit"
                  loading={loading}
                  color="#fff"
                  onClick={() => {
                    if (!isValidPhoneNumber(state.phoneNumber)) {
                      setState({ ...state, phoneError: "Invalid phone number" });
                    }
                  }}
                >
                  Send Message
                </BlueButtonWrapper>
              </Zoom>
            </div>
          </Col>
        </Row>
      </Form>
    </StyledForm>
  );
};

export default AppForm;
