import styled from "styled-components";
import { Row, Col, Timeline } from "antd";
import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { Bounce, Slide, Fade, Zoom } from "react-awesome-reveal";
import Heading from "../headings";

const solutions = [
  {
    title: "BLOCKCHAIN STRATEGY",
    heading: "Blockchain Strategy Consulting",
    subHeading: ``,
    description: `Our blockchain strategy consulting service helps clients understand
    the potential benefits of blockchain technology and how it can be
    used to solve their business problems. We work with clients to
    develop a clear roadmap for implementing blockchain solutions and
    provide guidance on choosing the right blockchain platform for
    their specific needs.`,
    list: [],
  },
  {
    title: "SMART CONTRACT",
    heading: "Smart Contract Development",
    subHeading: ``,
    description: `Our smart contract development service focuses on creating
    self-executing contracts that automate complex business processes
    and enforce contracts on various blockchain platforms, including
    Ethereum and Hyperledger Fabric. These contracts ensure
    transparency, security, and immutability in business transactions`,
    list: [],
  },
  {
    title: "DECENTRALIZED",
    heading: "Decentralized Application",
    subHeading: ``,
    description: `Our decentralized application development service helps clients
    build custom DApps that run on a decentralized network, such as a
    blockchain. DApps enable users to interact with each other in a
    secure, transparent, and efficient manner and can be usedfor
    various purposes, including asset tracking, supply chain automation,
    and peer-to-peer transactions.`,
    list: [],
  },
  {
    title: "INTEGRATION",
    heading: "Integration with Existing Systems",
    subHeading: ``,
    description: `Our integration service helps clients seamlessly integrate
    blockchain platforms with their existing ERP, CRM, and supply chain
    systems. This integration enables clients to take advantage of the
    benefits of decentralization, including increased security,
    transparency, and efficiency while enhancing their current
    infrastructure.`,
    list: [],
  },
  {
    title: "NFT SERVICES",
    heading: "NFT Marketplace Development",
    subHeading: ``,
    description: (
      <>
        Our expertise lies in creating NFT marketplaces for businesses, enabling them to
        tap into the expanding NFT user base. Our NFT marketplaces boast advanced
        features, are decentralized, and provide support for tokenizing a wide range of
        assets such as artwork, gaming assets, software licenses, digital collectibles,
        and real-world assets.
        <br />
        <br />
        <h3 style={{ fontWeight: 600 }}>Token Development</h3>
        We build NFT marketplaces with decentralization and programmable equity for
        businesses to capitalize on the blockchain securely.
        <br />
        <br />
        <h3 style={{ fontWeight: 600 }}>Metaverse NFT Marketplace Development</h3>
        Specializing in developing secure NFT marketplaces for the metaverse, including
        in-game assets, virtual properties, and characters.
      </>
    ),
    list: [],
  },
];

const StyledSection = styled.section`
  padding: 5% 10%;
  .arrow-icon {
    color: #ed3c69;
    font-size: 24px;
    cursor: pointer;
  }

  h3 {
    font-size: 22px;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .main-div-content {
    display: flex;
    padding: 0px 2% 24px 8%;
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
  }

  .solution-option h5 {
    transition: 0.3s;
    color: #808080;
    padding: 12px 21px;
    border-bottom: 2px solid #808080;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    :after {
      content: "";
      height: 28px;
      width: 2px;
      background-color: #808080;
      position: absolute;
      right: -36px;
    }
  }

  .solution-option:last-child h5:after {
    display: none;
  }

  .solution-description {
    color: dimgray;
    line-height: 2;
    font-weight: 400;
  }

  .solution-sub-title {
    color: #050607;
    line-height: 1.8;
    font-weight: 600;
  }

  .twoLineList ul {
    color: dimgray;
    padding: 5px 18px;
    margin: 0;
    padding: 0px 20px;
  }

  .twoLineList li {
    width: 50%;
    float: left;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 6px;
    // white-space: nowrap;
  }

  .image-tag {
    max-width: 550px;
  }

  @media (max-width: 576px) {
    .twoLineList li {
      width: 100%;
    }
    .image-tag {
      max-width: 300px;
    }
  }

  @media (max-width: 991px) {
    .main-div-content {
      display: contents;
    }
    .image-col {
      height: 100%;
    }
    h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 1200px) {
    .solution-option {
      h5 {
        font-size: 12px;
        padding: 12px 24px;
      }
    }
  }
`;

const BlockchainSolution = () => {
  const [solution, setSolution] = useState(0);
  return (
    <StyledSection className="text-center">
      <Fade direction="up" triggerOnce duration={1300} cascade damping={0.2}>
        <Heading
          title={
            <>
              Enrich Customer Insights, Reduce Costs,
              <br />
              and Grow Your Business
            </>
          }
        />
        <p className="text-md-center text-left">
          Experience the future of business with eForte's blockchain innovations. We offer
          a comprehensive suite of services, from smart contract development to
          decentralized application design, to help you take advantage of the
          decentralized ecosystem
        </p>
      </Fade>

      <div className="solutions-wrapper mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 1114 }} xs={0} sm={0} md={0} lg={24} xxl={24}>
            <div className="solutions-heading">
              {solutions.map((item, index) => (
                <div key={index} className="solution-option">
                  <Fade triggerOnce cascade damping={0.2}>
                    <h5
                      onClick={() => setSolution(index)}
                      style={{
                        color: index == solution ? "#ED3C69" : "#000",
                        borderColor: index == solution ? "#ED3C69" : "#808080",
                      }}
                    >
                      {item.title}
                    </h5>
                    <div style={{ display: "block" }}>
                      {index == solution && (
                        <Bounce>
                          <HiChevronDoubleDown className="arrow-icon" />
                        </Bounce>
                      )}
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={0} xxl={0}>
            <div className="solutions-heading  align-items-center">
              <HiChevronDoubleLeft
                className="arrow-icon"
                onClick={() => setSolution((prev) => (prev > 0 ? prev - 1 : 0))}
              />
              <h3 style={{ color: "#ED3C69" }}>
                <b>{solutions[solution]?.title}</b>
              </h3>
              <HiChevronDoubleRight
                className="arrow-icon"
                onClick={() =>
                  setSolution((prev) =>
                    prev < solutions.length - 1 ? prev + 1 : solutions.length - 1
                  )
                }
              />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row className="text-left" justify="space-between">
          {solutions.map((item, index) => (
            <>
              {index == solution && (
                <div className="main-div-content">
                  <Fade cascade triggerOnce>
                    <Col xl={22}>
                      <h3 className="solution-title">
                        <b>{solutions[solution].heading}</b>
                      </h3>
                      <h5 className="solution-sub-title my-4">
                        {solutions[solution].subHeading}
                      </h5>
                      <p className="solution-description">
                        {solutions[solution].description}
                      </p>
                      <div className="twoLineList">
                        <Timeline>
                          {solutions[solution].list.map((listItem) => (
                            <Timeline.Item>{`${listItem}`}</Timeline.Item>
                          ))}
                        </Timeline>
                      </div>
                    </Col>
                  </Fade>

                  <Zoom triggerOnce>
                    <Col xl={24} className="image-col text-center mx-auto">
                      <img
                        alt="blockchain-solution"
                        src={`/images/blockchain/blockchain-${solution + 1}.jpg`}
                        style={{ borderRadius: 8 }}
                        className="image-tag"
                      />
                    </Col>
                  </Zoom>
                </div>
              )}
            </>
          ))}
        </Row>
      </div>
    </StyledSection>
  );
};

export default BlockchainSolution;
