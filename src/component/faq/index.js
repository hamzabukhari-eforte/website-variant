import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Collapse, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Heading from "../headings";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: #2a2a2a;
    border-top: 1px solid rgb(221, 223, 225) !important;
    border-right: 1px solid rgb(221, 223, 225) !important;
    border-left: 1px solid rgb(221, 223, 225) !important;
    border-bottom: 1px solid rgb(221, 223, 225) !important;
  }

  .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    border-top: 1px solid rgb(221, 223, 225);
    border-right: 1px solid rgb(221, 223, 225);
    border-left: 1px solid rgb(221, 223, 225);
    border-bottom: 1px solid rgb(221, 223, 225);
    padding: 16px 36px 16px 16px;

    font-size: 18px;
    color: rgb(78, 78, 78);
    font-weight: 500;
    cursor: pointer;
  }

  .ant-collapse-content {
    // border-top: 1px solid rgb(221, 223, 225) !important;
    border-right: 1px solid rgb(221, 223, 225) !important;
    border-left: 1px solid rgb(221, 223, 225) !important;
    border-bottom: 1px solid rgb(221, 223, 225) !important;
    p {
      font-size: 14px;
      color: #4c4a4a;
      font-weight: 500;
      line-height: 24px;
      margin: 0px;
    }
  }

  .ant-collapse-header {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
  }

  .ant-collapse-item-active {
    .ant-collapse-header {
      color: #ed3c69 !important;
    }
  }

  .ant-collapse-borderless > .ant-collapse-item-active {
    .ant-collapse-header {
      border-bottom: 0px !important;
      transition: 0.5s ease;
    }
  }

  .ant-collapse-borderless
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 16px;
  }

  .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 0px;
    margin-bottom: 24px;
    background-color: #fff;
  }

  .ant-collapse-borderless {
    background-color: #fff;
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    .ant-collapse-content {
      p {
        font-size: 14x;
      }
    }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
  }
`;

const Faq = (props) => {
  const { Panel } = Collapse;
  return (
    <StyledDiv>
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        <Heading title="FAQ's - Frequently asked questions"></Heading>
      </Fade>
      <Row gutter={[40, 10]}>
        {/* 1st faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion={false}
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="What methodology you use to complete the project?" key="1">
              <p>
                Our delivery is a three phased approach – Design, Develop and Launch. The
                design phase includes documentation and prototype. The next phase is
                application development which covers build, client demos and feedback. The
                final phase involves extensive testing, post-production support and next
                phase of implementation.
              </p>
            </Panel> */}
            {/* <Panel header="Who is this Company?" key="1">
              <p>
                eForte, a software development company for over a decade, now excels as a
                specialized IT consultancy firm with a core focus on staff augmentation in
                recent years.
              </p>
            </Panel> */}
            <Panel header="How soon can I hire Software Engineers?" key="1">
              <p>
                You can hire Software Engineers within 3-7 working days. We strive to
                present you with a list of best-suited candidates promptly, often sooner,
                depending on your required tech stack.
              </p>
            </Panel>
          </Collapse>
        </Col>

        {/* 2nd faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="Can you help in developing a custom product?" key="2">
              <p>
                We surely deliver a full SDLC custom product with support and maintenance
                as required by our clients. We take pride in crafting solutions to
                difficult problems.
              </p>
            </Panel> */}
            <Panel header="What does eForte's Recruitment Process look like?" key="2">
              <p>
                We leverage our in-house AI tool to thoroughly assess candidates and
                ensure we hire the best talent. We consider their technical expertise,
                interpersonal skills, and compatibility with your company culture.
              </p>
            </Panel>
            {/* <Panel header="What other services are they offering?" key="2">
              <p>
                eForte Solutions offers IT Staff Augmentation, IT Consultancy, and
                Project-based development services.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 3rd faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="Do you work on legacy applications?" key="3">
              <p>
                We have extensive experience in accommodating requirement constraints
                imposed by any of your current legacy systems. We tend to contribute our
                services in improving the company's agility, stability, and potential by
                applying different types of modernization techniques to the legacy
                applications.
              </p>
            </Panel> */}
            <Panel
              header="How do you track productivity? How do you handle Underperformers?"
              key="3"
            >
              <p>
                We monitor productivity with Time Tracking Software. For underperformers,
                we provide feedback, additional training, and clear expectations. If
                issues persist, we may reassign tasks, offer further support, or consider
                performance improvement.
              </p>
            </Panel>
            {/* <Panel header="Do they provide Quality Engineers?" key="3">
              <p>
                Yes, eForte ensures the provision of Quality Engineers. With rich
                experience in the software development domain, their Technical Recruiters
                personally evaluate candidates, ensuring all technical and soft skills
                aspects are considered before forwarding suitable candidates to clients.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 4th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel
              header="How much does a custom software project costs to develop?"
              key="4"
            >
              <p>
                Every project has its overall cost based on several factors. After taking
                client requirments we give a ball park amount. If agreed, during the
                prototype design phase, we document all the client requirements for the
                project and provide exactly how much their project is going to cost in
                terms of money and time, which gives more transparency towards the
                delivery expectations by them.
              </p>
            </Panel> */}
            <Panel
              header="How do you make sure your staff is staying abreast of the latest technologies?"
              key="4"
            >
              <p>
                We prioritize our AI tool as the primary means to keep our staff updated
                on the latest technologies. Through it, we provide courses,
                certifications, and personalized improvement suggestions, empowering them
                to advance their careers.
              </p>
            </Panel>
            {/* <Panel
              header="What is their turn around time for providing 
tech staff?
"
              key="4"
            >
              <p>
                eForte is well known for providing staff in a maximum of five working
                days.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 5th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="How are projects managed throughout the SDLC?" key="5">
              <p>
                Our projects are managed using Agile Methodologies and a few different
                project management software tools, including Jira and Slack, to ensure
                effective team communication in achieving project goals.
              </p>
            </Panel> */}
            <Panel
              header="How does your staff augmentation process flow look like?"
              key="5"
            >
              <p>
                When we receive the criteria of your requirement, we review our database
                to identify suitable candidates and present you with multiple profiles
                highlighting their work. From these profiles, you can select the best-fit
                candidates for your needs.
              </p>
            </Panel>
            {/* <Panel header="Are the staff a cultural fit?" key="5">
              <p>
                Yes, eForte prioritizes the cultural fit of managed staff with their
                clients. We conduct workshops for this very aspect and familiarize the
                teams with the work ethics and cultures of the client resident countries.
                Moreover, English is the required mode of communication that our managed
                teams speak and are well-versed with.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 6th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel
              header="What happens if I am not satisfied with the project delivery?"
              key="6"
            >
              <p>
                We value our clients and strive to ensure their expectations are met.
                However, in case of any dissatisfaction with the project delivery, our
                project manager can discuss the pain points and accommodate you with the
                best of our abilities in improving/ resolving the issues to earn your
                satisfaction. Since we document everything, the outcome of a milestone
                delivery aligns with the agreed documentation. However, if a client is not
                satisfied with the team or their manager discuss and bring required change
                in the team too.
              </p>
            </Panel> */}
            <Panel
              header="What steps are taken after selecting the ideal candidate for your requirements?"
              key="6"
            >
              <p>
                After selecting the candidates, the next step typically involves
                scheduling interviews to further assess their suitability for the role.
                Following the interviews, reference checks may be conducted to validate
                their qualifications and experience. Once the final candidates are chosen,
                offers are extended, and the onboarding process begins, including
                necessary paperwork and orientation to integrate them seamlessly into your
                team.
              </p>
            </Panel>
            {/* <Panel header="Would your data be secured with the staff?" key="6">
              <p>
                eForte guarantees data security through GDPR and ISO 27001:2013
                compliance, ensuring comprehensive protection for client information.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 7th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="How long will my project take to complete?" key="7">
              <p>
                Whether the project is based on modern or legacy systems, the delivery is
                dependent on the size and complexity of the project, and the number of
                resources allocated to it. The design phase, can take 2 - 6 weeks for most
                projects, while the development phase for non-complex projects can take 3
                - 6 months. Medium complexity projects can take 6 - 12 months. Large,
                complex projects can take up to 12 - 24 months.
              </p>
            </Panel> */}
            <Panel
              header="How do you guarantee the quality of your IT staffing services?"
              key="7"
            >
              <p>
                We offer eForte's premium IT staffing solution risk-free for a week. This
                means you pay nothing upfront until you've thoroughly tested the talent we
                find for you. Additionally, we provide a dedicated account manager to
                address your needs effectively. We also offer monthly working reports of
                the selected resource and take care of their mental well-being by
                conducting extracurricular activities to ensure their focus and prevent
                burnout.
              </p>
            </Panel>
            {/* <Panel header="What other customers say about them?" key="7">
              <p>
                Customers praise eForte for professionalism and quality services in IT
                Staff Augmentation, IT Consultancy, and Project-based development.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 8th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel header="Who is the standard project team as resource?" key="8">
              <p>
                In general, our development team includes two developers for front–end and
                back-end, one graphics designer, a QA tester, a DevOps and a project
                manager. However we can add more resources to the team if a project
                demands.
              </p>
            </Panel> */}
            <Panel
              header="What happens if I want to hire a resource for few months only?"
              key="8"
            >
              <p>
                If you're looking for a part-time resource, we have you covered. The
                candidate we provide will be on a part-time contract basis for a minimum
                of 3 months, receiving the same level of management and support as our
                full-time technical resources.
              </p>
            </Panel>

            {/* <Panel header="How do they differentiate from other providers?" key="8">
              <p>
                eForte sets itself apart by offering skilled software engineers,
                meticulously evaluated by lead software engineers to ensure a seamless fit
                with client requirements. We take care of cultural alignment, continual
                skills upgrading (we even have crafted an AI for it in-house), and provide
                suitable engineers within 5 days. We are so confident about the quality of
                our engineers that we provide a 1-week (40 hours) free trial for you to
                see a fit for your requirements. In case of replacement requirements, we
                promptly present alternative candidates from our pre-screened pool.
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 9th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            {/* <Panel
              header="Do you provide maintenance support for a completed web/mobile application?"
              key="9"
            >
              <p>
                Yes, we offer our maintenance and support services to our clients across
                the globe. There are various maintenance agreements that include
                bug-fixing, performance optimization, database maintenance, and security
                analysis.
              </p>
            </Panel> */}
            <Panel
              header="Can staff augmentation be used for long-term projects?"
              key="9"
            >
              <p>
                Certainly! Our staff augmentation services are adaptable to long-term
                projects. We'll customize the contract to suit your project's timeline,
                providing continuous support until the project's completion.
              </p>
            </Panel>
            {/* <Panel
              header="What is the guarantee that their Engineers would be good in their 
respective skill sets?"
              key="9"
            >
              <p>
                eForte assures the expertise of their engineers through thorough technical
                and soft skills evaluation by the same domain expert, ensuring a strong
                match with client needs. We also offer a 1-week free trial of the
                capabilities of our managed software engineers.{" "}
              </p>
            </Panel> */}
          </Collapse>
        </Col>

        {/* 10th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            <Panel
              header="How Staff Augmentation differs from Project Outsourcing?"
              key="10"
            >
              <p>
                Staff Augmentation differs from Project Outsourcing in that with Staff
                Augmentation, you retain control and management of the resources,
                integrating them into your existing team. Whereas, with Project
                Outsourcing, you entrust the entire project to an external team or vendor,
                who manage the project independently.
              </p>
            </Panel>
          </Collapse>
        </Col>

        {/* 11th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            <Panel header="How is eForte's pricing structured?" key="11">
              <p>We use a monthly service plan model that covers all costs.</p>
            </Panel>
          </Collapse>
        </Col>

        {/* 12th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            <Panel
              header="Apart from providing the resource what other benefits does eForte provides?"
              key="12"
            >
              <p>
                In addition to providing resources, eForte offers comprehensive benefits
                including handling entitlements, taxation, health insurance, workspace
                provision, HR and admin support, performance management, modern office
                space and IT equipment, high-speed internet, payroll services, and
                workplace security compliance.
              </p>
            </Panel>
          </Collapse>
        </Col>

        {/* 13th faq */}
        <Col
          xxl={props.singleCol == true ? 24 : 12}
          xl={props.singleCol == true ? 24 : 12}
          lg={props.singleCol == true ? 24 : 12}
          md={24}
          sm={24}
          xs={24}
        >
          <Collapse
            accordion
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ color: "#ed3c69", fontSize: 16 }}
                rotate={isActive ? 135 : 0}
              />
            )}
          >
            <Panel
              header="What happens if the selected resource resigns, in between of your project?"
              key="13"
            >
              <p>
                The provided resource is on at least a one-year contract. If they decide
                to resign, they are required to serve a one-month notice period. During
                this time, we will provide a replacement from our pool of candidates
                within 3-5 working days at no additional cost to you, ensuring a seamless
                transition. Your satisfaction is our top priority.
              </p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Faq;
