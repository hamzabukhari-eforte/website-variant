import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import {
  AiIntegrationSection2Image1,
  AiIntegrationSection2Image2,
  BannerBtn,
  BannerImg,
  bot,
  section3Image1,
  section3Image2,
  section3Image3,
  section3image4,
  section3image5,
} from "../../images";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { BsStars } from "react-icons/bs";
import { Button, Col, Form, Input, Modal, Row, message, notification } from "antd";
import { useEffect, useRef, useState } from "react";
import { InputWrapper, TextAreaWrapper } from "../../src/component/inputs";
import PhoneInputWrapper from "../../src/component/inputs/phoneInputWrapper";
import { BlueButtonWrapper } from "../../src/component/buttons";
import { isValidPhoneNumber } from "react-phone-number-input";
import Lottie from "react-lottie";
import CheckAnimation from "../../public/images/thankyou-email.json";
import { useRouter } from "next/router";
import { useMutation } from "react-apollo";
import { Mutation } from "../../src/apollo/mutations";
import PageChange from "../../src/component/PageChange";

const TestimonyWithRating = dynamic(() =>
  import("../../src/component/testimonial/logoTestimonial")
);

const StyledDiv = styled.div`
  .hero-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 10% 34px 10%;

    .banner-img {
      width: 100%;
      height: 100vh;
      z-index: -1;
      position: absolute;
      object-fit: cover;
      background-color: #f4f3fa;
      top: 0px;
    }

    h6 {
      margin-top: 20px;
      font-size: 1.5rem;
      text-align: center;
      /* color: #0b3558; */
      color: #fff;
    }
    h5 {
      color: #fff;
      font-weight: 600;
      margin-top: 18px;
      text-align: center;
      /* position: absolute; */
      /* bottom: 100px; */
    }
    h4 {
      /* color: #0b3558; */
      color: #fff;
      font-weight: 600;
    }
    h3 {
      /* color: #0b3558; */
      color: #fff;
      font-weight: 600;
    }
    h2 {
      margin-top: 5%;
      font-weight: 800;
      font-size: 4rem;
      /* color: #0b3558; */
      color: #fff;
    }

    a {
      font-size: 1.2rem;
      color: #4e6b8f;
      text-decoration: none;
    }

    .top-img-section {
      width: 100%;
      position: relative;
      top: 130px;
      @media (max-width: 1200px) {
        top: 10px;
      }
    }

    .bottom-img-section {
      width: 70%;
      position: relative;
      bottom: 20px;
      @media (max-width: 1200px) {
        width: 100%;
        bottom: 0px;
      }
    }
    @media (max-width: 700px) {
      height: 120vh;
      .banner-img {
        height: 120vh;
      }
      h2 {
        font-size: 3rem;
      }
    }
  }

  .banner-btn {
    background-color: #e1ebfb;
    border: 1px solid #a9b4c6;
    border-radius: 22px;
    height: 100px !important;
    width: 850px;
    padding: 8px;
    transition: 0.3s ease;
    margin: 50px 0;

    .input-border-wrapper {
      display: flex;
      background-color: #fff;
      border: 1px solid #a9b4c6;
      border-radius: 16px;
      width: 100%;
      height: 100%;
      padding: 16px;
      justify-content: space-between;
      align-items: center;
    }

    .gradient-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65%;
      height: 100%;
      border-radius: 18px;
      background: linear-gradient(to right, #4e75ff, #b703ca);
      color: #fff;
      transition: background-color 1s ease;
      p {
        font-size: 1.2rem;
        margin-left: 5px;
        font-weight: 600;
      }
      :hover {
        background: linear-gradient(to right, #4e75ff, #eb29ff);
        color: #fff;
        cursor: pointer;
      }
    }

    .input_wrapper {
      border: none;
      height: 100%;
      display: flex;
      align-items: center;
      resize: none;
      justify-content: space-between;
      font-size: 18px;
      max-width: 425px;
      min-width: 260px;

      :focus,
      :active,
      :hover {
        box-shadow: none !important;
        border: none !important;
        outline: none !important;
      }
    }

    .ant-btn[disabled]:hover {
      cursor: not-allowed;
    }
    .ant-input[disabled] {
      background-color: #fff;
    }
    :hover {
      /* border-color: ${(props) =>
        props.bg ? "transparent" : myColor.blue} !important; */
      transform: translateY(-0.25em) !important;
      transition: 0.3s ease;
    }

    @media (max-width: 850px) {
      height: auto !important;
      width: 100% !important;
      .input_wrapper {
        text-align: center;
        margin-top: 24px;
      }

      .input-border-wrapper {
        align-items: center;
        flex-direction: column;

        img {
          width: 60px;
          height: 60px;
        }
      }

      .gradient-btn {
        margin-top: 2rem;
        width: 100%;
        height: 50px;
      }
    }
  }

  .section-2 {
    padding: 1% 5% 5%;
    background-color: #f4f3fa;

    h2 {
      font-weight: 800;
      font-size: 2.5rem;
      color: #0b3558;
      margin-top: 24px;
      margin-bottom: 24px;
    }
    p {
      color: #0b3558;
      font-size: 28px;
      line-height: 50px;
      font-weight: 500;
    }

    @media (max-width: 500px) {
      padding: 1% 2% 2%;
    }
  }

  .section-3 {
    padding: 5% 10%;

    h1 {
      font-weight: 800;
      font-size: 3.5rem;
      color: #0b3558;
      margin-bottom: 54px;
      text-align: center;
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 500px;
      margin-top: 24px;
    }

    .border-gradient-not-active {
      background: #f4f4f4;
      padding: 24px 24px 24px 54px;
      margin: 24px 0px;
      border-radius: 12px;
      position: relative;
      cursor: pointer;
      height: 85px;
      transition: 0.3s ease;
      ::before {
        content: "";
        background: linear-gradient(to right, #898989, #898989);
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        border-radius: 12px;
      }
      .number {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        background: linear-gradient(to right, #898989, #898989);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        left: -25px;
        top: 20%;
        cursor: pointer;
      }
      h3 {
        color: #898989;
        font-weight: 600;
        margin-bottom: 0px;
      }

      p {
        color: #898989;
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 0px;
        /* display: none; */
        opacity: 0;
        transition: 0.2s ease;
        position: absolute;
      }
    }

    .border-gradient {
      background: #f4f3fa;
      padding: 24px 24px 24px 54px;
      margin: 24px 0px;
      border-radius: 12px;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease;
      height: 185px;
      ::before {
        content: "";
        background: linear-gradient(to right, #4e75ff, #b703ca);
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
        border-radius: 12px;
      }
      .number {
        height: 50px;
        width: 50px;
        border-radius: 100px;
        background: linear-gradient(to right, #4e75ff, #b703ca);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        left: -25px;
        top: 32%;
        cursor: pointer;
      }
      h3 {
        color: #0b3558;
        font-weight: 600;
        margin-bottom: 20px;
      }

      p {
        color: #0b3558;
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 0px;
        opacity: 1;
        transition: 0.5s ease;
      }
    }

    @media (max-width: 700px) {
      padding: 5% 7%;
      h3 {
        font-size: 22px;
        margin-bottom: 6px;
      }
      .border-gradient {
        padding: 24px 18px 18px 36px;
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .border-gradient-not-active {
        height: 80px;
        padding: 24px 18px 18px 36px;
        .number {
          top: 17%;
        }
      }
    }

    @media (max-width: 400px) {
      h3 {
        font-size: 18px;
        margin-bottom: 4px;
      }
      .border-gradient {
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
      .border-gradient-not-active {
        height: 72px;
        .number {
          top: 15%;
        }
      }
    }
  }

  .section-4 {
    padding: 5% 10%;
    h1 {
      font-weight: 800;
      font-size: 3.5rem;
      color: #0b3558;
      margin-bottom: 54px;
      text-align: center;
    }
    h6 {
      font-weight: 600;
      color: #0b3558;
      text-align: center;
      font-size: 1.5rem;
    }
    h4 {
      font-weight: 800;
      color: #0b3558;
      margin-bottom: 0px;
      margin-right: 12px;
      width: 30%;
    }
    .your-url {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #0b3558;
      font-size: 18px;
      font-weight: 600;
      background: #fff;
      outline: none;
      border: 0px;

      :disabled {
        cursor: not-allowed;
        color: #8d909f;
        span {
          color: #8d909f;
          border: 2px solid #8d909f;
          background-color: #fff;
        }
        :hover {
          span {
            color: #8d909f;
            border: 2px solid #8d909f;
            background-color: #fff;
          }
        }
      }

      span {
        height: 40px;
        width: 40px;
        border: 2px solid #0b3558;
        border-radius: 100px;
        margin-left: 6px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease;
      }
      :hover {
        span {
          transition: 0.2s ease;
          transition: 0.2s ease;
          color: #fff;
          background-color: #0b3558;
          border: 2px solid #0b3558;
        }
      }
    }

    .next-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #3e52d4;
      font-size: 18px;
      font-weight: 600;
      background: #fff;
      outline: none;
      border: 0px;
      span {
        height: 40px;
        width: 40px;
        border: 2px solid #3e52d4;
        border-radius: 100px;
        margin-left: 6px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease;
      }
      :hover {
        span {
          transition: 0.2s ease;
          color: #fff;
          background-color: #3e52d4;
          border: 2px solid #3e52d4;
        }
      }
    }

    @media (max-width: 700px) {
      padding: 5% 3%;
      h1 {
        font-size: 2.5rem;
      }
      h4 {
        width: 100%;
        text-align: center;
      }
    }
  }

  .thankyou-div {
    padding: 5%;
    text-align: center;
    h2 {
      margin-top: 10px;
      font-weight: 800;
      font-size: 4rem;
      color: #0b3558;
    }
    h5 {
      margin-top: 5%;
      font-weight: 600;
      font-size: 2rem;
      color: #0b3558;
      padding-left: 20%;
      padding-right: 20%;
      line-height: 2;
    }

    .back-to-home {
      color: #0b3558;
      border: 2px solid #0b3558;
      padding: 8px;
      padding-left: 20px;
      padding-right: 20px;
      width: max-content;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 50px;
      font-weight: 700;
      margin-top: 34px;
      transition: 0.2s ease;
      :hover {
        color: #fff;
        background-color: #0b3558;
        transition: 0.2s ease;
      }
    }

    @media (max-width: 700px) {
      margin-top: 70px;
      h5 {
        padding-left: 5%;
        padding-right: 5%;
      }
    }
  }
`;

const section3Data = [
  {
    id: 1,
    title: "Al Strategy Development:",
    para: "Identify the best Al solutions for your business and create a roadmap for seamless implementation.",
    image: section3Image1,
  },
  {
    id: 2,
    title: "Custom Al Solutions:",
    para: "Tailored chatbots, virtual assistants, and predictive analytics tools to meet your unique business needs.",
    image: section3Image2,
  },
  {
    id: 3,
    title: "Data Analysis & Insights:",
    para: "Utilize machine learning to analyze data and gain valuable insights for data-driven decisions.",
    image: section3Image3,
  },
  {
    id: 4,
    title: "Efficient Integration:",
    para: "Seamlessly integrate Al solutions into your existing systems and workflows for minimal disruption.",
    image: section3image4,
  },
  {
    id: 5,
    title: "Training & Ongoing Support:",
    para: "Comprehensive training and continuous support to ensure successful adoption and maintenance.",
    image: section3image5,
  },
];

const section4Data = [
  {
    id: 1,
    question: "Name of Business/Product",
    placeHolder: "Product/service name or company",
    example: "e.g. PAYTRACT",
  },
  {
    id: 2,
    question: "Need to fulfill",
    placeHolder: "Statement of need or opportunity",
    example: "e.g. Businesses face trouble getting their clients to pay on time",
  },
  {
    id: 3,
    question: "Audience that you serve",
    placeHolder: "Your target customer",
    example: "e.g. Businesses facing delayed payments from their clients",
  },
  {
    id: 4,
    question: "Briefly describe product/business",
    placeHolder: "Category and what the product does",
    example: "e.g. Software that tracks past-due payments & sends reminders",
  },
  {
    id: 5,
    question: "What differentiates your business",
    placeHolder: "The secret sauce or things that sets you apart",
    example: "e.g. Automated reminders",
  },
  {
    id: 6,
    question: "Benefit related to what user wants to achieve",
    placeHolder: "Benefit users get/what outcome they need",
    example:
      "e.g. So users can focus on their business without worrying about tracking payments",
  },
  {
    id: 7,
    question:
      "Are their any specific areas of your business that you would like AI to be integrated?",
    placeHolder:
      "Explain in detail what you need from AI integration or how AI can assist you in your business",
    example:
      "e.g. Help us understand your needs so that we can provide you report that addresses your preferences",
  },
];
const GenerativeAIBusiness = () => {
  const router = useRouter();
  let lottieRef = useRef();
  const [form] = Form.useForm();
  const [URL, setURL] = useState("");
  const [moreInfoModal, setMoreInfoModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [section4Active, setSection4Active] = useState(1);
  const [section4Display, setSection4Display] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [thankyou, setThankyou] = useState(false);
  const [createdId, setCreatedId] = useState(null);
  const [isloading, setIsloading] = useState(false)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    phoneError: null,
  });

  const [questionAnswer, setQuestionAnswer] = useState([
    {
      question: section4Data[0].question,
      answer: "",
    },
    {
      question: section4Data[1].question,
      answer: "",
    },
    {
      question: section4Data[2].question,
      answer: "",
    },
    {
      question: section4Data[3].question,
      answer: "",
    },
    {
      question: section4Data[4].question,
      answer: "",
    },
    {
      question: section4Data[5].question,
      answer: "",
    },
    {
      question: section4Data[6].question,
      answer: "",
    },
  ]);

  const handleCancel = () => {
    setState({ name: "", email: "", phone: "", phoneError: null });
    form.resetFields();
    setMoreInfoModal(false);
  };

  const handleCancelModal2 = () => {
    setSecondModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleAdminEmail = async () => {
    if (state.name && state.email && state.phone && URL) {
      let emailData = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        URL: URL,
      };
    
      await fetch("/api/sendAdminEmailAPI", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
      .catch((err) => {
        console.log("err", err);
      });
    }
  }

  const handleSubmit = async () => {
    let leftQuestion = questionAnswer.map((data, index) => {
      if (data.answer == "") {
        message.error(`Please fill Question no: ${index + 1} before submitting`);
        return 0;
      } else {
        return 1;
      }
    });

    const allFilled = leftQuestion.every((element) => element === 1);

    if (allFilled) {
      setLoading(true);
      let emailData = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        URL: URL,
        question1: questionAnswer[0].question,
        answer1: questionAnswer[0].answer,
        question2: questionAnswer[1].question,
        answer2: questionAnswer[1].answer,
        question3: questionAnswer[2].question,
        answer3: questionAnswer[2].answer,
        question4: questionAnswer[3].question,
        answer4: questionAnswer[3].answer,
        question5: questionAnswer[4].question,
        answer5: questionAnswer[4].answer,
        question6: questionAnswer[5].question,
        answer6: questionAnswer[5].answer,
        question7: questionAnswer[6].question,
        answer7: questionAnswer[6].answer,
      };
      await fetch("/api/sendEmailAPI", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
        .then((res) => {
          console.log("Response received > ", res);
          if (res.status === 200) {
            setLoading(false);
            console.log("Response succeeded > ", res);
            // captchaRef.current.reset(); // Reset captcha
            form.resetFields();
            setState({
              name: "",
              email: "",
              phone: "",
              phoneError: null,
            });
            setQuestionAnswer([
              {
                question: section4Data[0].question,
                answer: "",
              },
              {
                question: section4Data[1].question,
                answer: "",
              },
              {
                question: section4Data[2].question,
                answer: "",
              },
              {
                question: section4Data[3].question,
                answer: "",
              },
              {
                question: section4Data[4].question,
                answer: "",
              },
              {
                question: section4Data[5].question,
                answer: "",
              },
              {
                question: section4Data[6].question,
                answer: "",
              },
            ]);
            // setSection4Display(false)
            setThankyou(true);
            router.push("#thankyou");
            lottieRef.current?.play();
            notification.success({
              message: "Form Submitted",
              description:
                "Thankyou for your interest in Free Evaluation Report on Al Integration into your business",
            });
          } else {
            notification.error({
              message: "Form not Submitted",
              description: "Something went wrong, Please try again",
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
        });
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
      }}
      spin
    />
  );

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: CheckAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [createUrlFeedback] = useMutation(Mutation.CREATE_URL_FEEDBACK);

  const handleTextAreaChange = async () => {
    try {
      setIsloading(true)

      const { data } = await createUrlFeedback({
        variables: {
          url: URL,
        },
      });

      const createUrlFeedbackId = data.createUrlFeedback._id;
      const generatedResponses = data.createUrlFeedback.response;
      const updatedQuestionAnswer = [...questionAnswer];
      generatedResponses.forEach((response, index) => {
        updatedQuestionAnswer[index].answer = response;
      });
      setQuestionAnswer(updatedQuestionAnswer);
      setCreatedId(createUrlFeedbackId);
    } catch (error) {
      console.error("Error creating feedback:", error);
    }
    finally{
      setIsloading(false)
      setMoreInfoModal(true);
    }
  };

  const [updateResponse] = useMutation(Mutation.UPDATE_RESPONSE);

  const handleUpdateResponse = async () => {
    const responseArray = questionAnswer.map((item) => item.answer);
    const id = createdId;
    console.log(responseArray);
    console.log(id);
    try {
      await updateResponse({
        variables: {
          _id: id,
          response: responseArray,
          name: state.name,
          email: state.email,
          phoneNumber: state.phone,
          url: URL,
        },
      });
    } catch (error) {
      console.error("Error updating response:", error);
    }
  };

  return (
    <>
      {thankyou ? (
        <>
          <StyledDiv>
            <div id="thankyou" className="thankyou-div">
              <Lottie
                style={{ height: 250, width: 250 }}
                options={defaultOptions}
                ref={lottieRef}
              />

              <h2>Thank you</h2>
              <h5>
                We have received your input, your AI evaluation report will be sent to
                your email in next 24 hours.
              </h5>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/"}>
                  <div className="back-to-home">Back to home</div>
                </Link>
              </div>
            </div>
          </StyledDiv>
        </>
      ) : (
        <>
          <Modal
            centered
            title={null}
            footer={null}
            open={secondModal}
            onCancel={handleCancelModal2}
            // style={{ maxWidth: 450, minWidth: 300 }}
          >
            <h5
              style={{
                color: "#0b3558",
                marginTop: 38,
                fontWeight: 600,
                textAlign: "left",
                lineHeight: 1.5,
              }}
            >
              Help us know your business more by answering few questions so that we can
              make the report more specific to your needs. AI has already answered these
              questions for you after reviewing your website. Feel free to edit any
              answers and press submit to get a detailed report.
            </h5>

            <Col
              span={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: 8,
              }}
            >
              <BlueButtonWrapper
                style={{ marginTop: 25 }}
                background="#fff"
                border={"2px solid #A9B4C6"}
                width={100}
                borderRadius={"50px"}
                hoverBackground="#fff"
                hoverColor="#A9B4C6"
                // loading={loading}
                color="#A9B4C6"
                onClick={() => {
                  handleCancelModal2();
                }}
              >
                Cancel
              </BlueButtonWrapper>
              {/* <Link href={"#your-business"}> */}
                <BlueButtonWrapper
                  style={{ marginTop: 25 }}
                  background="linear-gradient(to right, #4e75ff, #b703ca)"
                  border={"0px"}
                  width={100}
                  borderRadius={"50px"}
                  hoverBackground="linear-gradient(to right, #4e75ff, #b703ca)"
                  hoverColor="#fff"
                  htmlType="submit"
                  // loading={loading}
                  color="#fff"
                  onClick={() => {
                    setMoreInfoModal(false);
                    setSecondModal(false);
                  }}
                >
                  Proceed
                </BlueButtonWrapper>
              {/* </Link> */}
            </Col>
          </Modal>
          <Modal
            centered
            title={null}
            footer={null}
            open={moreInfoModal}
            onCancel={handleCancel}
          >
            <h2
              style={{
                color: "#0b3558",
                marginTop: 38,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Where should I send the{" "}
              <span style={{ fontWeight: 800 }}>free Evaluation Report</span> on{" "}
              <span style={{ fontWeight: 800 }}>Al Integration</span> into your business?
            </h2>
            <Form
              style={{ marginTop: -40 }}
              form={form}
              autoComplete="new-password"
              validateTrigger="onFinish"
              // className="text-left col-xl-6 col-sm-8 col-12 mx-auto"
            >
              <Row gutter={[24]} style={{ margin: "64px 0 0 0" }}>
                <Col span={24}>
                  <label>Name</label>
                  <Form.Item name="Name" rules={[{ required: true, type: "string" }]}>
                    <InputWrapper
                      name="name"
                      placeholder="Name"
                      maxLength={30}
                      autoComplete="new-password"
                      value={state.name}
                      onChange={handleChange}
                      // onInput={fullNameFormatter}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
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

                <Col span={24}>
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

                <Col
                  span={24}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: 28,
                  }}
                >
                  <BlueButtonWrapper
                    style={{ marginTop: 25 }}
                    background="#fff"
                    border={"2px solid #A9B4C6"}
                    width={100}
                    borderRadius={"50px"}
                    hoverBackground="#fff"
                    hoverColor="#A9B4C6"
                    // loading={loading}
                    color="#A9B4C6"
                    onClick={() => {
                      form.resetFields();
                      handleCancel();
                    }}
                  >
                    Cancel
                  </BlueButtonWrapper>

                  <BlueButtonWrapper
                    style={{ marginTop: 25 }}
                    background="linear-gradient(to right, #4e75ff, #b703ca)"
                    border={"0px"}
                    width={100}
                    borderRadius={"50px"}
                    hoverBackground="linear-gradient(to right, #4e75ff, #b703ca)"
                    hoverColor="#fff"
                    htmlType="submit"
                    // loading={loading}
                    color="#fff"
                    onClick={() => {
                      if (!isValidPhoneNumber(state.phone)) {
                        setState({ ...state, phoneError: "Invalid phone number" });
                      } else if (isValidPhoneNumber(state.phone)) {
                        setState({ ...state, phoneError: "" });
                        setSecondModal(true);
                        setMoreInfoModal(false);
                        handleAdminEmail()
                        handleUpdateResponse();
                      }
                    }}
                  >
                    OK
                  </BlueButtonWrapper>
                </Col>
              </Row>
            </Form>
          </Modal>
          <StyledDiv>
            <div className="hero-section">
              <img src={BannerImg} alt="banner-img" className="banner-img" />
              <div className="d-flex flex-column align-items-center text-center">
                <h2>
                  Thousands of businesses
                  <br />
                  are integrating with AI
                </h2>
                <h3 style={{ marginTop: 18 }}>...few are benefiting</h3>
                <h4 style={{ marginTop: 18 }}>
                  Find out if Al integration will help you achieve your business goals?
                </h4>
              </div>

              <div
                style={{
                  position:
                    !section4Display && scrollPosition >= 400 ? "fixed" : "inherit",
                  top: !section4Display && scrollPosition >= 400 ? "4%" : "0px",
                  zIndex: 99,
                }}
                className="banner-btn"
              >
                <div className="input-border-wrapper">
                  <img src={BannerBtn} height={"100%"} />

                  <Input
                    // disabled={section4Display}
                    value={URL}
                    onChange={(e) => setURL(e.target.value)}
                    className="input_wrapper"
                    placeholder="Enter your business web URL"
                  />
              <Link href={"#your-business"}>
                  <Button
                    disabled={URL == "" ? true : false}
                    style={{ width: "100%", height: 48 }}
                    className="gradient-btn"
                    onClick={() => {
                      setSection4Display(true);
                      handleTextAreaChange();
                    }}
                  >
                    <BsStars style={{ fontSize: "1.2rem" }} />
                    <p className="mb-0">Analyze my business for AI</p>
                  </Button>
                </Link>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <h5>
                  Answer a few questions & get a{" "}
                  <span style={{ fontWeight: 800 }}>FREE Evaluation Report</span>
                  <br />
                  on Al Integration into your business
                </h5>
              </div>
            </div>

            <div className="section-2">
              <Row className="d-flex justify-content-center mt-5">
                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  className="d-flex justify-content-center text-center px-lg-5 px-md-0"
                >
                  <div>
                    <img src={AiIntegrationSection2Image1} width={100} />
                    <h2>
                      Why You Should Consider
                      <br />
                      AI Integration
                    </h2>
                    <p className="px-lg-5 px-md-0">
                      {`Are you looking to improve your customer experience, increase
                      efficiency, and save costs? Al integration may be the solution
                      you're looking for. By leveraging the power of artificial
                      intelligence, you can automate routine tasks provide personalized
                      recommendations, and gain valuable insights into your customers'
                      behavior.`}
                    </p>
                  </div>
                </Col>

                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  className="d-flex justify-content-center text-center px-lg-5 px-md-0"
                >
                  <div>
                    <img src={AiIntegrationSection2Image2} width={100} />
                    <h2>
                      How Our Al Integration
                      <br />
                      Services Work
                    </h2>
                    <p className="px-lg-5 px-md-0">
                      At eForte Solutions, we offer a range of Al integration services
                      that can help you achieve your business goals. Our team of experts
                      will work with you to understand your unique needs and develop/a
                      tailored solution that meets your requirements.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="section-3">
              <h1>{`eForte's Al Integration Services`}</h1>

              <Row gutter={[80, 0]}>
                <Col
                  xxl={12}
                  xl={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={section3Data[activeSection - 1].image}
                    className="section3 img"
                    alt="Al Strategy Development"
                  />
                </Col>

                <Col
                  xxl={12}
                  xl={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="justify-content-center align-items-center"
                  style={{ flexDirection: "column" }}
                >
                  {section3Data.map((data, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setActiveSection(index + 1);
                        }}
                        className={`${
                          activeSection == data.id
                            ? "border-gradient"
                            : "border-gradient-not-active"
                        }`}
                      >
                        <div className="number">{data.id}</div>
                        <h3>{data.title}</h3>
                        <p>{data.para}</p>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            </div>
            {section4Display && URL != "" ? (
              <div> 
                {isloading && <PageChange/>} 
                <div className="section-4">
                  <div>
                    <h1>
                      Answer a few questions & get a FREE Evaluation Report on Al
                      Integration into your business
                    </h1>
                    <h6>
                      To determine if Al integration is suitable for your business, please
                      answer the following questions:
                    </h6>

                    <div id={"your-business"} className="your-url mb-4">
                      <div style={{ maxWidth: 450 }} className="banner-btn">
                        <div className="input-border-wrapper">
                          <h4>Your URL:</h4>
                          <a
                            rel="noopener noreferrer"
                            className="gradient-btn"
                            style={{ width: "70%" }}
                            href={URL}
                            target="_blank"
                          >
                            <BsStars style={{ fontSize: "1.2rem" }} />
                            <p className="mb-0">{URL}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <Row style={{ paddingLeft: "8%", paddingRight: "8%" }}>
                      <Col
                        xxl={12}
                        xl={12}
                        md={24}
                        sm={24}
                        xs={24}
                        className="px-sm-0 px-md-2 px-lg-5"
                      >
                        <div>
                          <img src={bot} style={{ width: 80 }} alt="bot-pic" />
                          <p className="mt-2">
                            {section4Data[section4Active - 1].id}/{section4Data.length}
                          </p>
                          <h6 className="text-left">
                            {section4Data[section4Active - 1].question}
                          </h6>
                        </div>
                      </Col>
                      <Col
                        xxl={12}
                        xl={12}
                        md={24}
                        sm={24}
                        xs={24}
                        className="px-sm-0 px-md-2 px-lg-5"
                      >
                        <TextAreaWrapper
                          value={questionAnswer[section4Active - 1].answer}
                          fontSize="20px"
                          placeholder={section4Data[section4Active - 1].placeHolder}
                          onChange={(e) => {
                            const inputText = e.target.value;
                            const words = inputText.split(/\s+/); // Split input text by whitespace characters
                            if (words.length <= 50) {
                              const updatedQuestionAnswer = [...questionAnswer];
                              updatedQuestionAnswer[section4Active - 1].answer =
                                inputText;
                              setQuestionAnswer(updatedQuestionAnswer);
                            }
                          }}
                        />
                        <p
                          style={{
                            fontSize: 12,
                            textAlign: "right",
                            color: "#8D909F",
                            marginTop: -6,
                            marginBottom: 0,
                          }}
                        >
                          {50 -
                            (questionAnswer[section4Active - 1].answer.split(/\s+/)
                              .length -
                              1)}
                          /50 Words Remaining
                        </p>
                        <p style={{ fontSize: 16, height: 40 }}>
                          {section4Data[section4Active - 1].example}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            marginTop: 54,
                          }}
                        >
                          <button
                            className="back-btn"
                            disabled={section4Active == 1 ? true : false}
                            onClick={() => {
                              setSection4Active((prev) => (prev >= 1 ? prev - 1 : 0));
                            }}
                            // style={{
                            //   display: section4Active == 1 ? "none" : "flex",
                            // }}
                          >
                            <span>
                              <FaChevronLeft />
                            </span>
                            Back
                          </button>
                          <button
                            disabled={loading}
                            className="next-btn"
                            onClick={() => {
                              if (section4Active == section4Data.length) {
                                console.log("sumbitted");
                                handleSubmit();
                                handleUpdateResponse();
                              } else {
                                setSection4Active((prev) =>
                                  prev == section4Data.length
                                    ? section4Data.length
                                    : prev + 1
                                );
                              }
                            }}
                          >
                            {section4Active == section4Data.length ? "Submit" : "Next"}{" "}
                            <span>
                              {loading ? (
                                <Spin indicator={antIcon} />
                              ) : (
                                <FaChevronRight />
                              )}
                            </span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            ) : null}

            <TestimonyWithRating />
          </StyledDiv>
        </>
      )}
    </>
  );
};

export default GenerativeAIBusiness;
